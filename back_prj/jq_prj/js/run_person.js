
const path = './res/runs/'

const frames = [
        '0.png',
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.png',
        '12.png',
        '13.png',
        '14.png',
    ];

window.onload = () => {
    let count = 0;
    let running_man = document.getElementById('run')
    
    setInterval( () => {
            running_man.src = path + frames[count % frames.length]
            count = count + 1;
        }, 1000 / 20
    );
    
    if( 14000 < count ) count = 0;
};