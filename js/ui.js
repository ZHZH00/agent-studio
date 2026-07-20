// ui.js
// 负责聊天页面显示相关功能







//  渲染单条聊天消息


// 创建消息元素并显示到聊天区域
export const renderMessage = (
  chatBox,
  role,
  content) => {


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









//  控制空状态提示


// 根据聊天记录状态控制空状态显示
export const togglePlaceholder = (
  messages,
  placeholder,
  clearButton) => {


  if (messages.length === 0) {


    // 显示提示文字
    placeholder.style.display = "flex";


    // 隐藏清空按钮
    clearButton.style.display = "none";


  } else {


    // 隐藏提示文字
    placeholder.style.display = "none";


    // 显示清空按钮
    clearButton.style.display = "block";


  }


}









//  渲染历史聊天记录


// 页面加载时恢复历史消息
export const renderHistory = (
  messages,
  chatBox) => {


  // 遍历聊天记录
  messages.forEach(({ role, content }) => {


    // 渲染每条历史消息
    renderMessage(

      chatBox,

      role,

      content

    );


  });


}