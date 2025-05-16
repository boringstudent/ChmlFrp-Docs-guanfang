# 用户节点数据
- 接口
    > /confignode.php
- 请求参数

    Query/表单:

    |   属性   |   类型   |  说明  |
    |:------:|:------:|:----:|
    | userid | string | 用户id |

- 返回
    通常为两种情况 请注意分辨
    - 查询成功
        
        返回一个list内含诺干个Map

        每个Map代表一条隧道

        Map:

        |  属性  |   类型   |   说明    |
        |:----:|:------:|:-------:|
        |  id  | string |  节点id   |
        | name | sting  |  节点名称   |
        | data |  list  | *所属节点隧道 |

        所属节点隧道:
        ```json
        [
            {
                "tunnel_id": "404",
                "tunnel_name": "KAgTHYe"
            },
            {
                "tunnel_id": "48888",
                "tunnel_name": "barf5BRF"
            }
        ]
        ```
        |     属性      |   类型   |  说明  |
        |:-----------:|:------:|:----:|
        |  tunnel_id  | string | 隧道id |
        | tunnel_name | srting | 隧道名称 |
    - 查询失败
        空返回