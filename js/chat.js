// 引入页面渲染函数
import {
  renderMessage,
  togglePlaceholder
}
  from "./ui.js";



// 引入聊天数据和保存函数
import {
  messages,
  saveHistory,
  clearHistory
}
  from "./storage.js";




// 根据用户输入生成AI回复
export const getAIResponse = (input) => {


  if (input === "你好") {


    return "你好！我是Agent Studio";


  } else if (input === "再见") {


    return "再见！";


  } else {


    return "暂时无法回答这个问题";


  }


}





// 处理一次聊天
export const sendMessage = (
  inputBox,
  chatBox,
  placeholder,
  clearButton) => {


  // 获取输入内容并去除空格
  const input = inputBox.value.trim();


  // 输入为空不发送
  if (input === "") {


    return;


  }



  // 保存用户消息
  messages.push({


    role: "user",


    content: input


  });



  // 根据最新状态更新提示
  togglePlaceholder(
    messages,

    placeholder,

    clearButton);



  // 显示用户消息
  renderMessage(
    chatBox,

    "user",

    input

  );



  // 获取AI回复
  const reply = getAIResponse(input);



  // 保存AI消息
  messages.push({


    role: "assistant",


    content: reply


  });



  // 显示AI消息
  renderMessage(
    chatBox,

    "assistant",

    reply

  );



  // 保存完整聊天记录
  saveHistory(messages);



  // 清空输入框
  inputBox.value = "";





}



// 清空聊天记录函数
export const clearChat = (
  placeholder,
  clearButton) => {


  // 清空聊天数组
  messages.length = 0;


  // 删除浏览器保存记录
  clearHistory();



  // 删除页面中的聊天消息
  const messageElements = document.querySelectorAll(
    ".user-message,.ai-message"
  );


  // 遍历删除
  messageElements.forEach((message) => {

    message.remove();

  });



  // 根据最新状态更新提示
  togglePlaceholder(
    messages,
    placeholder,
    clearButton);


}
