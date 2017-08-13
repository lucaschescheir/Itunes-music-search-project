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

let searchText = document.getElementById('searchBox').value;

// fetch("https://itunes.apple.com/search?")
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   })

function goFetch(){
fetch("https://itunes.apple.com/search?term=sublime")
  .then(function(response){
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    //console.log(data.results[0].artistName)
for(i=0; i < data.results.length; i ++){
  resultsBox.innerHTML += `<div class= "box">
  <img src="${data.results[i].artworkUrl100}" alt="Smiley face"height="90" width="90">
  <p> ${data.results[i].trackName}</p>
  <p id="artist"> ${data.results[i].artistName}</p>
  </div>`
}

  });
}
searchButton.addEventListener('click', goFetch);
goFetch();
// .results["0"].artistName
// .results["0"].trackName
// .results["0"].collectionName
