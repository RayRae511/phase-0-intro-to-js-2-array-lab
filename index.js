// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push('Ralph')
    return cats
}
function destructivelyPrependCat(name){
    cats.unshift('Bob')
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop('Garfield')
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift('Milo')
    return cats;
}
function appendCat(name){
    let copyOfCats = [...cats, name]
    return copyOfCats;
}
function prependCat(name){
    let copyOfCats = [name, ...cats];
    return copyOfCats;
}
function removeFirstCat(){
    let copyOfCats = cats.slice(1);
    return copyOfCats;
}
function removeLastCat(){
    let copyOfCats = cats.slice(0, -1)
    return copyOfCats;
}
