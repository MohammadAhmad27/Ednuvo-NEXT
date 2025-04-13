interface MenuLinkItem {
  id: number;
  icon: string;
  icon2: string;
  label: string;
  url: string;
}

export interface MenuSection {
  id: number;
  title: string;
  links: MenuLinkItem[];
}
