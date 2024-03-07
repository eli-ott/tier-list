const allowDrop = event => {
	event.preventDefault();
};

const drag = event => {
	if (event.target.parentNode.className.includes('selected')) {
		event.dataTransfer.setData('text', event.target.parentNode.id);
	}
};

const drop = event => {
	event.preventDefault();
	let data = event.dataTransfer.getData('text');
	const image = document.getElementById(data);

	if (image && image.className.includes('selected')) {
		event.target.appendChild(image);
	}
};
