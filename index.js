import React,{Fragment,Component} from 'react';
import ReactDOM from 'react-dom';
import Hoc from './Hoc'
import ParentPortal from './Portal/ParentPortal'
import App from './App'
// import Todolist from './Todolist/Todolist';
// import Request from './Request';
// import Parent from './Context/Parent'
// import {con,con2} from './Context/Context'
import Dolist from './Dolist/Todolist';


// let id = 1234;
// ReactDOM.render(
//     <con.Provider value={id}>
//         <div>ddd</div>
//         <con2.Provider value='aaaa'>
//             <Parent />
//         </con2.Provider>  
//     </con.Provider>,
//     document.getElementById('root')
// )

ReactDOM.render(
    <Dolist/>,
    document.getElementById('root')
)

// import ShowTime from './ShowTime';

// 显示当前系统时间
// function showTime(){
//     var ele = <div>
//         <p>当前时间是：</p>
//         <div>{new Date().toLocaleString()}</div>
//     </div>;
//     ReactDOM.render(ele,document.querySelector('#root'));
// }
// showTime();
// setInterval(showTime,1000);

// function ShowTime(props){
//     console.log(props);
//     return (<Fragment>
//         <div>{props.name}</div>
//         <div>{new Date().toLocaleString()}</div>
//         </Fragment>)
// }
// var num = 100;
// ReactDOM.render(
//     <ShowTime age={num} name="zhangsan"/>,
//     document.getElementById('root')
// )

// var num = 100;
// 默认导出：只能导出一次，被引入时可以重命名
// export default ShowTime;
// 明明导出：可以导出多个，被引入是与导出的名一致
// export {ShowTime};
// export const num = 100;

// 组件交互
// 父组件---->子组件：调用组件时添加属性，子组件通过props拿到传递的数据
// 子组件---->父组件：

// var num = [1,2,3];
// ReactDOM.render(
//     <ShowTime age={num} name="zhangsan"/>,
//     document.getElementById('root')
// )






















// var str = 'react';
// babel编译
//自己封装的render函数
// var ele = <h1>hello {str}</h1>;
// var obj = {
//     type:"div",
//     props:{
//         id :'tit',
//         class : 'tit',
//         children : ['hello','react',{
//             type:"h1",
//             props:{
//                 id :'tit',
//                 class : 'tit',
//                 children : ['hello','react']
//             }
//         }]
//     }
// }
// function render(obj,container){
//     var {type,props} = obj;
    //文档碎片
//     var fragment = document.createDocumentFragment();

//     var ele = document.createElement(type);
//     for(var item in props){
//         if(item === 'class'){
//             ele.className = props[item];
//         }else if(item === 'children'){

//             for(var i = 0;i<props.children.length;i++){
//                 if(typeof props.children[i] === 'object'){
//                     render(props.children[i],ele);
//                 }else{
//                     // ele.innerHTML += props.children[i];
//                     var txt = document.createTextNode(props.children[i]);
//                     ele.appendChild(txt);
//                 }
                
//             }
//         }else{
//             ele[item] = props[item];
//         }
//     }
//     fragment.appendChild(ele);
//     container.appendChild(fragment);
// }
// render(obj,document.getElementById('root'));

// var ele = React.createElement(
//     'h1',
//     {id:'tit',class:'title'},
//     'hello',
//     React.createElement(
//         'h1',
//         {id:'tit',class:'title'},
//         'hello')
// );
// ReactDOM.render(ele, document.getElementById('root'));

// 页面渲染过程
// 请求HTML页面、浏览器html解析器解析html文件、生成dom树
// link引入css文件，css解析器解析css，生成css对象模型，cssom和dom树结合生成一个render树（渲染树）
// 最后浏览器绘制页面



// 页面回流（重排reflow）：DOW结构变化、内容变化、大小、位置的变化
//页面重绘（repaint）：颜色的变化（背景色，字体颜色，边框颜色）
//1.原始慢的
// console.time('time');
// for(var i = 0;i<100;i++){
//     document.getElementById('root').innerHTML += '<p>'+i+'</p>';
// }
// console.timeEnd('time');
// 变快了：先用变量进行dom处理，最后一次渲染
// var div = document.getElementById('root');
// var str = '';
// for(var i = 0;i<1000;i++){
//     str += '<p>'+i+'</p>';
// }
// div.innerHTML = str;

// 2.对样式处理
// var div = document.getElementById('root');
// div.style.width = '1000px';
// div.style.height = '1000px';
// div.style.background = 'red';
// 改变，声明一个css类
// 例如
// var div = document.getElementById('root');
// .active{
//     width = '100px';
//     height = '100px';
//     background = 'red';
// }
// div.className = 'active';

// 3.offsetLeft 距离浏览器左侧的像素 会引起回流，要慎用
// console.log(div.offsetLeft);
// setInterval(()=>{
//     div.style.width = div.offsetWidth + 1 +'px';
// },100)

// var wid = div.offsetWidth;
// setInterval(()=>{
//     wid += 1;
//     div.style.width = wid +'px';
// },100)

// 4.文档碎片(内存中的一个变量)



