// Google map start
function func() {
  const script = document.createElement('script');
  let key = '';
  if (window.location.href.match(/localhost/)) key = '';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
  document.getElementsByTagName('head')[0].appendChild(script);
}
// setTimeout(func, 1000);
const maps = document.querySelectorAll('.map');
const options = {
  rootMargin: '0px',
  threshold: 0.1,
};

maps.forEach(image => {
  const callback = (entries, observer) => {
    /* Content excerpted, show below */
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        observer.unobserve(image);
        func();
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  const target = image;
  observer.observe(target);
});
// eslint-disable-next-line no-unused-vars
function initMap() {
  const gmarkers1 = [];
  const center = {
    lat: 48.410748,
    lng: 35.081816,
  };
  const choosedCategories = new Set();
  choosedCategories.add('main');
  const filterItems = document.querySelectorAll('[data-marker]');
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    language: 'en',
    styles: getMapTheme(),
  });
  const filterMarkers = function(category, categoriesArray) {
    gmarkers1.forEach(el => {
      if (categoriesArray.has(el.category) || categoriesArray.size === 1) {
        el.setMap(map);
        el.setAnimation(google.maps.Animation.DROP);
      } else {
        el.setMap(null);
      }
    });
  };
  filterItems.forEach(item => {
    item.addEventListener('click', evt => {
      evt.stopImmediatePropagation();
      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        choosedCategories.add(item.dataset.category);
      } else {
        choosedCategories.delete(item.dataset.category);
      }
      filterMarkers('main', choosedCategories);
    });
  });
  var baseFolder = './assets/images/map/';
  var buildLogoSize = new google.maps.Size(70, 86);
  if (document.documentElement.clientWidth < 1440) {
    var buildLogoSize = new google.maps.Size(60, 76);
  }
  const markersAdresses = {
    main: `${baseFolder}main.svg`,
  };
  const markersData = [
    {
      type: 'main',
      icon: { url: markersAdresses.main, scaledSize: buildLogoSize},
      position: { lat: 48.410748, lng: 35.081816},
      text: 'м. Дніпро, вул. Набережна перемоги, 152'
    }
  ];
  /* beautify preserve:end */
  const infowindow = new google.maps.InfoWindow({
    text: '',
    maxWidth: 300,
  });
  markersData.forEach(marker => {
    const category = marker.type;
    const mapMarker = new google.maps.Marker({
      map,
      category,
      zIndex: marker.zIndex || 1,
      icon: marker.icon,
      cursor: 'grap', // курсор при наведении на макркер жк
      position: new google.maps.LatLng(marker.position.lat, marker.position.lng),
    });

    google.maps.event.addListener(mapMarker, 'click', function() {
      infowindow.setContent(marker.text);
      infowindow.open(map, mapMarker);
      map.panTo(this.getPosition());
    });

    mapMarker.name = marker.type;
    gmarkers1.push(mapMarker);
  });
}

function getMapTheme() {
  return [
    {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "saturation": -100
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "saturation": -100
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "saturation": -10
        },
        {
          "lightness": 30
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        },
        {
          "saturation": -60
        },
        {
          "lightness": 10
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        },
        {
          "saturation": -60
        },
        {
          "lightness": 60
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        },
        {
          "saturation": -100
        },
        {
          "lightness": 60
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        },
        {
          "saturation": -100
        },
        {
          "lightness": 60
        }
      ]
    }
  ]
}
