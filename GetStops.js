function GetStops() 
    {  


          let stopsFile = await fetch("https://comet.mapstrat.com/current/RealTime_Temp/stops.txt");
        
          let StopsArray = await response.text().split(/\r\n |\r | \n/).map(substr => substr.split(','));
          return(StopsArray);
    }
