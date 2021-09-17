mapboxgl.accessToken = 'pk.eyJ1IjoidGhxdWFuZyIsImEiOiJja3NlaG11bm4xMHJhMm9wM3kzeDk3eWFyIn0.UaKcxdXdZmPIUa0PfbBqZw';
const coordinatesGeocoder = function (query) {
    const matches = query.match(
        /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
    );
    if (!matches) {
        return null;
    }

    function coordinateFeature(lng, lat) {
        return {
            center: [lng, lat],
            geometry: {
                type: 'Point',
                coordinates: [lng, lat]
            },
            place_name: 'Lat: ' + lat + ' Lng: ' + lng,
            place_type: ['coordinate'],
            properties: {},
            type: 'Feature'
        };
    }

    const coord1 = Number(matches[1]);
    const coord2 = Number(matches[2]);
    const geocodes = [];

    if (coord1 < -90 || coord1 > 90) {
        // must be lng, lat
        geocodes.push(coordinateFeature(coord1, coord2));
    }

    if (coord2 < -90 || coord2 > 90) {
        // must be lat, lng
        geocodes.push(coordinateFeature(coord2, coord1));
    }

    if (geocodes.length === 0) {
        // else could be either lng, lat or lat, lng
        geocodes.push(coordinateFeature(coord1, coord2));
        geocodes.push(coordinateFeature(coord2, coord1));
    }

    return geocodes;
};

navigator.geolocation.getCurrentPosition(sucessLocation, errorLocation)
function sucessLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([106.682133, 10.765055])
};

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });
    const nav = new mapboxgl.NavigationControl({
        visualizePitch: true
    });

    console.log(searchBox);
    if(searchBox === true){
        map.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                localGeocoder: coordinatesGeocoder,
                zoom: 15,
                placeholder: 'Essayez Ho Chi Minh ville',
                mapboxgl: mapboxgl,
                reverseGeocode: true
            })
        );
    }
    else{
        map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            language: 'fr-FR'
        }), 
        'top-right'
        );
    }   
    map.addControl(nav, 'bottom-right');
    console.log("done");

}
var isOpen = false;
function openNav() {
    document.getElementById("mySidebar").style.width = "80px";
    document.getElementById("main").style.marginLeft = "80px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function clickNav() {
    if (isOpen === false) {
        openNav();
        isOpen = true;
    }
    else {
        closeNav()
        isOpen = false;
    }
}
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
$('.form-check').change(function () {
    var checked = $('#Reason4').is(':checked');
    if (checked == 1) {
        $("#other-reason").removeAttr('disabled');
    }
    else
        $("#other-reason").attr('disabled', 'disabled');
});
// $('#btnReport').on('submit', function(){
    
    
// })
// $('form').submit(function(){
//     alert('kfsldkjfsdlkf');
//     location.reload();
// })

