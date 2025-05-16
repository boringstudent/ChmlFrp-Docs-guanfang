# 域名解析查询
- 接口
    > /Domain_name_query.php
- 请求参数
    
    Query/表单:

    |      属性       |   类型   |  说明   |
    |:-------------:|:------:|:-----:|
    |    domain     | string |  域名   |
    | target_domain | string | 解析到域名 |
- 返回

    通常为两种情况 请注意分辨

    - 查询成功

        |        属性        |   类型    |     说明      |
        |:----------------:|:-------:|:-----------:|
        |      domain      | string  |     域名      |
        |      status      | string  |     状态      |
        |  hasSrvToFrpOne  | boolean |  是否通过Srv解析  |
        | hasCnameToFrpOne | boolean | 是否通过Cname解析 |
    - 查询失败

        |   属性    |   类型   |  说明  |
        |:-------:|:------:|:----:|
        | status  | string |  状态  |
        | message | string | 错误信息 |
