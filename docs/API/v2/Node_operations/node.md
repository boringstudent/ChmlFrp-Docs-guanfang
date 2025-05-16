# 节点列表
- 接口
    > GET&POST /node
- 请求参数

    无

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    |  msg  | str | 是  |  返回消息  |
    | code  | int | 是  | 返回状态码  |
    | data  | map | 否  |  详见下方  |
    | state | str | 是  | 请求是否成功 |

    **data**

    当上方 `state` 为 `success` 返回

    |    参数     |  类型  | 必返 |        说明        |
    |:---------:|:----:|:--:|:----------------:|
    |    id     | int  | 是  |       节点ID       |
    |   name    | str  | 是  |       节点名        |
    |   area    | str  | 是  |       节点地区       |
    | nodegroup | str  | 是  |      节点权限组       |
    |   china   | str  | 是  | 带宽限速是否为中国 no/yes |
    |    web    | str  | 是  |  是否允许建站 no/yes   |
    |    udp    | bool | 是  |     是否允许UDP      |
    |  fangyu   | bool | 是  |      是否有防御       |
    |   notes   | str  | 是  |        介绍        |