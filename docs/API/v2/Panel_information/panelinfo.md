# 面板信息
- 接口
    > GET&POST /panelinfo
- 请求参数

    无

- 返回

   **JSON**：

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |
    |  msg  | str | 是  |  返回消息  |
    | data  | map | 否  |  详见下方  |

    **data:**

    当上方 `state` 为 `success` 返回

    |      参数       | 类型  | 必返 |    说明     |
    |:-------------:|:---:|:--:|:---------:|
    | tunnel_amount | int | 是  |   总隧道数    |
    |  node_amount  | int | 是  |   总节点数    |
    |  user_amount  | int | 是  |   总用户数    |
    |     data      | map | 是  | 友情链接 详见下方 |

    **data:**

    |     参数      | 类型  | 必返 | 说明 |
    |:-----------:|:---:|:--:|:--:|
    |    name     | str | 是  | 名称 |
    | description | str | 是  | 介绍 |
    |     url     | str | 是  | 链接 |
