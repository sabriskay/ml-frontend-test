(function (window) {
    'use strict';

    function qS(selector) {
        console.log(selector);
        return document.querySelector(selector);
    };

    // Carousel
    var carouselOptions = {
        "pagination": true,
        "arrows": true,
        "limitPerPage": 3
    };

    var carousel = new ch.Carousel(qS('.more-product-list'), carouselOptions);

    tiny.on('a[href="#"]', 'click', function(e) {
        e.preventDefault();
    });

}(this));
