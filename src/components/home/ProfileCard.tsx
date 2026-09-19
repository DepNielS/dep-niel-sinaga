import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="relative h-[680px] w-[500px]">
      {/* Soft blue glow */}
      <div
        className="
          pointer-events-none
          absolute -inset-8
          rounded-[2rem]
          bg-primary-500/10
          blur-3xl
        "
        aria-hidden="true"
      />

      {/* Main Profile Card */}
      <div
        className="
          relative flex h-full w-full
          flex-col overflow-hidden
          rounded-3xl
          border border-navy-700
          bg-navy-900
          shadow-2xl
        "
      >
        {/* Profile Image */}
        <div className="relative min-h-0 flex-1">
          <Image
            src="/images/profile/dep-niel.jpeg"
            alt="Dep` Niel Sinaga — Junior Web Developer"
            fill
            priority
            sizes="500px"
            className="object-cover object-center"
          />

          {/* Image Overlay */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-t
              from-navy-950/70
              via-transparent
              to-transparent
            "
            aria-hidden="true"
          />
        </div>

        {/* Profile Information */}
        <div
          className="
            flex h-[92px] shrink-0
            flex-col items-center justify-center
            border-t border-navy-700
            bg-navy-800/90
            p-5
            text-center
            backdrop-blur-xl
          "
        >
          <p className="text-lg font-semibold text-white">
            Dep` Niel Sinaga
          </p>

          <p className="mt-1 text-sm text-navy-500">
            Junior Web Developer
          </p>
        </div>
      </div>
    </div>
  );
}