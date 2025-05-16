# 删除免费二级域名
- 接口
    > POST /delete_free_subdomain
- 请求参数

    **JSON:**

    |   参数    | 类型  | 必传 |   说明    |
    |:-------:|:---:|:--:|:-------:|
    |  token  | str | 是  | 用户Token |
    | domain  | int | 是  |   主域名   |
    | record  | str | 是  |   记录    |

- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | state | str  | 是  | 请求是否成功 |