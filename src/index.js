import alerter from './alerter'
alerter(); //执行导入 js模块
var b = document.createElement('b');
b.innerHTML = '这是 webpack里面js代码执行...';
document.body.appendChild(b);