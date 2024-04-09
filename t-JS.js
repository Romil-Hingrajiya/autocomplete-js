var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong" ,"Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria",
"Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]
//var length = countries.length;
//console.log(length);
// sort name in ascending order
var sort = countries.sort();
console.log(sort);

//access or reference
let input = document.getElementById("country-group");
let unorder = document.getElementsByTagName("ul")[0]; 

unorder.style.left = Math.round(input.getBoundingClientRect().left) + 'px';
unorder.style.width = Math.round(input.getBoundingClientRect().width) + 'px';


// execute function on keyup ??
input.addEventListener("keyup", () => {

    // initially remove all elements, so if the user erases a letter or add a letter than it will clean previuos outputs
    removeElements(); 
    
    //loop through an above country array
    for(let i of sort){
        // console.log(i); //display in console

        //convert input to lowercase and compare with each string
        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""){
            let listitem = document.createElement("li");

            // class creation??
            listitem.classList.add("list-items");
            listitem.style.cursor = "pointer";
            listitem.setAttribute("onclick", "displayNames('" + i + "')");

            //display matched part in bold
            let word = "<b>" + i.substring(0, input.value.length) + "</b>";
            word += i.substring(input.value.length);
            //console.log(word);

            //display the value in array ??
            listitem.innerHTML = word;
            document.querySelector(".list").appendChild(listitem);
        }
    }
});

function displayNames(value){
    input.value = value;
}

//clear all the items
function removeElements(){
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}


var PeriodicTable =["Hydrogen","Helium","Lithium","Boron","Carbon","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Plutonium","Berkelium","Californium","Curium","Americium","Neptunium","Protactinium","Actinium","Cesium","Barium","Lanthanum","Neodymium","Samarium","Gadolinium","Holmium","Erbium","Polonium","Osmium","Thallium","Einsteinium","Francium","Radium","Thorium","Uranium","Mercury","Gold","Lead","Bismuth","Tungsten","Iridium","Ytterbium","Palladium","Silver","Tin","Antimony","Xenon","Iodine","Tellurium","Cadmium","Indium","Dysprosium","Terbium","Lutetium","Radon","Hafnium","Tantalum","Rhenium","Thulium","Europium","Cerium","Promethium","Praseodymium","Platinum","Astatine","Fermium","Mendelevium","Lawrencium","Seaborgium","Hassium","Darmstadtium","Ununbiium","Ununquadium","Roentgenium","Meitnerium","Bohrium","Nobelium","Dubnium","Rutherfordium"];
//console.log(PeriodicTable);
var sort_Table = PeriodicTable.sort();
console.log(sort_Table);

let Table = document.getElementById("periodic-group");
let order = document.getElementsByTagName("ul")[1];

order.style.left = Math.round(Table.getBoundingClientRect().left) + 'px';
order.style.width = Math.round(Table.getBoundingClientRect().width) + 'px';

//console.log(Table);
Table.addEventListener("keyup", () => {

    removeElement(); 
    
    //loop through an above country array
    for(let x of sort_Table){
        //console.log(x); //display in console

        if(x.toLowerCase().startsWith(Table.value.toLowerCase()) && Table.value != ""){
            let tableitem = document.createElement("li");

            // class creation??
            tableitem.classList.add("table-items");
            tableitem.style.cursor = "pointer";
            tableitem.setAttribute("onclick", "displayName('" + x + "')");

            //display matched part in bold
            let pword = "<b>" + x.substring(0, Table.value.length) + "</b>";
            pword += x.substring(Table.value.length);
            //console.log(word);

            //display the value in array ??
            tableitem.innerHTML = pword;
            document.querySelector(".periodic-list").appendChild(tableitem);
        }
    }
});

function displayName(value){
    Table.value = value;
}
function removeElement(){
    let items = document.querySelectorAll(".table-items");
    items.forEach((item) => {
        item.remove();
    });
}

