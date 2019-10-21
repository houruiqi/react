import React, { Component } from 'react'
// 受控组件：value值被react控制的表单元素
// 可以实时获取表单元素的值（表单验证）/写法相对麻烦

export default class Todoinput extends Component {
    constructor(){
        super();
        // this.handleInput = this.handleInput.bind(this);
        this.state = {
            inputValue : ''
        }

    }
    handleInput = (e)=>{
        if(e.keyCode == 13){ //按下回车
            this.props.add(e.target.value);
        }  
        // console.log(inputValue);
    }
    // handleChange = (e)=>{
    //     this.setState({
    //         inputValue: e.target.value
    //     })
    //     console.log(inputValue);
    //     console.log(e.target.value);
    // }
    render() {
        return (
            <div>
                {/* onChange={this.handleChange} */}
                <input ref={(inp)=>{this.inp=inp}} onKeyDown={this.handleInput} type="text"/>
                {/* <button style={ {color:'red',fontSize:'15px'} } onClick={()=>{console.log()}}>提交</button> */}
            </div>
            
        )
    }
}