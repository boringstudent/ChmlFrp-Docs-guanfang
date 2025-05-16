# 用户信息
- 接口
    > /userinfo.php
- 请求参数

    Query/表单:

    |    属性     |   类型   |  说明  |
    |:---------:|:------:|:----:|
    | usertoken | string | 用户令牌 |
- 返回

    通常为两种情况 请注意分辨
    - 查询成功返回

        ```
        tip:
        和/login接口成功时返回基本一样
        只是少了token,code,background_img
        ```

        |     属性      |   类型   |      说明       |
        |:-----------:|:------:|:-------------:|
        |   userid    | number |     用户id      |
        |  usergroup  | string |     用户权限组     |
        |    term     | string |   用户权限组过期时间   |
        |     qq      | string |    用户绑定QQ号    |
        |    email    | string |    用户绑定邮箱     |
        |   tunnel    | number |   用户可开通的隧道数   |
        | tunnelstate | number |   用户已开通的隧道数   |
        |   message   | string |     返回信息      |
        |   userimg   | string |    用户头像url    |
        |  username   | string |     用户名称      |
        |  bandwidth  | number | *用户带宽限制(Mdps) |
        |  realname   | string |    用户实名状态     |

    - 查询失败返回

        |   属性    |   类型    |     说明     |
        |:-------:|:-------:|:----------:|
        | status  | number  |    状态码     |
        | success | boolean | 状态 值为false |
        | message | string  |    错误信息    |

    ```
    用户带宽限制:
    国内带宽限制: bandwidth*1
    国外宽带限制: bandwidth*4
    ```