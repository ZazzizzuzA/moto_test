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
            pos = window.pageYOffset,
            buttonTop = buttonCoords.top;
        
        function scrollToBottom() {
            if (buttonTop > -140 && buttonTop < 200 ) {
                window.scrollBy(0, 15);
                buttonTop = buttonTop - 15;
                setTimeout(scrollToBottom, 15);
            } else if ( buttonTop > -140 ) {
                window.scrollBy(0, 25);
                buttonTop = buttonTop - 25;
                setTimeout(scrollToBottom, 15);
            }
        }
        if (block.classList.contains('hide') == false) {
            scrollToBottom();
        }
    }
    
button.addEventListener( 'click', smoothOpen );
