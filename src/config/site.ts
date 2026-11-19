export interface SocialChannel {
  id: string;
  label: string;
  handle: string;
  href: string;
  protocol: string;
  description: string;
  copyValue: string;
  primary?: boolean;
  external?: boolean;
}

export const siteConfig = {
  domain: 'takenaka.work',
  url: 'https://takenaka.work',
  title: 'takenaka.work — Yuki Takenaka',
  description: 'Yuki Takenaka — Web Engineer. Links & contact.',
  author: {
    name: 'Yuki Takenaka',
    handle: 'takenaka',
    role: 'Web Engineer',
    location: 'Tokyo, JP',
    timezone: 'Asia/Tokyo',
    coordinates: '35.6762° N, 139.6503° E',
    status: 'ONLINE',
    tagline: 'Building clean, resilient software for the web.',
    bio: 'Web Engineer based in Japan. Feel free to reach out on X or check out my code on GitHub.',
    avatar: '/img/logo.jpeg',
  },
  contact: {
    responseNote: 'Best way to reach me: X (@y_takenyaka)',
  },
  channels: [
    {
      id: 'x',
      label: 'X (Twitter)',
      handle: '@y_takenyaka',
      href: 'https://x.com/y_takenyaka',
      protocol: 'PRIMARY // CONTACT',
      description: 'DMs, replies & daily updates',
      copyValue: '@y_takenyaka',
      primary: true,
      external: true,
    },
    {
      id: 'github',
      label: 'GitHub',
      handle: '@takenaka',
      href: 'https://github.com/takenaka',
      protocol: 'HTTPS // CODE',
      description: 'Repositories, OSS & experiments',
      copyValue: 'https://github.com/takenaka',
      external: true,
    },
    // メールアドレスや他の SNS を追加したくなったらコメントを外して編集してください:
    // {
    //   id: 'email',
    //   label: 'Email',
    //   handle: 'contact@takenaka.work',
    //   href: 'mailto:contact@takenaka.work',
    //   protocol: 'SMTP // DIRECT',
    //   description: 'Direct inquiries',
    //   copyValue: 'contact@takenaka.work',
    //   external: false,
    // },
    // {
    //   id: 'zenn',
    //   label: 'Zenn',
    //   handle: '@takenaka',
    //   href: 'https://zenn.dev/takenaka',
    //   protocol: 'HTTPS // ARTICLES',
    //   description: 'Technical articles & scraps',
    //   copyValue: 'https://zenn.dev/takenaka',
    //   external: true,
    // },
  ] satisfies SocialChannel[],
} as const;
