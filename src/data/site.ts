export const siteConfig = {
  name: "Dep` Niel Sinaga",
  title: "Junior Web Developer",
  location: "Palembang, Indonesia",
  email: "depniels12@gmail.com",
  github: "https://github.com/DepNielS",
  linkedin:
    "https://www.linkedin.com/in/dep-niel-sinaga-26202a309",
  description:
    "Informatics graduate and Junior Web Developer focused on building practical web applications and continuously improving full-stack development skills.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000",
} as const;