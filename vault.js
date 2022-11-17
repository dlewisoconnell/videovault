const result = document.getElementById('result')
const genres = [ "FAMILY", "HORROR", "KAIJU", "MUSIC", "SCI-FI", "MISC"];
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
  result.innerHTML = '<ul class="ul2"><div class="square"><li class="one"><a href="pages/' 
  + genres[idx] + '/01.html"><img src="images/genres/' 
  + genres[idx] + 
  '/small/01.jpg" width=70px alt="Tape 1"></a></li><li class="one"><a href="pages/' 
  + genres[idx] + '/02.html"><img src="images/genres/' 
  + genres[idx] + 
  '/small/02.jpg" width=70p alt="Tape 2"></a></li><li class="one"><a href="pages/' 
  + genres[idx] + '/03.html"><img src="images/genres/' 
  + genres[idx] + 
  '/small/03.jpg" width=70px alt="Tape 3"></a></li><li class="one"><a href="pages/' 
  + genres[idx] + '/04.html"><img src="images/genres/' 
  + genres[idx] + 
  '/small/04.jpg" width=70px alt="Tape 4"></a></li><li class="one"><a href="pages/' 
  + genres[idx] + '/05.html"><img src="images/genres/' 
  + genres[idx] + 
  '/small/05.jpg" width=70px alt="Tape 5"></a></li><li class="one"><a href="pages/' 
  + genres[idx] + '/06.html"><img src="images/genres/' 
  + genres[idx] + 
  '/small/06.jpg" width=70px alt="Tape 6"></a></li><li class="one"><a href="pages/' 
  + genres[idx] + '/07.html"><img src="images/genres/' 
  + genres[idx] + 
  '/small/07.jpg" width=70px alt="Tape 7"></a></li><li class="one"><a href="pages/' 
  + genres[idx] + '/08.html"><img src="images/genres/' 
  + genres[idx] + 
  '/small/08.jpg" width=70px alt="Tape 8"></a></li><li class="one"><a href="pages/' 
  + genres[idx] + '/09.html"><img src="images/genres/' 
  + genres[idx] + 
  '/small/09.jpg" width=70px alt="Tape 9"></a></li></ul></div>'

document.getElementById("genreName").innerHTML = '<img src="images/genres/' + genres[idx] + '.png" alt="' + genres[idx] + '" height="75" >';

}

getNewIndexAndRender();
