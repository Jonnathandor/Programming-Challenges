// # Word Count

// Given a phrase, count the occurrences of each word in that phrase.

// For example for the input `"olly olly in come free"`

// ```text
// olly: 2
// in: 1
// come: 1
// free: 1
// ```

export default class Words {
    public count(phrase: string): Map<string, number> {
        phrase = phrase.trim().replace(/\n|\t+|  +/g, ' ');
        const words = phrase.split(' ');
        const wordFrequency = new Map<string, number>();
        
        for(let word of words){
            word = word.toLocaleLowerCase();
            if(wordFrequency.has(word)){
                wordFrequency.set(word, wordFrequency.get(word)! + 1);
            } else {
                wordFrequency.set(word, 1);
            }
        }

        return wordFrequency;
    }
}