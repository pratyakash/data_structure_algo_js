// Time Complexity of O(n)

const is_string_anagrams = (str_one, str_two) => {
    if (str_one.length !== str_two.length) {
        return false;
    }
    else {
        const first_str_lookup = {};
        const second_str_lookup = {};

        for (let index = 0; index < str_one.length; index++) {
            const letter = str_one[index];

            first_str_lookup[letter] = (first_str_lookup[letter] || 0) + 1; 
        }

        for (let index = 0; index < str_two.length; index++) {
            const letter = str_two[index];

            second_str_lookup[letter] = (second_str_lookup[letter] || 0) + 1; 
        }

        for (let key in first_str_lookup) {
            if (!second_str_lookup[key] || (second_str_lookup[key] && (second_str_lookup[key] !== first_str_lookup[key]))) {
                return false;
            } 
        }

        return true;
    }
};


const is_anagram = is_string_anagrams('addc', 'dwca');

console.log('[+] Is Anagram ', is_anagram);

/**
 * Better Solution with same complexity
 * 
    function validAnagram(first, second) {
        if (first.length !== second.length) {
            return false;
        }

        const lookup = {};

        for (let i = 0; i < first.length; i++) {
            let letter = first[i];
            // if letter exists, increment, otherwise set to 1
            lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        }
        console.log(lookup)

        for (let i = 0; i < second.length; i++) {
            let letter = second[i];
            // can't find letter or letter is zero then it's not an anagram
            if (!lookup[letter]) {
            return false;
            } else {
            lookup[letter] -= 1;
            }
        }
        return true;
    }
 */