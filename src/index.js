import "./styles/styles";
import 'owl.carousel';

/*----slider----*/

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1200,
        margin: 10,
        nav: true,
        dots: true,
        items: 1,
        navText: ["<img class='owl-nav-buttons_img' src='../assets/images/arrow.png'>", "<img class='owl-nav-buttons_img' src='../assets/images/arrow.png'>"]
    })
})

/*----последний блок, show-hide----*/

let block = document.getElementById("technicalParams"),
    button = document.getElementById('buttonForShow'),
    buttonSpan = Array.from(button.getElementsByTagName('span'));

function smoothOpen() {

    block.classList.toggle('hide');
    buttonSpan[0].classList.toggle('rotate-span');

    let buttonCoords = button.getBoundingClientRect(),
        buttonTop = buttonCoords.top;

    function scrollToBottom() {
        if (buttonTop > -140 && buttonTop < 200) {
            window.scrollBy(0, 15);
            buttonTop = buttonTop - 15;
            setTimeout(scrollToBottom, 15);
        } else if (buttonTop > -140) {
            window.scrollBy(0, 25);
            buttonTop = buttonTop - 25;
            setTimeout(scrollToBottom, 15);
        }
    }
    if (block.classList.contains('hide') == false) {
        scrollToBottom();
    }
}
button.addEventListener('click', smoothOpen);

function throttle(func, ms) {

    var isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
};
let arrImg_left = Array.from(document.getElementsByClassName('animate-target-left')),
    arrImg_right = Array.from(document.getElementsByClassName('animate-target-right'));


window.addEventListener('scroll', throttle(function () {
    arrImg_left.forEach(elem => {
        if (window.innerWidth > 1024) {
            if (elem.getBoundingClientRect().y < 600) {
                elem.classList.add("animated", "fadeInLeft");
                // console.log("I can see it");
            } else {
                // console.log("no contact");
            }
        } else {
            if (elem.getBoundingClientRect().y < 800) {
                elem.classList.add("animated", "fadeInLeft");
                // console.log("I can see it");
            } else {
                // console.log("no contact");
            }
        }
    })

    arrImg_right.forEach(elem => {
        if (window.innerWidth > 1024) {
        if (elem.getBoundingClientRect().y < 600) {
            elem.classList.add("animated", "fadeInRight");
            // console.log("I can see it");
        } else {
            // console.log("no contact");
        }
    }else {
        if (elem.getBoundingClientRect().y < 800) {
            elem.classList.add("animated", "fadeInRight");
            // console.log("I can see it");
        } else {
            // console.log("no contact");
        }
    }
    })
}, 30))