# 用户流量消耗

- 接口
 > /flow_zong.php
- 请求参数

    Query/表单:

    |    属性     |   类型   |  说明  |
    |:---------:|:------:|:----:|
    | usertoken | string | 用户令牌 |
- 返回

    通常为两种情况 请注意分辨

    此接口可以使用返回的status参数识别
    - 查询成功

        |   属性   |   类型   |    说明     |
        |:------:|:------:|:---------:|
        | status | string | 值为success |
        | userid | string |   用户id    |
        |  data  |  list  |   *流量数据   |
    - 查询失败

        |   属性    |   类型   |  说明  |
        |:-------:|:------:|:----:|
        | status  | string | 查询状态 |
        | message | string | 错误信息 |
    
    流量数据:
    ```json
    [
        {
            "time": "08-25",
            "traffic_in": 0,
            "traffic_out": 0
        },
        {
            "time": "08-26",
            "traffic_in": 0,
            "traffic_out": 0
        },
        {
            "time": "08-27",
            "traffic_in": 0,
            "traffic_out": 0
        }
    ]
    ```
    |     属性      |   类型   |  说明  |
    |:-----------:|:------:|:----:|
    |    time     | string |  日期  |
    | traffic_in  | number | 下载数据 |
    | traffic_out | number | 上传数据 |