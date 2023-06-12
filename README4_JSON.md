## npm json server / https://www.npmjs.com/package/json-server

![image](https://github.com/Parksejin412/react_memo/assets/129017065/4f67a223-a5d8-45f4-be88-f987f204e6ae)
    
    npm i json-server

## db.json파일 만들기

![image](https://github.com/Parksejin412/react_memo/assets/129017065/e646c7a9-9b53-4dc2-8f50-fbe7bbecd5ee)

## db.json파일은 root에 만들어야 한다.
![image](https://github.com/Parksejin412/react_memo/assets/129017065/dbd6aba4-a3aa-4ceb-90f0-0840fbd11e1f)

## db.json 실행하기
![image](https://github.com/Parksejin412/react_memo/assets/129017065/90cabebb-03e2-4ec3-bd41-95f6bf12dc4c)

## 위와 같이 실행하면 port를 3000번을 사용하기 때문에 react와 중복이 된다.
## => port를 변경해야 한다.

    json-server --watch db.json --port 3004
    
## 실행이 안될경우 아래를 적용한다. 
    npx json-server --watch db.json --port 3004
    
## 서버와 통신하기 /https://www.npmjs.com/package/axios
![image](https://github.com/Parksejin412/react_memo/assets/129017065/41ecb4c8-c02c-4c82-b95a-864e2700f1b5)
    
    npm i axios
