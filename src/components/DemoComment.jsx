/**
 * Created by brady on 2019/2/21.
 */

import React, {Component} from 'react'

class DemoComment extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.items.map(item => {
              return <li key={item.id}>user - {item.user}, text - {item.content}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default DemoComment
