// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "斗破苍穹年番",
		status: "watching",
		rating: 9.9,
		cover: "/assets/anime/3.png",
		description: "萧炎的成长之路",
		episodes: "209 episodes",
		year: "2022",
		genre: ["热血", "成长"],
		studio: "China",
		link: "https://v.qq.com/",
		progress: 197,
		totalEpisodes: 209,
		startDate: "2025-10",
		endDate: "2026-08",
	},
	
];

export default localAnimeList;
