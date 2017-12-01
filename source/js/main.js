window.onload = function () {

    //Calculator
    (function () {
        var square = document.querySelector('.square');
        var angle = document.querySelector('.quantity');
        var radio1 = document.querySelector('.radio1');
        var radio2 = document.querySelector('.radio2');
        var radio3 = document.querySelector('.radio3');
        var price = document.querySelector('.form__price');


        var anglePrice = 70;
        var materialPrice = 100;

        price.innerHTML = square.value * materialPrice + angle.value * anglePrice + ' грн.';


        function result() {

            price.innerHTML = square.value * materialPrice + angle.value * anglePrice + ' грн.';
        }

        square.addEventListener('input', result);
        angle.addEventListener('input', result);
        radio1.addEventListener('click', function () {
            materialPrice = 100;
            result();
        });
        radio2.addEventListener('click', function () {
            materialPrice = 150;
            result();
        });
        radio3.addEventListener('click', function () {
            materialPrice = 200;
            result();
        })
    })();

    //Sticky Menu
    (function () {
        var stickElement = document.querySelector(".menu");

        var fixed = false;
        var fixPoint = stickElement.offsetTop + stickElement.offsetHeight; //Получение расстояния по оси Y от верха страницы до элемента

        window.onscroll = function () {
            if (window.innerWidth > 1000) {
                var distance = fixPoint - window.pageYOffset;
                var offset = window.pageYOffset; //Получение текущей прокрутки сверху
                if ((distance <= 0) && !fixed) {
                    stickElement.classList.add('menu--fixed');

                    fixed = true;
                } else if (fixed && (offset <= fixPoint)) {
                    stickElement.classList.remove('menu--fixed');

                    fixed = false;
                }
            }
        };
    })();

    // Up-Down button
    (function () {
        'use strict';

        var upDownBtn = document.querySelector('.up_down_btn');
        var check;

        function trackScroll() {
            var scrolled = window.pageYOffset;
            var coords = document.documentElement.clientHeight;

            if (scrolled > coords) {
                upDownBtn.classList.add('up_down_btn-show');
                upDownBtn.setAttribute('title', 'Наверх');
                check = false;
            }
            else if (scrolled <= coords) {
                upDownBtn.classList.remove('up_down_btn-show');
                upDownBtn.setAttribute('title', 'Наверх');
                check = false;
            }
        }

        function backToTop() {
            upDownBtn.classList.add('up_down_btn-disabled');
            if (!check) {
                (function goTop() {

                    if (window.pageYOffset !== 0) {
                        window.scrollBy(0, -40);
                        setTimeout(goTop, 0);
                    } else {
                        upDownBtn.classList.remove('up_down_btn-disabled');
                    }

                })();
                return;

            } else if (check) {
                (function goBottom() {
                    var match = Math.ceil(window.pageYOffset + document.documentElement.clientHeight);

                    if (match != document.documentElement.scrollHeight) {
                        window.scrollBy(0, 80);
                        setTimeout(goBottom, 0);
                    } else {
                        upDownBtn.classList.remove('up_down_btn-disabled');
                    }

                })();
                return;
            }

        }

        window.addEventListener('scroll', trackScroll);
        upDownBtn.addEventListener('click', backToTop);
    })();

//    Menu
    (function () {
        var button = document.querySelector('.hamburger');
        var menu = document.querySelector('.menu');

        button.addEventListener('click', function () {
            menu.classList.toggle('menu--open');
            button.classList.toggle('hamburger--closed');
        })

    })();

    // Slider Manufacture

    $('.slider-schemes').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 937,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    // Photo gallery

    $('.photo-gallery').slick({
        // arrows: false,
        centerPadding: '10%',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    centerMode: true,
                    centerPadding: '10%',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    centerMode: true,
                    centerPadding: '22%',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    centerMode: true,
                    centerPadding: '10%',
                    slidesToShow: 1
                },
                breakpoint: 500,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10%',
                    slidesToShow: 1
                }
            }
        ]
    });

    //comments slider
    $('.comments__slider').slick({
        arrows: false,
        dots: true
    });

    // navigation
    (function () {
        var nav = document.querySelector('.menu');

        var toggleToActiveLink = function (target) {
            var links = document.querySelectorAll('.menu__items');
            var showedSection = target.parentNode.dataset.link;
            for (var i = 0; i < links.length; i++) {
                if (links[i].classList.contains('menu__items--active')) {
                    links[i].classList.remove('menu__items--active');
                }
            }
            target.parentNode.classList.add('menu__items--active');
            scrollToActiveSection(showedSection);
        };

        function scrollToActiveSection(showedSection) {
            var section = document.querySelector('.' + showedSection);
            var coords = section.getBoundingClientRect();

            var timerId = setInterval(function () {
                if (window.pageYOffset < coords.top - 150) {
                    window.scrollBy(0, 10);
                }
                else {
                    clearInterval(timerId);
                }
            }, 0.5)

        }

        nav.addEventListener('click', function (e) {
            var target = e.target;

            if (target.tagName.toLowerCase() !== 'a') {
                return
            }
            e.preventDefault();
            toggleToActiveLink(target);
        })

    })();

    // $(function () {
    //
    //     $('.menu a').on('click', function (e) {
    //         e.preventDefault();
    //
    //         var selector = $(this).attr('class'); /* #about - строка */
    //         console.log(selector);
    //         var h = $(selector); /* jquery-элемент заголовка */
    //
    //         $('html, body').animate({
    //             scrollTop: h.offset().top - 70
    //         }, 400);
    //
    //
    //     });
    // });
};

//google map
function initMap() {
    var element = document.querySelector('.map');
    var options = {
        zoom: 17,
        center: {lat: 50.450122, lng: 30.524157},
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        styles: [
            {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
            }
        ]

    };
    var myMap = new google.maps.Map(element, options)
}

// 50°27'00.4"N 30°31'27.0"E
// 50.450122, 30.524157



