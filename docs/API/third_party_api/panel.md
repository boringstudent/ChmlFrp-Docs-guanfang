# 获取站点延时和存活
- 接口
    > GET https://panel.api.chmlfrp.com/
- 请求参数

    无

- 返回

    **JSON:**

    |     参数     | 类型  | 必返 |  说明   |
    |:----------:|:---:|:--:|:-----:|
    |    site    | str | 是  | 站点url |
    | statusCode | str | 是  | 站点状态码 |
    |   delay    | str | 是  | 站点延时  |

