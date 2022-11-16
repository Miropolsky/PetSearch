import React from 'react';
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
//import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapYandex() {
  // const defaultState = {
  //   center: [55.751574, 37.573856],
  //   zoom: 5,

  // };
  // const state = {
  //   center: [55.751574, 37.573856],
  //   zoom: 9,
  //   controls: ['zoomControl', 'searchControl',  'fullscreenControl']
  // }
  
    /*global ymaps */
    /*eslint no-undef: "error"*/


      ymaps.ready(init);
      function init(){
          var myMap = new ymaps.Map("map", {
              center: [55.76, 37.64],
              zoom: 11,
              controls: ['zoomControl', 'searchControl',  'fullscreenControl']
          });
          myMap.geoObjects
          .add(new ymaps.Placemark([55.684758, 37.588521], {
                  balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
              }, {
                  preset: 'islands#icon',
                  iconColor: '#0095b6'
              }))
          .add(new ymaps.Placemark([55.790139, 37.814052], {
                balloonContent: 'цвет <strong>голубой</strong>',
                iconCaption: 'Очень длиннный, но невероятно интересный текст'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
          .add(new ymaps.Placemark([55.694843, 37.435023], {
              balloonContent: 'цвет <strong>носика Гены</strong>',
              iconCaption: 'Очень длиннный, но невероятно интересный текст'
          }, {
              preset: 'islands#greenDotIconWithCaption'
          }))
      }
    return (
    //   <YMaps query={{apikey:'1cffc76e-2cbf-41ae-9580-6728d3ad6932'}} >
    //   <Map state={state} width={570} height={500}>
    //     <Placemark geometry={[55.684758, 37.738521]} properties={{
    //       hintContent: 'Собственный значок метки',
    //       balloonContent: 'Это красивая метка'
    //     }}/>
    //   </Map>
    // </YMaps>
    <div id="map" style={{width: 1090, height: 700}}>
      
    </div>
    )
}