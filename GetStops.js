function loadStops() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatestatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            let stopsArray = data.split(/\r\n|\r|\n/).map(substr => substr.split(','));


        


        }





    }    
http.open("GET", "https://comet.mapstrat.com/current/RealTime_Temp/stops.txt", true);
xhttp.send();

    
}
