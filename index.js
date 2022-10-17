function genre(name){
    this.name = name;
}

var collection = [
    new genre('HORROR'),
    new genre('KAIJU'),
    new genre('SCI-FI'),
    new genre('WRESTLING'),

];

function getRandom(num) {
    var randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
};

document.getElementById("shuffle").onclick
= function(){

    var index = getRandom(3);
    var currentGenre = collection[index]

document.getElementById("tapes").innerHTML = '<img src="/movies/images/' + currentGenre.name + '/01.png">'};

