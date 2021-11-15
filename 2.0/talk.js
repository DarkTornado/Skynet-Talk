// Skynet-Talk 2.0

onInit = () => {
    Log.info('Loading started');
    var data = FileStream.read('/sdcard/000/dev/output.json');
    chatData = JSON.parse(data);
    Log.info('Loading finished');
};

response = (room, msg, sender, isGroupChat, replier) => {
    if (!msg.startsWith('/s ')) return;
    msg = msg.replace('/s ', '');

    var tokens = msg.split(' ');

    var result = [];
    for (var n = 0; n < tokens.length; n++) {
        var data = createSentence(tokens[n]);
        if (data != null) result.push(data);
    }

    if (result.length == 0) {
        replier.reply('적당한 응답을 생성하지 못했어요');
    } else {
        var index = Math.random() * result.length | 0;
        replier.reply(result[index]);
    }
};

createSentence = (token) => {
    var result = [];
    while (chatData[token]) {
        result.push(token);
        if (token.endsWith('.')) return result.join(' ').slice(0, -1);
        token = chatData[token][Math.random() * chatData[token].length | 0];
    }
    if (result.length == 0) return null;
    return result.join(' ');
}

new java.lang.Thread({
    run: function() {
        onInit();
    }
}).start();