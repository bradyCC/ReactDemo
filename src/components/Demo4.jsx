/**
 * Created by brady on 2019/1/19.
 */

import React, {Component} from 'react'
import Fetch from '@/util/fetch'

let token = 'a7aa486945bece5c9477e93cdc7168cb'

class Demo4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: ``,
      message: ``
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.msg} onChange={this.mychange} />
        <input type="text" value={this.state.message} onChange={this.mychange1} ref="message" />
        <input type="button" value="获取数据" onClick={this.mygetdata} />
        <input type="button" value="获取数据1" onClick={this.mygetdata1} />
      </div>
    )
  }

  //表单元素修改事件 onChange
  mychange = event => {
    console.log(event.target.value)
    //使用 this.setState() 方法修改 this.state.msg 的值
    this.setState({
      msg: event.target.value
    })
  }

  mychange1 = () => {
    this.setState({
      message: this.refs.message.value
    }, () => {
      console.log(this.refs.message.value)
    })
  }

  //fetch Ajax交互
  mygetdata = () => {
    fetch(
      `http://test.sumaifu.com/api/mobile/Memberapi/announcementslist?t=${token}`,
      {
        method: 'POST'
        }
      )
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(e => console.log('错误:', e))
  }

  async mygetdata1 () {
    let data = await Fetch({
      url: `Memberapi/announcementsinfo?t=${token}`,
      method: 'POST',
      data: {id: '19'}
    })
    console.log(data)
  }
}

export default Demo4