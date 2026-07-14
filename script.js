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
// 保存用户消息 -> 获取回复 -> 保存AI消息
function sendMessage(input) {

  // 保存用户输入
  messages.push({
    role: "user",
    content: input
  });


  // 获取AI回复
  let reply = getAIResponse(input);


  // 保存AI回复
  messages.push({
    role: "assistant",
    content: reply
  });


  // 显示回复
  alert("AI：" + reply);

}


// 输出完整聊天记录
function showHistory() {

  console.log(messages);

}


// 主程序循环
// 持续接收用户输入，输入退出结束
while (true) {

  let input = prompt("请输入消息：");


  if (input === "退出") {
    break;
  }


  sendMessage(input);

}


// 聊天结束后查看历史
showHistory();