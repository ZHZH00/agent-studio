// ==============================
// 1. 获取页面DOM元素
// ==============================


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





// ==============================
// 2. 初始化数据
// ==============================


// 初始化聊天记录
// 从浏览器读取历史消息，没有数据则创建空数组
const messages = JSON.parse(

  localStorage.getItem("messages")

) || [];






// ==============================
// 3. 定义功能函数
// ==============================



// 根据聊天记录状态控制空状态提示显示
const togglePlaceholder = () => {


  if (messages.length === 0) {


    // 没有聊天记录，显示提示
    placeholder.style.display = "flex";

    // 隐藏清空按钮
    clearButton.style.display = "none";

  } else {


    // 存在聊天记录，隐藏提示
    placeholder.style.display = "none";

    // 显示清空按钮
    clearButton.style.display = "block";


  }


}





// 将消息渲染到聊天区域
const renderMessage = (role, content) => {


  // 创建消息元素
  const messageElement = document.createElement("div");


  // 设置消息内容
  messageElement.textContent = content;


  // 根据角色设置不同样式
  if (role === "user") {


    // 用户消息样式
    messageElement.className = "user-message";


  } else {


    // AI消息样式
    messageElement.className = "ai-message";


  }


  // 添加消息到聊天区域
  chatBox.appendChild(messageElement);


}






// 保存聊天记录到浏览器
const saveHistory = () => {


  // 将数组转换成JSON字符串保存
  localStorage.setItem(

    "messages",

    JSON.stringify(messages)

  );


}







// 根据用户输入生成AI回复
const getAIResponse = (input) => {


  if (input === "你好") {


    return "你好！我是Agent Studio";


  } else if (input === "再见") {


    return "再见！";


  } else {


    return "暂时无法回答这个问题";


  }


}







// 处理一次聊天
const sendMessage = () => {


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
  togglePlaceholder();



  // 显示用户消息
  renderMessage(

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

    "assistant",

    reply

  );



  // 保存完整聊天记录
  saveHistory();



  // 清空输入框
  inputBox.value = "";



  // 输出当前聊天记录
  showHistory();


}







// 加载历史聊天记录
const loadHistory = () => {


  // 遍历聊天数组
  messages.forEach(({ role, content }) => {


  renderMessage(
    role,
    content
  );


});

}







// 输出完整聊天记录
const showHistory = () => {


  console.log(messages);


}







// 清空聊天记录函数
const clearChat = () => {


  // 清空聊天数组
  messages.length = 0;


  // 删除浏览器保存记录
  localStorage.removeItem("messages");



  // 删除页面中的聊天消息
  const messageElements = document.querySelectorAll(
    ".user-message,.ai-message"
  );


  // 遍历删除
  messageElements.forEach((message) => {

    message.remove();

  });



  // 根据最新状态更新提示
  togglePlaceholder();


}








// 输入框回车事件
const handleEnter = (event) => {


  // 判断是否按下Enter
  if (event.key === "Enter") {


    // 发送消息
    sendMessage();


  }


}








// ==============================
// 4. 程序启动
// ==============================


// 页面打开恢复聊天
loadHistory();


// 根据历史记录显示提示
togglePlaceholder();


// 点击发送按钮
sendButton.addEventListener(

  "click",

  sendMessage

);



// 输入框监听回车
inputBox.addEventListener(

  "keydown",

  handleEnter

);



// 点击清空按钮
clearButton.addEventListener(

  "click",

  clearChat

);