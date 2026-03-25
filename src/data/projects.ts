export interface ProjectMedia {
  src: string;
  alt: string;
  type?: "image" | "gif";
}

export interface ProjectSection {
  heading: string;
  content: string;
  media?: ProjectMedia[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  color: string;
  image: string | null;
  year: string;
  role: string[];
  industry: string[];
  overview: string;
  overviewMedia?: ProjectMedia[];
  mediumLink?: string;
  media?: ProjectMedia[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "stellas-bank",
    title: "Stellas Digital Bank",
    subtitle: "Mobile Application Design: Transforming Fintech Excellence",
    category: "Fintech",
    color: "from-orange-500/20 to-orange-900/5",
    image: "/images/stellas-cover.png",
    year: "2021",
    role: ["Product Design", "Product Strategy"],
    industry: ["Banking", "Fintech"],
    overview:
      "Stellas is a digital challenger bank founded on the premise that essential banking services should be smooth, flexible and ultimately lead to wealth and prosperity. The task was to orchestrate a remarkable transformation for Stellas Bank — reinventing themselves as a trailblazing fintech startup and emerging as a dynamic force in the banking sector.",
    overviewMedia: [
      { src: "/images/stellas-imagee3.png", alt: "Stellas app design showcase" },
    ],
    mediumLink: "https://medium.com/design-bootcamp/the-stellas-digital-bank-redesign-case-study-5faf12975953",
    media: [],
    sections: [
      {
        heading: "The Challenge",
        content:
          "The existing banking experience was fragmented and outdated. Users struggled with complex navigation, slow transactions, and a lack of modern financial tools. Stellas needed a complete digital transformation to compete with emerging fintech players.",
      },
      {
        heading: "The Approach",
        content:
          "I led the end-to-end product design, starting with extensive user research and competitive analysis. Through iterative prototyping and usability testing, we developed a mobile-first banking platform that prioritizes simplicity, speed, and financial empowerment.",
      },
      {
        heading: "App Store Presence",
        content:
          "Stellas launched on the App Store with a clean, compelling presence — showcasing the app's core features and earning strong user reviews.",
        media: [
          { src: "/images/stellas-appstore.webp", alt: "Stellas App Store screenshots" },
          { src: "/images/stellas-reviews2.webp", alt: "Stellas App Store ratings — 4.4 out of 5" },
          { src: "/images/stellas-reviews.webp", alt: "Stellas user reviews" },
        ],
      },
      {
        heading: "The Outcome",
        content:
          "Delivered a comprehensive mobile banking application with intuitive onboarding, seamless transactions, card management, and smart financial insights. The redesign resulted in a significant improvement in user satisfaction and engagement metrics.",
      },
    ],
  },
  {
    slug: "wastenot",
    title: "WasteNot",
    subtitle: "Streamlining B2B Advertising Through Innovative Design",
    category: "B2B SAAS",
    color: "from-emerald-500/20 to-emerald-900/5",
    image: "/images/wastenot-1.png",
    year: "2024",
    role: ["Product Design"],
    industry: ["B2B Advertising", "SAAS"],
    overview:
      "WasteNot offers a seamless, automated solution for audience suppression and campaign management by addressing the complexities of diverse data landscapes and platform integrations. Currently in development, this innovative platform aims to simplify and optimize B2B advertising campaigns. As the product designer, I led the creation of a user-friendly interface that empowers B2B marketers to achieve better campaign outcomes with minimal effort.",
    overviewMedia: [
      { src: "/images/wastenot-1.png", alt: "WasteNot platform dashboard" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "Inefficient targeting and wasted ad spend are prevalent issues in B2B advertising. Studies show 63% of marketers waste budget on ineffective ad targeting. WasteNot needed a platform that could automate audience suppression and streamline campaign management across diverse data landscapes.",
      },
      {
        heading: "The Approach",
        content:
          "Led the end-to-end product design, starting with deep research into B2B advertiser workflows. Designed a streamlined dashboard with automated audience suppression, real-time analytics, and simplified campaign management tools.",
        media: [
          { src: "/images/wastenot-2.png", alt: "WasteNot campaign management interface" },
        ],
      },
      {
        heading: "The Outcome",
        content:
          "Delivered a comprehensive B2B platform with an intuitive dashboard, automated audience suppression, campaign management, and detailed reporting — enabling advertisers to significantly reduce wasted ad spend and improve ROAS.",
        media: [
          { src: "/images/wastenot-3.png", alt: "WasteNot analytics and reporting" },
        ],
      },
    ],
  },
  {
    slug: "medstation",
    title: "Medstation",
    subtitle: "Transforming the Hospital Experience through Digitalization",
    category: "Health · B2C, B2B",
    color: "from-teal-500/20 to-teal-900/5",
    image: "/images/medstation.png",
    year: "2022",
    role: ["Product Design"],
    industry: ["Health", "B2C", "B2B"],
    overview:
      "Medstation aims to transform the hospital experience by digitizing key healthcare processes. The project focused on creating a seamless digital platform that bridges the gap between patients and healthcare providers.",
    sections: [
      {
        heading: "The Challenge",
        content:
          "Healthcare facilities struggled with manual processes, long wait times, and fragmented patient records. Patients had difficulty accessing their health information and scheduling appointments efficiently.",
      },
      {
        heading: "The Approach",
        content:
          "Designed a comprehensive digital health platform with a focus on accessibility and ease of use. Conducted user research with both patients and healthcare staff to understand pain points across the entire care journey.",
      },
      {
        heading: "The Outcome",
        content:
          "Created a digital platform that streamlines appointment scheduling, patient records management, and communication between patients and healthcare providers — reducing wait times and improving the overall hospital experience.",
      },
    ],
  },
  {
    slug: "interstellas",
    title: "Interstellas",
    subtitle:
      "Integrating Seamless Payment Processing for Businesses and Developers",
    category: "Financial Services",
    color: "from-blue-500/20 to-blue-900/5",
    image: "/images/interstellas-1.png",
    year: "2021",
    role: ["Product Design", "Product Strategy"],
    industry: ["Financial Services", "BAAS"],
    overview:
      "As a dedicated team member within The GIG Group, a renowned conglomerate of tech enterprises in Nigeria celebrated for its substantial user base of 15 million and 250 million collective sessions, the objective was to create a transformative platform that would empower businesses and developers to seamlessly integrate cutting-edge payment processing capabilities via APIs — including transfers, bill payments, and virtual accounts.",
    overviewMedia: [
      { src: "/images/interstellas-1.png", alt: "Interstellas platform overview" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "Businesses and developers needed a reliable, easy-to-integrate payment infrastructure. The existing solutions in the Nigerian fintech ecosystem were complex, poorly documented, and required significant technical expertise to implement. Our mission was to simplify this process dramatically.",
      },
      {
        heading: "The Approach",
        content:
          "Led the design process from research through to high-fidelity prototypes. Conducted competitive analysis of existing BAAS platforms, created user personas, and developed information architecture. We built interactive prototypes and conducted usability tests with diverse user groups, iteratively refining based on feedback.",
        media: [
          { src: "/images/interstellas-2.png", alt: "Interstellas design process and screens" },
        ],
      },
      {
        heading: "The Outcome",
        content:
          "Delivered a comprehensive BAAS platform with streamlined onboarding, real-time transaction monitoring, and developer-centric tools. The design work greatly facilitated the seamless integration of numerous companies onto the platform, resulting in a substantial 40% boost in revenue for Stellas.",
      },
    ],
  },
  {
    slug: "wekurnect",
    title: "Wekurnect",
    subtitle: "Revolutionizing Business Growth",
    category: "B2B SAAS",
    color: "from-purple-500/20 to-purple-900/5",
    image: "/images/wekurnect-1.png",
    year: "2021",
    role: ["Product Design", "Product Strategy"],
    industry: ["FMCG", "B2B", "SAAS"],
    overview:
      "WeKurnect is connecting businesses who trade in FMCG goods to improve their businesses and lives. The SaaS platform connects manufacturers to distributors to retailers, effectively digitising the trade-supply chain and making it scalable through the introduction of third-party services like credit, insurance and more.",
    overviewMedia: [
      { src: "/images/wekurnect-1.png", alt: "Wekurnect platform overview" },
    ],
    sections: [
      {
        heading: "My Role",
        content:
          "I joined Wekurnect in November 2021 as a Product Designer, assuming the responsibility of spearheading the design efforts for the entire digital platform. My role encompassed a wide range of design tasks, from conceptualizing user interfaces to crafting intuitive user experiences across the platform.",
      },
      {
        heading: "The Approach",
        content:
          "Led design from research through delivery. Mapped the FMCG supply chain workflows, created user personas for manufacturers, distributors and retailers, and designed intuitive workflows for inventory management, order tracking, and business analytics.",
        media: [
          { src: "/images/wekurnect-2.png", alt: "Wekurnect design screens" },
        ],
      },
      {
        heading: "The Outcome",
        content:
          "Delivered a comprehensive B2B platform that digitises the FMCG supply chain, connecting manufacturers to distributors to retailers. The platform enables businesses to scale through data-driven insights, third-party service integrations, and streamlined operations.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
