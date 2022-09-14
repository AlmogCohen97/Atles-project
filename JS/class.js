
export default class CountryClass{
    constructor(_perent , _item,_initSingle, _shortCountryName){
        this.perent = _perent;
        this.name = _item.name.common;
        this.fullName = _item.name.official;
        this.flag = _item.flags.png;
        this.pop =  `${(Math.floor((_item.population / 1000000) * 100) / 100).toLocaleString()}M`
        this.realPop = _item.population;
        this.contintent = _item.subregion || this.name;
        this.code = _item.ccn3;
        this.initSingle = _initSingle
        this.shortCut = _shortCountryName;
    }
    render(){
        if(this.realPop < 1000000){
            this.pop = `${(Math.floor((this.realPop / 10000) * 10)).toLocaleString()}K`
        }
        if(this.realPop < 100000){
            this.pop = `${(Math.floor((this.realPop / 100) * 100)).toLocaleString()}`
        }
        this.name = this.shortCut(this.name);
        let myDiv = document.createElement("div");
        myDiv.className = " col-12 col-md-6 col-lg-4 mt-3"
        myDiv.title = this.fullName;
        myDiv.innerHTML = `
            <div class="m-2 box col-11 border border-2 shadow text-dark  bg-secondary text-center">
            <img src="${this.flag}" alt="${this.name}" title="${this.fullName}" class="my-2 mx-auto col-11" height="200" width="170" >
            <h2>${this.name}</h2>
            <div class="information">
            <p>population: ${this.pop}</p>
            <p class="mb-2">region: ${this.contintent}</p>
            </div>
            <h4 class=" badge p-3 col-12 text-black">Press for more info</h4>
            </div>
        `
        document.querySelector(`${this.perent}`).append(myDiv);
        myDiv.addEventListener("click", () => {
            this.initSingle(`alpha/${this.code}`);
        })
    }    

}