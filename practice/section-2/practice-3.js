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
            'name': prop,
            'summary': count[prop]
        })
    }
    return ans;
}
console.log(countSameElements([
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
    't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c:8',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
]));