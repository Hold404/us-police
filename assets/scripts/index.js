let nav_first = document.getElementById('G');
let nav_second= document.getElementById('O');
let nav_third= document.getElementById('I');

let first = document.getElementById('home');
let second = document.getElementById('about');
let third= document.getElementById('join');


document.addEventListener('scroll', onScroll);

function onScroll() {
    const posTop = first.getBoundingClientRect().top;
    const posTop2 = second.getBoundingClientRect().top;
    const posTop3 = third.getBoundingClientRect().top;

    // if (posTop + first.clientHeight <= window.innerHeight && posTop >= 0) {
    //     console.log(posTop, first.clientHeight, window.innerHeight)
    // }

    console.log(posTop2, first.clientHeight, window.innerHeight);
}