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

export type ChannelVideo = {
  youtubeId: string;
  title: string;
  line?: string;
};

export type Channel = {
  slug: string;
  name: string;
  kicker: string;
  concept: string;
  description: string;
  href: string;
  status?: string;
  image: string;
  videos: ChannelVideo[]; // 先頭がメイン。以降は一覧に並ぶ
};

export const channels: Channel[] = [
  {
    slug: "ks-over",
    name: "KS-OVER",
    kicker: "BAND",
    concept: "姿は、曲ごとに変わる。",
    description:
      "4人組のエモーショナル・ロックバンド。GAKU / KAZU / MASA / KOMA。変わらないのは、4人であることと音だけ。曲も姿も、AIと人の手で作っています。",
    href: "https://www.youtube.com/@KS-OVER",
    status: "NEW MUSIC VIDEO",
    image: "/media/works/yt-wjpZIyhM-4U.jpg",
    videos: [
      { youtubeId: "wjpZIyhM-4U", title: "Play for the Name", line: "祈りをテーマにした2作目。" },
      { youtubeId: "xKGa51Hw7Wg", title: "Beyond the Sixth Sense", line: "KS-OVER の1作目。" },
    ],
  },
  {
    slug: "izuna-paradox",
    name: "IZUNA PARADOX",
    kicker: "CHARACTER",
    concept: "イズナが歌い、世界を旅する。",
    description:
      "キャラクター「イズナ」を主人公に、音楽と映像でひとつの世界を描くプロジェクト。新しいMVを重ねていきます。",
    href: "https://www.youtube.com/@izuna_paradox",
    image: "/media/works/yt-cq-pxSk-gRs.jpg",
    videos: [
      { youtubeId: "cq-pxSk-gRs", title: "せかいのはしっこ", line: "3作目。" },
      { youtubeId: "uHOWR-_4s00", title: "Sugar Paradox", line: "夢と現実、2つの世界線で描く2作目。" },
      { youtubeId: "1isSEkwXdgw", title: "気づけば 空を見ていた", line: "デビュー作。" },
    ],
  },
  {
    slug: "glucoseman",
    name: "グルコースマン",
    kicker: "CHARACTER",
    concept: "設定のない、不思議なキャラクター。",
    description:
      "何者なのかは決まっていない。ジャンルも決めていない。紫のまるい頭と緑の芽を見かけたら、それがグルコースマン。",
    href: "https://www.youtube.com/@gurucoseman",
    image: "/media/works/yt-37ilPKrbzP0.jpg",
    videos: [
      { youtubeId: "37ilPKrbzP0", title: "GLUCOSE EMOTION ～カワイイ崩壊～", line: "可愛い絵が、曲の途中で実写に崩れていく応援歌。" },
    ],
  },
];

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
