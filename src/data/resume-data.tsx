import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, TelegramIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Хакимов Илья",
  initials: "PirateThunder",
  location: "Уфа, Россия",
  locationLink: "https://maps.app.goo.gl/fK2KS29htVUWY3Yh7",
  about:
    "Fullstack разработчик",
  summary:
`Участвовал в разных проектах как Frontend, так и Backend разработчик (создавал с нуля/поддерживал существующие). Имел опыт работы с TypeScript, React (Next.js), Node.js (Express), PostgresSQL/Clickhouse. Имею опыт работы на фрилансе. Активный участник хакатонов, часто занимаю призовые места. Суммарный опыт работы - 2+ года.

Список хакатонов, в которых я принимал участие в составе команды DIVAR:
- Цифровой Прорыв: Lifetech – 1 место (сентябрь 2021)
  https://leadersofdigital.ru/event/63010/case/919927/results
  https://vk.com/wall-87342965_5244

- Лидеры цифровой трансформации 2021 - участники (октябрь 2021)

- Цифровой Прорыв Финал: Онбординг - 22 место (декабрь 2021)

- VTB More.Tech 4.0 - 15 место (октябрь 2022 год)

- Молодёжный Бит - 4 место (февраль 2023)
  https://youthbit.ru/shortlist.html (кликнуть на "Онбординг")

- Всероссийские студенческие соревнования «День интернета». Дисциплина «Продуктовое программирование» – 1 место (апрель 2023)
  https://fsp-russia.com/blog/news-20/
  https://uust.ru/news/get/studenty-uunit-oderzhali-pobedu-na-vserossijskih-sorevnovaniyah-po-sportivnomu-programmirovaniyu/
  
- НЕЙМАРК.Хакатон "Умный кампус" - 2 место (май 2023)
  https://vega52.ru/news/v-nizhnem-novgorode-zavershilsya3
  https://uust.ru/news/get/v-mezhvuzovskom-studencheskom-kampuse-budet-svoya-sota/

- Всероссийский хакатон среди студентов в честь главы Чеченской республики, героя России Рамзана Ахматовича Кадырова – 3 место в онлайн зачёте (октябрь 2023)
  https://chechnyatoday.com/news/369369
  https://uust.ru/news/get/studenty-ufimskogo-universiteta-blestyashe-vystupili-na-sostyazaniyah-po-programmirovaniyu/

- VTB More.Tech 5.0 - участники (ноябрь 2023 год)

- Отборочный этап Чемпионата России по спортивному программированию - 4 место (ноябрь 2023 год)

- Хакатон "UfaHack 2023" - члены жюри (ноябрь 2023)

- SELECTEL HACKATHON – 3 место (февраль 2024)
  https://vk.com/wall-211211142_598

- Хакатон "UfaHack 2024" - члены жюри (март 2024)

- Moscow Travel Hack 2024 - участники (март 2024)

- II корпоративный хакатон ПАО «Татнефть» «ТехШторм» - 2 место (август 2024)

Примеры некоторых активных проектов, которые я могу показать:
ARPAKIT VPN: https://www.arpakitvpn.com/
Сайт команды DIVAR: https://www.divarteam.ru/`,
  avatarUrl: "https://avatars.githubusercontent.com/PirateThunder",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "ilyakhakimov03@gmail.com",
    tel: "+79871047771",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/PirateThunder",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://t.me/ilyakhakimov03",
        icon: TelegramIcon,
      },
    ],
  },
  education: [
    {
      school: "Уфимский университет науки и технологий (бывш. УГАТУ)",
      degree: 'Бакалавр по специальности "Программная инженерия"',
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Т1",
      link: "https://t1.ru/",
      badges: [],
      title: "Frontend разработчик",
      logo: null,
      start: "июл 2023",
      end: "н.в.",
      description:
`https://t1.ru/

- Разработка дополнительного функционала на стороне фронтенда для внутреннего сервиса;
- Создание дашбордов для аналитики;
- Написание скриптов для автоматизации процессов группы сопровождения.`,
    },
    {
      company: "OZNA Digital Solutions",
      link: "https://ozna.digital/",
      badges: [],
      title: "Fullstack разработчик",
      logo: null,
      start: "авг 2023",
      end: "май 2024",
      description:
`https://ozna.digital/

Разработка приложения для стенда. Позволяет осуществлять мониторинг нефтяных скважин по разным параметрам: нахождение на карте, редактирование мнемосхем, просмотр графиков по добыче, показания датчиков, автогенерация отчётов и их редактирование, плагины.

- Поддержка проектов, исправление багов и добавление новых фич
- внедрение Clickhouse с применением буферных таблиц для ускорения загрузки/запросов данных вместо Postgres и файловой БД
- интеграция Collabora Office (open-source аналог пакета Office) для редактирования отчётов в браузере с написанием вспомогательного http/websocket сервера
- разработка OPC UA клиента
- добавление новых страниц и логики для них как на клиенте, так и на сервере
- работа с графиками (plotly, chartjs)
- работа с картой (react leaflet)
- расписание задач на сервере (node-cron)
- постепенный переход на TypeScript

Активно использовал следующие технологии:
Frontend: React, MobX, ChakraUI, ag-grid-table, plotly, chartjs, dayjs, leaflet, axios, websocket
Backend: Express, Postgres, Clickhouse, libreoffice-converter, node-cron, nodemailer, node-opcua, SSL, ws`,
    },
    {
      company: 'НИЛ "Лаборатория прикладной биофотоники"',
      link: "https://uust.ru/research/centers/applied-biophotonics/",
      badges: ["Удалённо"],
      title: "Frontend разработчик",
      logo: null,
      start: "июн 2023",
      end: "июл 2023",
      description:
`uust.ru/research/centers/applied-biophotonics/

Разрабатывал внутреннюю веб-платформу для сотрудников медицинской лаборатории. Позволяет загружать анализы пациентов: фотокарточки, описание, диагноз, остальную врачебную информацию.

- реализация авторизации, личного кабинета
- использование TypeScript, Zod для типизации
- использование SWR как лёгкого серверного стейт-менеджера
- использование shadcn-ui как основной headless ui библиотеки
- использование Cropper для выделения конкретной области изображения прямо в браузере

Основной стек: TypeScript/SWR/NextJS/shadcn-ui; также использовал Cropper, react-hook-form, zod.`,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "MaterialUI/ChakraUI/TailwindCSS",
    "SWR/Zustand/MobX/Redux",
    "Node.js/Express/ws",
    "PostgresSQL/ClickHouse",
    "HTML/CSS/SCSS",
    "Linux",
    "Docker/Docker Compose",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
