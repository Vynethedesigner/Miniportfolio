const experiences = [
  {
    role: "Senior Product Designer",
    company: "Redcloud",
    location: "London, UK",
    period: "July 2024 — Present",
    current: true,
  },
  {
    role: "Senior Product Designer",
    company: "Stellas Digital Bank",
    location: "Remote",
    period: "June 2022 — Present",
    current: true,
  },
  {
    role: "Product Designer (Contract)",
    company: "WasteNot",
    location: "Chicago, Illinois",
    period: "Nov 2023 — March 2024",
    current: false,
  },
  {
    role: "Senior UI/UX Designer",
    company: "Equity Bank",
    location: "Nairobi, Kenya",
    period: "Aug 2021 — Aug 2023",
    current: false,
  },
  {
    role: "Product Designer (Contract)",
    company: "Wekurnect",
    location: "Remote",
    period: "Nov 2021 — March 2023",
    current: false,
  },
  {
    role: "Designer",
    company: "Wetalksound",
    location: "Remote",
    period: "Jan 2019 — June 2021",
    current: false,
  },
];

const skills = [
  "UX Design",
  "UI Design",
  "Strategy",
  "Design Systems",
  "Interaction Design",
  "User Testing",
  "UX Research",
  "SAAS",
  "B2B",
  "Service Design",
  "Usability Testing",
  "No-Code",
  "Leadership",
  "Illustration",
];

export default function Experience() {
  return (
    <section id="experience" className="bg-dark py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Skills */}
        <div className="mb-24">
          <p className="text-sm font-medium text-accent mb-3 uppercase tracking-widest">
            Expertise
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Skills & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="skill-tag text-sm px-5 py-2.5 rounded-full border border-border text-muted-light cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <p className="text-sm font-medium text-accent mb-3 uppercase tracking-widest">
            Career
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Experience
          </h2>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-8 items-start py-6 border-b border-border hover:border-muted transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-medium group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 uppercase tracking-wider font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-muted-light text-sm">
                    {exp.company}{" "}
                    <span className="text-muted">· {exp.location}</span>
                  </p>
                </div>
                <p className="text-sm text-muted md:text-right">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
