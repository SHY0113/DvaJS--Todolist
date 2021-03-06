import React, { Component } from 'react'
import Add from "../components/add"
import ListTo from '../components/list'
import Modify from "../components/modify"
import {connect} from 'dva'

    class InputList extends Component {
        render() {
          let {flag} = this.props
            return (
                <div>
                   {
                      flag? <Add/>:<Modify/>
                   }
                        <ListTo/>
                </div>
            )
        }
    }
    const mapStateToProps=(state)=>{
        return {
            flag:state.todo.flag
        }
    }
export default connect(mapStateToProps)(InputList)