class Storage{
    constructor(lat,long){
        this.lat=lat;
        this.long=long;
        this.defLat='14.549793007510557';
        this.defLong='74.32250961620747';
    }

    getLocalStorage(){
        if(localStorage.getItem('lat')===null){
            this.lat=this.defLat;
        }
        else{
            this.lat=localStorage.getItem('lat');
        }

        
        if(localStorage.getItem('long')===null){
            this.long=this.defLong;
        }
        else{
            this.long=localStorage.getItem('long');
        }

        return{
            lat:this.lat,
            long:this.long
        }
    }
    
    setstorage(lat,long){
        localStorage.setItem('lat',lat);
        localStorage.setItem('long',long);
    }
}