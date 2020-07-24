import React, { Component } from "react"
import { Card, Table, Button, Popconfirm, message } from 'antd';
// 引入查询用户表
import { getUsers, deleteUser } from '../../api/getUser.js'

const ButtonGroup = Button.Group

class User extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            total1: 0
        }
        this.removeUser = this.removeUser.bind(this)
    }
    // 请求数据
    async getData() {
        try {
            let p = await getUsers()
            this.setState({
                dataSource: p.data.result,
                total1: p.data.result.length
            })
        } catch (err) {
            console.log(err);
        }
    }
    // 删除数据
    async removeUser(id, name) {
        // let {dataSource} = this.state
        try {
            let p = await deleteUser(id)
            if (p.data.meta.status == 200) {
                message.success(`用户：${name}:删除成功!`)
                //重新渲染过滤数组
                this.setState({
                    dataSource:this.state.dataSource.filter(item=>item._id!=id),
                    total1:this.state.dataSource.length
                })
            } else {
                message.error(`用户：${name}:删除失败!`)
            }

        } catch (err) {
            console.log(err);
        }
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        let { dataSource, columns, total1 } = this.state
        return (
            <div className="site-card-border-less-wrapper">
                <Card title="用户列表">
                    <Table
                        bordered
                        dataSource={dataSource}
                        columns={[
                            {
                                title: 'id',
                                dataIndex: '_id',
                                width: 100,
                            },
                            {
                                title: '用户名',
                                dataIndex: 'username',
                                width: 80,
                            },
                            {
                                title: '密码',
                                dataIndex: 'password',
                                width: 80,
                            },
                            {
                                title: '头像',
                                dataIndex: 'img',
                                width: 80,
                                render: function (text, record, index) {
                                    return <img style={{ width: '80px', height: '80px', borderRadius: '50%' }} src={record.img} alt='' />
                                }
                            },
                            {
                                title: '注册时间',
                                dataIndex: 'time',
                                key: 'time',
                                width: 250,
                                render: function (text, record, index) {
                                    return (
                                        <p style={{ color: 'green' }}>
                                            {new Date(record.time).toLocaleString()}
                                        </p>
                                    )
                                }
                            },
                            {
                                title: '操作',
                                dataIndex: 'actions',
                                render: (text, record, index) => {
                                    return (
                                        <ButtonGroup>
                                            <Button size="small">详情</Button>
                                            <Button size="small" type="primary">编辑</Button>
                                            <Popconfirm placement="topRight" title={"确认删除吗?"} onConfirm={() =>this.removeUser(record._id, record.username)} okText="是" cancelText="否">
                                                <Button size="small" type="primary" danger>
                                                    删除
                                                </Button>
                                            </Popconfirm>
                                        </ButtonGroup>
                                    )
                                }
                            },
                        ]}
                        rowKey={record => record._id}
                        pagination={{
                            position: ['bottomRight'],
                            showTotal:()=>`总共有${total1}个用户`,
                            hideOnSinglePage:"true",
                            showQuickJumper:"true",
                            total:total1
                        }}
                    />
                </Card>
            </div>
        )
    }
}
export default User