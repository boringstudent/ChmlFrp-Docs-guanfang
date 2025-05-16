# API状态
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