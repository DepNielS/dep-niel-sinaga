import type { NavigationItem } from "@/src/data/navigation";

export function resolveNavigationHref(
  item: NavigationItem,
  pathname: string,
): string {
  // Item yang memang menuju halaman tertentu,
  // misalnya /projects
  if (!item.hash) {
    return item.href;
  }

  // Saat berada di homepage,
  // gunakan anchor langsung.
  if (pathname === "/") {
    return item.hash;
  }

  // Saat berada di halaman lain,
  // kembali ke homepage lalu menuju section.
  return `/${item.hash}`;
}

export function isNavigationActive(
  item: NavigationItem,
  pathname: string,
): boolean {
  // Projects
  if (item.href === "/projects") {
    return pathname === "/projects" || pathname.startsWith("/projects/");
  }

  // Home
  if (item.label === "Home") {
    return pathname === "/";
  }

  // Section navigation pada homepage.
  // Kita tidak menandai About/Experience/Contact
  // sebagai active berdasarkan URL hash karena
  // usePathname() tidak membaca hash browser.
  return false;
}