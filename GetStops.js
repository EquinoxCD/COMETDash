function GetStops() 
    {  


          let stopsFile = fetch("https://comet.mapstrat.com/current/RealTime_Temp/stops.txt");
          let StopsArray = stopsFile.text().split(/\r\n |\r | \n/).map(substr => substr.split(','));
          return(StopsArray);
    }
