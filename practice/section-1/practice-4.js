'use strict';


function collectSameElements(collectionA, collectionB) {
    let answer = {},
        ans = [];
    collectionA = collectionA.map(item => { return item.key });
    collectionB = collectionB.value;
    collectionB.forEach(item => { answer[collectionA.indexOf(item)] = ''; });
    for (let i in answer) { i != "undefined" ? ans.push(collectionA[i]) : 0; }
    return ans;
}

console.log(collectSameElements([
    { key: 'a' }, { key: 'e' }, { key: 'h' }, { key: 't' }, { key: 'f' }, { key: 'c' }, { key: 'g' }, { key: 'b' }, { key: 'd' }
], { value: ['a', 'd', 'e', 'f'] }));