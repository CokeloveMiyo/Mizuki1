// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "命理" | "电气" | "AI开发" | "风水" | "编程";
	level: "熟悉" | "深入熟悉" | "研究" | "精通";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "四柱",
		name: "四柱分析",
		description:
			"四柱分析一个人的命运",
		icon: "mdi:account-check",
		category: "命理",
		level: "研究",
		experience: { years: 0, months: 3 },
		projects: [
			"四柱分析性情",
			"分析命运",
			"分析祸福",
		],
		color: "#F7DF1E",
	},


		{
		id: "AI",
		name: "AI开发",
		description:
			"擅长使用AI进行深度开发",
		icon: "mdi:album",
		category: "AI开发",
		level: "深入熟悉",
		experience: { years: 1, months: 3 },
		projects: [
			"用AI做工具",
			"做小程序",
			"做网站",
		],
		color: "#34eb0b",
	},
	
];
