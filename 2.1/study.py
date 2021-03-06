# Skynet-Talk 2.1

import json

print('Started')

file = open('./raw_data.txt', encoding='utf-8')
input = file.read()
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
file = open('./chat_data.json', 'w', encoding='utf-8')
file.write(result)
file.close()

print("Finished")
