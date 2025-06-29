// Leetcode link -> https://leetcode.com/problems/valid-anagram/description/ 

const s = "anagram", t = "nagaram"

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    let freqArrS = new Array(26).fill(0);
    let freqArrT = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt() - 'a'.charCodeAt();
        ++freqArrS[index];
    }

    for (let j = 0; j < t.length; j++) {
        let index = t[j].charCodeAt() - 'a'.charCodeAt();
        ++freqArrT[index];
    }

    console.log("freqArrS: ", freqArrS)
    console.log("freqArrT: ", freqArrT)

    let sKey = "";
    for (let k = 0; k < freqArrS.length; k++) {
        sKey = sKey + "#" + freqArrS[k];
    }

    console.log("sKey: ", sKey)

    let tKey = "";
    for (let l = 0; l < freqArrT.length; l++) {
        tKey = tKey + "#" + freqArrT[l];
    }

    console.log("tKey: ", tKey)

    return sKey === tKey;

};

console.log(isAnagram(s, t));
