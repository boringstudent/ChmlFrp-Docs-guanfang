# 获取用户免费二级域名
- 接口
    > GET&POST /get_user_free_subdomains
- 请求参数

    **JSON:**

    |   参数    | 类型  | 必传 |   说明    |
    |:-------:|:---:|:--:|:-------:|
    |  token  | str | 是  | 用户Token |

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

    |   参数    |  类型  | 必返 |  说明  |
    |:-------:|:----:|:--:|:----:|
    |   id    | str  | 是  | 域名编号 |
    | userid  | int  | 是  | 用户编号 |
    | domain  | list | 否  | 主域名  |
    | record  | str  | 是  |  记录  |
    |  type   | str  | 是  |  类型  |
    | target  | int  | 是  |  目标  |
    | remarks | list | 是  |  介绍  |
    |   ttl   | str  | 是  | TTL  |
