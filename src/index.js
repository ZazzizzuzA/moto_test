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
    buttonSpan = Array.from(button.getElementsByTagName('span')),
    currentPosition = window.pageYOffset;


    function smoothOpen() {
    
        block.classList.toggle('hide');     

        let pos = window.pageYOffset;

    }
    function scrollToBlock() {

    }

button.addEventListener( 'click', smoothOpen );
