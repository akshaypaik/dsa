// leetcode link -> https://leetcode.com/problems/length-of-last-word/description/

const s = "   fly me   to   the moon  ";

const lengthOfLastWord = function (s) {

    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {

        if(s[i] != " "){
            length++;
        }

        if(length !=0 && s[i] == " "){
            return length;
        }

    }

    return length;

};

console.log(lengthOfLastWord(s));
