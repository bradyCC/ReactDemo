/**
 * Created by brady on 2019-01-17.
 */

import React, {Component} from 'react'
import '../css/CommentItem.css'

class CommentItem extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <li className="Item-li">
        <h3 className="Item-h3">评论人：{this.props.user}</h3>
        <p className="Item-p">评论内容：{this.props.content}</p>
      </li>
    );
  }
}

export default CommentItem 
