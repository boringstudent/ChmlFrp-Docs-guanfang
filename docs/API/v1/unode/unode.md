# 节点信息
- 接口
    > /unode.php
- 返回
    返回一个list内含诺干个Map

    每个Map代表一条节点

    Map参数:
    |属性|类型|说明|
    |:--:|:--:|:--:|
    |apitoken|string|节点frp-api token|
    |nodetoken|string|节点frp token|
    |id|number|节点id|
    |ip|string|节点地址|
    |name|string|节点名称|
    |area|string|节点所属地区|
    |china|string|是否是国内节点<yes/no>|
    |fangyu|string|是否有防御<true/false>|
    |http_port|number|节点http端口|
    |https_port|number|节点https端口|
    |nodegroup|string|节点可使用用户组|
    |notes|string|节点简介|
    |port|number|节点frp端口|
    |rport|string|节点frp端口限制|
    |udp|string|节点是否可以使用upd<true/false>|
    |wed|string|节点是否可以建站<yes/no>|