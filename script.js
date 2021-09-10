// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const planet = pickPlanet(listedPlanets);
      let name = planet["name"];
      let diameter= planet["diameter"];
      let star = planet["star"];
      let distance = planet["distance"];
      let moons = planet["moons"];
      let imageUrl = planet["image"];




      addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
   })


   // get the form
   let form = document.querySelector("form");
   // add a listener to when the form submit
   form.addEventListener('submit', function(event) {
      // if it's not, preventDefault
      // get the value for each of the input field
      let pilotValue = document.querySelector("input[name=pilotName]").value;
      let copilotValue = document.querySelector("input[name=copilotName]").value;
      let fuelLevelValue = document.querySelector("input[name=fuelLevel]").value;
      let cargoLevelValue = document.querySelector("input[name=cargoMass]").value;
   

      let list = document.getElementById('faultyItems');
     formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue);
     event.preventDefault();

   });
});