# 获取可用域名列表
- 接口
    > GET&POST /list_available_domains
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

    |    参数     |  类型  | 必返 |  说明   |
    |:---------:|:----:|:--:|:-----:|
    |    id     | int  | 是  | 域名编号  |
    |  domain   | str  | 是  |  域名   |
    |  remarks  | dict | 是  |  介绍   |
    | icpFiling | bool | 是  | 是否有备案 |