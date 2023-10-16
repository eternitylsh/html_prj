// jquery로...

window.onload = function() {
	let output = '';
	let i = 0;

	const ex = document.getElementById('ex');

	for (i = 0; i < 256; i++) {
		output += '<div></div>';
	}

	ex.innerHTML = output;

	let divs = ex.querySelectorAll('div');

	for(i = 0; i < divs.length; i++ ) {
		let newdiv = divs[i];
		newdiv.style.height = '2px';
		newdiv.style.backgroundColor = `rgb( ${i}, ${i}, ${i} )`;
	}
}