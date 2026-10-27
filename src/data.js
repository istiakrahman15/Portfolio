export const links = {
  github: 'https://github.com/istiakrahman15',
  telegram: 'https://t.me/istiakrahman',
  x: 'https://x.com/Istiakrahman15',
  instagram: 'https://instagram.com/Istiakrahman_15',
  website: 'https://istiakrahman.pro.bd/',
  xreg: 'https://xregengine.click',
  repos: 'https://github.com/istiakrahman15?tab=repositories',
}

export const profile = {
  name: 'Istiak Rahman',
  role: 'Web Developer · App Developer · Automation Enthusiast',
  intro:
    "I'm Istiak Rahman, a developer who enjoys building modern web experiences, practical applications, and automation tools. I focus on clean interfaces, useful functionality, and making digital ideas work in the real world.",
  short: 'Modern websites, useful apps and smart automation, with clean design and thoughtful engineering.',
  photo: 'brand/istiak-rahman-portrait.webp',
  avatar: 'brand/istiak-rahman-avatar.webp',
  avatarSmall: 'brand/istiak-rahman-avatar-sm.webp',
}

export const nav = [
  { id: 'home', label: 'Home', icon: 'solar:home-2-linear' },
  { id: 'about', label: 'About', icon: 'solar:user-circle-linear' },
  { id: 'focus', label: 'Focus', icon: 'solar:moon-stars-linear' },
  { id: 'skills', label: 'Skills', icon: 'solar:widget-5-linear' },
  { id: 'projects', label: 'Projects', icon: 'solar:clapperboard-play-linear' },
  { id: 'social', label: 'Social', icon: 'solar:users-group-rounded-linear' },
  { id: 'contact', label: 'Contact', icon: 'solar:letter-linear' },
]

export const roles = ['Web Developer', 'App Developer', 'Automation Enthusiast']

// iOS system colours for the small app-icon tiles
export const ios = {
  blue: '#0a84ff',
  green: '#30d158',
  orange: '#ff9f0a',
  pink: '#ff375f',
  purple: '#bf5af2',
  teal: '#40c8e0',
  red: '#ff453a',
  indigo: '#5e5ce6',
}

// Interests and areas of focus (not claims of expertise)
export const interests = [
  { icon: 'solar:code-linear', label: 'Web', color: ios.teal },
  { icon: 'solar:smartphone-linear', label: 'Apps', color: ios.blue },
  { icon: 'solar:cpu-bolt-linear', label: 'Automation', color: ios.indigo },
  { icon: 'solar:pallete-2-linear', label: 'UI/UX', color: ios.pink },
  { icon: 'solar:branching-paths-up-linear', label: 'Open source', color: ios.green },
]

// "What I build" card on the About page
export const builds = [
  { icon: 'solar:global-linear', label: 'Websites & web apps' },
  { icon: 'solar:smartphone-linear', label: 'Applications' },
  { icon: 'solar:plug-circle-linear', label: 'Automation & integrations' },
]

// Focus areas, shown like iOS Focus / Settings rows
export const focus = [
  { icon: 'solar:code-linear', label: 'Web development', color: ios.teal },
  { icon: 'solar:smartphone-linear', label: 'Application development', color: ios.blue },
  { icon: 'solar:plug-circle-linear', label: 'Automation and integrations', color: ios.indigo },
  { icon: 'solar:pallete-2-linear', label: 'UI/UX experimentation', color: ios.pink },
  { icon: 'solar:branching-paths-up-linear', label: 'Open-source projects', color: ios.green },
]

// Goals for 2026, taken from the public GitHub profile README. They are goals, not achievements.
export const goals = [
  'Ship more production-ready full-stack projects',
  'Learn Laravel and React end to end',
  'Build and publish an Android app',
]

