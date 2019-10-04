interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    title: true,
    name: 'Bem vindo, ao Faculzap'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-notebook'
  },
  {
    name: 'Chat',
    url: '/chat',
    icon: 'icon-notebook'
  },
  {
    name: 'Logout',
    url: '/login',
    icon: 'icon-logout',
  }
];
