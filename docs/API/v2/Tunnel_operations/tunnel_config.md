# 生成配置文件
- 接口
    > GET&POST /tunnel_config
- 请求参数

    **Query/表单**:

    |      参数      | 类型  | 必填 |   说明   |
    |:------------:|:---:|:--:|:------:|
    |    token     | str | 是  |  用户令牌  |
    |     node     | str | 是  | 所属节点名称 |
    | tunnel_names | str | 否  |  详见下方  |

    **tunnel_names隧道名称 :**

    多输入由`,`分隔

    不输入默认返回所属节点all隧道

- 返回

   **JSON**：

    |  参数   | 类型  | 必返 |     说明     |
    |:-----:|:---:|:--:|:----------:|
    | code  | int | 是  |   返回状态码    |
    | state | str | 是  |   请求是否成功   |
    |  msg  | str | 是  |    返回消息    |
    | data  | str | 否  | frpc.ini内容 |