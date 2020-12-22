function writeCards(names, event) {
    let cards = (["Lisa", "Kaitlin", "Jan"], "suprise");
    for(let i=0; i<names.length; i++) {
        console.log('Thank you, ${names[i]}, for the wonderful ${event} gift!');
    }
    return cards;
}

function countDown(number) {
    let i=0;
    while(i<number +1) {
        console.log(i++);
    }
}