/**
 * Created by Administrator on 2019/1/14.
 */

import React, {Component} from 'react'

class Demo3 extends Component {
  render() {
  return (
    <div>
      <p>姓名：{this.props.username}，年龄：{this.props.age}，性别：{this.props.sex}</p>
    </div>
    )
  }
}

export default Demo3