

$(document).ready( e => {
	let output = '';
	let i = 0;

	const ex = document.getElementById('ex');

	for (i = 0; i < 256; i++) {
		output += '<div></div>';
	}

	ex.innerHTML = output;

    $('#ex div').css({
        height: 2,
        backgroundColor: i => {
            return `rgb( ${i}, ${i}, ${i} )`;
        }
    });
});