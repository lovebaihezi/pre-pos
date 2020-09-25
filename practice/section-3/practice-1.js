'use strict';

function createUpdatedCollection(collectionA, objectB) {
    let B = {},
        A = {};
    objectB.value.forEach(item => { B[item] == undefined ? B[item] = 1 : B[item]++; });
    collectionA.forEach(item => { item.count -= (B[item.key] == undefined ? 0 : B[item.key]); });
    return collectionA;
}
console.log(createUpdatedCollection([{
        key: 'a',
        count: 2
    },
    {
        key: 'e',
        count: 2
    },
    {
        key: 'h',
        count: 2
    },
    {
        key: 't',
        count: 2
    },
    {
        key: 'f',
        count: 2
    },
    {
        key: 'c',
        count: 2
    },
    {
        key: 'g',
        count: 2
    },
    {
        key: 'b',
        count: 2
    },
    {
        key: 'd',
        count: 2
    }
], {
    value: ['a', 'd', 'e', 'f']
}));