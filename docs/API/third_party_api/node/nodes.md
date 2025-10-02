# 获取单个节点的平均在线率（最多90天）
- 接口
    > GET https://chmlfrp.api.chmlfrp.com/node_uptime
- 请求参数

    **JSON:**

    |  参数  |  类型  | 必传 |    说明     |
    |:----:|:----:|:--:|:---------:|
    | node | str  | 是  | 需要查询的节点名称 |

- 返回

    **JSON:**

    |  参数   |  类型  | 必返 |  说明  |
    |:-----:|:----:|:--:|:----:|
    |  msg  | str  | 是  | 返回消息 |
    | data  | list | 是  | 详细如下 |

    **data:**

    |       参数       |  类型   | 必返 |      说明       |
    |:--------------:|:-----:|:--:|:-------------:|
    |   node_name    |  str  | 是  |     节点名称      |
    | average_uptime | float | 是  |  节点在线率（单位%）   |
    | total_records  |  int  | 是  |     记录的数量     |
    |   timeframe    |  str  | 是  | 一直返回"90 days" |

