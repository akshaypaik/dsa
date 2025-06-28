// Leetcode link -> https://leetcode.com/problems/group-anagrams/description/

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//using Map
const groupAnagrams = function (strs) {

    const lookupMap = new Map();

    for (let i = 0; i < strs.length; i++) {

        let arr = strs[i].split('').sort().join('');


        if (lookupMap.has(arr)) {
            lookupMap.set(arr, [...lookupMap.get(arr), strs[i]]);
            continue;
        }

        lookupMap.set(arr, [strs[i]]);

    }

    console.log("lookupMap: ", lookupMap);

    return [...lookupMap.values()];

};


//using plain object
// const groupAnagrams = function (strs) {

//     const lookupMap = {};

//     for (let i = 0; i < strs.length; i++) {

//         let arr = strs[i].split('').sort().join('');


//         if (lookupMap[arr]) {
//             lookupMap[arr].push(strs[i]);
//         } else {
//             lookupMap[arr] = [strs[i]];
//         }


//     }

//     console.log("lookupMap: ", lookupMap);

//     return [...Object.values(lookupMap)];

// };

console.log(groupAnagrams(strs));
