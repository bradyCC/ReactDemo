/**
 * Created by brady on 2019/1/12.
 */
import React, { Component } from 'react'

class Demo2 extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <p>姓名：{this.props.username}，年龄：{this.props.age}，性别：{this.props.sex}</p>
      </div>
    )
  }
}

export default Demo2