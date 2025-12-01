import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    [
      starlight({
        customCss: ["./src/styles.css"],
        title: "Foundation Docs",
        favicon: "/favicon.ico",
        components: {
          SocialIcons: "./src/components/CustomSocialIcons.astro",
        },
        defaultLocale: "ru",
        locales: {
          ru: {
            label: "Русский",
            lang: "ru",
          },
          en: {
            label: "English",
            lang: "en",
          },
        },
        sidebar: [
          {
            label: "Начало работы",
            translations: { en: "Getting started" },
            items: [
              {
                label: "Что такое Foundation?",
                translations: { en: "What is Foundation?" },
                link: "/getting-started/introduction-platform/",
              },
              // {
              //   label: "Что такое TraceX?",
              //   translations: { en: "What is TraceX?" },
              //   link: "/getting-started/introduction-tracex/",
              // },
              {
                label: "Настройка рабочего пространства",
                translations: { en: "Workspace setup" },
                link: "/getting-started/workspace-setup/",
              },
              {
                label: "Основы работы",
                translations: { en: "Learn the basics" },
                link: "/getting-started/learn-the-basics/",
              },
              {
                label: "API и другие инструменты",
                translations: { en: "API & other tools" },
                link: "/getting-started/api-tools/",
              },
              {
                label: "Самостоятельный хостинг",
                translations: { en: "Self-hosting" },
                link: "/getting-started/self-host/",
              },
              {
                label: "Мобильный доступ",
                translations: { en: "Mobile access" },
                link: "/getting-started/mobile-access/",
              },
              {
                label: "Поддержка",
                translations: { en: "Support" },
                link: "/getting-started/support/",
              },
            ],
          },
          // {
          //   label: "Карточки",
          //   translations: { en: "Cards" },
          //   collapsed: true,
          //   items: [
          //     {
          //       label: "Введение в Карточки",
          //       translations: { en: "Introduction to Cards" },
          //       link: "/cards/cards-overview/",
          //     },
          //     {
          //       label: "Создание карточек",
          //       translations: { en: "Creating Cards" },
          //       link: "/cards/creating-cards/",
          //     },
          //     {
          //       label: "Родительские и дочерние карточки",
          //       translations: { en: "Parent-child Cards" },
          //       link: "/cards/parent-child-cards/",
          //     },
          //     {
          //       label: "Просмотр, сортировка и фильтрация",
          //       translations: { en: "View, sort and filter Cards" },
          //       link: "/cards/view-sort-filter-cards/",
          //     },
          //     {
          //       label: "Карточки vs. Документы",
          //       translations: { en: "Cards vs. Documents" },
          //       link: "/cards/cards-vs-documents/",
          //     },
          //     {
          //       label: "Примеры использования",
          //       translations: { en: "Use cases" },
          //       link: "/cards/use-cases/",
          //     },
          //     {
          //       label: "Типы",
          //       translations: { en: "Types" },
          //       collapsed: false,
          //       items: [
          //         {
          //           label: "Что такое Типы?",
          //           translations: { en: "What are Types?" },
          //           link: "/cards/types/types-overview/",
          //         },
          //         {
          //           label: "Создание типов",
          //           translations: { en: "Creating Types" },
          //           link: "/cards/types/creating-types/",
          //         },
          //         {
          //           label: "Файловые типы",
          //           translations: { en: "File Types" },
          //           link: "/cards/types/file-types/",
          //         },
          //       ],
          //     },
          //     {
          //       label: "Теги",
          //       translations: { en: "Tags" },
          //       collapsed: false,
          //       items: [
          //         {
          //           label: "Что такое Теги?",
          //           translations: { en: "What are Tags?" },
          //           link: "/cards/tags/tags-overview/",
          //         },
          //         {
          //           label: "Создание тегов",
          //           translations: { en: "Creating Tags" },
          //           link: "/cards/tags/creating-tags/",
          //         },
          //         {
          //           label: "Применение тегов к карточкам",
          //           translations: { en: "Applying Tags to Cards" },
          //           link: "/cards/tags/applying-tags/",
          //         },
          //       ],
          //     },
          //     {
          //       label: "Связи",
          //       translations: { en: "Relations" },
          //       collapsed: false,
          //       items: [
          //         {
          //           label: "Что такое Связи?",
          //           translations: { en: "What are Relations?" },
          //           link: "/cards/relations/relations-overview/",
          //         },
          //         {
          //           label: "Определение связей",
          //           translations: { en: "Defining Relations" },
          //           link: "/cards/relations/defining-relations/",
          //         },
          //         {
          //           label: "Связывание карточек",
          //           translations: { en: "Relating Cards" },
          //           link: "/cards/relations/relating-cards/",
          //         },
          //         {
          //           label: "Связи vs. Ссылки",
          //           translations: { en: "Relations vs. References" },
          //           link: "/cards/relations/relations-vs-references/",
          //         },
          //       ],
          //     },
          //   ],
          // },
          {
            label: "Управление задачами",
            translations: { en: "Task tracking" },
            collapsed: true,
            items: [
              {
                label: "Создание проектов",
                translations: { en: "Creating projects" },
                link: "/task-tracking/creating-projects/",
              },
              {
                label: "Создание задач",
                translations: { en: "Creating issues" },
                link: "/task-tracking/creating-issues/",
              },
              {
                label: "Компоненты",
                translations: { en: "Components" },
                link: "/task-tracking/components/",
              },
              {
                label: "Вехи",
                translations: { en: "Milestones" },
                link: "/task-tracking/milestones/",
              },
              {
                label: "Соавторы задач",
                translations: { en: "Issue collaborators" },
                link: "/task-tracking/issue-collaborators/",
              },
              {
                label: "Метки",
                translations: { en: "Labels" },
                link: "/task-tracking/labels/",
              },
              {
                label: "Просмотр и сортировка задач",
                translations: { en: "Viewing and sorting issues" },
                link: "/task-tracking/viewing-issues/",
              },
              {
                label: "Связанные задачи",
                translations: { en: "Related issues" },
                link: "/task-tracking/related-issues/",
              },
              {
                label: "Шаблоны задач",
                translations: { en: "Issue templates" },
                link: "/task-tracking/issue-templates/",
              },
              {
                label: "Создание активностей",
                translations: { en: "Creating action items" },
                link: "/task-tracking/creating-action-items/",
              },
              {
                label: "Планирование активностей",
                translations: { en: "Scheduling action items" },
                link: "/task-tracking/scheduling-action-items/",
              },
            ],
          },
          {
            label: "Командные ресурсы",
            translations: { en: "Team resources" },
            collapsed: true,
            items: [
              {
                label: "Командный планировщик",
                translations: { en: "Team planner" },
                link: "/team-resources/team-planner/",
              },
              {
                label: "Управление персоналом",
                translations: { en: "Human resources" },
                link: "/team-resources/human-resources/",
              },
            ],
          },
          {
            label: "Управление знаниями",
            translations: { en: "Knowledge management" },
            collapsed: true,
            items: [
              {
                label: "Документы",
                translations: { en: "Documents" },
                link: "/knowledge-management/documents/",
              },
              {
                label: "Совместное редактирование",
                translations: { en: "Collaborative editing" },
                link: "/knowledge-management/collaborative-editing/",
              },
              {
                label: "Активности в документах",
                translations: { en: "Action items in documents" },
                link: "/knowledge-management/documents-action-items/",
              },
              {
                label: "Доска рисования",
                translations: { en: "Drawing board and scribbles" },
                link: "/knowledge-management/drawing-board/",
              },
              {
                label: "Диаграммы Mermaid",
                translations: { en: "Mermaid diagrams" },
                link: "/knowledge-management/mermaid-diagrams/",
              },
              {
                label: "Диск",
                translations: { en: "Drive" },
                link: "/knowledge-management/drive/",
              },
            ],
          },
          // {
          //   label: "Контролируемые документы",
          //   translations: { en: "Controlled documents" },
          //   collapsed: true,
          //   items: [
          //     {
          //       label: "Типы",
          //       translations: { en: "Types" },
          //       items: [
          //         {
          //           label: "Шаблоны",
          //           translations: { en: "Templates" },
          //           link: "/controlled-documents/templates/",
          //         },
          //         {
          //           label: "Документы качества",
          //           translations: { en: "Quality documents" },
          //           link: "/controlled-documents/quality-documents/",
          //         },
          //         {
          //           label: "Техническая документация",
          //           translations: { en: "Technical documentation" },
          //           link: "/controlled-documents/technical-documentation/",
          //         },
          //       ],
          //     },
          //     {
          //       label: "Авторинг",
          //       translations: { en: "Authoring" },
          //       items: [
          //         {
          //           label: "Редактирование и форматирование",
          //           translations: { en: "Editing and formatting" },
          //           link: "/controlled-documents/editing-formatting/",
          //         },
          //         {
          //           label: "Дополнительные настройки",
          //           translations: { en: "Additional document settings" },
          //           link: "/controlled-documents/document-settings/",
          //         },
          //         {
          //           label: "Версии и устаревшие документы",
          //           translations: { en: "Versions and obsolete documents" },
          //           link: "/controlled-documents/document-versions/",
          //         },
          //         {
          //           label: "Владение vs. авторство",
          //           translations: { en: "Ownership vs. authorship" },
          //           link: "/controlled-documents/ownership-authorship/",
          //         },
          //       ],
          //     },
          //     {
          //       label: "Ревью и утверждение",
          //       translations: { en: "Review and approval" },
          //       link: "/controlled-documents/review-approval/",
          //     },
          //     {
          //       label: "Фильтрация документов",
          //       translations: { en: "Filtering documents" },
          //       link: "/controlled-documents/document-filtering/",
          //     },
          //     {
          //       label: "Продукты",
          //       translations: { en: "Products" },
          //       link: "/controlled-documents/products/",
          //     },
          //   ],
          // },
          {
            label: "Коммуникации",
            translations: { en: "Communication" },
            collapsed: true,
            items: [
              {
                label: "Отслеживание активности в чате",
                translations: { en: "Activity tracking in chat" },
                link: "/communication/chat-activity/",
              },
              {
                label: "Отправка сообщений",
                translations: { en: "Sending messages" },
                link: "/communication/sending-messages/",
              },
              {
                label: "Встроенные комментарии",
                translations: { en: "Inline comments" },
                link: "/communication/inline-comments/",
              },
              {
                label: "Входящие",
                translations: { en: "Inbox" },
                link: "/communication/inbox/",
              },
              {
                label: "Уведомления",
                translations: { en: "Notifications" },
                link: "/communication/notifications/",
              },
              {
                label: "Виртуальный офис",
                translations: { en: "Virtual office" },
                link: "/communication/virtual-office/",
              },
              {
                label: "Транскрибация в реальном времени",
                translations: { en: "Live transcription" },
                link: "/communication/live-transcription/",
              },
            ],
          },
          {
            label: "Люди и контакты",
            translations: { en: "People and contacts" },
            collapsed: true,
            items: [
              {
                label: "Управление контактами",
                translations: { en: "Managing contacts" },
                link: "/people-contacts/managing-contacts/",
              },
              {
                label: "Сотрудники",
                translations: { en: "Employees" },
                link: "/people-contacts/employees/",
              },
              {
                label: "Связывание задач",
                translations: { en: "Connecting tasks" },
                link: "/people-contacts/connecting-tasks/",
              },
            ],
          },
          // {
          //   label: "Интеграции",
          //   translations: { en: "Integrations" },
          //   collapsed: true,
          //   items: [
          //     {
          //       label: "GitHub",
          //       link: "/integrations/github/",
          //     },
          //     {
          //       label: "Google Calendar",
          //       link: "/integrations/google-calendar/",
          //     },
          //     {
          //       label: "Gmail",
          //       link: "/integrations/gmail/",
          //     },
          //     {
          //       label: "Telegram",
          //       link: "/integrations/telegram/",
          //     },
          //   ],
          // },
          {
            label: "Дополнительные модули",
            translations: { en: "Additional modules" },
            collapsed: true,
            items: [
              {
                label: "Управление тестами",
                translations: { en: "Test management" },
                link: "/additional-modules/test-management/",
              },
              // {
              //   label: "Рекрутинг",
              //   translations: { en: "Recruiting" },
              //   link: "/additional-modules/recruiting/",
              // },
              // {
              //   label: "Лиды",
              //   translations: { en: "Leads" },
              //   link: "/additional-modules/leads/",
              // },
              // {
              //   label: "Опросы",
              //   translations: { en: "Surveys" },
              //   link: "/additional-modules/surveys/",
              // },
              // {
              //   label: "Обучение",
              //   translations: { en: "Trainings" },
              //   link: "/additional-modules/trainings/",
              // },
            ],
          },
          {
            label: "Расширенные настройки",
            translations: { en: "Advanced settings" },
            collapsed: true,
            items: [
              {
                label: "Типы пространств",
                translations: { en: "Space types" },
                link: "/advanced-settings/space-types/",
              },
              {
                label: "Роли и разрешения",
                translations: { en: "Roles and permissions" },
                link: "/advanced-settings/roles/",
              },
              {
                label: "Типы задач",
                translations: { en: "Task types" },
                link: "/advanced-settings/task-types/",
              },
              {
                label: "Классы и перечисления",
                translations: { en: "Classes and enums" },
                link: "/advanced-settings/classes-enums/",
              },
              {
                label: "Текстовые шаблоны",
                translations: { en: "Text templates" },
                link: "/advanced-settings/text-templates/",
              },
            ],
          },
        ],
      }),
    ],
    [icon()],
  ],
  image: {
    service: {
      config: {
        limitInputPixels: false,
      },
    },
  },
});
