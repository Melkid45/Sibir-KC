function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map__info", {
    center: [55.78150702329822, 37.58069404049517],
    zoom: 13,
    controls: ["zoomControl", "typeSelector", "searchControl"],
  });
  // Собственное изображение для метки с контентом
  var placemark4 = new ymaps.Placemark(
    [55.78150702329822, 37.58069404049517],
    {
      hintContent: "Москва, Art Residence,3-я Ямского Поля ул., 9к4, офис Е316",
    },
    {
      // Опции.

      // Необходимо указать данный тип макета.
      iconLayout: "default#image",

      // Своё изображение иконки метки.
      iconImageHref:
        "https://rgcompany.ru/images/tild3431-3737-4562-a163-643934666561__holder.svg",
      // Размеры метки.
      iconImageSize: [48, 48],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-16, -16],
    }
  );
//   jQuery(function ($) {
//     $(document).mouseup(function (e) {
//       if (!$(".maps").is(e.target) && $(".maps").has(e.target).length === 0) {
//         myMap.behaviors.disable("scrollZoom");
//         $(".body").css("overflow", "hidden");
//       } else {
//         myMap.behaviors.enable("scrollZoom");
//       }
//     });
//   });
  myMap.geoObjects.add(placemark4);
}

let mapInfoWidth = 568
let mapInfoHight = 341
$(document).on('load' , function(){
    $('#map__info').css({
        "width" : `${mapInfoWidth} + px`,
        "height" : `${mapInfoHight} + px`
    }
    )
})