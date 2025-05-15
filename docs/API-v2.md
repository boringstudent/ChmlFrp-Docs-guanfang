# API v2

统一调用地址
> https://cf-v2.uapis.cn/

## 登录
- 接口
    > GET&POST /login

- 请求参数

    **Query表单**:

    |    参数    | 类型  | 必填 |   说明   |
    |:--------:|:---:|:--:|:------:|
    | username | str | 是  | 用户名或邮箱 |
    | password | str | 是  |   密码   |

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

## 用户信息

- 接口
    > GET&POST /userinfo
- 请求参数

    **Query/表单**:

    |  参数   | 类型  | 必填 |  说明  |
    |:-----:|:---:|:--:|:----:|
    | token | str | 是  | 用户令牌 |

- 返回

  [**同上 /login**](#登录)

## 重置令牌
- 接口
    > GET&POST /retoken
- 请求参数

    **Query/表单**:

    |  参数   | 类型  | 必填 |  说明  |
    |:-----:|:---:|:--:|:----:|
    | token | str | 是  | 用户令牌 |

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    |  msg  | str | 是  |  返回消息  |
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |

## 重置密码
- 接口
    > GET&POST /reset_password
- 请求参数

    **Query/表单**:

    |        参数         | 类型  | 必填 |  说明  |
    |:-----------------:|:---:|:--:|:----:|
    | original_password | str | 是  | 原密码  |
    |   new_password    | str | 是  | 新密码  |
    |       token       | str | 是  | 用户令牌 |

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    |  msg  | str | 是  |  返回消息  |
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |

## 修改用户名
- 接口
    > GET&POST /update_username
- 请求参数

    **Query/表单**:

    |      参数      | 类型  | 必填 |  说明  |
    |:------------:|:---:|:--:|:----:|
    |    token     | str | 是  | 用户令牌 |
    | new_username | str | 是  | 新用户名 |

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    |  msg  | str | 是  |  返回消息  |
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |

## 修改QQ
- 接口
    > GET&POST /update_qq
- 请求参数

    **Query/表单**:

    |   参数   | 类型  | 必填 |  说明  |
    |:------:|:---:|:--:|:----:|
    | token  | str | 是  | 用户令牌 |
    | new_qq | int | 是  | 新QQ  |

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    |  msg  | str | 是  |  返回消息  |
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |

## 重置头像
- 接口
    > GET&POST /update_userimg
- 请求参数

    **Query/表单**:

    |     参数      | 类型  | 必填 |   说明   |
    |:-----------:|:---:|:--:|:------:|
    |    token    | str | 是  |  用户令牌  |
    | new_userimg | str | 是  | 头像图片链接 |

    注：这个API会验证你的头像图片链接是否可以正常访问(获取请求头)，超时时间5秒。请确保您的图片链接支持他人访问，且可以正常访问。API服务器位于中国宁波，请确定链接不屏蔽此地区。

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    |  msg  | str | 是  |  返回消息  |
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |

## 获取消息
- 接口
    > GET&POST /messages
- 请求参数

    **Query/表单**:

    |     参数      | 类型  | 必填 |   说明   |
    |:-----------:|:---:|:--:|:------:|
    |    token    | str | 是  |  用户令牌  |

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    |  msg  | str | 是  |  返回消息  |
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |
    | data  | map | 否  |  详见下方  |

    **data:**
    
    当上方 `state` 为 `success` 返回
    
    |   参数    | 类型  | 必返 |      说明      |
    |:-------:|:---:|:--:|:------------:|
    |   id    | int | 是  |     消息id     |
    | userid  | int | 是  |     详见下方     |
    | content | str | 是  |     消息内容     |
    | quanti  | str | 是  | 无用参数 可能在后续删除 |
    |  time   | str | 是  |   消息的发送时间    |

    **userid消息类型**

    当为0时 该消息是公开消息

    当不为0时 该消息是私有消息

## 隧道列表

- 接口
    > GET&POST /tunnel
- 请求参数

    **Query/表单**:

    |  参数   | 类型  | 必填 |  说明  |
    |:-----:|:---:|:--:|:----:|
    | token | str | 是  | 用户令牌 |

- 返回

    **JSON**：

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    | code  | int  | 是  | 返回状态码  |
    | state | str  | 是  | 请求是否成功 |
    |  msg  | str  | 是  |  返回消息  |
    | data  | list | 否  |  详见下方  |

    **data:**：

    当上方 `state` 为 `success` 返回
    
    list中有若干个map 每个map代表一条隧道

    map参数详见下方

    |        参数         |    类型    | 必返 |     说明     |
    |:-----------------:|:--------:|:--:|:----------:|
    |        id         |   int    | 是  |    隧道id    |
    |       name        |   str    | 是  |    隧道名     |
    |       node        |   str    | 是  |    所属节点    |
    |     nodestate     | str/null | 是  |    节点状态    |
    |       type        |   str    | 是  |    隧道类型    |
    |      localip      |   str    | 是  |    内网ip    |
    |       nport       |   int    | 是  |    内网端口    |
    |       dorp        |   str    | 是  | 外网端口/连接域名  |
    |        ip         | str/null | 是  |   所属节点ip   |
    |    encryption     |   str    | 是  |   是否数据加密   |
    |    compression    |   str    | 是  |   是否数据压缩   |
    |        ap         |   str    | 是  |  frp额外参数   |
    |       state       |   str    | 是  |    隧道状态    |
    |      uptime       | str/null | 是  |   上次启动时间   |
    |  client_version   |   str    | 是  | 上次启动frpc版本 |
    |      userid       |   int    | 是  |  隧道拥有者id   |
    | today_traffic_in  |   int    | 是  | 今日该隧道上传流量  |
    | today_traffic_out |   int    | 是  | 今日该隧道下载流量  |
    |     cur_conns     |   int    | 是  |  当前隧道连接数   |

## 创建隧道
- 接口
    > POST /create_tunnel
- 请求参数

    **JSON**:

    |     参数      |  类型  | 必填 |   说明    |
    |:-----------:|:----:|:--:|:-------:|
    |    token    | str  | 是  |  用户令牌   |
    | tunnelname  | str  | 是  |  隧道名称   |
    |    node     | str  | 是  |  节点名称   |
    |  porttype   | str  | 是  |  详见下方   |
    |   localip   | str  | 是  |  本地ip   |
    |  localport  | int  | 是  |  本地端口   |
    | remoteport  | int  | 否  |  详见下方   |
    | banddomain  | str  | 否  |  详见下方   |
    | encryption  | bool | 是  | 是否数据加密  |
    | compression | bool | 是  | 是否数据压缩  |
    | extraparams | str  | 是  | frp额外参数 |

    **porttyp 隧道类型 : 值为tcp/udp/http/https**

    **banddomain 绑定域名 : 当porttype值为http/https需填**

    **remoteport内网端口 : 当porttype值为tcp/udp需填**

- 返回
    
    **JSON**：

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |
    |  msg  | str | 是  |  返回消息  |
    | data  | map | 否  |  详见下方  |
    
    **data**

    当上方 `state` 为 `success` 返回

    |        参数         |  类型  | 必返 |     说明     |
    |:-----------------:|:----:|:--:|:----------:|
    |       name        | str  | 是  |    隧道名     |
    |       node        | str  | 是  |    所属节点    |
    |       type        | str  | 是  |    隧道类型    |
    |      localip      | str  | 是  |    内网ip    |
    |       nport       | int  | 是  |    内网端口    |
    |       dorp        | str  | 是  | 外网端口/连接域名  |
    |    encryption     | str  | 是  |   是否数据加密   |
    |    compression    | str  | 是  |   是否数据压缩   |
    |        ap         | str  | 是  |  frp额外参数   |
    |       state       | str  | 是  |    隧道状态    |
    |  client_version   | str  | 是  | 上次启动frpc版本 |
    |      userid       | int  | 是  |  隧道拥有者id   |
    | today_traffic_in  | int  | 是  | 今日该隧道上传流量  |
    | today_traffic_out | int  | 是  | 今日该隧道下载流量  |
    |     cur_conns     | int  | 是  |  当前隧道连接数   |
    |        id         | null | 是  |   值为null   |
    |        ip         | null | 是  |   值为null   |
    |     nodestate     | null | 是  |   值为null   |
    |      uptime       | null | 是  |   值为null   |

## 修改隧道
- 接口
    > POST /update_tunnel
- 请求参数

    **Query/表单**:

    |     参数      |  类型  | 必填 |   说明    |
    |:-----------:|:----:|:--:|:-------:|
    |    token    | str  | 是  |  用户令牌   |
    | tunnelname  | str  | 是  |  隧道名称   |
    |    node     | str  | 是  |  节点名称   |
    |  porttype   | str  | 是  |  详见下方   |
    |   localip   | str  | 是  |  本地ip   |
    |  localport  | int  | 是  |  本地端口   |
    | remoteport  | int  | 是  |  内网端口   |
    | encryption  | bool | 是  | 是否数据加密  |
    | compression | bool | 是  | 是否数据压缩  |
    | extraparams | str  | 是  | frp额外参数 |

    **porttype隧道类型 : 值为tcp/udp/http/https**

    暂不支持http/https类型隧道

- 返回
 
    **JSON**：

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |
    |  msg  | str | 是  |  返回消息  |
    | data  | map | 否  |  详见下方  |

    **data**

    当上方 `state` 为 `success` 返回

    |        参数         |  类型  | 必返 |     说明     |
    |:-----------------:|:----:|:--:|:----------:|
    |       name        | str  | 是  |    隧道名     |
    |       node        | str  | 是  |    所属节点    |
    |       type        | str  | 是  |    隧道类型    |
    |      localip      | str  | 是  |    内网ip    |
    |       nport       | int  | 是  |    内网端口    |
    |       dorp        | str  | 是  |    外网端口    |
    |    encryption     | str  | 是  |   是否数据加密   |
    |    compression    | str  | 是  |   是否数据压缩   |
    |        ap         | str  | 是  |  frp额外参数   |
    |       state       | str  | 是  |    隧道状态    |
    |  client_version   | str  | 是  | 上次启动frpc版本 |
    |      userid       | int  | 是  |  隧道拥有者id   |
    | today_traffic_in  | int  | 是  | 今日该隧道上传流量  |
    | today_traffic_out | int  | 是  | 今日该隧道下载流量  |
    |     cur_conns     | int  | 是  |  当前隧道连接数   |
    |        id         | null | 是  |   值为null   |
    |        ip         | null | 是  |   值为null   |
    |     nodestate     | null | 是  |   值为null   |
    |      uptime       | null | 是  |   值为null   |

## 删除隧道
- 接口
    > POST /delete_tunnel

    警告！！该接口还在开发中，暂时无法使用！！
    
    可以考虑使用APIv1

## 生成frpc.ini
- 接口
    > GET&POST /tunnel_config
- 请求参数

    **Query/表单**:

    |      参数      | 类型  | 必填 |   说明   |
    |:------------:|:---:|:--:|:------:|
    |    token     | str | 是  |  用户令牌  |
    |     node     | str | 是  | 所属节点名称 |
    | tunnel_names | str | 否  |  详见下方  |

    **tunnel_names隧道名称 :**

    多输入由`,`分隔

    不输入默认返回所属节点all隧道

- 返回

   **JSON**：

    |  参数   | 类型  | 必返 |     说明     |
    |:-----:|:---:|:--:|:----------:|
    | code  | int | 是  |   返回状态码    |
    | state | str | 是  |   请求是否成功   |
    |  msg  | str | 是  |    返回消息    |
    | data  | str | 否  | frpc.ini内容 |

## 面板信息
- 接口
    > GET&POST /panelinfo
- 请求参数

    无

- 返回

   **JSON**：

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    | code  | int | 是  | 返回状态码  |
    | state | str | 是  | 请求是否成功 |
    |  msg  | str | 是  |  返回消息  |
    | data  | map | 否  |  详见下方  |

    **data:**

    当上方 `state` 为 `success` 返回

    |      参数       | 类型  | 必返 |    说明     |
    |:-------------:|:---:|:--:|:---------:|
    | tunnel_amount | int | 是  |   总隧道数    |
    |  node_amount  | int | 是  |   总节点数    |
    |  user_amount  | int | 是  |   总用户数    |
    |     data      | map | 是  | 友情链接 详见下方 |

    **data:**

    |     参数      | 类型  | 必返 | 说明 |
    |:-----------:|:---:|:--:|:--:|
    |    name     | str | 是  | 名称 |
    | description | str | 是  | 介绍 |
    |     url     | str | 是  | 链接 |

## API状态
- 接口
    > GET&POST /api/server-status
- 请求参数

    无

- 返回

   **JSON**：

    |     参数     |    类型     | 必返 |   说明    |
    |:----------:|:---------:|:--:|:-------:|
    |  metrics   |    map    | 是  |  详见下方   |
    | serverName |    str    | 是  | 当前API站点 |
    |    load    | float或int | 是  |   总负载   |

    **load:**

    |        参数        |  类型   | 必返 |   说明    |
    |:----------------:|:-----:|:--:|:-------:|
    |       cpu        | float | 是  |  cpu负载  |
    |      memory      | float | 是  |  内存压力   |
    |      steal       | float | 是  | 宿主机抢占资源 |
    |    ioLatency     | float | 是  |  IO延迟   |
    | threadContention | float | 是  |  线程征用   |

## 节点列表
- 接口
    > GET&POST /node
- 请求参数

    无

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    |  msg  | str | 是  |  返回消息  |
    | code  | int | 是  | 返回状态码  |
    | data  | map | 否  |  详见下方  |
    | state | str | 是  | 请求是否成功 |

    **data**

    当上方 `state` 为 `success` 返回

    |    参数     |  类型  | 必返 |        说明        |
    |:---------:|:----:|:--:|:----------------:|
    |    id     | int  | 是  |       节点ID       |
    |   name    | str  | 是  |       节点名        |
    |   area    | str  | 是  |       节点地区       |
    | nodegroup | str  | 是  |      节点权限组       |
    |   china   | str  | 是  | 带宽限速是否为中国 no/yes |
    |    web    | str  | 是  |  是否允许建站 no/yes   |
    |    udp    | bool | 是  |     是否允许UDP      |
    |  fangyu   | bool | 是  |      是否有防御       |
    |   notes   | str  | 是  |        介绍        |

## 节点详情
- 接口
    > GET&POST /nodeinfo
- 请求参数

    **Query/表单**:

    |  参数   | 类型  | 必填 |  说明  |
    |:-----:|:---:|:--:|:----:|
    | token | str | 是  | 用户令牌 |
    | node  | str | 是  | 节点名  |

- 返回
    **JSON:**

    |  参数   | 类型  | 必返 |   说明   |
    |:-----:|:---:|:--:|:------:|
    |  msg  | str | 是  |  返回消息  |
    | code  | int | 是  | 返回状态码  |
    | data  | map | 否  |  详见下方  |
    | state | str | 是  | 请求是否成功 |

    注：非会员token无法查看vip节点详情

    **data**

    当上方 `state` 为 `success` 返回

    |           参数            |  类型   | 必返 |          说明           |
    |:-----------------------:|:-----:|:--:|:---------------------:|
    |           udp           | bool  | 是  |        是否允许UDP        |
    |    total_traffic_in     |  int  | 是  |      传入总流量 byte       |
    |          notes          |  str  | 是  |          介绍           |
    |        cpu_info         |  str  | 是  |         CPU型号         |
    |         fangyu          | bool  | 是  |         是否有防御         |
    |          rport          |  str  | 是  |        外网端口范围         |
    |      storage_total      |  int  | 是  |      节点存储大小 byte      |
    |        nodegroup        |  str  | 是  |         节点权限组         |
    |        apitoken         |  str  | 是  |       api的token       |
    |           web           |  str  | 是  |    是否支持web no/yes     |
    |          ipv6           |  str  | 是  |    IPv6地址 没有返回null    |
    |        toowhite         | bool  | 是  |       节点是否需要过白        |
    |     uptime_seconds      |  int  | 是  |         在线时长          |
    |           id            |  int  | 是  |         节点ID          |
    |          state          |  str  | 是  | 节点是否在线 online/offline |
    | bandwidth_usage_percent | float | 是  |        带宽使用率%         |
    |      memory_total       |  int  | 是  |       内存大小 byte       |
    |        nodetoken        |  str  | 是  |        节点token        |
    |         load15          | float | 是  |       节点15min负载       |
    |          area           |  str  | 是  |         节点地址          |
    |         realIp          |  str  | 是  |         节点ip          |
    |           ip            |  str  | 是  |         节点域名          |
    |        num_cores        |  int  | 是  |       节点CPU核心数        |
    |          load5          | float | 是  |       节点5min负载        |
    |         version         |  str  | 是  |        frpc版本         |
    |          load1          | float | 是  |       节点1min负载        |
    |          china          |  str  | 是  |    是否为大陆节点 no/yes     |
    |          port           |  int  | 是  |       frps连接端口        |
    |    total_traffic_out    |  int  | 是  |      传出总流量 byte       |
    |          name           |  str  | 是  |         节点名称          |
    |        adminPort        |  int  | 是  |        节点管理员端口        |
    |      storage_used       |  int  | 是  |         存储已用          |

## 节点状态
- 接口
    > GET&POST /node_stats
- 请求参数

    无

- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | data  | list | 否  |  详见下方  |
    | state | str  | 是  | 请求是否成功 |

    **data**

    当上方 `state` 为 `success` 返回

    |           参数            |  类型   | 必返 |         说明          |
    |:-----------------------:|:-----:|:--:|:-------------------:|
    |    total_traffic_in     |  int  | 是  |    今日总下载流量 byte     |
    |    total_traffic_out    |  int  | 是  |    今日总上传流量 byte     |
    |       cur_counts        |  int  | 是  |       活跃的连接数        |
    |        node_name        |  str  | 是  |         节点名         |
    |           id            |  int  | 是  |        节点ID         |
    |          state          |  str  | 是  | 节点状态 offline或online |
    | bandwidth_usage_percent |  int  | 是  |        带宽负载         |
    |        cpu_usage        | float | 是  |        CPU负载        |
    |        nodegroup        |  str  | 是  |        节点权限         |
    |      client_counts      |  str  | 是  |       节点在线客户端       |

## 节点在线率
- 接口
    > GET&POST /node_uptime
- 请求参数

    **JSON**:

    |  参数  | 类型  | 必填 |          说明          |
    |:----:|:---:|:--:|:--------------------:|
    | time | int | 是  | 返回多少天的uptime数据，最大90天 |
    | node | str | 是  |         节点名称         |


- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | data  | list | 否  |  详见下方  |
    | state | str  | 是  | 请求是否成功 |

    **data**

    当上方 `state` 为 `success` 返回

    |       参数       |  类型  | 必返 |         说明          |
    |:--------------:|:----:|:--:|:-------------------:|
    |   node_name    | str  | 是  |         节点名         |
    |     state      | str  | 是  | 节点状态 offline或online |
    |       id       | int  | 是  |        节点ID         |
    | history_uptime | list | 是  |     节点uptime统计      |
    |     group      | int  | 是  |        节点权限组        |

    **history_uptime**

    |     参数      |  类型   | 必返 |    说明     |
    |:-----------:|:-----:|:--:|:---------:|
    | recorded_at |  str  | 是  |   当天日期    |
    |   uptime    | float | 是  | 该时间的节点在线率 |

## 节点状态详情

- 接口
    > GET&POST /node_status_info
- 请求参数

    **JSON**:

    |  参数  | 类型  | 必填 |          说明          |
    |:----:|:---:|:--:|:--------------------:|
    | node | str | 是  |         节点名称         |

- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | data  | dict | 否  |  详见下方  |
    | state | str  | 是  | 请求是否成功 |

    **data**

    当上方 `state` 为 `success` 返回

    |      参数      |  类型  | 必返 |    说明    |
    |:------------:|:----:|:--:|:--------:|
    | node_details | dict | 是  |  节点详情数据  |
    | status_list  | list | 是  | 节点状态详情内容 |

    **node_details**

    |        参数         |  类型   | 必返 |     说明      |
    |:-----------------:|:-----:|:--:|:-----------:|
    | total_traffic_in  |  int  | 是  |   今日总下载流量   |
    | total_traffic_out |  int  | 是  |   今日总上传流量   |
    |     cpu_info      |  str  | 是  |   节点CPU型号   |
    |     num_cores     |  int  | 是  |  节点CPU核心数   |
    |    coordinates    |  str  | 是  |    节点经纬度    |
    |   storage_total   |  int  | 是  |     总储存     |
    |       load5       | float | 是  | 节点5min的总负载  |
    |      version      |  str  | 是  |  节点frps版本   |
    |       load1       | float | 是  | 节点1min的总负载  |
    |  uptime_seconds   |  int  | 是  |   节点运行时间    |
    |   memory_total    |  int  | 是  |     总内存     |
    |   storage_used    |  int  | 是  |    已用储存     |
    |      load15       | float | 是  | 节点15min的总负载 |

    **status_list**
    中带有多个dict

    |                参数                |  类型   | 必返 |     说明      |
    |:--------------------------------:|:-----:|:--:|:-----------:|
    |           proxy_https            |  int  | 是  | 映射的https端口数 |
    | download_bandwidth_usage_percent |  int  | 是  |  下载带宽使用百分比  |
    |            cur_conns             |  int  | 是  |     连接数     |
    |           sent_packets           |  int  | 是  |  发送的数据包数量   |
    |           memory_used            |  int  | 是  |    已用内存     |
    |           active_conn            |  int  | 是  |   活跃的连接数    |
    |           recv_packets           |  int  | 是  |   接收的数据包数   |
    |            proxy_tcp             |  int  | 是  |  映射的tcp端口数  |
    |            proxy_udp             |  int  | 是  |  映射的udp端口数  |
    |            proxy_http            |  int  | 是  | 映射的http端口数  |
    |  upload_bandwidth_usage_percent  |  int  | 是  |  上传带宽使用百分比  |
    |            cpu_usage             | float | 是  |    CPU负载    |
    |           page_tables            |  int  | 是  | 页面表占用的内存大小  |
    |           passive_conn           |  int  | 是  |    被动连接数    |
    |            timestamp             |  str  | 是  |   数据统计时间    |
    |          client_counts           |  int  | 是  |   映射客户端数    |

## 获取可用域名列表
- 接口
    > GET&POST /list_available_domains
- 请求参数

    无

- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | data  | list | 否  |  详见下方  |
    | state | str  | 是  | 请求是否成功 |

    **data**

    当上方 `state` 为 `success` 返回

    |    参数     |  类型  | 必返 |  说明   |
    |:---------:|:----:|:--:|:-----:|
    |    id     | int  | 是  | 域名编号  |
    |  domain   | str  | 是  |  域名   |
    |  remarks  | dict | 是  |  介绍   |
    | icpFiling | bool | 是  | 是否有备案 |

## 创建免费二级域名
- 接口
    > POST /create_free_subdomain
- 请求参数

    **JSON:**

    |   参数    | 类型  | 必传 |   说明    |
    |:-------:|:---:|:--:|:-------:|
    |  token  | str | 是  | 用户Token |
    | domain  | int | 是  |   主域名   |
    | record  | str | 是  |   记录    |
    |  type   | str | 是  |   类型    |
    | target  | str | 是  |   目标    |
    |   ttl   | str | 是  |   TTL   |
    | remarks | str | 是  |   介绍    |

    - 注：
    
    TTL仅允许1分钟、2分钟、5分钟、10分钟、15分钟、30分钟、1小时、2小时、5小时、12小时、1天。

    type仅允许A、AAAA、CNAME、SRV。

- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | state | str  | 是  | 请求是否成功 |

## 修改免费二级域名
- 接口
    > POST /update_free_subdomain
- 请求参数

    **JSON:**

    |   参数    | 类型  | 必传 |   说明    |
    |:-------:|:---:|:--:|:-------:|
    |  token  | str | 是  | 用户Token |
    | domain  | int | 是  |   主域名   |
    | record  | str | 是  |   记录    |
    | target  | str | 是  |   目标    |
    |   ttl   | str | 是  |   TTL   |
    | remarks | str | 是  |   介绍    |

    - 注：
    
    这个API仅允许修改TTL和目标，其余均不可修改

- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | state | str  | 是  | 请求是否成功 |

## 删除免费二级域名
- 接口
    > POST /delete_free_subdomain
- 请求参数

    **JSON:**

    |   参数    | 类型  | 必传 |   说明    |
    |:-------:|:---:|:--:|:-------:|
    |  token  | str | 是  | 用户Token |
    | domain  | int | 是  |   主域名   |
    | record  | str | 是  |   记录    |

- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | state | str  | 是  | 请求是否成功 |

## 获取用户免费二级域名
- 接口
    > GET&POST /delete_free_subdomain
- 请求参数

    **JSON:**

    |   参数    | 类型  | 必传 |   说明    |
    |:-------:|:---:|:--:|:-------:|
    |  token  | str | 是  | 用户Token |

- 返回
    **JSON:**

    |  参数   |  类型  | 必返 |   说明   |
    |:-----:|:----:|:--:|:------:|
    |  msg  | str  | 是  |  返回消息  |
    | code  | int  | 是  | 返回状态码  |
    | data  | list | 否  |  详见下方  |
    | state | str  | 是  | 请求是否成功 |

    **data**

    当上方 `state` 为 `success` 返回

    |   参数    |  类型  | 必返 |  说明  |
    |:-------:|:----:|:--:|:----:|
    |   id    | str  | 是  | 域名编号 |
    | userid  | int  | 是  | 用户编号 |
    | domain  | list | 否  | 主域名  |
    | record  | str  | 是  |  记录  |
    |  type   | str  | 是  |  类型  |
    | target  | int  | 是  |  目标  |
    | remarks | list | 是  |  介绍  |
    |   ttl   | str  | 是  | TTL  |
