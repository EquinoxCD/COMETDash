async function GetTimes()
{  

  let timeFile = await fetch("https://comet.mapstrat.com/current/RealTime_Temp/stop_times.txt").then( data => 
  {

     let timesArray = await data.text().split(/\r\n|\r|\n/).map(substr => substr.split(','));



  })

}
