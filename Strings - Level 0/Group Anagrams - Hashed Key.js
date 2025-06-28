
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Optimised code with O(n)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    let lookupMap = new Map();

    for (let i = 0; i < strs.length; i++) {

        let freqArr = new Array(26).fill(0);
        let str = strs[i];   // "eat"

        for (let j = 0; j < str.length; j++) {
            let index = str[j].charCodeAt() - 'a'.charCodeAt();
            ++freqArr[index];
        }

        let key = "";
        for (let k = 0; k < 26; k++) {
            key = key + "#" + freqArr[k];
        }

        if (lookupMap.has(key)) {
            lookupMap.set(key, [...lookupMap.get(key), str]);
        } else {
            lookupMap.set(key, [str]);
        }

    }

    console.log(lookupMap);

    return [...lookupMap.values()];

}

console.log(groupAnagrams(strs));
