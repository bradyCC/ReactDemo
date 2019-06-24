/**
 * Created by brady on 2019-01-17.
 */

import React, {Component} from 'react'
import CommentItem from './CommentItem'
import '../css/CommentList.css'

class CommentList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      CommentList: [ // 评论列表数据
        {id: 1, user: '张三', content: '哈哈，沙发'},
        {id: 2, user: '李四', content: '哈哈，板凳'},
        {id: 3, user: '王五', content: '哈哈，凉席'},
        {id: 4, user: '赵六', content: '哈哈，砖头'},
        {id: 5, user: '田七', content: '哈哈，楼下山炮'}
      ]
    }
  }
  render() {
    return (
      <div>
        <h1 className="List-title">这是评论列表组件</h1>
        <ul className="List-ul">
          {
            this.state.CommentList.map(item => {
              return (
                <CommentItem {...item} key={item.id}></CommentItem>
              )
            })
          }
        </ul>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props.match.params) // 获取显示(路由)传参
    console.log(this.props.history.location) //获取隐式传参
  }
}

export default CommentList
