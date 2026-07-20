// storage.js
// 负责聊天数据的本地存储




// 获取本地保存的聊天记录
export const getMessages = () => {


  // 从localStorage读取数据
  const history = localStorage.getItem("messages");


  // 没有历史记录，返回空数组
  if (!history) {

    return [];

  }


  // 将JSON字符串转换成数组
  return JSON.parse(history);


};

// 当前聊天数据
export const messages = getMessages();



// 保存聊天记录
export const saveHistory = (messages) => {


  // 将数组转换成JSON字符串保存
  localStorage.setItem(

    "messages",

    JSON.stringify(messages)

  );


};





// 删除聊天记录
export const clearHistory = () => {


  // 删除localStorage中的聊天数据
  localStorage.removeItem("messages");


};