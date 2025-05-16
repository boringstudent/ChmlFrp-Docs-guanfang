# 修改隧道
- 接口
    > /cztunnel.php
- 请求参数
    ```
    tip:
    这个接口 Query/表单 参数和上一个一样
    只是多了一个tunnelid 和token改为了usertoken
    ```

    Query/表单:
    |属性|类型|说明|
    |:--:|:--:|:--:|
    |usertoken|string|用户令牌|
    |userid|number|用户id|
    |type|string|隧道类型|
    |node|string|节点名称|
    |name|string|隧道名称|
    |ap|string|frp额外参数|
    |dorp|number|外网端口/绑定域名|
    |localip|string|内网地址|
    |nport|string|内网端口|
    |tunnelid|string|需要修改的隧道识别id|
    |encryption|string|数据加密(true/false)|
    |compression|string|数据压缩(true/false)|
- 返回

    该接口无返回