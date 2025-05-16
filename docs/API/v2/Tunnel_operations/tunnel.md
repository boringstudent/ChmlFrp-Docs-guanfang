# 隧道列表

- 接口
    > GET&POST /tunnel
- 请求参数

    **Query/表单**:

    |  参数   | 类型  | 必填 |  说明  |
    |:-----:|:---:|:--:|:----:|
    | token | str | 是  | 用户令牌 |

- 返回

    **JSON**：

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    | code  | int  | 是  | 返回状态码  |
    | state | str  | 是  | 请求是否成功 |
    |  msg  | str  | 是  |  返回消息  |
    | data  | list | 否  |  详见下方  |

    **data:**：

    当上方 `state` 为 `success` 返回
    
    list中有若干个map 每个map代表一条隧道

    map参数详见下方

    |        参数         |    类型    | 必返 |     说明     |
    |:-----------------:|:--------:|:--:|:----------:|
    |        id         |   int    | 是  |    隧道id    |
    |       name        |   str    | 是  |    隧道名     |
    |       node        |   str    | 是  |    所属节点    |
    |     nodestate     | str/null | 是  |    节点状态    |
    |       type        |   str    | 是  |    隧道类型    |
    |      localip      |   str    | 是  |    内网ip    |
    |       nport       |   int    | 是  |    内网端口    |
    |       dorp        |   str    | 是  | 外网端口/连接域名  |
    |        ip         | str/null | 是  |   所属节点ip   |
    |    encryption     |   str    | 是  |   是否数据加密   |
    |    compression    |   str    | 是  |   是否数据压缩   |
    |        ap         |   str    | 是  |  frp额外参数   |
    |       state       |   str    | 是  |    隧道状态    |
    |      uptime       | str/null | 是  |   上次启动时间   |
    |  client_version   |   str    | 是  | 上次启动frpc版本 |
    |      userid       |   int    | 是  |  隧道拥有者id   |
    | today_traffic_in  |   int    | 是  | 今日该隧道上传流量  |
    | today_traffic_out |   int    | 是  | 今日该隧道下载流量  |
    |     cur_conns     |   int    | 是  |  当前隧道连接数   |
