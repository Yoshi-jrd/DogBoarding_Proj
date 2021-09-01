// Follow the Instructions on my.kenzie.academy for this assignment.

// Data Model w/ preloaded dogs.
let dataModel = [
  {
    name: 'Kol',
    breed: 'Foxhound Mix',
    age: 2,
    likesTreats: true,
  },
  {
    name: 'Zoey',
    breed: 'Miniature Snauzer',
    age: 3,
    likesTreats: true,
  },
  {
    name: 'Rosie',
    breed: 'Carolina Wild Dog',
    age: 7,
    likesTreats: false,
  },
]  

// user input to build a dog object, and add the dog object to the data model array.
function onSubmitDog (event) {
  event.preventDefault()

  let nameInput = document.querySelector("#name_input")
  let breedInput = document.querySelector("#breed_input")
  let ageInput = document.querySelector("#age_input")
  let treatsCheckbox = document.querySelector("#treats_input")

  let name = nameInput.value
  let breed = breedInput.value
  let age = ageInput.value
  let likesTreats = treatsCheckbox.checked
  
  if (name === "" || breed === "" || age === "") {  // If any of these text boxes are empty...
    alert("Please fill out all of the fields!") //Poor UX, used for project, TODO - create a better UX than alert()
    return;  // Exit the function early if all conditions are not met
  }

  let dog = {name: name,
            breed: breed,
            age: age,
            likesTreats: likesTreats,}

  dataModel.push(dog)
  
  renderDogList()
  
  // reset the form
  nameInput.value = "";
  breedInput.value = "";
  ageInput.value = "";
  treatsCheckbox.checked = false;
}

function renderDogList() {
  let list = document.querySelector("#dog_list");
  list.innerHTML = "";  // CLEAR the whole list to render the object in order

    for (let i = 0; i < dataModel.length; i++) {
      let dog = dataModel[i]

      let listElement = document.createElement('li')
      list.append(listElement)

      let likesTreatsPhrase = ''
      if (dog.likesTreats === true) {
        likesTreatsPhrase = ' who likes treats'
      }

      listElement.append(`${dog.name}! A ${dog.age} year old ${dog.breed}${likesTreatsPhrase}.`)

      let sendHomeButton = document.createElement("button");
      sendHomeButton.append("Send Home");
      sendHomeButton.addEventListener("click", function() {
        removeDog(dog);
      })

      listElement.append(sendHomeButton);
    }
    
    if (dataModel.length === 0) {
      let listElement = document.createElement('li')
      listElement.append('No Dogs Are Checked In!')
      list.append(listElement)
  }
}

function removeDog(dog) {
  let dogIndex = dataModel.indexOf(dog);
  dataModel.splice(dogIndex, 1);

  renderDogList();
}

let submitButton = document.querySelector("#submit_button");
submitButton.addEventListener("click", onSubmitDog);

renderDogList();
