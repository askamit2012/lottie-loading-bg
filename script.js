const sec1 = document.querySelector('.sec1');
const anim1 = document.querySelector('.anim1');
const sec2 = document.querySelector('.sec2');
const anim2 = document.querySelector('.anim2');
const sec3 = document.querySelector('.sec3');
const anim3 = document.querySelector('.anim3');
const sec4 = document.querySelector('.sec4');
const anim4 = document.querySelector('.anim4');
const sec5 = document.querySelector('.sec5');
const anim5 = document.querySelector('.anim5');
const mainAnim = document.querySelector('.main-anim'); 

const path2 = 'https://assets5.lottiefiles.com/private_files/lf30_8HdBZM.json';
const path3 = 'https://assets6.lottiefiles.com/packages/lf20_olCp8K.json';
const path4 = 'https://assets10.lottiefiles.com/packages/lf20_gfch7dde.json';
const path5 = 'https://assets5.lottiefiles.com/packages/lf20_de6cmki0.json';
const loading_anim_path = 'https://assets1.lottiefiles.com/private_files/lf30_QLsD8M.json';

const animTime = (Math.random() *1000);

window.onload = () => {
    mainAnim.classList.add('loaded');
    lottie.loadAnimation({
        container: mainAnim, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: loading_anim_path // the path to the animation json
    });
    setTimeout(() => {
        mainAnim.classList.remove('loaded');
    },animTime)
}



lottie.loadAnimation({
    container: anim1, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets8.lottiefiles.com/packages/lf20_6cFZMp.json' // the path to the animation json
});

lottie.loadAnimation({
    container: anim2, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path2 // the path to the animation json
});

lottie.loadAnimation({
    container: anim3, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path3 // the path to the animation json
});

lottie.loadAnimation({
    container: anim4, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path4 // the path to the animation json
});

lottie.loadAnimation({
    container: anim5, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path5 // the path to the animation json
});