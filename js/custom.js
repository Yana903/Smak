// jQuery(function ($) {
    $(document).ready(function () {
        $('.slickslider').slick({
            dots: true,
        });
    });
// });

$(document).ready(function () {
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function () {
        if (!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.counterup-text span').counterUp({
                delay: 1,
                time: 200
            });
            show = false;
        }
    });
});

var progress_circle1 = $(".progress-bar1").circularProgress({
    color: "#ffcf00",
    line: 6,
    percent: 70
});

var progress_circle2 = $(".progress-bar2").circularProgress({
    color: "#ffcf00",
    line: 6,
    percent: 40
});

var progress_circle3 = $(".progress-bar3").circularProgress({
    color: "#ffcf00",
    line: 6,
    percent: 50
})

var progress_circle4 = $(".progress-bar4").circularProgress({
    color: "#ffcf00",
    line: 6,
    percent: 40
});

$(document).ready(function () {
    var show = true;
    var countbox = "#progress";
    $(window).on("scroll load resize", function () {
        if (!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

        if (w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            progress_circle1.circularProgress('animate', 69, 500);
            progress_circle2.circularProgress('animate', 40, 2500);
            progress_circle3.circularProgress('animate', 60, 2500);
            progress_circle4.circularProgress('animate', 20, 2500);

            show = false;
        }
    });
});





