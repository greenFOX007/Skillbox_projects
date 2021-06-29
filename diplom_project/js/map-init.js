ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.758590302309244, 37.60097496334277],
            zoom: 14
        });
        var myPlacemark = new ymaps.Placemark([55.758590302309244, 37.60097496334277], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'image/dot_map.png',
          iconImageSize: [20, 20],
          iconImageOffset: [-5, -38]
        });

        myMap.geoObjects
          .add(myPlacemark);
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('routePanelControl');
    }
