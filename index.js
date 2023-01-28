const cats = ["Milo", "Otis", "Garfield"];
Array(cats);

function destructivelyAppendCat(Ralph) {
    return cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
    return cats.unshift(Bob);
}

function destructivelyRemoveLastCat(Garfield) {
    return cats.pop();
}

function destructivelyRemoveFirstCat(Milo) {
    return cats.shift();
}

function appendCat(Broom) {
    return cats.concat(Broom);
}

function prependCat(Arnold) {
    const copyofcats =[...cats]
    copyofcats.unshift(Arnold);
    return(copyofcats);
}
function removeLastCat(Garfield) {
    const copyofcats = [...cats]
    copyofcats.pop(Garfield);
    return (copyofcats);
}
function removeFirstCat(Milo) {
    const copyofcats = [...cats]
    copyofcats.shift(Milo);
    return (copyofcats);
}