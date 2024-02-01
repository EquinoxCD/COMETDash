async function GetTimes()
{  

  let timeFile = await fetch("https://comet.mapstrat.com/current/RealTime_Temp/stop_times.txt");
  let timesArray = await timeFile.text().split(/\r\n|\r|\n/).map(substr => substr.split(','));
  return(timesArray);

}
