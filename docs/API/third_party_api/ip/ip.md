# 获取ip信息(代理ip时无法查询)
- 接口
    > GET /ip
- 请求参数

    无

- 返回

    如：

```json
{
  "original_ip": null,
  "current_ip": {
    "ip": "117.31.78.74",
    "type": "ipv4",
    "continent_code": "AS",
    "continent_name": "Asia",
    "country_code": "CN",
    "country_name": "China",
    "region_code": "FJ",
    "region_name": "Fujian",
    "city": "Zhangzhou",
    "zip": "363000",
    "latitude": 24.5097198486328,
    "longitude": 117.655281066895,
    "msa": null,
    "dma": null,
    "radius": "143.37405",
    "ip_routing_type": "fixed",
    "connection_type": "tx",
    "location": {
      "geoname_id": 1785018,
      "capital": "Beijing",
      "languages": [
        {
          "code": "zh",
          "name": "Chinese",
          "native": "中文"
        }
      ],
      "country_flag_emoji": "🇨🇳",
      "country_flag_emoji_unicode": "U+1F1E8 U+1F1F3",
      "calling_code": "86",
      "is_eu": false
    },
    "time_zone": {
      "id": "Asia/Shanghai",
      "current_time": "2025-08-22T00:50:28+08:00",
      "gmt_offset": 28800,
      "code": "CST",
      "is_daylight_saving": false
    },
    "currency": {
      "code": "CNY",
      "name": "Chinese Yuan",
      "plural": "Chinese yuan",
      "symbol": "CN¥",
      "symbol_native": "CN¥"
    },
    "connection": {
      "asn": 4134,
      "isp": "Chinanet",
      "sld": "163data",
      "tld": "com.cn",
      "carrier": "chinanet",
      "home": true,
      "organization_type": "Internet Service Provider",
      "isic_code": "J6110",
      "naics_code": "517311"
    },
    "security": {
      "is_proxy": false,
      "proxy_type": null,
      "is_crawler": false,
      "crawler_name": null,
      "crawler_type": null,
      "is_tor": false,
      "threat_level": "low",
      "threat_types": null,
      "proxy_last_detected": null,
      "proxy_level": null,
      "vpn_service": null,
      "anonymizer_status": null,
      "hosting_facility": false
    },
    "timestamp": 1755795027275,
    "request_id": "972ba1281f171081"
  }
}
```