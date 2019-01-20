/**
 * Created by brady on 2019/1/19.
 */

import React, {Component} from 'react'

class Demo4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: ``
    }
  }

  render() {
    return (
      <input type="text" value={this.state.msg} onChange={this.mychangeHandler}/>
    )
  }

  //表单元素修改事件 onChange
  mychangeHandler = event => {
    // console.log(event.target.value)
    //使用 this.setState() 方法修改 this.state.msg 的值
    this.setState({
      msg: event.target.value
    }, () => {
      console.log(this.state.msg)
    })
  }
}

export default Demo4