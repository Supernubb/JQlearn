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












    // tabs
    let nonActiveSec = $('body > div > div.row.secsRow > div.col-12.bg-primary:not(.active)').hide();
    let menuBClick = $('body > div > div.row.gx-5.mb-3 > div > div');

    menuBClick.click(function (menuEl) {
        menuBClick.removeClass('active');
        let target = $(menuEl.target).addClass('active');
        $('body > div > div.row.secsRow > div').removeClass('active').hide(1000);
        $(`body > div > div.row.secsRow > div.col-12.bg-primary[secID=${target.attr('secTarget')}]`).addClass('active').show(1000);
    });
});