import SingleCountry from "./singleClass.js";

export const initSingle = (id) => {
    doApiSingle(id);
    
}
const doApiSingle =  async (id) => {
    document.querySelector("#id_row").innerHTML = " ";
    // console.log(id);
    
    let url = `https://restcountries.com/v3.1/${id}`
    let resp = await fetch(url);
    // console.log(resp);
    let data = await resp.json();
    console.log(data);
    document.querySelector("#inputs").classList.add("d-none");
    document.querySelector("#return").classList.replace("d-none","d-block");
    hideLoading();
    let single = new SingleCountry("#id_row",data[0],initSingle);
    single.render();
}

const hideLoading = () => {
    document.querySelector("#id_loading").style.display = "none";
    document.querySelector("#id_row").style.display = "flex";
  }


initSingle();