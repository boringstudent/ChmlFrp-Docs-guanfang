# 节点在线率
- 接口
    > GET&POST /node_uptime
- 请求参数

    **JSON**:

    |  参数  | 类型  | 必填 |          说明          |
    |:----:|:---:|:--:|:--------------------:|
    | time | int | 是  | 返回多少天的uptime数据，最大90天 |
    | node | str | 是  |         节点名称         |


- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | data  | list | 否  |  详见下方  |
    | state | str  | 是  | 请求是否成功 |

    **data**

    当上方 `state` 为 `success` 返回

    |       参数       |  类型  | 必返 |         说明          |
    |:--------------:|:----:|:--:|:-------------------:|
    |   node_name    | str  | 是  |         节点名         |
    |     state      | str  | 是  | 节点状态 offline或online |
    |       id       | int  | 是  |        节点ID         |
    | history_uptime | list | 是  |     节点uptime统计      |
    |     group      | int  | 是  |        节点权限组        |

    **history_uptime**

    |     参数      |  类型   | 必返 |    说明     |
    |:-----------:|:-----:|:--:|:---------:|
    | recorded_at |  str  | 是  |   当天日期    |
    |   uptime    | float | 是  | 该时间的节点在线率 |