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
