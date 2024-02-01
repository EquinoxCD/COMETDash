function GetTimes()
{  

  let timeFile = fetch("https://comet.mapstrat.com/current/RealTime_Temp/stop_times.txt");
  let timesArray = timeFile.text().split(/\r\n|\r|\n/).map(substr => substr.split(','));
  return(timesArray);

}
