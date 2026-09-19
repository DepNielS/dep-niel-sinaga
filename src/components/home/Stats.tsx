const highlights = [
  {
    value: "01",
    title: "Internship Experience",
    description: "Jan 2023 – Aug 2023",
  },
  {
    value: "03",
    title: "Selected Projects",
    description: "Personal & Team Development",
  },
  {
    value: "2026",
    title: "Informatics Graduate",
    description: "Universitas Multi Data Palembang",
  },
];

export function Stats() {
  return (
    <section
      aria-label="Quick highlights"
      className="py-10 sm:py-12"
    >
      <div className="container-main">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="
                rounded-2xl
                border border-navy-700
                bg-navy-900/60
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary-500/50
                hover:bg-navy-900
              "
            >
              <p
                className="
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-primary-400
                "
              >
                {item.value}
              </p>

              <h3
                className="
                  mt-4
                  text-base
                  font-semibold
                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-navy-500
                "
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}