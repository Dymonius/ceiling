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
                }
            }
        ]
    });


};





