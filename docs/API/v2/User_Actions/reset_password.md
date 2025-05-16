# 重置密码
- 接口
    > GET&POST /reset_password
- 请求参数

    **Query/表单**:

    |        参数         | 类型  | 必填 |  说明  |
    |:-----------------:|:---:|:--:|:----:|
    | original_password | str | 是  | 原密码  |
    |   new_password    | str | 是  | 新密码  |
    |       token       | str | 是  | 用户令牌 |

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    |  msg  | str | 是  |  返回消息  |
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |