// Personal homepage content. Empty lists hide their sections.
// The CV is a public copy with personal telephone numbers removed.
export const CV_URL = "Chao_Tang_CV_Sep2026.pdf";

export const profile = {
  nameEn: "Chao Tang",
  nameCn: "",
  role: ["Computer Science Undergraduate", "University of Macau"],
  location: "Macau",
  photo: null, // Add an imported portrait here when it is ready.
  links: [
    { label: "uc32807@um.edu.mo", href: "mailto:uc32807@um.edu.mo" },
    { label: "GitHub", href: "https://github.com/UM-Tang", newTab: true },
    { label: "CV (PDF)", href: CV_URL, newTab: true },
  ],
};

export const about = [
  `I am a Computer Science undergraduate at the <a href="https://www.um.edu.mo/">University of Macau</a>. My research interests center on <strong>LLM-based agents</strong>, including self-referential and self-evolving frameworks, and reinforcement learning for agentic tasks.`,
  `I am particularly interested in <strong>autonomous AI scientists</strong> that learn from real-world feedback, including automated wet-lab experiments. My projects connect language-model reasoning with executable programs, experimental planning, and practical tools for scientific discovery and design.`,
];

// Projects come immediately after About; descriptions reflect the supplied CV.
export const projects = [
  {
    org: "CARE: Budgeted Reaction Optimization",
    desc: "Context-Aware Ranking Evolution with executable scoring programs for selecting chemical reaction experiments under limited budgets.",
    role: "Research Assistant · Co-first author · McGill University & XtalPi Inc.",
    advisor: "Supervised by Dr. Tianyu Shi and Dr. Peiyu Zhang",
    date: "May 2026 – Present",
    status: "Preprint · Under review at AAAI 2027",
    highlights: [
      "Designed an intervention gate that compares LLM-generated scoring programs with a numerical optimizer's reference choice; gate ablations reduced mean normalized regret by 2.9%–7.8% across three tasks.",
      "Developed offline evaluation across eight reaction-optimization tasks, where CARE achieved the lowest mean normalized regret among evaluated methods with five initial observations and ten adaptive experiment selections per campaign.",
    ],
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2606.14581" },
      { label: "Code", href: "https://github.com/SHITIANYU-hue/care" },
    ],
  },
  {
    org: "Agent-Guided Microfluidic Automation for Biochemical Assays",
    desc: "An LLM-agent system that adapts assay-kit protocols to an oil–water interfacial microfluidic platform, connecting protocol interpretation with experimental planning.",
    role: "Visiting Student · Laboratory for Biochips & Biosensors, Westlake University",
    advisor: "Supervised by Prof. Haisong Lin",
    date: "May 2026 – Present",
    highlights: [
      "Implemented the agent system for generating microfluidic chamber layouts and platform-specific standard operating procedures from assay protocols.",
      "Developed drivers for PCB-mounted coils and connected software to physical hardware for magnetic-motion demonstrations; contributed to the evaluation plan for ongoing wet-lab assay demonstrations.",
    ],
  },
  {
    org: "LLM-Guided Protein Variant Screening under Limited Query Budgets",
    desc: "An offline screening framework on FLIP2 TrpB that combines Ridge prediction, bootstrap uncertainty estimates, and adaptive acquisition under a 48-query budget.",
    role: "Final-Year Project · University of Macau",
    advisor: "Supervised by Prof. Meng Qu",
    date: "Sep 2026 – Present",
    highlights: [
      "Implemented rule-based and LLM acquisition controllers and an input-information ablation study with matched baselines, covering 228 trajectories and 456 LLM decisions.",
      "Compared batch protocols across 19 paired seeds: LLM-controlled batches of 4 and 16 achieved 30.26 and 25.16 mean top-decile hits, respectively, under the same 48-query budget.",
    ],
  },
  {
    org: "Agent-Based Graphic Design and Editable SVG Generation",
    desc: "An agent-based design system that turns natural-language briefs and style preferences into SVG layouts with independently editable visual and text elements.",
    role: "Lab Member · NLP2CT, University of Macau",
    advisor: "Supervised by Prof. Fai Wong",
    date: "Feb 2025 – Present",
    highlights: [
      "Built a workflow combining SAM-guided segmentation, occlusion detection, hidden-content recovery, OCR, and background reconstruction to separate design elements and rebuild editable text.",
      "Implemented a ReAct agent for iterative layout refinement and SVG assembly; selected 200 LICA examples for text-to-design evaluation, with instruction-adherence and visual-aesthetics assessment in progress.",
    ],
  },
];

export const education = [
  {
    org: "University of Macau",
    role: "Bachelor of Science in Computer Science",
    date: "Sep 2023 – Present",
    url: "https://www.um.edu.mo/",
    desc: "Relevant coursework: Natural Language Processing; Information Retrieval and Web Search; Linear Algebra I; Probability and Statistics; Discrete Structures; Cloud Computing and Big Data Systems.",
  },
];

export const leadership = [
  {
    org: "Artificial Intelligence and Data Science Society",
    role: "President · University of Macau Students' Union",
    date: "Aug 2025 – Present",
  },
  {
    org: "MLC College, University of Macau",
    role: "Student Leader",
    date: "Aug 2024 – Jun 2025",
  },
  {
    org: "Photography Society",
    role: "President · University of Macau Students' Union",
    date: "Aug 2024 – Jun 2025",
  },
];

export const skills = ["Python", "Hugging Face Transformers", "Linux", "Git", "LaTeX"];
export const news = [];
export const publications = [];
export const workingPapers = [];
export const experience = [];
export const awards = [];
export const teaching = [];
export const lastUpdated = "September 2026";
