console.log('hello world');
/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
// fully qualified url needed for search from website
// https://itunes.apple.com/search?parameterkeyvalue

let searchButton = document.getElementById('submitButton');

let resultsBox = document.getElementById('results');

let searchText = document.getElementById('searchBox');
//function goFetch(){
let AudioPlay = document.getElementById('music-player');
let play = document.getElementsByClassName('play')
// AudioPlay.src= "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview18/v4/ff/c4/c6/ffc4c617-a555-f410-00e8-775fb3eace04/mzaf_301659123226815251.plus.aac.p.m4a"
function goFetch(){
fetch(`https://itunes.apple.com/search?term=${searchText.value}`)

  .then(function(response){
    return response.json();
  })

  .then(function(data) {
    let display = "";
    console.log(data);

for(let i=0; i < data.results.length; i ++){
  display += `<div class= "box">
  <img src="${data.results[i].artworkUrl100}" alt="Smiley face"height="90" width="90">
  <P class="play"> ${data.results[i].trackName}</a>
  <p id="artist"> ${data.results[i].artistName}</p>
  </div>`
};
resultsBox.innerHTML = display;

});
};

 searchButton.addEventListener('click', goFetch)

// document.getElementById("results").addEventListener("click",function(e) {
// // for(let x = 0; i < data.results.length)
//    if (e.target && e.target.innerHTML === `${data.results[x].trackName}` {
//       //AudioPlay.src=
//      console.log("trackName element clicked!");
//    });


//goFetch();
// .results["0"].artistName
// .results["0"].trackName
// .results["0"].collectionName
function findo(ev){
  let Orig = ev.target;
  while(Orig !== null){
    if(Orig.tagname === "div")
    return Orig;
  }
  orig = orig.parentElement;
}
