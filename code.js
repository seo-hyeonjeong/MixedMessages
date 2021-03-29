const quotes = {
    _quotes: {
        beforeExam: ["There is no substitute for hard work",
            "A quitter never wins - and a winner never quits",
            "Knowledge is power"],
        uncertainty: ["True security lies in the unrestrained embrace of insecurity",
            "Happiness can be found even in the darkest of times",
            "Trust that there is a next step"],
        lazy: ["Do something today that your future self will thank you for",
            "Do it now", "Progress isn't made by early risers"]
    },

    const generateRandNum = num => {
        return Math.floor(Math.Random() * (num + 1));
    },

    const countQuoteTypes = () => {
        var length = 0;
        for (var type in _quotes) {
            if (_quotes.hasOwnProperty(type)) {
                ++length;
            }
        }
        return length;
    },

    const generateQuote = () => {
        var numOfTypes = countQuoteTypes();
        //randomly select a type of quote (beforeExam, uncertainty, lazy). I thought doing _quotes.generateRandNum(numOfType) would work here but it doesnt because it is an object not an array. 
        
        
    }


}

