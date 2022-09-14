
import CountryClass from "./class.js";
import { initSingle } from "./singleCard.js";
let startPage_ar = ["israel","united states","brazil","united kingdom","thailand"];
let _ar = []

export const createCountryList = (counties_ar = _ar) =>{
    document.querySelector("#return").classList.add("d-none");
    document.querySelector("#inputs").classList.remove("d-none");
    document.querySelector("#id_message").classList.add("d-none");
    document.querySelector("#id_row").innerHTML = " ";
    hideLoading();   
    _ar = counties_ar;
    startPage_ar = counties_ar.filter(item => startPage_ar.includes(item.name.common.toLowerCase()))
    if(startPage_ar.length > 0){
        _ar = startPage_ar; 
        startPage_ar.forEach(item=> {
            let card = new CountryClass("#id_row",item,initSingle, shortCountryName);
            card.render();
            startPage_ar = [];
        });
    }
    else{
        counties_ar.forEach(item=> {
        let card = new CountryClass("#id_row",item,initSingle, shortCountryName);
        card.render(); 
    });
    }
        
   
}

export const declearAllEvent = (doApi) => {
    let search = document.querySelector("#id_search");
    let searchBtn = document.querySelector("#searchBtn");
    let sort = document.querySelector("#sort_id");
    let selectList = document.querySelector("#id_select");
    let messageBtn = document.querySelector("#closeBtn");
    let message = document.querySelector("#id_message");

    searchBtn.addEventListener("click", () => {
          doApi(`name/${search.value}`);
        })
    search.addEventListener("keydown",(e) => {
            if(e.key == "Enter"){
                doApi(`name/${search.value}`);
            }
        })
    //message not found ! 
   

    messageBtn.addEventListener("click", () =>{
       
        createCountryList(_ar);
    })
    //Sort select 
    sort.addEventListener("change", () => { 
       let sortVal = document.querySelector("#sort_id").value
       _ar = _.sortBy(_ar,sortVal);
       createCountryList(_ar);
    })    
    selectList.addEventListener("change", () => { 
        let selectVal = document.querySelector("#id_select").value;
       initSingle(`alpha/${selectVal}`);
    })    
    // Events navbar
    document.querySelector("#all").addEventListener("click", () =>{
        doApi();
    })
    document.querySelector("#israel").addEventListener("click", () =>{
        initSingle("alpha/376");
    })
    document.querySelector("#usa").addEventListener("click", () =>{
        initSingle("alpha/840");
    })
    document.querySelector("#thailand").addEventListener("click", () =>{
        initSingle("alpha/764");
    })
    document.querySelector("#uk").addEventListener("click", () =>{
        initSingle("alpha/826");
    })
    document.querySelector("#brazil").addEventListener("click", () =>{
        initSingle("alpha/076");
    })
}
const shortCountryName = (_name = "israel") => {
    if(_name.length > 14 ){
        _name = _name.substring(0,14) + ".." ;
    }
    return _name;
}


 export const hideLoading = () => {
    document.querySelector("#id_loading").style.display = "none";
    document.querySelector("#id_row").style.display = "flex";
  }