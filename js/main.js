// console.log($('div[secID=11]')); // по значению свойства =
// console.log($('div[secID^=1]')); // по значению свойства ничинающегося с ^=
// console.log($('div[secID$=1]')); // по значению свойства оканчивающегося на $=
// console.log($('div[secID*=1]')); // по значению свойства в любом месте на *=

// console.log($('div.row div.col-12:even')); // четные 
// console.log($('div.row div.col-12:odd')); // НЕчетные 
// console.log($('div.row div.col-12:not([secID=11])')); // кроме secID=11
// console.log($('div:has(div.col-12)')); // дивы внутри с дивами.col-12 
// console.log($('div:contains(0)')); // дивы внутри с текстом 0   
// console.log($('div:contains(0)')); // дивы внутри с текстом 0   
// console.log('LAST'); // отделил
// console.log($('div:first')); // первый див  
// console.log($('div:last')); // последний див   
// console.log($('div:hidden')); // скрытый?
// console.log($('div:visibility')); // видимый?


// let sec11 = $('.secRow');
// console.log(sec11.text());
// sec11.text('222');
// console.log(sec11.text());
// sec11.hide(3000);
// sec11.show(3000);
// sec11.hide(3000).show(3000);
// sec11.hide().text('New text!').show(3000); цепная функция к переменной или $()

