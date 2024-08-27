# 배포 주소

[pokemon-dex-kohl.vercel.app/](https://pokemon-dex-kohl.vercel.app/)

# 작업 기간

24.08.22(목요일)~24.08.27(화요일)

## 프로젝트 구조

```md
Pokemon_Dex
┣ .git
┣ node_modules
┣ public
┃ ┗ vite.svg
┣ src
┃ ┣ assets
┃ ┃ ┗ react.svg
┃ ┣ components
┃ ┃ ┣ Dashboard.jsx
┃ ┃ ┣ PokemonCard.jsx
┃ ┃ ┗ PokemonList.jsx
┃ ┣ context
┃ ┃ ┗ pokemonContext.jsx
┃ ┣ pages
┃ ┃ ┣ Dex.jsx
┃ ┃ ┣ Home.jsx
┃ ┃ ┗ PokemonDetail.jsx
┃ ┣ shared
┃ ┃ ┗ Router.jsx
┃ ┣ App.css
┃ ┣ App.jsx
┃ ┣ index.css
┃ ┣ main.jsx
┃ ┗ mock.js
┣ .gitattributes
┣ .gitignore
┣ eslint.config.js
┣ index.html
┣ package.json
┣ README.md
┣ vite.config.js
┗ yarn.lock
```

## 주요 기능

![alt text](<src\assets\1. Pokemon Dex 대문.png>)

1. Welcome to the Pokemon Dex 대문 페이지 - 프로젝트 첫 화면을 볼 수 있다.

![alt text](<src\assets\2. Pokemon Dex 메인 페이지.png>)

2. 포켓몬 Dex 페이지 - 전체 포켓몬들을 확인할 수 있다.

![alt text](<src\assets\3. 포켓몬 선택 기능.png>)

3. 선택한 포켓몬들 리스트 - 추가 버튼을 클릭해서 6마리까지 선택할 수 있다.

![alt text](<src\assets\4. 포켓몬 상세 정보.png>)

4. 포켓몬 상세 정보 - 포켓몬 한 마리를 클릭하면 해당 포켓몬의 상세 정보를 확인 할 수 있다. 뒤로가기 버튼을 클릭하면 포켓몬 리스트 페이지로 이동한다.

![alt text](<src\assets\5. 포켓몬 중복 선택 금지 기능.png>)

5. 선택했던 포켓몬의 추가 버튼을 다시 클릭하면, "중복된 포켓몬이 있습니다." alert창이 뜬다.

![alt text](<src\assets\6. 포켓몬 최대 선택 마리수 제한 기능.png>)

6. 최대로 선택할 수 있는 포켓몬들은 6마리다. 포켓몬을 7번째로 추가를 하면 "최대 포켓몬은 6마리 입니다." alert 창이 뜬다.

## 트러블 슈팅

    a. props drilling으로 기능을 구현하려니 사용한 컴포넌트들의 개수가 적음에도 불구하고 컴포넌트들이 어떻게 grouping이 되어 있는지와 어느 컴포넌트가 부모 컴포넌트인지 자식 컴포넌트인지도 너무 헷갈렸다. 그래서 컴포넌트들의 리턴 값을 보면서 구조를 파악하고 여기에는 이 값을 넘기고 저기에는 이 값을 넘기는 것을 이리저리 계산하다가 시간을 많이 소비 했다.

## 회고

    a. “기능을 어떻게 구현해야 할까?”를 생각만 하다가 처음 프로젝트를 시작하는 기간이 많이 늦어졌다. 그래서 제출하기 전날까지 고생을 했는데, 결론은 “생각만 할 것이 아니라 프로젝트부터 먼저 만들고 페이지부터 구현을 한 상태에서 기능 구현에 대한 생각을 하자!”라고 마음을 먹었다. “시작이 반이라고 하잖아!”
