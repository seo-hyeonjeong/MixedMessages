const quotes = {
    //quotes arranged into different moods
    _quotes: {
        anxious: ["There is no substitute for hard work",
            "A quitter never wins - and a winner never quits",
            "Knowledge is power"],
        uncertain: ["True security lies in the unrestrained embrace of insecurity",
            "Happiness can be found even in the darkest of times",
            "Trust that there is a next step"],
        lazy: ["Do something today that your future self will thank you for",
            "Do it now", "Progress isn't made by early risers"]
    },

    //generates random number with max num-1
    generateRandNum(num){
        return Math.floor(Math.random() * (num));
    },

    //generate a random mood from _quotes and returns it in string format
    generateRandType() {
        var types = Object.keys(this._quotes);
        var randType = types[this.generateRandNum(types.length)];
        return randType;
    },

    //randomly selects a quote from randtype
    generateQuote() {
        var type = this.generateRandType();
        var resultQuote = this._quotes[type][this.generateRandNum(this._quotes[type].length)];
        return `When you are ${type}, remember, '${resultQuote}'`;
    }
}

//print result
console.log(quotes.generateQuote());
