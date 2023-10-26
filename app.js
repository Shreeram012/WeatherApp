const storage=new Storage();
const loc=storage.getLocalStorage();

const weather=new Weather(loc.lat,loc.long); 
//const weather=new Weather('77.8','-43.347');
const ui=new UI;

var map = L.map('map').setView([12.811801, 77.563477], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .openOn(map);
        const lat=document.getElementById('lat').value=e.latlng.lat,
          long=document.getElementById('long').value=e.latlng.lng;
    console.log(e.latlng)
}

map.on('click', onMapClick);

document.addEventListener('DOMContentLoaded',getWeather);
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const lat=document.getElementById('lat').value,
          long=document.getElementById('long').value;
    weather.changeloc(lat,long);
    storage.setstorage(lat,long);
    getWeather();
    $('#locModal').modal('hide');
});


function getWeather(){
    weather.getWeather()
        .then(res => 
        {
            const codeDesc=weather.getCode(res);
            ui.paint(res,codeDesc);
        })
        .catch(err => console.log(err));
}





//console.log(currentDate);