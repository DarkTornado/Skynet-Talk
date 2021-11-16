# Skynet Talk

© 2021 Dark Tornado, All rights reserved.

* 대화 기능 제대로 다시 구현한다면서 삽질하는거 올리는 곳.
* 라이선스는 [AGPL 3.0](LICENSE)지만, 상업적 이용을 금지하는 저작권자의 방침이 우선적으로 적용됩니다.
* [Project S](https://github.com/DarkTornado/ProjectS) 소속입니다.

## 버전 1.0

* 사용 언어 및 플랫폼 : 자바스크립트 (비공식 카카오톡 봇)

1. 수신된 채팅 내용을 중 명사만 추출
1. 해당 명사들이 가장 많이 포함된 문장들 선정
1. 그 문장들 중 편집 거리가 가장 짧은 문장들 선정
1. 선정된 문장들 중 하나를 선택하여, 선택된 문장에 대한 답변 전송

* 사용된 채팅 데이터 : [Chatbot_data_for_Korean v1.0](https://github.com/songys/Chatbot_data) (MIT License)
* 형태소 분석 Rest API : [open-korean-text](https://github.com/open-korean-text/open-korean-text) (Apache License 2.0)
* 편집 거리 계산 모듈 : [levenshtein.js](https://gist.github.com/andrei-m/982927) (MIT License)

## 버전 2.0

* 마르코프 체인 사용
* 사용 언어 : 자바스크립트 (비공식 카카오톡 봇), 파이썬

### 문장 생성에 필요한 데이터 생성
* `study.py` 파일
1. 입력된 문장들을 어절 단위로 나눔
1. `key(string) - value(list)` 구조로 이 어절 뒤에는 이러한 어절들이 오더라 저장 
1. 완성된 결과물을 json 문자열로 바꿔서 저장

### 문장 생성
* `talk.js` 파일 또는 `talk.py` 파일. 일단 두 가지 모두 만듬
1. 수신된 채팅 내용을 어절 단위로 나눔
1. 각 어절들을 시작으로 문장 생성 (마르코프 체인 사용)
1. 생성된 문장들 중 아무거나 하나 전송

* 사용된 채팅 데이터 : [Chatbot_data_for_Korean v1.0](https://github.com/songys/Chatbot_data) (MIT License)
* 채팅 데이터 열라많이 늘리면 봐줄 만한 결과 나옴

## 버전 2.1

* 웹 환경에서 작동하는 php로 구현된 버전
