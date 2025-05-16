# 新建隧道
- 接口
    > /tunnel.php
- 请求参数

    Query/表单:
    |属性|类型|说明|
    |:--:|:--:|:--:|
    |token|string|用户令牌|
    |userid|number|用户id|
    |type|string|隧道类型|
    |node|string|节点名称|
    |name|string|隧道名称|
    |ap|string|frp额外参数|
    |dorp|number|外网端口/绑定域名|
    |localip|string|内网地址|
    |nport|string|内网端口|
    |encryption|string|数据加密(true/false)|
    |compression|string|数据压缩(true/false)|
    |domainNameLabel|string|*使用域名类型|

    ```
    使用域名类型：
    该参数只有http/https类型隧道才需要填写
    只能填写自定义
    ```
- 返回

    该接口无返回