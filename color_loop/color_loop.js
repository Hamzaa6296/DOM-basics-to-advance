function ColorChange (){
    let hex = '0123456789ABCDEF';
    let Color = '#';
    for (let i = 0; i < 6; i++) {
    Color += hex[Math.floor(Math.random() * 16)]    
    
}return Color
}
let interval
function StartBtn (){
    interval = setInterval(BGchanging, 1000)
    function BGchanging (){
        document.body.style.backgroundColor = ColorChange()
    }
        
};

function StopBtn (){
    clearInterval(interval)
}
document.querySelector('.btn1').addEventListener('click', StartBtn)
document.querySelector('.btn2').addEventListener('click', StopBtn)