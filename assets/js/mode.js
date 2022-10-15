const darkHeader = document.querySelector('.main_header');
const modeBtn = document.querySelector('.change_mode');

modeBtn.onclick=()=>{
    if (darkHeader.className === 'main_header') {
        darkHeader.className = 'dark_main_header';
    } else {
        darkHeader.className = 'main_header';
    }
}
