const submitButton = document.getElementById("submit");
const reloadButton = document.getElementById("reload");
const friendName = document.getElementById("friendName");
const numberOfHours = document.getElementById("numberOfHours");
const transportation = document.getElementById("transportation");
const adjective1 = document.getElementById("adjective1");
const adjective2 = document.getElementById("adjective2");
const verb1 = document.getElementById("verb1");
const animal = document.getElementById("animal");
const adjective3 = document.getElementById("adjective3");
const pastTenseVerb1 = document.getElementById("pastTenseVerb1");
const adjective4 = document.getElementById("adjective4");
const noun = document.getElementById("noun");
const pastTenseVerb2 = document.getElementById("pastTenseVerb2");
const pastTenseVerb3 = document.getElementById("pastTenseVerb3");
const place = document.getElementById("place");
const verb2 = document.getElementById("verb2");



submitButton.addEventListener("click", function(e){
    e.preventDefault();
    
    madLibStory.innerHTML = `Last month, I went to Disney World with ${friendName.value}. 
    We traveled for ${numberOfHours.value} hours by ${transportation.value}.
    Finally, we got there and it was very ${adjective1.value}. There were ${adjective2.value}
    people ${verb1.value} everywhere. There were also people dressed up in ${animal.value} costumes.
     I wish it had been more ${adjective3.value}, but we ${pastTenseVerb1.value} anyway. We also went on some
    ${adjective4.value} rides, called "${noun.value}". ${friendName.value} nearly fell off a ride and had to be ${pastTenseVerb2.value}.
    Later we went to the hotel and ${pastTenseVerb3.value}. Next year, I want to go to ${place.value}, where we can
    ${verb2.value}.`;
    
    formId.innerHTML = "";
    
    submitButton.hidden = true;
});

reloadButton.addEventListener("click", function(e){
    e.preventDefault();

    location.href = "../index.html";
    
})

