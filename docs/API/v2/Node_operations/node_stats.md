# 节点状态
- 接口
    > GET&POST /node_stats
- 请求参数

    无

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

    |           参数            |  类型   | 必返 |         说明          |
    |:-----------------------:|:-----:|:--:|:-------------------:|
    |    total_traffic_in     |  int  | 是  |    今日总下载流量 byte     |
    |    total_traffic_out    |  int  | 是  |    今日总上传流量 byte     |
    |       cur_counts        |  int  | 是  |       活跃的连接数        |
    |        node_name        |  str  | 是  |         节点名         |
    |           id            |  int  | 是  |        节点ID         |
    |          state          |  str  | 是  | 节点状态 offline或online |
    | bandwidth_usage_percent |  int  | 是  |        带宽负载         |
    |        cpu_usage        | float | 是  |        CPU负载        |
    |        nodegroup        |  str  | 是  |        节点权限         |
    |      client_counts      |  str  | 是  |       节点在线客户端       |
