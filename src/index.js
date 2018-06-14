import "./styles/styles";
import 'owl.carousel';

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