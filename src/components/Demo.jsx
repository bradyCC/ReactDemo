/**
 * Created by brady on 2019/2/21.
 */

import React, {Component} from 'react'
import DemoComment from './DemoComment'

class Demo extends Component {
  //构造函数
  constructor(props) {
    super(props)
    this.name = 'Brady'
    this.items = [
      { id: 1, user: 'demo1', content: 'demo1content' },
      { id: 2, user: 'demo2', content: 'demo2content' },
      { id: 3, user: 'demo3', content: 'demo3content' },
      { id: 4, user: 'demo4', content: 'demo4content' },
      { id: 5, user: 'demo5', content: 'demo5content' }
    ]
    this.state = {
      count: props.initCount,
      msg: `msg`
    }
  }

  //创建阶段(Mounting)
  //组件被挂载到页面之前调用, 无法操作DOM, 可以发送请求获取数据, 可以通过setState()修改状态值
  componentWillMount() {
    this.setState({
      count: this.state.count + 1
    }, () => {//回调函数：立即获取修改后的值
      console.log(`修改后count：`, this.state.count)
    })
    console.log(`修改前count：`, this.state.count)
  }
  //组件已经挂载到页面中, 可以进行DOM操作, 可以发送请求获取数据, 可以通过setState()修改状态值
  componentDidMount() {
    console.log(`当前count：`, this.state.count)
    console.log(this.props)
  }

  //渲染组件到页面中, 无法获取页面中的DOM对象
  render() {
    return (
        <div>
          <h1>父子组件通信</h1>
          <input type="button" onClick={this.refreshChild()} value="更新子组件"/>
          <DemoComment text={this.state.childText || '子组件未更新'} refreshParent={() => this.refreshParent()}></DemoComment>
          {this.state.parentText || '父组件未更新'}

          {/*<DemoComment items={this.items} name={this.name}></DemoComment>*/}
          <p>{this.state.count}</p>
          <input type="button" value="触发点击事件" onClick={this.addCount} />
          <input type="button" value="箭头函数触发点击事件" onClick={() => this.addCount1()} />
          <input type="text" value={this.state.msg} onChange={this.changeMsg} />
        </div>
    )
  }

  //更新子组件
  refreshChild() {
    return (e) => {
      this.setState({
        childText: "父组件沟通子组件成功",
      })
    }
  }

  //更新父组件
  refreshParent() {
    this.setState({
      parentText: "子组件沟通父组件成功",
    })
  }

  //触发点击事件
  addCount = event => {
    this.setState({
      count: event.target.value
    })
  }

  //箭头函数触发点击事件
  addCount1 = () => {
    this.setState({
      count: 123
    })
  }

  //实现双向绑定
  changeMsg = event => {
    this.setState({
      msg: event.target.value
    })
  }

  //运行阶段(Updating)
  //组件接受到新的props前触发这个方法
  componentWillReceiveProps(nextProps) {}
  //根据这个方法的返回值决定是否重新渲染组件, 返回true重新渲染, 否则不渲染
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    return true
  }
  //组件将要更新, 不能修改状态, 否则会循环渲染
  componentWillUpdate(nextProps, nextState) {}
  //组件已经被更新
  componentDidUpdate(prevProps, prevState) {}

  //卸载阶段(Unmounting)
  //在卸载组件的时候, 执行清理工作(清除定时器)
  componentWillUnmount() {}

}

//使用静态属性defaultProps 初始化props
Demo.defaultProps = {
  initCount: 0
}

export default Demo
