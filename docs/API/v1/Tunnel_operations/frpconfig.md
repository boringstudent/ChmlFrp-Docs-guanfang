# frp配置文件生成
- 接口
    > /frpconfig.php
- 请求参数

    Query/表单:
    |属性|类型|说明|
    |:--:|:--:|:--:|
    |usertoken|string|用户令牌|
    |node|string|节点名称|
- 返回
    |属性|类型|说明|
    |:--:|:--:|:--:|
    |status|number|状态码 200为成功|
    |success|boolean|状态 true为成功|
    |message|string|该节点all隧道的frp配置文件|