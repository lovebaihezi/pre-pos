'use strict';

function countSameElements(collection) {
    let count = {};
    let ans = [];
    collection.forEach(item => {
        if (item.length > 1) {
            let char = '';
            let data = '';
            for (let i = 0; i < item.length; i++) {
                if (/[a-zA-Z]/.test(item[i])) {
                    char += item[i];
                } else if (/\d/.test(item[i])) {
                    data += item[i];
                }
            }
            count[char] == undefined ? count[char] = Number.parseInt(data) : count[char] += Number.parseInt(data);
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
console.log(countSameElements([
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
]));