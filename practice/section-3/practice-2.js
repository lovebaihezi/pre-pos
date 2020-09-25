'use strict';

function createUpdatedCollection(collectionA, objectB) {
    let B = {},
        A = {};
    objectB.value.forEach(item => { B[item] == undefined ? B[item] = 1 : B[item]++; });
    collectionA.forEach(item => {
        item.count += (B[item.key] == undefined ? 0 : (item.count >= 3 ? -1 * Number.parseInt(item.count / 3) : 0));
    });
    console.log(Number.parseInt(4 / 3));
    return collectionA;
}
console.log(createUpdatedCollection([
    { key: 'a', count: 3 },
    { key: 'e', count: 7 },
    { key: 'h', count: 11 },
    { key: 't', count: 20 },
    { key: 'f', count: 9 },
    { key: 'c', count: 8 },
    { key: 'g', count: 7 },
    { key: 'b', count: 6 },
    { key: 'd', count: 5 }
], { value: ['a', 'd', 'e', 'f'] }));