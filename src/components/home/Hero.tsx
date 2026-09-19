import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ProfileCard } from "./ProfileCard";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/DepNielS",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dep-niel-sinaga-26202a309",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:depniels12@gmail.com",
    icon: FaEnvelope,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-main">
        <div
          className="
            flex
            min-h-[760px]
            flex-col
            justify-center
            gap-12
            py-16

            lg:grid
            lg:h-[760px]
            lg:min-h-0
            lg:grid-cols-[1fr_500px]
            lg:items-center
            lg:gap-16
            lg:py-16
          "
        >
          {/* ========================================
              LEFT CONTENT
          ========================================= */}
          <div className="max-w-3xl">
            {/* Badge */}
            <Badge>
              Junior Web Developer · Informatics Graduate
            </Badge>

            {/* Main Heading */}
            <h1 className="display-heading mt-8">
              <span className="block text-foreground">
                Building Practical
              </span>

              <span className="block text-primary-500">
                Web Applications,
              </span>

              <span className="block text-foreground">
                One Project at a Time.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-navy-500
                sm:text-lg
              "
            >
              I&apos;m Dep` Niel Sinaga, an Informatics graduate and
              Junior Web Developer focused on building practical web
              applications and continuously improving my full-stack
              development skills.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/projects">
                View My Projects
              </Button>

              <Button
                variant="secondary"
                href="#contact"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                const isExternal =
                  social.label !== "Email";

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={
                      isExternal ? "_blank" : undefined
                    }
                    rel={
                      isExternal
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-navy-500
                      transition-colors
                      duration-300
                      hover:text-primary-400
                    "
                  >
                    <Icon
                      size={16}
                      aria-hidden="true"
                    />

                    {social.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ========================================
              RIGHT CONTENT
          ========================================= */}
          <div
            className="
              flex
              w-full
              justify-center

              lg:h-[680px]
              lg:w-[500px]
              lg:justify-self-end
            "
          >
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}