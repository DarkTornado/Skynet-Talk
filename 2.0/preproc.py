# Skynet-Talk 2.0

print('Preprocessing Started')

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
        
file = open('./input.txt', 'w', encoding='utf-8')
file.write('\n'.join(result))
file.close()

print('Preprocessing Finished')
