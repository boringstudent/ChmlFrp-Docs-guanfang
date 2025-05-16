# 兑换码兑换
- 接口
    > /giftcode.php
- 请求参数
    
    Query/表单:

    |    属性     |   类型   |  说明  |
    |:---------:|:------:|:----:|
    |  userid   | string | 用户id |
    | usertoken | string | 用户令牌 |
    | giftcode  | string | 兑换码  |
- 返回

    通常为两种情况 请注意分辨

    - 查询成功

        |     属性     |   类型    |   说明   |
        |:----------:|:-------:|:------:|
        |  success   | boolean | 值为true |
        |  message   | string  |  返回信息  |
        | gift_value | string  |  兑换内容  |
    - 查询失败

        |   属性    |   类型    |   说明    |
        |:-------:|:-------:|:-------:|
        | success | boolean | 值为false |
        | message | string  |  错误信息   |