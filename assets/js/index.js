let button = document.getElementById("button");
button.addEventListener("click", (event) => {
  event.preventDefault();

  let search = document.getElementById("search").value;

  document.getElementById("refresh-tooltip").style.display = "block";
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
    .then((res) => res.json())
    .then((data) => {
      //Js Dynamic tags
      let div;

      div = document.createElement("div");
      div.setAttribute("id", "inner-container");
      div.innerHTML = `
 <div class="phonetics">
   <h3>Phonetics</h3>
   <div class="phonetics-item">
     <span class="text">${data[0].phonetic}</span>
     <audio class="audio" src="${data[0].phonetics[0].audio}" controls></audio>
   </div>
 </div>

 <div class="meanings">
   <h3>Meanings</h3>
   <div class="meaning">
     <span class="part-of-speech">${data[0].meanings[0].partOfSpeech}:</span>
     <p class="definition">${data[0].meanings[0].definitions[0].definition}</p>
     <p class="example">Example: ${data[0].meanings[0].definitions[0].example}</p>
   </div>
 </div>

 <div class="source">
   <a href="${data[0].sourceUrls[0]}" target="_blank">Source</a>
   <span class="license">License: Naveena Sri | <a href="${data[0].sourceUrls[0]}" target="_blank">WIKTIONARY</a></span>
 </div>
`;

      document.querySelector(".container").append(div);
    });
});
function loading() {
  document.getElementById("loading-gif").style.display = "none";
}

//build in javascript method
//takes two params
//function and seconds timing
setInterval(() => {
  loading();
}, 3000);

function mouseOver() {
  document.getElementById("refresh-tooltip").style.display = "block";
}

function mouseOut() {
  document.getElementById("refresh-tooltip").style.display = "none";
}

let refreshbtn = document.getElementById("refreshbtn");
refreshbtn.addEventListener("mouseover", mouseOver);
refreshbtn.addEventListener("mouseout", mouseOut);

refreshbtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.reload();
});
