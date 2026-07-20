# Agent Studio

一个从零开发的 AI Agent 应用项目。


## 当前版本

V0.6

新增：

- JavaScript模块化重构
- 使用 ES Module（import/export）组织代码
- 按功能职责拆分项目结构
- chat.js负责聊天核心逻辑
- ui.js负责页面渲染与界面交互
- storage.js负责聊天数据持久化
- main.js作为项目入口负责初始化和事件绑定
- 降低代码耦合，提高项目可维护性


## 版本记录


### V0.1

- JavaScript基础
- prompt输入
- 简单AI回复


### V0.2

- messages数组管理聊天记录
- user / assistant角色区分
- 函数封装
- 多轮聊天


### V0.3

- HTML + CSS构建网页聊天界面
- 用户输入框和发送按钮
- DOM动态生成聊天消息
- 用户消息和AI消息样式区分
- Enter键发送消息
- 聊天窗口独立滚动
- 页面布局优化


### V0.4

- localStorage保存聊天记录
- 刷新页面自动恢复聊天历史
- 聊天数据持久化管理
- 空聊天状态提示
- 清空聊天记录功能
- 聊天状态与页面显示同步
- 优化消息保存流程
- 完善聊天应用交互体验


### V0.5

- ES6代码重构
- function声明改为箭头函数
- 匿名函数改为箭头函数
- 使用对象解构优化数据访问
- 优化历史消息加载逻辑
- 提升代码现代化程度和可维护性


### V0.6

- JavaScript模块化重构
- 使用import/export实现模块之间的数据与功能调用
- 将原script.js拆分为多个功能模块
- chat.js负责聊天业务逻辑
- ui.js负责DOM渲染和页面状态管理
- storage.js负责localStorage数据管理
- main.js负责项目初始化和事件监听
- 优化项目结构，提高代码扩展性和维护性