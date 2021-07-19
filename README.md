# Skynet-Talk

© 2021 Dark Tornado, All rights reserved.

* 대화 기능 제대로 다시 구현한다면서 삽질하는거 올리는 곳

## 버전 1.0

1. 수신된 채팅 내용을 중 명사만 추출
1. 해당 명사들이 가장 많이 포함된 문장들 선정
1. 그 문장들 중 편집 거리가 가장 짧은 문장들 선정
1. 선정된 문장들 중 하나 전송

* 사용된 채팅 데이터 : [Chatbot_data_for_Korean v1.0](https://github.com/songys/Chatbot_data) (MIT License)
* 형태소 분석 Rest API : [open-korean-text](https://github.com/open-korean-text/open-korean-text) (Apache License 2.0)
* 편집 거리 계산 모듈 : [levenshtein.js](https://gist.github.com/andrei-m/982927) (MIT License)
