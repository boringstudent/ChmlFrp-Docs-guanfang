# 用户隧道信息
- 接口
    > /usertunnel.php
- 请求参数

   Query/表单:
    |属性|类型|说明|
    |:--:|:--:|:--:|
    |token|string|用户令牌|
- 返回

    通常为两种情况 请注意分辨

    - 查询成功返回
    
        返回一个list内含诺干个Map

        每个Map代表一条隧道

        Map参数:
        |属性|类型|说明|
        |:--:|:--:|:--:|
        |id|string|隧道识别id|
        |name|string|隧道名称|
        |node|string|节点名称|
        |type|string|隧道类型|
        |ap|string|frp额外参数|
        |ip|string|该隧道的连接地址|
        |localip|string|隧道本地IP|
        |nport|string|隧道本地端口|
    - 查询失败返回
        |属性|类型|说明|
        |:--:|:--:|:--:|
        |code|number|状态码|
        |error|string|错误信息|