(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(t,e,n){t.exports=n(33)},33:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),l=n(1),u=n(2),i=n(4),s=n(3),p=n(5),d="https://api.apiopen.top/musicRankingsDetails?type=1";function m(t,e,n){var r=function(n){function a(){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(s.a)(a).call(this))).state={data:[]},t}return Object(p.a)(a,n),Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch(e,{method:"post"}).then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({data:e.result})}))}},{key:"render",value:function(){return o.a.createElement(t,{data:this.state.data})}}]),a}(a.Component);return r.displayName="Fetch(".concat(function(t){return t.displayName||t.name||"Component"}(t),")"),r}var h=function(t){function e(){return Object(l.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("ul",null,this.props.data.map((function(t){return o.a.createElement("li",null,t.title)})))}}]),e}(a.Component),b=function(t){function e(){return Object(l.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("ul",null,this.props.data.map((function(t){return o.a.createElement("p",null,t.title)})))}}]),e}(a.Component),f=m(h,d),j=m(b,d),O=function(t){function e(){return Object(l.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(j,null))}}]),e}(a.Component),v=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).handleClick=function(){console.log("portalClick")},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createPortal(o.a.createElement("div",null,o.a.createElement("h1",{onClick:this.handleClick},"Portal")),document.body)}}]),e}(a.Component),y=(a.Component,n(13)),E=n(10),k=(o.a.createContext(),o.a.createContext()),C=function(t){function e(){return Object(l.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,"Child\u7ec4\u4ef6",o.a.createElement("div",null,this.context))}}]),e}(a.Component);C.contextType=k;var g=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(i.a)(this,Object(s.a)(e).call(this))).state={time:(new Date).toLocaleString()},t}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timeId=setInterval((function(){t.setState({time:(new Date).toLocaleString()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeId)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,this.state.time),"Parent\u7ec4\u4ef6",o.a.createElement(C,null))}}]),e}(a.Component),I=function(t){function e(){return Object(l.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("ul",{style:{float:"left"}},o.a.createElement("li",null,o.a.createElement(y.b,{to:"/hoc"},"HOC"),o.a.createElement(y.b,{to:"/parent"},"Parent")))}}]),e}(a.Component),S=(a.Component,n(18)),x=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(i.a)(this,Object(s.a)(e).call(this))).handleInput=function(e){13==e.keyCode&&t.props.add(e.target.value)},t.state={inputValue:""},t}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("input",{ref:function(e){t.inp=e},onKeyDown:this.handleInput,type:"text"}))}}]),e}(a.Component),w=function(t){function e(){return Object(l.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todo;return o.a.createElement("div",null,o.a.createElement("span",null,"\u6b63\u5728\u8fd0\u884c"),o.a.createElement("sapn",null,"(",this.props.a,")"),o.a.createElement("ul",null,e.map((function(e,n){if(0==e.done)return o.a.createElement("li",{key:n},o.a.createElement("input",{type:"checkbox",onChange:function(e){return t.props.ju(n)}}),e.title,"---",o.a.createElement("button",{onClick:function(e){return t.props.del(n,e)}},"\u5220\u9664"))}))),o.a.createElement("span",null,"\u5df2\u5b8c\u6210"),o.a.createElement("sapn",null,"(",this.props.b,")"),o.a.createElement("ul",null,e.map((function(e,n){if(1==e.done)return o.a.createElement("li",{key:n},o.a.createElement("input",{type:"checkbox",onChange:function(e){return t.props.ju(n)},checked:!0}),e.title,"---",o.a.createElement("button",{onClick:function(e){return t.props.del(n,e)}},"\u5220\u9664"))}))))}}]),e}(a.Component),D=function(t){function e(){var t;Object(l.a)(this,e),(t=Object(i.a)(this,Object(s.a)(e).call(this))).addItem=function(e){var n={title:e,done:!1};t.setState({todo:[].concat(Object(S.a)(t.state.todo),[n])}),console.log(t.state.todo)},t.delItem=function(e,n){var a=Object(S.a)(t.state.todo);a.splice(e,1),t.setState({todo:a}),console.log(t.state.todo)},t.judge=function(e){var n=t.state.todo;1==n[e].done?n[e].done=!1:n[e].done=!0,t.setState({todo:n}),console.log(t.state.todo[e].done)};var n=JSON.parse(localStorage.getItem("todo"));return console.log(localStorage.getItem("todo")),t.state=null==n?{todo:[]}:{todo:n},t}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){localStorage.setItem("todo",JSON.stringify(this.state.todo));var t=0,e=0;return this.state.todo.map((function(n){0==n.done?t+=1:e+=1})),o.a.createElement("div",null,o.a.createElement(x,{add:this.addItem,ju:this.judge}),o.a.createElement(w,{todo:this.state.todo,del:this.delItem,ju:this.judge,a:t,b:e}))}}]),e}(a.Component);c.a.render(o.a.createElement(D,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.68d6889a.chunk.js.map