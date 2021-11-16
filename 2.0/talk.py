# Skynet-Talk 2.0

import json, random

print('Started')

def createSentence(token):
    result = []
    while (token in chatData):
        result.append(token)
        if token.endswith('.'): return ' '.join(result)[:-1]
        token = chatData[token][random.randrange(0, len(chatData[token]))]
    if len(result) == 0: return None
    return ' '.join(result)

file = open('./output.json', encoding='utf-8')
data = file.read()
file.close()

chatData = json.loads(data)

while True:
    data = input('문장 입력: ')
    if data == '-1': break
    tokens = data.split(' ')
    result = []
    for word in tokens:
        data = createSentence(word)
        if data != None: result.append(data)
    
    if len(result) == 0:
        print('생성 실패: 적당한 응답을 생성하지 못했어요')
    else:
        index = random.randrange(0, len(result))
        print('생성 성공: ' + result[index])
    
print("Stopped")
