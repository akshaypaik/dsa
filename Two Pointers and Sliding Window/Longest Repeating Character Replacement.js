// Leetcode link -> https://leetcode.com/problems/longest-repeating-character-replacement/description/

const s = "AABABBA", k = 1;

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// const characterReplacement = function (s, k) {
//     let maxRange = 0;
//     let lookupMap = new Map();
//     let j = 0;
//     let isValidWindow = true;

//     for (let i = 0; i < s.length; i++) {

//         console.log("inside loop");
//         let maxCount = 0;
//         isValidWindow = checkValidWindow(lookupMap, k, maxCount);

//         while (isValidWindow) {
//             console.log("inside while loop")
//             if (j > s.length - 1) {
//                 break;
//             }
//             lookupMap.set(s[j], lookupMap.has(s[j]) ? lookupMap.get(s[j]) + 1 : 1);
//             ++j;
//             const response = checkValidWindow(lookupMap, k, maxCount);
//             isValidWindow = response.isValidWindow;
//             maxCount = response.maxCount;
//         }
//         console.log("maxCount out: ", maxCount);
//         maxRange = Math.max(maxRange, maxCount);
//         console.log("maxRange: ", maxRange);
//         lookupMap.set(s[i], lookupMap.has(s[i]) ? lookupMap.get(s[i]) - 1 : 0);

//     }
//     return maxRange;
// };

// const checkValidWindow = (map, k, maxCount) => {
//     console.log("lookupMap: ", map);
//     const arr = [...map.values()];
//     console.log("arr: ", arr);
//     let maxElm = 0;
//     let totalCount = 0;

//     for (let i = 0; i < arr.length; i++) {

//         totalCount = totalCount + arr[i];
//         maxElm = Math.max(maxElm, arr[i]);

//     }

//     const isValidWindow = (totalCount - maxElm) <= k;
//     if (isValidWindow) {
//         ++maxCount;
//         console.log("maxCount: ", maxCount);
//     }
//     console.log("isValidWindow: ", isValidWindow);
//     return { isValidWindow, maxCount };
// }

const characterReplacement = function (s, k) {
    let i = 0;
    let maxCount = 0;
    let maxRange = 0;
    let lookupMap = new Map();f

    for (let j = 0; j < s.length; j++) {
        lookupMap.set(s[j], (lookupMap.get(s[j]) || 0) + 1);
        maxCount = Math.max(maxCount, lookupMap.get(s[j]));

        while (j - i + 1 - maxCount > k) {
            lookupMap.set(s[i], lookupMap.get(s[i]) - 1);
            i++;
        }

        maxRange = Math.max(maxRange, j - i + 1);
    }

    return maxRange;
};
