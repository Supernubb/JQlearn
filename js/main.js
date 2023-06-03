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
    let activeSec = $('body > div > div.row.secRow > div');
    let activeSecW = activeSec.width(300);
    let activeSecH = activeSec.height(300);
    console.log(activeSecH, activeSecW);

});