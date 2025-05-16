# 用户信息

- 接口
    > GET&POST /userinfo
- 请求参数

    **Query/表单**:

    |  参数   | 类型  | 必填 |  说明  |
    |:-----:|:---:|:--:|:----:|
    | token | str | 是  | 用户令牌 |

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |
    |  msg  | str | 是  |  返回消息  |
    | data  | map | 否  |  详见下方  |

    **data:**

    当上方 `state` 为 `success` 返回

    |       参数       |    类型    | 必返 |     说明      |
    |:--------------:|:--------:|:--:|:-----------:|
    |       id       |   int    | 是  |    用户的id    |
    |    username    |   str    | 是  |     用户名     |
    |   usertoken    |   str    | 是  |    用户令牌     |
    |     email      |   str    | 是  |    用户邮箱     |
    |       qq       |   str    | 是  |    用户QQ号    |
    |   usergroup    |   str    | 是  |     用户组     |
    |      term      |   str    | 是  |   用户组到期时间   |
    |    realname    |   str    | 是  |    实名状态     |
    |     tunnel     |   int    | 是  |    用户隧道数    |
    |  tunnnelCount  |   int    | 是  |   用户隧道上限    |
    | totalCurConns  |   int    | 是  | 用户所有隧道被连接数  |
    |  total_upload  |   int    | 是  | 累计上传量(Byte) |
    | total_download |   int    | 是  | 累计下载量(Byte) |
    |   bandwidth    |   int    | 是  |    详见下方     |
    |    integral    |   int    | 是  |    用户积分     |
    |    userimg     |   str    | 是  |   用户头像url   |
    |    regtime     |   str    | 是  |   用户注册时间    |
    | login_attempts |   int    | 是  |   无用参数 返0   |
    |    password    |   null   | 是  |    无用参数     |
    | realname_count |   int    | 是  |   无用参数 返0   |
    |      scgm      | str/null | 是  |    无用参数     |
    |    t_token     |   null   | 是  |    无用参数     |

    **注:bandwidth**
    用户带宽限制
    
    国内带宽限制(Mdps): 该值*1
    
    国外(非大陆)宽带限制(Mdps): 该值*4