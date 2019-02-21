/**
 * Created by brady on 2019-01-13.
 */

import React, {Component} from 'react';

class Demo3 extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <button onClick={() => this.myclickHandler(this)} onMouseEnter={this.mymouseenterHandler}>按钮</button>
        <button onClick={() => this.show()}>调用show方法</button>
        <p>姓名：{this.props.username}，年龄：{this.props.age}，性别：{this.props.sex}</p>
      </div>
    )
  }

  show = () => {
    console.log('show方法被调用了')
  }

  //鼠标点击事件 onClick
  myclickHandler (that) {
    console.log(that)
  }
  //鼠标移入事件 onMouseEnter
  mymouseenterHandler () {
    console.log('Hello World!')
  }
}

export default Demo3 
