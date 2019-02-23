/**
 * Created by brady on 2019/2/21.
 */

import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class DemoComment extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        {this.props.text}
        <br/>
        <input type="button" onClick={this.props.refreshParent} value="更新父组件" />
        {/*<p>{this.props.name}</p>*/}
        {/*<ul>*/}
          {/*{*/}
            {/*this.props.items.map(item => {*/}
              {/*return <li key={item.id}>user - {item.user}, text - {item.content}</li>*/}
            {/*})*/}
          {/*}*/}
        {/*</ul>*/}
      </div>
    )
  }
}

//props类型验证
// DemoComment.propTypes = {
//   name: PropTypes.string
// }

export default DemoComment
