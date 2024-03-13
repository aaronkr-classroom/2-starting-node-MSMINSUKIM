// messages.js
"use strict";

// @TODO: 3개의 문자열 messages 배열 만들어 주세요.
let messages = ["졸려","배고파","힘들어"];

// @TODO: messages 배열에서 각 메시지를 인쇄하는 함수를 만들어 주세요.
let printMsgs = () => {
    for(let n = 0; n < messages.length ; n++){
        console.log(messages[n]);
    }
};

printMsgs();









// 숙제 체크 테스트에 필요함
module.exports = printMsgs;
