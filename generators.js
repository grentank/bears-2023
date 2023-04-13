function* myGenFunction() {
    yield 'H';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
    return '!';
    yield 2;
    return 3;
}

const gen = myGenFunction();

console.log(gen)
console.log(gen.next())
console.log(gen)
console.log(gen.next())
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())