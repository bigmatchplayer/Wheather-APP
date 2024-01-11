const temperateField=document.querySelector(".weather1");
const cityField=document.querySelector(".weather2 p");
const dateField=document.querySelector(".weather3 span");
const emojiField=document.querySelector(".weather3 img");
const wheatherField=document.querySelector(".weather3 span");
const searchField=document.querySelector(".searchField");
const form =document.querySelector("form")

let target ='delhi'

// function to we can easily fetch the data
const fetchData= async(target)=>{
  try{
    const url=`https://api.weatherapi.com/v1/current.json?key=b0ced485af01441cbfc73534240901&q=${target}`;
    const response =await fetch(url);
    const data =await response.json();

    // Destructuring the data
    const {current:{
        temp_c,condition:{
            text,icon
        }},    
    location:{
        name,localtime
    }}=data

    //calling update function
    updateDom(temp_c,name,icon,text,localtime);
  }
  catch(error){
    alert("Location not found");
  }
    
};

// function to update the DOM


function updateDom(temp,name,emoji,text,localtime){
    temperateField.innerText=`${temp}°`;
    cityField.innerText=`${name}`;
    emojiField.src=emoji;
    wheatherField.innerText=text;
    const exactDate=localtime.split(" ")[0];
    const exactTime=localtime.split(" ")[1];
    const exactDay=new Date(exactDate);
    dateField.innerText=`${exactDate} ${exactTime}`;
    
    console.log(exactDay);

}
fetchData(target);

// Event listner for Search Bar

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    target=searchField.value;
    fetchData(target);

})




