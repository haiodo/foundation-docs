/**
 * Rehype plugin to prefix absolute (root-based) links and image srcs
 * with a configured base path.
 *
 * Usage:
 *  - Configure in `astro.config.mjs`:
 *    markdown: {
 *      rehypePlugins: [[prefixBase, { base: process.env.SITE_BASE || '' }]]
 *    }
 *
 * Behavior:
 *  - For <a href="/..."> and <img src="/..."> where the path starts with "/"
 *    (but not "//", not an external protocol, not an anchor or mailto),
 *    it will rewrite the attribute to: `${base}${href}` (where `base` has no trailing slash).
 *  - If `base` is falsy or `'/'` the plugin is a no-op.
 *
 * This implementation avoids external dependencies and traverses the HAST tree.
 */

export default function prefixBase(options = {}) {
  // Normalize base:
  // - Trim whitespace
  // - Treat '/' or empty as no-op (empty string)
  // - Ensure leading slash is present and trailing slash removed
  let base = String(options.base || '').trim();
  if (!base || base === '/') {
    base = '';
  } else {
    if (!base.startsWith('/')) base = '/' + base;
    base = base.replace(/\/$/, ''); // remove trailing slash if any
  }

  // Return rehype transformer
  return function transformer(tree) {
    // simple recursive visitor (no external deps)
    function visit(node) {
      if (!node || typeof node !== 'object') return;

      if (node.type === 'element') {
        const tag = node.tagName;
        const props = node.properties || {};

        // Handle anchors
        if (tag === 'a' && typeof props.href === 'string') {
          const href = props.href;
          if (
            href.startsWith('/') && // root-relative
            !href.startsWith('//') && // not protocol-relative
            !href.startsWith('#') && // not anchor
            !href.startsWith('mailto:') && // not mailto
            !/^[a-z]+:\/\//i.test(href) && // not absolute protocol (http://, https://, etc.)
            !(base && href.startsWith(base + '/')) // not already prefixed
          ) {
            // Prefix
            node.properties.href = (base ? base : '') + href;
          }
        }

        // Handle images
        if (tag === 'img' && typeof props.src === 'string') {
          const src = props.src;
          if (
            src.startsWith('/') &&
            !src.startsWith('//') &&
            !/^[a-z]+:\/\//i.test(src) &&
            !(base && src.startsWith(base + '/'))
          ) {
            node.properties.src = (base ? base : '') + src;
          }
        }

        // Generic handler for any element with a `src` attribute (e.g. <source>, <video>)
        if (props && typeof props.src === 'string' && tag !== 'img') {
          const s = props.src;
          if (
            s.startsWith('/') &&
            !s.startsWith('//') &&
            !/^[a-z]+:\/\//i.test(s) &&
            !(base && s.startsWith(base + '/'))
          ) {
            node.properties.src = (base ? base : '') + s;
          }
        }
      }

      // Recurse children
      if (Array.isArray(node.children)) {
        for (const child of node.children) visit(child);
      }
    }

    visit(tree);
  };
}
