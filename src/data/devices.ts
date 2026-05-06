// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	手机: [
		{
			name: "iPhone 11",
			image: "/images/device/2.png",
			specs: "iPhone 11 / 128GB ",
			description:
				"苹果钉子户，小钢炮",
			link: "www.apple.com",
		},
	],
	笔记本电脑: [
		{
			name: "七彩虹",
			image: "/images/device/3.jpg",
			specs: "4050 / 16GB + 512GB",
			description:
				"第一台笔记本电脑",
			link: "https://www.colorful.cn/",
		},
	],
};
