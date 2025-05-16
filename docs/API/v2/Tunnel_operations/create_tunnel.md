# 创建隧道
- 接口
    > POST /create_tunnel
- 请求参数

    **JSON**:

    |     参数      |  类型  | 必填 |   说明    |
    |:-----------:|:----:|:--:|:-------:|
    |    token    | str  | 是  |  用户令牌   |
    | tunnelname  | str  | 是  |  隧道名称   |
    |    node     | str  | 是  |  节点名称   |
    |  porttype   | str  | 是  |  详见下方   |
    |   localip   | str  | 是  |  本地ip   |
    |  localport  | int  | 是  |  本地端口   |
    | remoteport  | int  | 否  |  详见下方   |
    | banddomain  | str  | 否  |  详见下方   |
    | encryption  | bool | 是  | 是否数据加密  |
    | compression | bool | 是  | 是否数据压缩  |
    | extraparams | str  | 是  | frp额外参数 |

    **porttyp 隧道类型 : 值为tcp/udp/http/https**

    **banddomain 绑定域名 : 当porttype值为http/https需填**

    **remoteport内网端口 : 当porttype值为tcp/udp需填**

- 返回
    
    **JSON**：

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |
    |  msg  | str | 是  |  返回消息  |
    | data  | map | 否  |  详见下方  |
    
    **data**

    当上方 `state` 为 `success` 返回

    |        参数         |  类型  | 必返 |     说明     |
    |:-----------------:|:----:|:--:|:----------:|
    |       name        | str  | 是  |    隧道名     |
    |       node        | str  | 是  |    所属节点    |
    |       type        | str  | 是  |    隧道类型    |
    |      localip      | str  | 是  |    内网ip    |
    |       nport       | int  | 是  |    内网端口    |
    |       dorp        | str  | 是  | 外网端口/连接域名  |
    |    encryption     | str  | 是  |   是否数据加密   |
    |    compression    | str  | 是  |   是否数据压缩   |
    |        ap         | str  | 是  |  frp额外参数   |
    |       state       | str  | 是  |    隧道状态    |
    |  client_version   | str  | 是  | 上次启动frpc版本 |
    |      userid       | int  | 是  |  隧道拥有者id   |
    | today_traffic_in  | int  | 是  | 今日该隧道上传流量  |
    | today_traffic_out | int  | 是  | 今日该隧道下载流量  |
    |     cur_conns     | int  | 是  |  当前隧道连接数   |
    |        id         | null | 是  |   值为null   |
    |        ip         | null | 是  |   值为null   |
    |     nodestate     | null | 是  |   值为null   |
    |      uptime       | null | 是  |   值为null   |
