import React, { Component } from 'react'
import { connect } from "dva"
import { Button } from 'antd'
import styles from '../components/input.css'

class List extends Component {

    render() {
        let { list } = this.props
        return (
            <div>
                {
                    list ? list.map((item, index) => (
                        <li key={index}  className={styles.list}>
                            <div>
                            <span>姓名------{item.name}</span><br />
                            <span>年龄------{item.age}</span><br />
                            <span>学历------{item.xl}</span> <br />
                            </div>
                            
                            <div className={styles.btn}>
                            <Button htmlType='submit' type='primary' onClick={() => this.handleModify(index)}>修改</Button>
                            <Button htmlType='submit' type='danger' onClick={() => this.handleDelete(index)}>删除</Button>
                            </div>
                            
                        </li>
                    )) : ''
                }
            </div>
        )
    }
    handleModify(index) {
        this.props.dispatch({
            type: 'todo/modify',
            payload: index
        })
    }
    handleDelete(index) {
        this.props.dispatch({
            type: 'todo/delete',
            payload: index
        })
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.todo.list
    }
}

export default connect(mapStateToProps)(List)