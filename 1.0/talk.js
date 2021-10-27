var ED = require('levenshtein');
var chatData = [];

/* Load chat data from .csv file */
onInit = () => {
    try {
        Log.info('Loading started');
        var data = FileStream.read('/sdcard/000/dev/ChatbotData.csv').split('\n');
        for (var n = 1; n < data.length; n++) {
            var datum = data[n].split(',');
            chatData[datum[0]] = datum[1];
        }
        Log.info('Loading finished');
    } catch (e) {
        print(e);
    }
};

response = (room, msg, sender, isGroupChat, replier) => {
    if (msg.startsWith('/s ')) {
        msg = msg.replace('/s ', '');
        chatHook(msg, replier);
    } else if (msg.startsWith('/ss ')) {
        msg = msg.replace('/ss ', '');
        chatHook(msg, replier, true);
    }
};

chatHook = (msg, replier, tf) => {
    /* Tokenize input */
    var url = 'https://open-korean-text-api.herokuapp.com/tokenize?text=' + msg;
    var data = org.jsoup.Jsoup.connect(url)
        .ignoreContentType(true).ignoreHttpErrors(true).get().text();
    data = JSON.parse(data);
    var tokens = [];
    for (var n = 0; n < data.tokens.length; n++) {
        if (data.tokens[n].includes('(Noun')) tokens.push(data.tokens[n].split('(Noun')[0]);
    }

    /* Find answer */
    var result = [];
    var max = 1;
    for (var key in chatData) {
        var cnt = wordCheck(key, tokens);
        if (cnt > max) {
            max = cnt;
            result = [];
        }
        if (cnt == max) {
            result.push(key);
        }
    }

    if (result.length == 0) {
        replier.reply('적당한 채팅을 찾지 못했어요');
        if (tf) replier.reply('input: ' + msg + '\ntokens: ' + tokens.join());
    } else {
        var min = ED.getEditDistance(msg, result[0]);
        var index = 0;
        for (var n = 1; n < result.length; n++) {
            var tmp = ED.getEditDistance(msg, result[n]);
            if (tmp < min) {
                min = tmp;
                index = n;
            }
        }
        var res = result[index];
        replier.reply(chatData[res]);
        if (tf) replier.reply('input: ' + msg + '\ntokens: ' + tokens.join() + '\nQ: ' + res + '\nA: ' + chatData[res] + '\nED: ' + min);
    }
};

wordCheck = (chat, tokens) => {
    var cnt = 0;
    for (var n = 0; n < tokens.length; n++) {
        if (chat.includes(tokens[n])) cnt++;
    }
    return cnt;
}

new java.lang.Thread({
    run: function() {
        onInit();
    }
}).start();
