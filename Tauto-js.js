var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong" ,"Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria",
"Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]

var periodicTable =["Hydrogen","Helium","Lithium","Boron","Carbon","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Plutonium","Berkelium","Californium","Curium","Americium","Neptunium","Protactinium","Actinium","Cesium","Barium","Lanthanum","Neodymium","Samarium","Gadolinium","Holmium","Erbium","Polonium","Osmium","Thallium","Einsteinium","Francium","Radium","Thorium","Uranium","Mercury","Gold","Lead","Bismuth","Tungsten","Iridium","Ytterbium","Palladium","Silver","Tin","Antimony","Xenon","Iodine","Tellurium","Cadmium","Indium","Dysprosium","Terbium","Lutetium","Radon","Hafnium","Tantalum","Rhenium","Thulium","Europium","Cerium","Promethium","Praseodymium","Platinum","Astatine","Fermium","Mendelevium","Lawrencium","Seaborgium","Hassium","Darmstadtium","Ununbiium","Ununquadium","Roentgenium","Meitnerium","Bohrium","Nobelium","Dubnium","Rutherfordium"];

var indianState = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];

class Autocomplete{
    constructor(elementId, listSelector, arrayList){
        this.input = document.getElementById(elementId);
        this.listSelector = listSelector;
        this.itemClass = elementId + "list-iclass";
        
        this.input.addEventListener("keyup", () => {
            this.removeItem();

            for(let a of arrayList){

                if (a.toLowerCase().startsWith(this.input.value.toLowerCase()) && this.input.value != ""){
                    let createList = document.createElement("li");

                    createList.classList.add("listValue");
                    createList.classList.add(this.itemClass);
                    createList.style.cursor = "pointer";

                    let letter = "<b>" + a.substring(0, this.input.value.length) + "</b>";
                    letter += a.substring(this.input.value.length);

                    createList.innerHTML = letter;
                    document.querySelector(this.listSelector).appendChild(createList);
                    
                    createList.addEventListener("click", () => {
                        this.displayItem(a);
                    });
                }
            }});
    }
    removeItem(){
        let deleteData = document.querySelectorAll("." + this.itemClass);
        deleteData.forEach((removableItem) => {
            removableItem.remove();
        });
    }

    displayItem(value){
        this.input.value = value;
    }
}


document.addEventListener("DOMContentLoaded", (event) => {
    countryAutocomplete = new Autocomplete("countryGroup",".countryList",countries.sort());
    console.log(countryAutocomplete);

    periodicAutocomplete = new Autocomplete("periodicGroup",".periodicList",periodicTable.sort());
    console.log(periodicAutocomplete);
    
    stateAutocomplete = new Autocomplete("stateGroup",".stateList",indianState.sort())
    console.log(stateAutocomplete);
});





