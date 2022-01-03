const cats = ['Milo', 'Otis','Garfield']

function destructivelyAppendCat(){
    cats.push('Ralph');
}
function destructivelyPrependCat(){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    cats.pop('Garfield');
}
function destructivelyRemoveFirstCat(){
    cats.shift('Milo');
}
function appendCat(){
    const copyOfCats = [...cats, 'Broom']
    return copyOfCats;
}
function prependCat(){
    const copyOfCats =['Arnold', ...cats]
    return copyOfCats;
}
function removeLastCat(){
    const copyOfCatsUsingSlice = cats.slice();
    copyOfCatsUsingSlice.pop() 
    return copyOfCatsUsingSlice;
}
function removeFirstCat(){
    const copyOfCatsUsingSlice = cats.slice();
    copyOfCatsUsingSlice.shift();
    return copyOfCatsUsingSlice;
}