export type WorkCategory =
  | "Roblox"
  | "Web"
  | "Web App"
  | "AI"
  | "System"
  | "Music"
  | "Electric Works"
  | "Restaurant";

export type Work = {
  slug: string;
  title: string;
  year: string;
  category: WorkCategory;
  status: "Live" | "Developing";
  line: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const works: Work[] = [
  {
    slug: "glucoseman-sleep-fall",
    title: "GLUCOSEMAN SLEEP FALL",
    year: "2026",
    category: "Web App",
    status: "Live",
    line: "眠るキャラが、夜空を落ちていくゲーム。",
    href: "https://glucoseman-sleepfall.vercel.app/",
    image: "/media/works/glucoseman-sleep-fall-900.jpg",
    imageAlt: "GLUCOSEMAN SLEEP FALLのゲームアイコン",
  },
  {
    slug: "glucoseman-labyrinth",
    title: "GLUCOSEMAN LABYRINTH",
    year: "2026",
    category: "Roblox",
    status: "Live",
    line: "迷路を下って、光次元ホールを目指す。",
    href: "https://ro.blox.com/Ebh5?af_dp=roblox%3A%2F%2Fnavigation%2Fgame_details%3FgameId%3D10331945057&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2F72226810332759",
    image: "/media/works/glucoseman-labyrinth.jpg",
    imageAlt: "グルコースマン ラビリンスのゲーム画像",
  },
];

export type DevelopingProject = {
  icon: string;
  title: string;
  detail?: string;
  status: "In Development";
};

export const developing: DevelopingProject[] = [
  {
    icon: "🏇",
    title: "星読み競馬 AI",
    status: "In Development",
  },
  {
    icon: "🥷",
    title: "忍界大戦",
    status: "In Development",
  },
  {
    icon: "⚡",
    title: "電気工事 AI",
    detail: "設計・積算・施工図作成アプリ",
    status: "In Development",
  },
  {
    icon: "🥁",
    title: "ドラム練習 AI",
    status: "In Development",
  },
];
