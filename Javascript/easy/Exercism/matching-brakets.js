// ## Instructions

// Given a string containing brackets `[]`, braces `{}`, parentheses `()`,
// or any combination thereof, verify that any and all pairs are matched
// and nested correctly.

// We could potentially use the stack data structure. 

// if opening bracket we can push to the stack
// if closing bracket we want to check the stack 
// to see if there is an opening pair there. 

const BRACKET_MAP = {
    '{': '}',
    '[': ']',
    '(': ')'
};

export const isPaired = (str) => {
    if(str.length === 0) return true;
    let stack = [];

    for (let i = 0; i < str.length; i++) {

        if(str[i] in BRACKET_MAP) {
            stack.push(str[i]);
        } else if (Object.values(BRACKET_MAP).includes(str[i])){
            if(BRACKET_MAP[stack.pop()] !== str[i]) return false;
        }
    }

    return stack.length === 0;
};