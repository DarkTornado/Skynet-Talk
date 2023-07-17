# Skynet-Talk 2.1

import json

print('Started')

file = open('./ChatbotData_CommaRemoved.csv', encoding='utf-8')
input = file.read()
file.close()

data = input.strip().split('\n')
result = []
for n in range(1, len(data)):
    datum = data[n]
    datum = datum.split(',')
    result.append(datum[0])
    result.append(datum[1])

data = result
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
