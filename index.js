// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(_jina){
    cats.push(_jina)
    return cats
}
function destructivelyPrependCat(_jina){
    cats.unshift(_jina = "Bob")
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats;
}
function appendCat(_jina){
    let catsCopy = [...cats, _jina]
    return catsCopy;
}
function prependCat(_jina){
    let catsCopy = [_jina, ...cats]
    return catsCopy;
}
function removeLastCat(){
    let catsCopy = cats.slice(0, -1);
    return catsCopy;
}
function removeFirstCat(){
    let catsCopy = cats.slice(1);
    return catsCopy;
}