// Skynet-Talk 2.1

const fs = require('fs');
const chatData = JSON.parse(fs.readFileSync('./result.json').toString());

module.exports = function(input) {
    try{
        const tokens = input.split(' ');
        const result = [];
        for (let n = 0; n < tokens.length; n++) {
            const data = createSentence(tokens[n]);
            if (data != null) result.push(data);
        }
        return result;
    } catch (e) {
        return [];
    }
};

function createSentence(token) {
    const result = [token];
    while (chatData[token]) {
        var data = chatData[token];
        token = data[parseInt(Math.random() * data.length)];
        result.push(token);
        // console.log(result);
        if (token.endsWith('.')) return result.join(' ').slice(0, -1);
    }
    if (result.length < 2) return null;
    return result.join(' ');
}
