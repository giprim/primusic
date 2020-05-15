export const truncateText = (text: string) => {
	let iniText = text.split(' ');
	return iniText.length < 4
		? iniText.join(' ').toString()
		: `${iniText.splice(0, 4).join(' ')}...`;
};
