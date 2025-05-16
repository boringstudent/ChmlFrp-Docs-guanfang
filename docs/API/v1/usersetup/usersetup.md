# 面板设置
- 接口
    > /usersetup.php
- 请求参数

    Query/表单:
    |属性|类型|说明|
    |:--:|:--:|:--:|
    |usertoken|string|用户令牌|
    |url|string|详见下表|
    |meg|string|详见下表|
    |isTrusted|boolean|值为true|

    url/meg:
    |url|meg|
    |:-:|:-:|
    |透明度|Element_transparency|
    |用户背景图片url|background_img|
- 返回
    |属性|类型|说明|
    |:--:|:--:|:--:|
    |code|number|状态码|
    |error|string|返回信息|