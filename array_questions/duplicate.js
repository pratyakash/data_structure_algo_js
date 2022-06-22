/* Frequency Counter */


function are_there_duplicate(){
    let args = [...arguments];

    if(args.length === 0) return false;

    const num_freq = {};

    args.forEach(arg => num_freq[arg] = (num_freq[arg] || 0) + 1);

    for (let key in num_freq) {
        if (num_freq[key] > 1) {
            return true;
        }
    }

    return false;
};

const dups = are_there_duplicate('1', '2', '1', '4');
