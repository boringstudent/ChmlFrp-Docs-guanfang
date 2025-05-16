# 创建免费二级域名
- 接口
    > POST /create_free_subdomain
- 请求参数

    **JSON:**

    |   参数    | 类型  | 必传 |   说明    |
    |:-------:|:---:|:--:|:-------:|
    |  token  | str | 是  | 用户Token |
    | domain  | int | 是  |   主域名   |
    | record  | str | 是  |   记录    |
    |  type   | str | 是  |   类型    |
    | target  | str | 是  |   目标    |
    |   ttl   | str | 是  |   TTL   |
    | remarks | str | 是  |   介绍    |

    - 注：
    
    TTL仅允许1分钟、2分钟、5分钟、10分钟、15分钟、30分钟、1小时、2小时、5小时、12小时、1天。

    type仅允许A、AAAA、CNAME、SRV。

- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | state | str  | 是  | 请求是否成功 |