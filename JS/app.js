import { createCountryList ,declearAllEvent ,hideLoading} from "./manager.js";
let isNavOpen = false;

export const init = () => {
    doApi();
    declearAllEvent(doApi,createCountryList);
}
const doApi = async (search = "all")  => {
    showLoading();
    let url =  `https://restcountries.com/v3.1/${search}`
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.status);
    if(data.status != 404){
        createAllSelects(data);
        createCountryList(data);
    }
    else{
        hideLoading();
        document.querySelector("#id_row").innerHTML = " "
        document.querySelector("#id_message").classList.remove("d-none");
       
    }
}

const showLoading = () => {
    document.querySelector("#id_loading").style.display = "block";
    document.querySelector("#id_row").style.display = "none";
}

export const createAllSelects=(allCountries_ar)=>{
    let select = document.querySelector("#id_select")
    let sorted_arr = _.sortBy(allCountries_ar,"name.common")
    console.log(sorted_arr);
    sorted_arr.forEach(item =>{
      select.innerHTML +=`
      <option value="${item.cca3}">${item.name.common}</option>`;
    })
    document.querySelector(".pre-Footer").classList.remove("d-none")
  }



init()