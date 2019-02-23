/**
 * Created by brady on 2019/2/22.
 */

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { counterAction } from '../actions/counterAction'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.testAction()
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.test.map(data => {
              return <li key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  test: state.counterReducer.test
})

export default connect(mapStateToProps, { testAction: counterAction })(Counter)
