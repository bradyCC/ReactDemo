/**
 * Created by brady on 2019/1/19.
 */

import React, {Component} from 'react'

class Demo4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: ``,
      message: ''
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.msg} onChange={this.mychangeHandler}/>
        <input type="text" value={this.state.message} onChange={this.mychangeHandler} ref="message" />
      </div>
    )
  }

  //表单元素修改事件 onChange
  mychangeHandler = event => {
    // console.log(event.target.value)
    //使用 this.setState() 方法修改 this.state.msg 的值
    this.setState({
      msg: event.target.value,
      message: this.refs.message.value
    }, () => {
      console.log(this.state.msg)
    })
  }
}

export default Demo4