// Skill folders: tap to open. `apps` are shown as app icons, `notes` as short captions.
// Taken from the tech stack on the GitHub profile: "solid foundation" vs "actively learning".
export const skills = [
  {
    title: 'Frontend',
    apps: [
      { name: 'HTML', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'React', icon: 'logos:react' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
    ],
    notes: [
      ['Working with', 'HTML, CSS and JavaScript'],
      ['Learning', 'React, TypeScript, Next.js and Tailwind CSS'],
    ],
  },
  {
    title: 'Backend',
    apps: [
      { name: 'PHP', icon: 'logos:php' },
      { name: 'Laravel', icon: 'logos:laravel' },
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Express', icon: 'simple-icons:express' },
    ],
    notes: [
      ['Working with', 'PHP and Laravel'],
      ['Learning', 'Node.js and Express'],
    ],
  },
  {
    title: 'Data & Apps',
    apps: [
      { name: 'MySQL', icon: 'logos:mysql-icon' },
      { name: 'Firebase', icon: 'logos:firebase' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'Supabase', icon: 'logos:supabase-icon' },
      { name: 'Android Studio', icon: 'simple-icons:androidstudio' },
    ],
    notes: [
      ['Working with', 'MySQL and Firebase'],
      ['Learning', 'PostgreSQL, Supabase and Android Studio'],
    ],
  },
  {
    title: 'Tools',
    apps: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'simple-icons:github' },
      { name: 'Vercel', icon: 'simple-icons:vercel' },
      { name: 'WordPress', icon: 'logos:wordpress-icon' },
      { name: 'Docker', icon: 'logos:docker-icon' },
    ],
    notes: [
      ['Working with', 'Git, GitHub, Vercel and WordPress'],
      ['Learning', 'Docker'],
    ],
  },
]

// Projects, verified from https://github.com/istiakrahman15 and https://xregengine.click.
// `url` is the source repository, `live` the live site. Either is left out when it does not exist.
export const projects = [
  {
    name: 'XREG ENGINE',
    repo: 'xreg-engine',
    description: 'A licence-key platform with a reseller directory, device-locked keys and a Telegram bot for resets.',
    language: 'Web platform',
    logo: 'solar:cpu-bolt-linear',
    color: '#22d3ee',
    live: links.xreg,
    liveLabel: 'Visit website',
  },
  {
    name: 'IPTV JSON Database',
    repo: 'iptv-api',
    description: 'A hand-curated IPTV channel database in clean, structured JSON, converted from M3U playlists.',
    language: 'JSON',
    logo: 'solar:database-linear',
    color: '#0ea5e9',
    topics: ['JSON', 'HLS', 'M3U8', 'REST'],
    url: 'https://github.com/istiakrahman15/iptv-api',
  },
  {
    name: 'Marlowe Shop',
    repo: 'marlowe-shopp',
    description: 'A full-stack e-commerce platform with authentication, an admin panel and deployment on Railway.',
    language: 'JavaScript',
    logo: 'logos:javascript',
    color: '#f1e05a',
    topics: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'SQLite'],
    url: 'https://github.com/istiakrahman15/marlowe-shopp',
    live: 'https://marlowe-shopp-production.up.railway.app/',
  },
  {
    name: 'Offline Reminder App',
    repo: 'reminders',
    description: 'A lightweight reminder app for organising daily tasks, with no internet connection required.',
    language: 'JavaScript',
    logo: 'solar:bell-linear',
    color: '#a78bfa',
    topics: ['HTML', 'CSS', 'JavaScript', 'Offline storage'],
    url: 'https://github.com/istiakrahman15/reminders',
  },
]

export const moreProjects = {
  line: 'More work lives on GitHub, with new projects in Laravel, React and Android on the way.',
}

export const social = [
  { name: 'GitHub', icon: 'simple-icons:github', text: '@istiakrahman15', url: links.github, bg: '#24292f' },
  { name: 'Telegram', icon: 'simple-icons:telegram', text: '@istiakrahman', url: links.telegram, bg: '#229ed9' },
  { name: 'X', icon: 'simple-icons:x', text: '@Istiakrahman15', url: links.x, bg: '#111418' },
  {
    name: 'Instagram',
    icon: 'simple-icons:instagram',
    text: '@Istiakrahman_15',
    url: links.instagram,
    bg: 'linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)',
  },
  { name: 'Website', icon: 'solar:global-linear', text: 'istiakrahman.pro.bd', url: links.website, bg: '#0e7490' },
]

// Reply bubbles in the Contact thread: Telegram first, since it is the main way to reach me
export const connect = [
  { label: 'Telegram', icon: 'simple-icons:telegram', url: links.telegram },
  { label: 'Website', icon: 'solar:global-linear', url: links.website },
  { label: 'GitHub', icon: 'simple-icons:github', url: links.github },
  { label: 'X', icon: 'simple-icons:x', url: links.x },
  { label: 'Instagram', icon: 'simple-icons:instagram', url: links.instagram },
]
