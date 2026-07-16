// 获取聊天输入框
const inputBox = document.querySelector("#message-input");

// 获取发送按钮
const sendButton = document.querySelector("#send-btn");

// 获取聊天显示区域
const chatBox = document.querySelector("#chat-box");

// 将消息显示到聊天区域
function renderMessage(role, content) {


  // 创建消息元素
  const messageElement = document.createElement("div");


  // 设置消息文字
  messageElement.textContent = content;


  // 根据角色添加不同样式
  if (role === "用户") {


    // 用户消息样式
    messageElement.className = "user-message";


  } else {


    // AI消息样式
    messageElement.className = "ai-message";

  }

  // 添加到聊天区域
  chatBox.appendChild(messageElement);

}

// 保存聊天记录
// role区分用户和AI，content保存消息内容
const messages = [];




// 根据用户输入生成AI回复
function getAIResponse(input) {

  if (input === "你好") {

    return "你好！我是Agent Studio";

  } else if (input === "再见") {

    return "再见！";

  } else {

    return "暂时无法回答这个问题";

  }

}


// 处理一次聊天
function sendMessage() {


  // 获取输入框内容
  const input = inputBox.value;

  // 输入为空不发送
  if (input === "") {

    return;

  }

  // 保存用户消息
  messages.push({

    role: "user",

    content: input

  });


  // 显示用户消息
  renderMessage(
    "用户",
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
    "AI",
    reply
  );

  // 清空输入框
  inputBox.value = "";

  // 输出当前聊天记录
  showHistory();
}




// 输出完整聊天记录
function showHistory() {

  console.log(messages);

}




// 点击按钮发送消息
sendButton.addEventListener(

  "click",

  sendMessage

);

// 监听输入框键盘事件
inputBox.addEventListener(

  "keydown",

  function (event) {

    // 判断是否按下Enter键
    if (event.key === "Enter") {

      // 发送消息
      sendMessage();

    }

  }

);