/**
 * Created by brady on 2019/1/12.
 */
import React, { Component } from 'react'
import '../css/Demo1.css'
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import Demo4 from './Demo4'

//对象形式样式
let styleDiv = {background: '#ff0'}

/**
 * 组件生命周期：
 * 创建阶段 - Mounting
 * 运行阶段 - Updating
 * 卸载阶段 - Unmounting
 * */

class Demo1 extends Component {
  constructor(props) {
    super(props)
    this.names = ['Alice', 'Emily', 'Kate']
    this.username = 'Brady'
    this.age = '32'
    this.sex = 'male'
    this.obj = {
      username: 'Lucy',
      age: '22',
      sex: 'female'
    }
    this.state = { // 就相当于Vue中的data(){return {}}
      count: props.initCount
    }
  }
  /**
   * 组件被挂载到页面之前调用，其在render()之前被调用，因此在这方法里同步地设置状态将不会触发重渲染
   * 特点：
   * 1, 该阶段的函数只执行一次
   * 注意：
   * 1, 无法获取页面中的DOM对象
   * 用途：
   * 1, 可以调用setState()方法来改变状态值
   * 2, 可以发送Ajax请求获取数据
   * */
  componentWillMount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  /**
   * 渲染组件到页面中，无法获取页面中的DOM对象
   * 注意：
   * 1, 不要在render方法中调用 setState() 方法，否则会递归渲染（状态改变会重新调用render()，render()又重新改变状态）
   * */
  render() {
    return (
      <div style={styleDiv}>
        {/* Router路由用法 */}
        <a href="#/commentlist">评论列表</a>
        <button onClick={() => this.props.history.push('commentlist/3')}>显示传参</button>
        <button onClick={() => this.props.history.push({
          pathname: '/commentlist', state: {id: 3}
        })}>隐式传参</button>
        <button onClick={() => this.props.history.go(-1)}>后退</button>
        <button onClick={() => this.props.history.go(1)}>前进</button>
        <button onClick={() => this.props.history.goBack()}>后退</button>
        {/* 父子组件传值 */}
        <Demo2 username={this.username} age={this.age} sex={this.sex}/>
        {/* ES6展开运算符使用 */}
        <Demo3 {...this.obj} />
        {/* 内联样式 */}
        <ul style={{fontSize:'16px',color:'#ff4040'}}>
          {
            /* 数组遍历使用map, key必须有, 用于在状态修改时做为判断的依据 */
            this.names.map((name, index) => {
              return <li className="Demo1-li" key={index}>Hello, {name}</li>
            })
          }
        </ul>
        <Demo4 />
      </div>
    )
  }

  /**
   * 组件已经挂载到页面中
   * 特点：
   * 1, 该阶段的函数只执行一次
   * 注意：
   * 1, 在这里修改状态会重新渲染
   * 用途：
   * 1, 可以操作DOM，获取到组件内部的DOM对象
   * 2, 可以发送Ajax请求获取数据
   * 3, 可以调用setState()方法来改变状态值
   * */
  componentDidMount() {
    console.log(this.state.count)
  }

  /**
   * 只要组件不再被渲染到页面中，那么这个方法就会被调用
   * 用途：
   * 1,
   * */
  componentWillUnmount() {
  }

}

//组件props初始化
Demo1.defaultProps = {
  initCount: 0
}

export default Demo1