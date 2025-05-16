# 节点状态详情

- 接口
    > GET&POST /node_status_info
- 请求参数

    **JSON**:

    |  参数  | 类型  | 必填 |          说明          |
    |:----:|:---:|:--:|:--------------------:|
    | node | str | 是  |         节点名称         |

- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | data  | dict | 否  |  详见下方  |
    | state | str  | 是  | 请求是否成功 |

    **data**

    当上方 `state` 为 `success` 返回

    |      参数      |  类型  | 必返 |    说明    |
    |:------------:|:----:|:--:|:--------:|
    | node_details | dict | 是  |  节点详情数据  |
    | status_list  | list | 是  | 节点状态详情内容 |

    **node_details**

    |        参数         |  类型   | 必返 |     说明      |
    |:-----------------:|:-----:|:--:|:-----------:|
    | total_traffic_in  |  int  | 是  |   今日总下载流量   |
    | total_traffic_out |  int  | 是  |   今日总上传流量   |
    |     cpu_info      |  str  | 是  |   节点CPU型号   |
    |     num_cores     |  int  | 是  |  节点CPU核心数   |
    |    coordinates    |  str  | 是  |    节点经纬度    |
    |   storage_total   |  int  | 是  |     总储存     |
    |       load5       | float | 是  | 节点5min的总负载  |
    |      version      |  str  | 是  |  节点frps版本   |
    |       load1       | float | 是  | 节点1min的总负载  |
    |  uptime_seconds   |  int  | 是  |   节点运行时间    |
    |   memory_total    |  int  | 是  |     总内存     |
    |   storage_used    |  int  | 是  |    已用储存     |
    |      load15       | float | 是  | 节点15min的总负载 |

    **status_list**
    中带有多个dict

    |                参数                |  类型   | 必返 |     说明      |
    |:--------------------------------:|:-----:|:--:|:-----------:|
    |           proxy_https            |  int  | 是  | 映射的https端口数 |
    | download_bandwidth_usage_percent |  int  | 是  |  下载带宽使用百分比  |
    |            cur_conns             |  int  | 是  |     连接数     |
    |           sent_packets           |  int  | 是  |  发送的数据包数量   |
    |           memory_used            |  int  | 是  |    已用内存     |
    |           active_conn            |  int  | 是  |   活跃的连接数    |
    |           recv_packets           |  int  | 是  |   接收的数据包数   |
    |            proxy_tcp             |  int  | 是  |  映射的tcp端口数  |
    |            proxy_udp             |  int  | 是  |  映射的udp端口数  |
    |            proxy_http            |  int  | 是  | 映射的http端口数  |
    |  upload_bandwidth_usage_percent  |  int  | 是  |  上传带宽使用百分比  |
    |            cpu_usage             | float | 是  |    CPU负载    |
    |           page_tables            |  int  | 是  | 页面表占用的内存大小  |
    |           passive_conn           |  int  | 是  |    被动连接数    |
    |            timestamp             |  str  | 是  |   数据统计时间    |
    |          client_counts           |  int  | 是  |   映射客户端数    |