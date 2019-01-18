/**
 * Created by brady on 2019-01-13.
 */

import React, {Component} from 'react';

class Demo3 extends Component {
  render() {
    return (
      <div>
        <button onClick={this.myclickHandler}>按钮</button>
        <p>姓名：{this.props.username}，年龄：{this.props.age}，性别：{this.props.sex}</p>
      </div>
    )
  }

  myclickHandler () {
    console.log('11111')
  }
}

export default Demo3 