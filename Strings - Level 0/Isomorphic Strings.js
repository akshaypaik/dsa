// Leetcode link -> https://leetcode.com/problems/isomorphic-strings/description/

const s = "egg", t = "add";
// const s = "foo", t = "bar";

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {

    let x = 0;
    let lookupMapStoT = new Map();
    let lookupMapTtoS = new Map();

    for (let i = 0; i < s.length; i++) {

        if (lookupMapStoT.has(s[i])) {
            let char = lookupMapStoT.get(s[i]);
            if (t[x] != char) {
                return false;
            } else {
                ++x;
            }
        } else {

            // Instead of another loop we can have another map and check there
            // for (const [key, value] of lookupMap.entries()) {
            //     if (value === t[x] && key != s[i]) {
            //         return false;
            //     }
            // }

            if(lookupMapTtoS.has(t[x])){
                let char = lookupMapTtoS.get(t[x]);
                if(char != s[i]){
                    return false;
                }
            }

            lookupMapStoT.set(s[i], t[x]);
            lookupMapTtoS.set(t[x], s[i]);
            ++x;
        }


    }

    return true;

}


console.log(isIsomorphic(s, t));
