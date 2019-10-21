import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class Todolist extends Component {
    constructor(){
        super();
        let todo=JSON.parse(localStorage.getItem('todo'));
        console.log(localStorage.getItem('todo'));
        if(todo==null){
            this.state = {
                 // todo:[{"title":12,"done":false}]
                todo:[]
            }
        }
        else{
            this.state = {
                todo:todo
            }
        }
    }
    addItem=(data)=>{
        var data1 = {"title":data,"done":false};
        this.setState({//改变状态
            todo:[...this.state.todo,data1]  //在数组的最后添加data
        })
        console.log(this.state.todo);
    }
    delItem = (idx,e)=>{
        let todo = [...this.state.todo]; //拷贝
        todo.splice(idx,1);
        this.setState({
            todo:todo
        })
        console.log(this.state.todo);
    }
    judge= (idx)=>{
        let todo = this.state.todo;
        if(todo[idx].done == true){
            todo[idx].done = false;
        }
        else{
            todo[idx].done = true;
        }
        
        this.setState({
            todo:todo
        })
        console.log(this.state.todo[idx].done);
    }
    render() {
        localStorage.setItem("todo",JSON.stringify(this.state.todo));
        var num1 = 0;
        var num2 = 0;
        this.state.todo.map((item)=>{
            if(item.done==false){
                num1 += 1;
            }else{
                num2 += 1;
            }
        })
        // console.log(num1);
        // console.log(num2);
        return (
            <div>
                <Todoinput add={this.addItem} ju={this.judge}/>
                <Todoing todo={this.state.todo} del={this.delItem} ju={this.judge} a={num1} b={num2}/>
                {/* del={this.delItem} */}
            </div>
        )
    }
}