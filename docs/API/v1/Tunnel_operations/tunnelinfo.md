# 隧道信息
- 接口
    > /tunnelinfo.php
- 请求参数

    Query/表单:
    |属性|说明|
    |:--:|:--:|
    |id|隧道识别id|
- 返回

    通常为两种情况 请注意分辨

    此接口可以使用返回的code参数识别

    - 查询成功返回
        |属性|类型|说明|
        |:--:|:--:|:--:|
        |code|number|值为200|
        |area|string|节点所在地|
        |ip|string|节点的地址|
        |iparea|string|隧道连接地址|
        |name|string|节点名称|
        |tunnel_id|string|隧道识别id|
        |tunnel_name|string|隧道名称|
        |tunnel_type|string|隧道类型|
        |tunnel_ap|string|frp额外参数|
        |tunnel_localip|string|隧道本地IP|
        |tunnel_nport|string|隧道本地端口|
    - 查询失败返回
        |属性|类型|说明|
        |:--:|:--:|:--:|
        |code|number|状态码|
        |error|string|错误信息|
