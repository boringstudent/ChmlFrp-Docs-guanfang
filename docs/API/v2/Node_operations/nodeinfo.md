# 节点详情
- 接口
    > GET&POST /nodeinfo
- 请求参数

    **Query/表单**:

    |  参数   | 类型  | 必填 |  说明  |
    |:-----:|:---:|:--:|:----:|
    | token | str | 是  | 用户令牌 |
    | node  | str | 是  | 节点名  |

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    |  msg  | str | 是  |  返回消息  |
    | code  | int | 是  | 返回状态码  |
    | data  | map | 否  |  详见下方  |
    | state | str | 是  | 请求是否成功 |

    注：非会员token无法查看vip节点详情

    **data**

    当上方 `state` 为 `success` 返回

    |           参数            |  类型   | 必返 |          说明           |
    |:-----------------------:|:-----:|:--:|:---------------------:|
    |           udp           | bool  | 是  |        是否允许UDP        |
    |    total_traffic_in     |  int  | 是  |      传入总流量 byte       |
    |          notes          |  str  | 是  |          介绍           |
    |        cpu_info         |  str  | 是  |         CPU型号         |
    |         fangyu          | bool  | 是  |         是否有防御         |
    |          rport          |  str  | 是  |        外网端口范围         |
    |      storage_total      |  int  | 是  |      节点存储大小 byte      |
    |        nodegroup        |  str  | 是  |         节点权限组         |
    |        apitoken         |  str  | 是  |       api的token       |
    |           web           |  str  | 是  |    是否支持web no/yes     |
    |          ipv6           |  str  | 是  |    IPv6地址 没有返回null    |
    |        toowhite         | bool  | 是  |       节点是否需要过白        |
    |     uptime_seconds      |  int  | 是  |         在线时长          |
    |           id            |  int  | 是  |         节点ID          |
    |          state          |  str  | 是  | 节点是否在线 online/offline |
    | bandwidth_usage_percent | float | 是  |        带宽使用率%         |
    |      memory_total       |  int  | 是  |       内存大小 byte       |
    |        nodetoken        |  str  | 是  |        节点token        |
    |         load15          | float | 是  |       节点15min负载       |
    |          area           |  str  | 是  |         节点地址          |
    |         realIp          |  str  | 是  |         节点ip          |
    |           ip            |  str  | 是  |         节点域名          |
    |        num_cores        |  int  | 是  |       节点CPU核心数        |
    |          load5          | float | 是  |       节点5min负载        |
    |         version         |  str  | 是  |        frpc版本         |
    |          load1          | float | 是  |       节点1min负载        |
    |          china          |  str  | 是  |    是否为大陆节点 no/yes     |
    |          port           |  int  | 是  |       frps连接端口        |
    |    total_traffic_out    |  int  | 是  |      传出总流量 byte       |
    |          name           |  str  | 是  |         节点名称          |
    |        adminPort        |  int  | 是  |        节点管理员端口        |
    |      storage_used       |  int  | 是  |         存储已用          |
