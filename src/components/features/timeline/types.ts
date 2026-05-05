export interface TimelineLink {
	name: string;
	url: string;
	type: "AI" | "玄学" | "应用项目" | "命运";
}

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "AI" | "玄学" | "应用项目" | "命运";
	startDate: string;
	endDate?: string;
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: TimelineLink[];
	icon?: string;
	color?: string;
	featured?: boolean;
}

export interface TimelineCardProps {
	item: TimelineItem;
	maxSkills?: number;
}
