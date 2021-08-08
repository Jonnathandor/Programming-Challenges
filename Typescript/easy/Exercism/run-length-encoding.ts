// # Run Length Encoding

// Implement run-length encoding and decoding.

// Run-length encoding (RLE) is a simple form of data compression, where runs
// (consecutive data elements) are replaced by just one data value and count.

// For example we can represent the original 53 characters with only 13.

// ```text
// "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
// ```

// RLE allows the original data to be perfectly reconstructed from
// the compressed data, which makes it a lossless data compression.

// ```text
// "AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
// ```

// For simplicity, you can assume that the unencoded string will only contain
// the letters A through Z (either lower or upper case) and whitespace. This way
// data to be encoded will never contain any numbers and numbers inside data to
// be decoded always represent the count for the following character.

export default class RunLengthEncoding {

    static encode(characters: string):string {
        if(characters === '') { return ''; }

        let encoded = '';
        let counter = 1;
        for(let i = 0; i < characters.length; i++) {
            if(characters[i] === characters[i+1]){
            counter += 1;
            } else {
            if(counter > 1){
                encoded += counter;
                counter = 1;
            }
            encoded += characters[i];
            }
        }
        return encoded;
    }
    
    static decode(encoded: string):string {
        if(encoded === '') { return ''; }
        if(!encoded.match(/\d+/g)) { return encoded; }
    
        let decoded = '';
        let repeat = '';
        for(let i = 0; i < encoded.length; i++) {
            if(encoded[i].match(/\d/)){
            repeat += encoded[i];
            } else {
                if(repeat !== ''){
                    decoded += encoded[i].repeat(parseInt(repeat));
                    repeat = '';
                } else {
                    decoded += encoded[i];
                }
            }
        }
        return decoded;
    }
}