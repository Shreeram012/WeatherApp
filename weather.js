class Weather{
    constructor(lat,long){
        this.lat=lat;
        this.long=long;
    }
    async getWeather(){
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        
        let currentDate = `${year}-${month}-${day}`;

        const response =await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${this.lat}&longitude=${this.long}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,windspeed_10m&current_weather=true&start_date=${currentDate}&end_date=${currentDate}`);
        const respData=await response.json();
        //console.log(respData)
        return respData;
    }

    async changeloc(lat,long){
        this.lat=lat;
        this.long=long;
    }

    getCode(weather){
        switch(weather.current_weather.weathercode){
            case 0: return ["Clear sky","https://img.icons8.com/fluency/1x/summer.png"];
            case 1: 
            case 2: 
            case 3: return ["Mainly clear, partly cloudy, and overcast","https://img.icons8.com/fluency/256/partly-cloudy-day.png"];
            case 45:
            case 48: return ["Fog and depositing rime fog",""];
            case 51:
            case 53:
            case 55: return ["Drizzle: Light, moderate, and dense intensity","https://img.icons8.com/fluency/256/light-rain-2.png"];
            case 56:
            case 57: return ["Freezing Drizzle: Light and dense intensity","https://img.icons8.com/fluency/256/rain.png"];
            case 61:
            case 63:
            case 65: return ["Rain: Slight, moderate and heavy intensity","https://img.icons8.com/fluency/1x/heavy-rain.png"];
            case 66:
            case 67: return ["Freezing Rain: Light and heavy intensity","https://img.icons8.com/fluency/256/intense-rain.png"];
            case 71:
            case 73:
            case 75: return ["Snow fall: Slight, moderate, and heavy intensity",""];
            case 77: return ["Snow grains",""];
            case 80:
            case 81:
            case 82: return ["Rain showers: Slight, moderate, and violent","https://img.icons8.com/fluency/256/torrential-rain.png"];
            case 85:
            case 86: return ["Snow showers slight and heavy",""];
            case 95: return ["Thunderstorm: Slight or moderate","https://img.icons8.com/fluency/256/storm.png"];
            case 96:
            case 99: return ["Thunderstorm with slight and heavy hail","https://img.icons8.com/fluency/256/storm-with-heavy-rain.png"];
            default: return ["Unknown",""]
        }
    }

}