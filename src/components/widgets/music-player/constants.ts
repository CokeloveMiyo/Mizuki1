import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "春娇与志明",
		artist: "本人",
		cover: "assets/music/cover/1.png",
		url: "assets/music/url/1.mp3",
		duration: 0,
	},
	{
		id: 2,
		title: "搁浅",
		artist: "周杰伦",
		cover: "assets/music/cover/2.png",
		url: "assets/music/url/2.mp3",
		duration: 240,
	},
	{
		id: 3,
		title: "老男孩",
		artist: "筷子兄弟",
		cover: "assets/music/cover/3.png",
		url: "assets/music/url/3.mp3",
		duration: 180,
	},
	{
		id: 4,
		title: "有爱就不怕",
		artist: "庄心妍",
		cover: "assets/music/cover/4.png",
		url: "assets/music/url/4.mp3",
		duration: 200,
	},


	{
		id: 5,
		title: "雨爱",
		artist: "杨丞琳",
		cover: "assets/music/cover/5.png",
		url: "assets/music/url/5.mp3",
		duration: 200,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: "/favicon/favicon.ico",
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
