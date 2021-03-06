import React, { Component } from 'react'
import { Form, Input, Button,Select } from 'antd'
import { connect } from 'dva'
import styles from './input.css'
const {Option} = Select
class Add extends Component {
    render() {
        console.log(this.props)
        let { list, toIndex } = this.props
        const todoList = list[toIndex]
        const { getFieldDecorator} = this.props.form
       
        return (
            <div>
                <Form onSubmit={this.handleUpdate} className={styles.form}>
                    <Form.Item label="姓名" className={styles.formItem}>
                        {getFieldDecorator('name', {
                            initialValue:todoList.name,//设置初始的值
                            rules: [
                                {
                                    required: true,
                                    message: '不能为空'
                                },
                                {
                                    pattern: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
                                    message: '输入中文名字'
                                }
                            ]
                        })(<Input/>)}

                    </Form.Item>
                    <Form.Item label="年龄" className={styles.formItem}>
                        {getFieldDecorator('age', {
                            initialValue:todoList.age,
                            rules: [
                                {
                                    required: true, message: '不能为空'
                                },
                                {
                                    pattern: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
                                    message: '请输入年龄'
                                }
                            ]
                        })(<Input/>)}

                    </Form.Item>
                    <Form.Item label="学历" className={styles.formItem}>
                        {getFieldDecorator('xl', {
                            initialValue:todoList.xl,
                            rules: [
                                {
                                    required: true, message: '不能为空'
                                }
                            ]
                        })(
                            <Select style={{ width: 184 }}>
                            <Option value="本科">本科</Option>
                            <Option value="硕士">硕士</Option>
                            <Option value="博士">博士</Option>
                            <Option value="专科">专科</Option>
                        </Select>
                        )}

                    </Form.Item>
                    <Form.Item className={styles.formItem}> 
                        <Button htmlType="submit" type="primary">修改</Button>
                    </Form.Item>
                </Form>

            </div>
        )
    }
   
    handleUpdate = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //与后台进行数据交互
                const list = {}
                list.name = values.name
                list.age = values.age
                list.xl = values.xl
                this.props.form.setFieldsValue({name:'',age:'',xl:''})//点击确定让input输入框中的值为空
                this.props.dispatch({
                    type:'todo/update',
                    payload:list
                })

            }
        })
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.todo.list,
        toIndex: state.todo.toIndex
    }
}

export default connect(mapStateToProps)(Form.create()(Add))