# 签到信息
- 接口
    > /qdxx.php
- 请求参数

    Query/表单:

    |   属性   |   类型   |  说明  |
    |:------:|:------:|:----:|
    | userid | string | 用户id |
- 返回

    |            属性             |   类型    |   说明   |
    |:-------------------------:|:-------:|:------:|
    |           code            | number  |  状态码   |
    |    is_signed_in_today     | boolean | 今天是否签到 |
    |     last_sign_in_time     | string  | 最后签到时间 |
    |       total_points        | number  |  累计积分  |
    | count_of_matching_records | number  | 今天签到人数 |
    |      total_sign_ins       | string  | 累计签到次数 |