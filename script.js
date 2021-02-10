async function getAllCountry(){
    try{
        var countries = await fetch("https://restcountries.eu/rest/v2/all");
        var data = await countries.json();
        console.log(data)
        
    async function getWeatherData(city)
    {
        console.log(city)
       try
       {
        var c= await fetch("api.openweathermap.org/data/2.5/weather?q="+ city+"&appid=4445ae87637147a94b811619ccd871b9")
        var we= await c.jason()
        alert('temp:'+inf.main.temp+'desc'+inf.weather[0].description)
       }
        
            catch(error)
            {
                console.log(error)
            }
        
    } 
   


for(i=0;i<data.length;i++){
    var mydiv = document.createElement("div")
   mydiv.setAttribute("class","col-lg-3")
   
    
    var heading = document.createElement("div")
 
    heading.innerHTML = data[i].name
    heading.style.backgroundColor="blue";
    mydiv.appendChild(heading)

    document.getElementById("main").append(mydiv)
   var pic=document.createElement("img")
   pic.src=data[i].flag 
   pic.width=150
   pic.height=70
   
   
   mydiv.appendChild(pic)

    var heading1=document.createElement("div")
    heading1.setAttribute("class","card-title")
    heading1.innerHTML="Capital:"+data[i].capital
    heading1.style.backgroundColor="red";
    mydiv.appendChild(heading1)

    var parah=document.createElement("div")
    parah.setAttribute("class","card-text")
   parah.innerHTML="Region: " + data[i].region
   mydiv.appendChild(parah)
   
  var code=document.createElement("div")
   code.setAttribute("id","code"+i)
   code.innerHTML="CODE : " + data[i].alpha3Code
   mydiv.appendChild(code)

   var a=document.createElement("a")
   a.setAttribute("class","btn btn-primary")
   a.onclick= getWeatherData(data[i].capital)
   a.type="button";
   a.innerHTML=" Get Weather"
   mydiv.appendChild(a)
}

}

catch(error){
        console.log(error)
    }
}
getAllCountry()