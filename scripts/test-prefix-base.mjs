#!/usr/bin/env node
/**
 * Simple test for the `prefix-base` rehype plugin.
 *
 * Usage:
 *   node ./scripts/test-prefix-base.mjs
 *
 * This script constructs a small HAST `root` tree and runs the plugin
 * transformer on it. It prints the AST before and after transformation
 * and performs basic assertions to ensure links and image srcs are
 * correctly prefixed when a base is provided.
 */

import prefixBase from '../src/rehype/prefix-base.js';

function makeSampleTree() {
  return {
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'p',
        properties: {},
        children: [
          {
            type: 'element',
            tagName: 'a',
            properties: { href: '/en/getting-started/introduction-platform/' },
            children: [{ type: 'text', value: 'Platform intro (root link)' }],
          },
          {
            type: 'element',
            tagName: 'a',
            properties: { href: 'https://example.com' },
            children: [{ type: 'text', value: 'External link' }],
          },
          {
            type: 'element',
            tagName: 'a',
            properties: { href: '#anchor' },
            children: [{ type: 'text', value: 'Anchor' }],
          },
          {
            type: 'element',
            tagName: 'a',
            properties: { href: '/foundation-docs/en/getting-started/' },
            children: [{ type: 'text', value: 'Already prefixed' }],
          },
          {
            type: 'element',
            tagName: 'img',
            properties: { src: '/assets/example.png', alt: 'Example image' },
            children: [],
          },
          {
            type: 'element',
            tagName: 'source',
            properties: { src: '/videos/test.mp4', type: 'video/mp4' },
            children: [],
          },
        ],
      },
    ],
  };
}

function prettyPrint(title, tree) {
  console.log(`\n--- ${title} ---`);
  console.log(JSON.stringify(tree, null, 2));
}

function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    process.exitCode = 1;
    return false;
  }
  console.log('PASS:', message);
  return true;
}

function runTest(base) {
  const tree = makeSampleTree();
  console.log(`\nRunning plugin with base="${base}"`);
  prettyPrint('before', tree);

  const transformer = prefixBase({ base });
  transformer(tree);

  prettyPrint('after', tree);

  // Locate elements
  const p = tree.children[0];
  const children = p.children;
  const linkRoot = children.find((n) => n.tagName === 'a' && n.properties.href.includes('introduction-platform'));
  const img = children.find((n) => n.tagName === 'img');
  const sourceEl = children.find((n) => n.tagName === 'source');

  if (base) {
    // Expect leading root-relative hrefs and srcs to be prefixed
    assert(
      linkRoot.properties.href === `${base.replace(/\/$/, '')}/en/getting-started/introduction-platform/`,
      `href was prefixed with base (${linkRoot.properties.href})`
    );
    assert(
      img.properties.src === `${base.replace(/\/$/, '')}/assets/example.png`,
      `img src was prefixed with base (${img.properties.src})`
    );
    assert(
      sourceEl.properties.src === `${base.replace(/\/$/, '')}/videos/test.mp4`,
      `source src was prefixed with base (${sourceEl.properties.src})`
    );
  } else {
    // With empty base, nothing should be changed
    assert(
      linkRoot.properties.href === '/en/getting-started/introduction-platform/',
      'href left unchanged when base is empty'
    );
    assert(img.properties.src === '/assets/example.png', 'img src left unchanged when base is empty');
    assert(sourceEl.properties.src === '/videos/test.mp4', 'source src left unchanged when base is empty');
  }
}

// Run tests
runTest('/foundation-docs'); // expected to prefix
runTest(''); // expected to be no-op
