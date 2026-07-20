// 引入聊天功能
import {
  sendMessage,
  clearChat
}
  from "./chat.js";



// 引入聊天数据
import {
  messages
}
  from "./storage.js";



// 引入页面显示功能
import {
  renderHistory,
  togglePlaceholder
}
  from "./ui.js";



//  获取页面DOM元素



// 获取聊天输入框
const inputBox = document.querySelector("#message-input");


// 获取发送按钮
const sendButton = document.querySelector("#send-btn");


// 获取聊天显示区域
const chatBox = document.querySelector("#chat-box");


// 获取提示文字元素
const placeholder = document.querySelector("#chat-placeholder");


// 获取清空按钮
const clearButton = document.querySelector("#clear-btn");



// 处理回车发送
const handleEnter = (e) => {


  // 判断是否按下Enter键
  if (e.key === "Enter") {


    // 调用聊天发送函数
    sendMessage(

      inputBox,

      chatBox,

      placeholder,

      clearButton

    );


  }


};



//  程序启动



// 页面打开恢复聊天
renderHistory(
  messages,
  chatBox
);


// 根据历史记录显示提示
togglePlaceholder(
  messages,
  placeholder,
  clearButton);


// 点击发送按钮
sendButton.addEventListener(

  "click",

  () => {


    sendMessage(

      inputBox,

      chatBox,

      placeholder,

      clearButton

    );


  }

);



// 输入框监听回车
inputBox.addEventListener(

  "keydown",

  handleEnter

);



// 点击清空按钮
clearButton.addEventListener(

  "click",

  () => {


    clearChat(

      placeholder,

      clearButton

    );


  }

);