//the database I will be working with. It is an array contaning all the information of all the Pokemon represented by nested objects. 
import pokedexData from './pokedex.js';
//the array I will be working with to display the catalogue. 
let myBox = [];
//variable determines what type of pokemon should be displayed
let displayType = "";

//function saves the array to the local memory
function saveBox(boxArr) {
     localStorage.setItem('storedBox', JSON.stringify(boxArr));
}
//function checks if the local storage is populated, if it is it will display whatever it has stored, if not it auto populates it.
window.onload = () => {
     if (localStorage.getItem("storedBox") === null) {
       for ( let i = 0; i < pokedexData.length; ++i ) {
        //adds to myBox array only when i is divisble by 71, if there is nothing stored in local storage. 
            if (i % 91 == 0) {
                myBox.push(pokedexData[i]);
            }
       }
        // myBox = [pokedexData[302],  pokedexData[423],  pokedexData[298], pokedexData[94], pokedexData[342], pokedexData[866], pokedexData[289], pokedexData[49]];
     } else {
         let storedBox = JSON.parse(localStorage.getItem("storedBox"));
         storedBox.map((key) => {
            myBox.push(key);
         });
     }
     displayBox();
};

//functions runs a loop on the myBox array, creates a card for every pokemon stored in the array.
function displayBox() {
    let grid = document.querySelector(".grid");
    grid.innerHTML = '';
    for (let i = 0; i < myBox.length; i++) {
        let currPoke = myBox[i];

        const pCard = document.createElement('div');
        const number = document.createElement('p');
        const name = document.createElement('p');
        const image = document.createElement('img');
        const type = document.createElement('p');
        const species = document.createElement('p');
        const releaseButton = document.createElement('button');

        pCard.id = myBox[i].id;
        releaseButton.addEventListener("click", (e) => {
             deletePokemon(currPoke);            
             grid.innerHTML = '';
             displayBox();
        });

        pCard.classList.add('card');
        releaseButton.classList.add('Btn');

        number.innerHTML = "Num. " + currPoke.id;
        name.innerHTML = currPoke.name.english;
        image.src = currPoke.image.hires;
        type.innerHTML = "Type:"
        for (let i = 0; i < currPoke.type.length; i++) {
            type.innerHTML += " " + currPoke.type[i]
        }
        species.innerHTML = "The \"" + currPoke.species + "\"";
        releaseButton.innerHTML = "Release";

        pCard.append(number);
        pCard.append(name);
        pCard.append(image);
        pCard.append(type);
        pCard.append(species);
        pCard.append(releaseButton);

        currPoke.type.forEach((num, index) => {
            //if statement filters whihc type to display depening what is selected in the select form
                if (num.toLowerCase() == displayType || displayType == "") {
                    grid.appendChild(pCard);
                }
        });
        
    }
}

//function adds and removes classes in order to display the form ui. 
function openForm() {
    let formPage = document.querySelector("form");
    let backgroundForm = document.querySelector(".formContainer")
    formPage.classList.remove("hide");
    backgroundForm.classList.add("show");
}

//function adds and removes classes in order to remove the form ui. 
function closeForm() {
    let formPage = document.querySelector("form");
    let formBackground = document.querySelector(".formContainer");
    formPage.classList.add("hide");
    formBackground.classList.remove("show");
    clearForm();
}

//clears the form, called after submission or when form is closed. 
function clearForm() {
    document.forms["formInfo"].reset();
}

//functions finds the pokemon selected in the array and removes it with splice method, saves array to local memory too.
function deletePokemon(currPoke) {
    for (let i = 0; i < myBox.length; ++i) {
        if (myBox[i].id == currPoke.id) {
            myBox.splice(i, 1);
        }
    }
    saveBox(myBox);
}

//functions finds the Pokemon by name or number in the pokedex data imported and adds to the myBox array, saves array to local memory. 
function addPokemonToBox(number, name) {
    for (let i = 0; i < pokedexData.length; ++i) {
        //if the name or number the user inputed match with the pokedex data it adds it to myBox.
        if (number == pokedexData[i].id || name.toLowerCase() == pokedexData[i].name.english.toLowerCase()) {
            myBox.push(pokedexData[i]);
        }
    }
    saveBox(myBox);
}

//eventListener for the Add Pokemon button, calls openForm()
const addPokemonBtn = document.querySelector('.addPokemonBtn');
addPokemonBtn.addEventListener('click', () => {
    openForm();
});

//eventListener for the Close button, calls closeForm()
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', () => {
    closeForm();
});

//eventListener for the form, calls on addPokemonToBox function, re-displays the grid catalogue by calling the displayBox function, and closes the form. 
const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', () => {
    let newName = document.getElementById("name");
    let newNumber = document.getElementById("number");
    if (newNumber.value !== "" || newName.value !== "") {
        addPokemonToBox(newNumber.value, newName.value);
        displayBox();
        closeForm();
    } else {
        newTitle.setCustomValidity(
            "Enter a name or number to add a new Pokemon."
          );
    }
});

//eventlistener for the select form, assings a value to displayType and calls displayBox() to display the array list again.
const typeSelect = document.getElementById('type-select');
typeSelect.addEventListener('change', (event) => {
        displayType = event.target.value;
        displayBox();
});