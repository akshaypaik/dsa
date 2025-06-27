// Leetcode link -> https://leetcode.com/problems/jewels-and-stones/description/

const jewels = "aA", stones = "aAAbbbb";

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {

    const jewelSet = new Set();
    let count = 0;

    for (let i = 0; i < jewels.length; i++) {
        jewelSet.add(jewels[i]);
    }

    for (let j = 0; j < stones.length; j++) {

        if (jewelSet.has(stones[j])) {
            ++count;
        }

    }

    return count;
};

console.log(numJewelsInStones(jewels, stones));
