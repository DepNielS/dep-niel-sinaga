import { developmentJourney } from "@/src/data/journey";

export function DevelopmentJourney() {
  return (
    <section
      className="section-padding"
      aria-labelledby="journey-title"
    >
      <div className="container-main">
        <div className="max-w-3xl">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-primary-400
            "
          >
            Development Journey
          </p>

          <h2
            id="journey-title"
            className="
              mt-4
              text-3xl
              font-semibold
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            From learning to building.
          </h2>

          <p className="mt-5 text-base leading-8 text-navy-500">
            A few milestones that shaped my current focus on Web Development.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div
            className="
              absolute
              bottom-0
              left-[7px]
              top-2
              hidden
              w-px
              bg-navy-700
              md:block
            "
            aria-hidden="true"
          />

          <div className="space-y-10">
            {developmentJourney.map((item, index) => (
              <article
                key={item.title}
                className="relative md:pl-10"
              >
                {/* Timeline dot */}
                <span
                  className="
                    absolute
                    left-0
                    top-1
                    hidden
                    size-[15px]
                    rounded-full
                    border-2
                    border-primary-500
                    bg-navy-950
                    md:block
                  "
                  aria-hidden="true"
                />

                <div className="grid gap-3 md:grid-cols-[160px_1fr] md:gap-8">
                  <div>
                    <p className="text-sm font-semibold text-primary-400">
                      {item.period}
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-navy-500">
                      {item.category}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-navy-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}