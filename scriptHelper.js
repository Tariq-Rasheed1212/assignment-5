// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // get the missionTarget div
  // set the inner HTML to this
  // fill in the information that is passed in
   // Here is the HTML formatting for our mission target div.
   /*
    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
                `
   */
}

function validateInput(testInput) {
  if (!testInput || testInput === '') {
    return 'Empty';
  } else if (isNaN(testInput)) {
    return 'Not a Number';
  } else {
    return 'Is a Number';
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const values = [pilot, copilot, fuelLevel, cargoLevel];
  if (values.some((value) => validateInput(value) === 'Empty')) {
    alert("All fields are required!");
  } else if (isNaN(fuelLevel) || isNaN(cargoLevel)) {
    alert("Make sure to enter valid information for each field!");
  } else {
    list.style.visibility = 'visible';

    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuel = document.getElementById('fuelStatus');
    const cargo = document.getElementById('cargoStatus');

    list.style.visibility = "visible";
       pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
       copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
       let launchStatus = document.getElementById("launchStatus");
       if (fuelLevel < 10000 && cargoLevel <= 10000) {
           fuel.innerHTML = "Fuel level too low for launch";
           cargo.innerHTML = "Cargo mass low enough for launch"
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "#C7254E";
       } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
           fuel.innerHTML = "Fuel level high enough for launch"
           cargo.innerHTML = "Cargo mass too heavy for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "#C7254E";
       } else if (fuelLevel < 10000 && cargoLevel > 10000) {
           fuel.innerHTML = "Fuel level too low for launch";
           cargo.innerHTML = "Cargo mass too heavy for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "#C7254E";
       } else {
           fuel.innerHTML = "Fuel level high enough for launch"
           cargo.innerHTML = "Cargo mass low enough for launch"
           launchStatus.innerHTML = "Shuttle is Ready for Launch";
           launchStatus.style.color = "#419F6A";
       }
  }



  // set the list.style.visibility = 'visible'
  // get the pilot status, update the inner HTML to say `Pilot ${pilot} is ready for launch`
  // get the copilot status, update the inner HTML to say `CoPilot ${copilot} is ready for launch`
  // check if the fuel level is less 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the fuelStatus to "Fuel level too low for launch"

  // check if the cargo level is more than 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the cargoStatus to "Cargo level too high for launch"

    // if both fuel and cargo are good
      // change the launchStatus to "Shuttle is Ready for Launch" and color to green
}

async function myFetch() {
    let planetsReturned;

  planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
      // get the json from the response
        });

    return planetsReturned;
}

function pickPlanet(planets) {
  // randomly pick a planet from the array
  // Math random for index
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
