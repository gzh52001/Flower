import React, { Component } from "react"

import { Table, Button, Card, Popconfirm, message } from 'antd';
// api
import { getGoods } from '../../api/getGoods.js'
const ButtonGroup = Button.Group

class Goods extends Component {
    constructor() {
        super()
        this.state = {
            selectedRowKeys: [],
            data: [],//商品信息
            loading: false,
            total1: 0
        }
    }
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({
            selectedRowKeys
        });
    };
    componentDidMount() {
        this.getData()
    }
    // 删除一条数据
    removeGood = (id) => {
        console.log(id);
    }
    // 请求数据
    async getData() {
        try {
            let p = await getGoods()
            this.setState({
                data: p.data.result,
                total1: p.data.result.length,
            })
            // console.log(p.data.result);
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        const { loading, selectedRowKeys, data , total1} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        // 选中的商品是否有数据
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <Card title="商品列表">
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        全部删除
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `已选中 ${selectedRowKeys.length} 条商品` : ''}
                    </span>
                </div>
                <Table
                    bordered
                    rowSelection={rowSelection}
                    dataSource={data}
                    rowKey={record => record.id}
                    columns={[
                        {
                            title: 'id',
                            dataIndex: 'id',
                            width: 60,
                        },
                        {
                            title: '商品',
                            dataIndex: 'img',
                            width: 80,
                            render: function (text, record, index) {
                                return <img style={{ width: '80px', height: '80px' }} src={record.img} alt='' />
                            }
                        },
                        {
                            title: '价格',
                            dataIndex: 'price',
                            width: 50,
                        },
                        {
                            title: '标签',
                            dataIndex: 'hot',
                            width: 120,
                        },
                        {
                            title: '标题',
                            dataIndex: 'text',
                        },
                        {
                            title: '操作',
                            dataIndex: 'actions',
                            render: (text, record, index) => {
                                return (
                                    <ButtonGroup>
                                        <Button size="small">详情</Button>
                                        <Button size="small" type="primary">编辑</Button>
                                        <Popconfirm placement="topRight" title={"确认删除吗?"} onConfirm={() => this.removeGood(record.id)} okText="是" cancelText="否">
                                            <Button size="small" type="primary" danger>
                                                删除
                                            </Button>
                                        </Popconfirm>
                                    </ButtonGroup>
                                )
                            }
                        },
                    ]}
                    pagination={{
                    position: ['bottomRight'],
                    showTotal: () => `总共有${total1}个商品`,
                    hideOnSinglePage: "true",
                    showQuickJumper: "true",
                    total: total1
                    }}
                />
            </Card>
        )
    }
}
export default Goods