

const fclick = () => {
	alert('click!')
}

window.onload = () => {
	let btn = document.getElementById('btn');
	btn.onclick = () => {
		alert('click2!');
	}
}