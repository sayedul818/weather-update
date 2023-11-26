const loadData=async(city)=>{
    const API_KEY=`46ad7457603b9b0104e633e78cd60e16`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const res=await fetch(url);
    const data=await res.json();
    displayData(data);
}
displayData=(data)=>{
console.log(data);
const cityName=document.getElementById("city-name");
cityName.innerText=data.name;
const tepreature=document.getElementById("tempreature");
tepreature.innerText=data.main.temp;
const condition=document.getElementById("condition");
condition.innerText=data.weather[0].main;
}
document.getElementById("btn-search").addEventListener('click',function(){
    const searchField=document.getElementById("search-field").value;
    const city=searchField
    loadData(city);
})
loadData('dhaka');
