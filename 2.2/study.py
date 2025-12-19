# Skynet-Talk 2.1

import json

print('Started')

file = open('./ChatbotData_modified.csv', encoding='utf-8')
input = file.read()
file.close()
file = open('./NustyChatData_1.txt', encoding='utf-8')
input = input.strip() + '\n' + file.read().strip()
file.close()

data = input.split('\n')
words = {}
for word in data:
    w = (word + '.').split(' ')
    for n in range(len(w) - 1):
        key = w[n]
        value = w[n + 1]
        if not (key in words):
            words[key] = []
        words[key].append(value)

result = json.dumps(words, ensure_ascii=False)
file = open('./result.json', 'w', encoding='utf-8')
file.write(result)
file.close()

print("Finished")
