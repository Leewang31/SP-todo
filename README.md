# ✨SP-todo

## 웹 소개
간단한 todo앱입니다.
crud기능만 갖고 있습니다
옛날 신문 느낌이 나도록 만들고 있는데, 옛날 신문과 TODO의 관계는 모르겠습니다 감사합니다

## json-server 라이브러리 사용
이번에 blog DB는 json-server 라이브러리 사용했습니다.

전역에 다음을 설치합니다.
```js
npm i -g json-server
```

data라는 폴더에 json파일을 만들어 서버에 옮기고 싶은 파일을 생성합니다
이후 다음 코드를 작성합니다
```js
cd data
json-server --watch data.json --port 3001
```

localhost:3001에 json이 적용된 서버가 열립니다.