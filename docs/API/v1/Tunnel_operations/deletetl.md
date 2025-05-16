# 删除隧道
- 接口
    > /deletetl.php
- 请求参数

    Query/表单:
    |属性|类型|说明|
    |:--:|:--:|:--:|
    |token|string|用户令牌|
    |userid|string|用户id|
    |nodeid|string|隧道识别id|
- 返回
    |属性|类型|说明|
    |:--:|:--:|:--:|
    |code|number|状态码 200为成功|
    |error|string|返回信息|