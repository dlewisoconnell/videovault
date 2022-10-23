const resultBox = document.getElementById('result')
const genres = ["HORROR", "KAIJU", "MUSIC", "SCI-FI", "WRESTLING", "FAMILY"];
const length = genres.length;

const getNextIdx = (idx = 0, length, direction) => {
   switch (direction) {
     case 'next': return (idx + 1) % length;
     case 'prev': return (idx == 0) && length - 1 || idx - 1;
     default:     return idx;
   }
}

let idx; 
const getNewIndexAndRender = (direction) => {
     idx = getNextIdx(idx, length, direction);
     result.innerHTML = '<div class="square"><div class="one"><a href="/movies/' 
     + genres[idx] + '/01.html"><img src="/movies/' 
     + genres[idx] + 
     '/small/01.png" width=70px></a></div><div class="one"><img src="/movies/' 
     + genres[idx] + 
     '/small/01.png" width=70px></div><div class="one"><img src="/movies/' 
     + genres[idx] + 
     '/small/01.png" width=70px></div><div class="one"><img src="/movies/' 
     + genres[idx] + 
     '/small/01.png" width=70px></div><div class="one"><img src="/movies/' 
     + genres[idx] + 
     '/small/01.png" width=70px></div><div class="one"><img src="/movies/' 
     + genres[idx] + 
     '/small/01.png" width=70px></div><div class="one"><img src="/movies/' 
     + genres[idx] + 
     '/small/01.png" width=70px></div><div class="one"><img src="/movies/' 
     + genres[idx] + 
     '/small/01.png" width=70px></div><div class="one"><img src="/movies/' 
     + genres[idx] + 
     '/small/01.png" width=70px></div></div>'

     document.getElementById("genreName").innerHTML = '<h1>' + genres[idx] + '</h1>';



}

getNewIndexAndRender();