$(document).ready(function () {
    // let activeSec = $('body > div > div.row.secRow > div');
    // let activeSecW = activeSec.width(300);
    // let activeSecH = activeSec.height(300);
    // console.log(activeSecH, activeSecW);

    // function getBlockWH(curBlock) {
    //     let curBlockJq = $('.' + curBlock);
    //     let curBlockW = curBlockJq.width();
    //     let curBlockH = curBlockJq.height();
    //     let curBlockT = curBlockJq.text('H: ' + curBlockH + ' W: ' + curBlockW);
    // };
    // getBlockWH('bg-primary');
    // let curBlock = $('.secRow').html('<div class="col-12">New HTML!</div>');
    // console.log(curBlock);


    // // let curBlock = $('.secRow').fadeOut(3000).fadeIn(3000);
    // function fadeOutWhithTime(bClass, foTime) {
    //     // let curBlockJq = $('.' + bClass);
    //     // curBlockJq.fadeOut(foTime);
    //     if (foTime > 5000 || foTime < 1000 || isNaN(foTime)) {
    //         return false;
    //     } else {
    //         let curBlockJq = $('.' + bClass);
    //         curBlockJq.fadeOut(foTime);
    //     }
    // };

    // fadeOutWhithTime('secRow', 500);

    // $('.secRow').fadeTo(3000, 0.5).fadeTo(3000, 1);
    // // function fadeOutWhithTime(bClass, foTime) {
    // //     // let curBlockJq = $('.' + bClass);
    // //     // curBlockJq.fadeOut(foTime);
    // //     if (foTime > 5000 || foTime < 1000 || isNaN(foTime)) {
    // //         return false;
    // //     } else {
    // //         let curBlockJq = $('.' + bClass);
    // //         curBlockJq.fadeOut(foTime);
    // //     }
    // // };

    // // fadeOutWhithTime('secRow', 500);

    // $('.secRow').slideUp(2000).slideDown(2000);

    // // let curAttr = $('body > div > div.row.secRow > div.col-12');
    // // // .attr('secID')
    // // curAttr.attr('secID', '00');
    // // curAttr.removeAttr('secID');;
    // // console.log(arAttr);
    // function removeAttr(bClass, rAttr) {
    //     let curBlockJq = $('.' + bClass + ' > div.col-12');
    //     curBlockJq.removeAttr(rAttr);
    //     console.log(curBlockJq);
    // };
    // function changeAttr(bClass, chAttr, newValuechAttr) {
    //     let curBlockJq = $('.' + bClass + ' > div.col-12');
    //     curBlockJq.attr(chAttr, newValuechAttr);
    //     console.log(curBlockJq);
    // };
    // changeAttr('secRow', 'secID', 55);

    //Работа с CSS стилями на jQuery, метод css() на jQuery, урок 17
    // let menuButtons = $('body > div > div.row.gx-5.mb-3 > div > div');
    // menuButtons.removeClass('bg-info').css({
    // 'padding': '15px',
    //     'background-color': 'rgb(255, 38, 0)'
    // });

    // Анимация CSS стилей на jQuery с помощью метода animate(), урок 18
    // let menuButtons = $('body > div > div.row.gx-5.mb-3 > div > div');
    // menuButtons.removeClass('bg-info').animate({
    //     'padding': '15px',
    //     'background-color': 'rgb(255, 38, 0)' // !на цвет не действует
    // },2000, () => {alert('Yes!')}); // алерт будет показан столько, сколько элементов в menuButtons

    // Добавить HTML код на jQuery, урок 19
    // let secBlockELHtmlChanged = $('body > div > div.row.secsRow > div.col-12.bg-primary.active > div > div:nth-child(1) > div');
    // secBlockELHtmlChanged.before('<div>New html before!</div>');
    // secBlockELHtmlChanged.after('<div>New html after!</div>');
    // secBlockELHtmlChanged.append('<div>New html append!</div>');
    // secBlockELHtmlChanged.prepend('<div>New html prepend!</div>');

    // // Ручные циклы на jQuery, Метод each() и $(this), урок 20
    // let curSercs = $('.secsRow > div').each(function () {
    //     if ($(this).attr('class') == 'col-12 bg-primary active') {
    //         $(this).addClass('eachClass');
    //     }
    // });

    // // Количество элементов в выборке jQuery, Свойство length, урок 21
    // let curSercs = $('.secsRow > div').length;
    // console.log(curSercs);

    // Клонирование объекта метод clone и remove, урок 22
    // let curSercs = $('.secsRow > div').clone();
    // // $('.secsRow').append(curSercs);
    // let curSercs = $('.secsRow > div').remove();
    // $('div > div> div > div ').after(curSercs);

    // Выбрать разные элементы на jQuery по HTML атрибуту, урок 23
    // $('.col-3, .col-12').css('padding', '30px');
    // $('.col-12.bg-primary[secID]').css('padding', '300px');

    // Урок про События на jQuery, урок 24
    // let curSercs = $('.secsRow > div');
    // curSercs.mouseover(function () {
    //     // curSercs.toggleClass('bg-primary').css('background-color', 'red');
    //     // console.log('MouseOver!');
    // });
    // forms: sumbit focus blur (!focus) change reset
    // keyboard: keypress keydown keyup
    // window: load resize (browser window change) scroll 

    // Традиционная модель событий на JS, урок 25
    // старая модель событий
    // Модель событий jQuery, урок 26
    // $(window).scroll(function () {
    //     console.log('scroll');
    // });;

    // Событие при наведении в jquery событие hover, урок 27
    // let curSecs = $('.secsRow > div');
    // curSecs.mouseover(function () {
    //     $(this).addClass('border border-dark');
    // });
    // curSecs.mouseout(function () {
    //     $(this).removeClass('border border-dark');
    // });
    // curSecs.hover(
    //     function () {
    //         $(this).addClass('border border-dark');
    //     },
    //     function () {
    //         $(this).removeClass('border border-dark');
    //     }
    // );

    // tabs
    $('body > div > div.row.secsRow > div.col-12.bg-primary:not(.active)').hide();
    let menuBClick = $('body > div > div.row.gx-5.mb-3 > div > div');

    menuBClick.click(function () {
        if (!$(this).hasClass('active')) {
            menuBClick.removeClass('active');
            $(this).addClass('active');
            $('body > div > div.row.secsRow > div').removeClass('active').hide(1000);
            $(`body > div > div.row.secsRow > div.col-12.bg-primary[secID=${$(this).attr('secTarget')}]`).addClass('active').show(1000);
        }
    });
});