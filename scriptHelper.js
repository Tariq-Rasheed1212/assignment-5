// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let newDestination = document.getElementById("missionTarget");
  // get the missionTarget div
  // set the inner HTML to this
  newDestination.innerHTML = `
  <h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter} </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${imageUrl}">`;
  // fill in the information that is passed in
   // Here is the HTML formatting for our mission target div.
   /*
    `
                
   */
}

function validateInput(testInput) {
  //check if the test Input is empty
  if (testInput.value === "Empty"){
    return 'Empty'
  }
  else if (isNaN(testInput.value) === true){
      return "Not a Number";
  }
  else {
    return "Is a Number";
  }
    // if it is, return 'Empty'
  // check if it's not a number isNaN
    // return 'Not a Number'
  // else
    // return 'Is a Number'
}

function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {
  // check if any of the values are empty
    if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty'){
     alert('All fields needs to be filled out.');
    }
    if (isNaN(fuelLevelValue && cargoLevelValue)){ 
    alert ( 'Must enter valid input!');
  }


  list.style.visibility = 'visible';
   let pilotElement = document.getElementById("pilotStatus");
   pilotElement.innerHTML = `Pilot ${pilotValue} is ready for launch`;
  let copilotElement = document.getElementById("copilotStatus"); 
   copilotElement.innerHTML = `CoPilot ${copilotValue} is ready for launch`;
   if(fuelLevelValue < 10000){
   document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
   document.getElementById("fuelLevel").innerHTML = "Fuel level too low for launch."; 
   document.getElementById("launchStatus").style.color = "red";
   //and color to red
    // change the fuelStatus to "Fuel level too low for launch"
  
   }
   if (cargoLevelValue > 10000) {
     document.getElementById("cargoStatus").innerHTML = "Too much cargo for liftoff.";
     document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
     document.getElementById("launchStatus").style.color = "red";
     //and color to red
    // change the cargoStatus to ""
   }
    // document.addEventListener("Cargo level too high for launch", function() {
    //   let input = document.getElementsByClass("cargoMass");
    //   console.log(input.value);
    // return input.value;
    // });
         // now update the value in the input
         
   if (fuelLevel && cargoMass === true){
      document.getElementById("fuelLevel", "cargoMass").innerHTML = "Shuttle is Ready for Launch";
      document.getElementById("fuelLevel", "cargoMass").style.color = "green";

    };
      // change the launchStatus to "Shuttle is Ready for Launch" and color to green
}

async function myFetch() {
    let planetsReturned;

  planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
      // get the json from the response
      return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
  
 return planets[Math.floor(Math.random()* planets.length)];
  
}



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
