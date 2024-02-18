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
    "Участвовал в разных проектах как Frontend, так и Backend разработчик (создавал с нуля/поддерживал существующие). Имел опыт работы с TypeScript, React (Next.js), Node.js (Express), PostgresSQL/Clickhouse. Активный участник хакатонов, часто занимаю призовые места. Суммарный опыт работы - 2+ года.",
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
      company: "OZNA Digital Solutions",
      link: "https://ozna.digital/",
      badges: [],
      title: "Junior Fullstack Developer",
      logo: null,
      start: "авг 2023",
      end: "н.в.",
      description:
        "Поддержка проектов, исправление багов и добавление новых фич; внедрение Clickhouse с применением буферных таблиц для ускорения загрузки/запросов данных, интеграция Collabora Office для редактирования отчётов в браузере, разработка OPC UA клиента, добавление новых страниц и логики для них как в браузере, так и на сервере. Также использовал ag-grid-table, plotly/chartjs, dayjs на фронте; libreoffice-converter, node-cron, nodemailer на бэке.",
    },
    {
      company: 'НИЛ "Лаборатория прикладной биофотоники"',
      link: "https://uust.ru/research/centers/applied-biophotonics/",
      badges: ["Удалённо"],
      title: "Frontend Developer",
      logo: null,
      start: "ноя 2023",
      end: "дек 2023",
      description:
        "Разрабатывал внутреннюю веб-платформу для сотрудников медицинской лаборатории. Основной стек: TypeScript/SWR/NextJS/shadcn-ui, также использовал Cropper, react-hook-form, zod.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "MaterialUI/ChakraUI/TailwindCSS (daisyui, shadcn-ui)",
    "SWR/Zustand/MobX",
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
