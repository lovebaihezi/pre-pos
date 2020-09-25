'use strict';

function countSameElements(collection) {
    let count = {};
    let ans = [];
    collection.forEach(item => {
        if (item.length > 1) {
            let name = '';
            let data = '';
            for (let i = 0; i < item.length; i++) {
                if (/[a-z]|[A-Z]/.test(item[i])) {
                    name += item[i];
                } else if (/\d/.test(item[i])) {
                    data += item[i];
                }
            }
            count[name] == undefined ? count[name] = Number.parseInt(data) : count[name] += Number.parseInt(data);
        } else {
            count[item] == undefined ? count[item] = 1 : count[item]++;
        }

    });
    for (let prop in count) {
        ans.push({
            'key': prop,
            'count': count[prop]
        })
    }
    return ans;
}

function createUpdatedCollection(collectionA, objectB) {
    let B = {};
    collectionA = countSameElements(collectionA);
    objectB.value.forEach(item => { B[item] == undefined ? B[item] = 1 : B[item]++; });
    collectionA.forEach(item => {
        item.count += (B[item.key] == undefined ? 0 : (item.count >= 3 ? -1 * Number.parseInt(item.count / 3) : 0));
    });
    return collectionA;
}
console.log(createUpdatedCollection([
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd', 'd', 'd', 'd', 'd'
], { value: ['a', 'd', 'e', 'f'] }));