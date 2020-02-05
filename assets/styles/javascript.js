const submitButton = document.querySelector(`#submit`);
const reloadButton = document.querySelector("#reload");
const entryList = document.querySelectorAll(".entryList");

submitButton.addEventListener("click", function(e){
    tempArray = [];
    e.preventDefault();

    entryList.forEach(function(entry, index) {
        tempArray.push(entry.value);
    });
    
    madLibStory.innerHTML = `Last month, I went to Disney World with ${tempArray[0]}. 
    We traveled for ${tempArray[1]} hours by ${tempArray[2]}.
    Finally, we got there and it was very ${tempArray[3].value}. There were ${tempArray[4]}
    people ${tempArray[5]} everywhere. There were also people dressed up in ${tempArray[6]} costumes.
     I wish it had been more ${tempArray[7]}, but we ${tempArray[8]} anyway. We also went on some
    ${tempArray[9]} rides, called "${tempArray[10]}". ${tempArray[0]} nearly fell off a ride and had to be ${tempArray[11]}.
    Later we went to the hotel and ${tempArray[12]}. Next year, I want to go to ${tempArray[13]}, where we can
    ${tempArray[14]}.`;
    
    formId.innerHTML = "";
    
    submitButton.hidden = true;
});

reloadButton.addEventListener("click", function(e){
    e.preventDefault();

    location.href = "../index.html";
    
})

