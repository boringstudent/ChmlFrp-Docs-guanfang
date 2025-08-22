# 获取所有节点的平均在线率（最多90天）
- 接口
    > GET /node
- 请求参数

    **JSON:**

    |  参数   |  类型  | 必传 |      说明       |
    |:-----:|:----:|:--:|:-------------:|
    | token | str  | 可选 | 验证是否返回vip节点信息 |


- 返回

    **JSON:**

    |         参数         |  类型  | 必返 |    说明    |
    |:------------------:|:----:|:--:|:--------:|
    |        msg         | str  | 是  |   返回消息   |
    |    total_count     | str  | 是  | 返回的节点数量  |
    |     user_type      | str  | 是  |   用户类型   |
    |  vip_nodes_count   | str  | 是  | vip节点数量  |
    | normal_nodes_count | str  | 是  | 非vip节点数量 |
    |        data        | list | 是  |   详细如下   |

    **data:**

    |       参数       |  类型   | 必返 |     说明     |
    |:--------------:|:-----:|:--:|:----------:|
    |   node_name    |  str  | 是  |    节点名称    |
    | average_uptime | float | 是  | 节点在线率（单位%） |
    |   nodegroup    |  str  | 是  |   节点权限组    |
    |  node_status   |  str  | 是  |  节点状态（没用）  |

