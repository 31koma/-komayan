export type Work = {
  slug: string;
  title: string;
  year: string;
  category: string;
  status?: string;
  line?: string;
  href: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const works: Work[] = [
  {
    slug: "hoshiyomi-turf",
    title: "星読みターフ",
    year: "2026",
    category: "AI × 星読み競馬分析",
    href: "https://substack.com/@komat6",
    image: "/media/hero/hoshiyomi-turf.webp",
    imageAlt: "星空の下の競走馬とデータ分析を描いた星読みターフのビジュアル",
    featured: true,
  },
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
    icon: "🥷",
    title: "忍界大戦",
    detail: "ターン制コマンドバトル｜Roblox",
    status: "In Development",
  },
  {
    icon: "⚡",
    title: "電工一発アプリ",
    detail: "見積もり・施工図作成アプリ",
    status: "In Development",
  },
  {
    icon: "🥁",
    title: "ドラムレッスンアプリ",
    detail: "パラディドル・スティックコントロール練習",
    status: "In Development",
  },
  {
    icon: "🍽️",
    title: "個人飲食店向けAIオフィス",
    detail: "SNS・Google・ホームページ投稿支援",
    status: "In Development",
  },
  {
    icon: "🤖",
    title: "AIダッシュボード",
    detail: "業務管理・AIアシスタントシステム",
    status: "In Development",
  },
];
