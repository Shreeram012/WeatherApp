class UI {
    constructor() {
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feels-like');
      this.dewpoint= document.getElementById('w-dewpoint');
      this.wind = document.getElementById('w-wind');
    }
  
    paint(weather,codeDesc) {
    let curTime=weather.current_weather.time;
    const d=new Date(curTime)
    const i=d.getHours()
    const temp=weather.hourly.temperature_2m[i];
    const mulF=Math.pow(Math.E,((17.27*temp)/(237.7+temp)));
    const pressure=(weather.hourly.relativehumidity_2m[i]*6.105*mulF)/100;
    const feelslike=weather.hourly.temperature_2m[i]+(0.33*pressure)-((0.7*temp*5)/18)-4;
    

    this.location.textContent = `${weather.latitude},${weather.longitude}`;
    this.desc.textContent = codeDesc[0];
    this.string.textContent = `${weather.hourly.temperature_2m[i]
    }${weather.hourly_units.temperature_2m}`;
    this.icon.setAttribute('src', codeDesc[1]);
    this.humidity.textContent = `Relative Humidity: ${weather.hourly.relativehumidity_2m[i]}${weather.hourly_units.relativehumidity_2m}`;
    this.feelsLike.textContent = `Feels Like: ${feelslike.toFixed(1)}${weather.hourly_units.temperature_2m}`;
    this.dewpoint.textContent = `DewPoint: ${weather.hourly.dewpoint_2m[i]}${weather.hourly_units.dewpoint_2m}
    `;
    this.wind.textContent = `Windspeed: ${weather.hourly.windspeed_10m[i]} ${weather.hourly_units.windspeed_10m}`;
    }
  }