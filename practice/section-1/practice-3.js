'use strict';


function collectSameElements(collectionA, collectionB) {
    let answer = {},
        ans = [];
    collectionB = collectionB.value;
    collectionB.forEach(item => { answer[collectionA.indexOf(item)] = ''; });
    for (let i in answer) { i != "undefined" ? ans.push(collectionA[i]) : 0; }
    return ans;
}

console.log(collectSameElements(['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'], { value: ['a', 'd', 'e', 'f'] }));