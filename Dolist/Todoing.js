import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todoing extends Component {
    // delItem(idx,e){
    //     this.props.del(idx);
    //     // console.log(this.props);
    // }
    render() {
        var {todo} = this.props;
        return (
            <div>
                <span>正在运行</span>
                <sapn>({this.props.a})</sapn>
                <ul>
                    {
                        todo.map((item,idx)=>{
                            if(item.done == false)
                            return (
                                <li key={idx}>
                                    <input type='checkbox' onChange={(e)=>this.props.ju(idx)}/>{item.title}---<button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <span>已完成</span>
                <sapn>({this.props.b})</sapn>
                <ul>
                    {
                        todo.map((item,idx)=>{
                            if(item.done == true)
                            return (
                                <li key={idx}>
                                    <input type='checkbox' onChange={(e)=>this.props.ju(idx)} checked/>{item.title}---<button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            // <div style={{width:40,height:40,border:'2px solid red'}} onClick={console.log(todo)}></div>
        )
    }
}