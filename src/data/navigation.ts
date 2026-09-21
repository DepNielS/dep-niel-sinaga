export interface NavigationItem {
  label: string;
  href: string;
  hash?: string;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    hash: "",
  },
  {
    label: "About",
    href: "/",
    hash: "#about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Experience",
    href: "/",
    hash: "#experience",
  },
  
  
];