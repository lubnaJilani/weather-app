
function Showpara(){
    let getDiv= document.getElementById('show')
    let getInp = document.getElementById("inp")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=3a3994b2a0b67c62567ce641ccce4736`)
    
.then(data => data.json())
.then((data) => {
  let getData = data.main
  getDiv.innerHTML = `<div>
 <center> <p> Temperature:${getData.temp}</p>
  <p>humidity: ${getData.humidity}</p>
  <p> pressure: ${getData.pressure}</p>
  
  </center>

  </div>`
    
}
)}

