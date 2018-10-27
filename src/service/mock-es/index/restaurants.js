/*
  restaurant {
    id
    餐馆名 name
    品牌徽标 is_premium
    新店角标 is_new
    评分 rating
    月售 recent_order_num
    起送价 piecewise_agent_fee.rules[0].price
    配送费 piecewise_agent_fee.rules[0].fee
    距离 distance
    配送时长 order_lead_time
    标签行 support_tags
    口碑标签 support_tags[n]
    活动 restaurant.activities
  }
*/

export default {
  "items": [
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "{\"100\": {\"1\": 50.0, \"0\": 0}}",
            "description": "满100减50",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1547925690,
            "is_exclusive_with_food_activity": true,
            "name": "湘里",
            "tips": "满100减50",
            "type": 102
          },
          {
            "attribute": "17.0",
            "description": "新用户下单立减17元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 1267063337,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减17元",
            "type": 103
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1543058801,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1541550297,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1541550001,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1536233113,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1536236601,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1536235961,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1536232529,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1536232025,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1536229073,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "attribute": "1.0",
            "description": "本店新用户立减1元",
            "icon_color": "00b762",
            "icon_name": "新",
            "id": 546359801,
            "is_exclusive_with_food_activity": true,
            "name": "门店新客立减",
            "tips": "本店新用户立减1元",
            "type": 108
          }
        ],
        "address": "深圳市龙华区民治街道汇龙湾花园2栋138、139",
        "authentic_id": 5373610528619798,
        "business_info": "{}",
        "delivery_mode": {
          "border": "",
          "color": "2395FF",
          "gradient": {
            "rgb_from": "00AAFF",
            "rgb_to": "0085FF"
          },
          "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
          "id": 1,
          "is_solid": true,
          "text": "蜂鸟专送",
          "text_color": "FFFFFF"
        },
        "description": "",
        "distance": 534,
        "favored": false,
        "flavors": [
          {
            "id": 221,
            "name": "川湘菜"
          },
          {
            "id": 265,
            "name": "简餐"
          }
        ],
        "float_delivery_fee": 3,
        "float_minimum_order_amount": 20,
        "folding_restaurant_brand": "湘里小厨",
        "folding_restaurants": [
          {
            "distance": 1821,
            "id": 161654516,
            "name": "湘里小厨·湖南菜(民康店)",
            "order_lead_time": 39,
            "scheme": "eleme://catering?restaurant_id=161654516",
            "type": 0
          },
          {
            "distance": 2721,
            "id": 1786747,
            "name": "湘里小厨·湖南菜(民治店)",
            "order_lead_time": 45,
            "scheme": "eleme://catering?restaurant_id=1786747",
            "type": 0
          }
        ],
        "has_story": false,
        "id": 161654698,
        "image_path": "b56de821dbd00dfe992c7dce9c91177bpng",
        "is_new": false,
        "is_premium": false,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 22.622129,
        "longitude": 114.029,
        "max_applied_quantity_per_order": -1,
        "name": "湘里小厨·湖南菜(汇龙湾店)",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "10:30/21:00"
        ],
        "order_lead_time": 32,
        "phone": "0755-23776285",
        "piecewise_agent_fee": {
          "description": "优惠配送费¥3",
          "extra_fee": -2,
          "is_extra": true,
          "no_subsidy_fee": "¥5",
          "rules": [
            {
              "fee": 3,
              "price": 20
            }
          ],
          "tips": "优惠配送费¥3"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "湘里小厨 吃湘喝辣\n1：没吃尽兴，欢迎拨打客服电话0755-23776285反馈，为你所想而生。\n2：供应链直供菜品，标准化流程确保健康食材。\n3：菜品现炒，拒绝料理包，吃的营养健康。\n4：门店发票，实付100起，请备注抬头，公司名，税号。\n5：惟华有才，于斯为盛。\n",
        "rating": 4.6,
        "rating_count": 355,
        "recent_order_num": 456,
        "recommend": {
          "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
          "is_ad": false,
          "track": "{\"rankType\":\"27\"}"
        },
        "recommend_reasons": [
          {
            "name": "配送飞快"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=161654698",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "川湘菜",
            "type": 1
          },
          {
            "border": "dddddd",
            "color": "333333",
            "text": "品质联盟"
          }
        ],
        "supports": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "{\"60\": {\"1\": 30.0, \"0\": 0}}",
            "description": "满60减30",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1554213842,
            "is_exclusive_with_food_activity": true,
            "name": "DQ不补贴21-24",
            "tips": "满60减30",
            "type": 102
          },
          {
            "attribute": "25.0",
            "description": "新用户下单立减25元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 1502143537,
            "is_exclusive_with_food_activity": true,
            "name": "DQ新客立减25",
            "tips": "新用户下单立减25元",
            "type": 103
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1552456329,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1544172233,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1540646313,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1525090625,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1501279385,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501259801,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501258561,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501261089,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501241977,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501234937,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501234033,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501220793,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501204881,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501205129,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501166169,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501166545,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501166505,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501166465,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501166073,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501166433,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501166385,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501128457,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501126849,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501108241,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501082513,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501077753,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501079793,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501087961,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501053241,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501040825,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501042537,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501022673,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501023393,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501012233,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1501013201,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1500998825,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1500996577,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1500997857,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1500980681,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1500979393,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1500956657,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1500947657,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500930865,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500926065,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500924673,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500923481,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500929609,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500927769,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500862153,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500848833,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500866009,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500850937,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500860521,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500864465,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500858105,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500855817,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500867233,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500870737,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500868761,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1500869921,
            "name": "单品折扣",
            "tips": "单品折扣"
          }
        ],
        "address": "深圳市龙华新区民治街道人民路2020号与龙华九方购物中心L1层L130号铺",
        "authentic_id": 8313690532885228,
        "business_info": "{}",
        "delivery_mode": {
          "border": "",
          "color": "2395FF",
          "gradient": {
            "rgb_from": "00AAFF",
            "rgb_to": "0085FF"
          },
          "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
          "id": 1,
          "is_solid": true,
          "text": "蜂鸟专送",
          "text_color": "FFFFFF"
        },
        "description": "",
        "distance": 1854,
        "favored": false,
        "flavors": [
          {
            "id": 240,
            "name": "奶茶果汁"
          },
          {
            "id": 241,
            "name": "甜品"
          }
        ],
        "float_delivery_fee": 0,
        "float_minimum_order_amount": 20,
        "has_story": false,
        "id": 2135528,
        "image_path": "4672ed98369e2cb177972b437a5e56afpng",
        "is_new": false,
        "is_premium": true,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 22.6270727584134,
        "longitude": 114.020951341129,
        "max_applied_quantity_per_order": -1,
        "name": "DQ(深圳龙华九方购物中心店)",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "10:00/21:30"
        ],
        "order_lead_time": 43,
        "phone": "4001088870",
        "piecewise_agent_fee": {
          "description": "优惠免配送费",
          "extra_fee": -2,
          "is_extra": true,
          "no_subsidy_fee": "¥4",
          "rules": [
            {
              "fee": 0,
              "price": 20
            }
          ],
          "tips": "优惠免配送费"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "1）亲爱的顾客，DQ为您奉上代写中秋贺卡的服务，您可以\r\n把寄件人/收件人/祝福语，写在备注里，贺卡数量有限，送完即止哦！\r\n\r\n2）服务热线4001088870 \r\n\r\n3）自2017年9月5日起，开票均为电子版（仅限上海），请保留好外卖小票（48小时有效），自行扫描二维码开票，如无法开票请及时联系门店，开票日期为扫码当日，敬请理解！\r\n\r\n4）9/14起江浙沪地区下单即随赠钙芝威化（27g）1条，赠完即止。",
        "rating": 4.7,
        "rating_count": 104,
        "recent_order_num": 185,
        "recommend": {
          "color": "#e8470b",
          "image_hash": "",
          "is_ad": false,
          "reason": "",
          "track": "{\"rankType\":\"3\"}"
        },
        "recommend_reasons": [],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=2135528",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "奶茶果汁",
            "type": 1
          },
          {
            "border": "dddddd",
            "color": "666666",
            "text": "口碑人气好店"
          }
        ],
        "supports": [
          {
            "border": "90dddddd",
            "description": "该商家支持开发票，请在下单时填写好发票抬头",
            "icon_color": "999999",
            "icon_name": "票",
            "id": 4,
            "name": "开发票",
            "text_color": "666666",
            "two_characters_icon_name": "发票"
          }
        ],
        "tags": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "{\"49\": {\"1\": 15.0, \"0\": 0}, \"99\": {\"1\": 30.0, \"0\": 0}, \"69\": {\"1\": 20.0, \"0\": 0}}",
            "description": "满49减15，满69减20，满99减30",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1555637338,
            "is_exclusive_with_food_activity": false,
            "name": "深圳，南昌，福州，南宁",
            "tips": "满49减15，满69减20，满99减30",
            "type": 102
          },
          {
            "description": "香甜多汁泰国椰青4.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1557350377,
            "name": "香甜多汁泰国椰青4.9",
            "tips": "香甜多汁泰国椰青4.9"
          },
          {
            "description": "果肉饱满红肉蜜柚18.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1557340369,
            "name": "果肉饱满红肉蜜柚18.9",
            "tips": "果肉饱满红肉蜜柚18.9"
          },
          {
            "description": "脆甜甜蜜蜜冬枣14.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 554442402,
            "name": "脆甜甜蜜蜜冬枣14.9",
            "tips": "脆甜甜蜜蜜冬枣14.9"
          },
          {
            "description": "肉脆多汁夏音葡萄59.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 554438778,
            "name": "肉脆多汁夏音葡萄59.9",
            "tips": "肉脆多汁夏音葡萄59.9"
          },
          {
            "description": "清甜红钻软籽甜石榴26.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 554156522,
            "name": "清甜红钻软籽甜石榴26.9",
            "tips": "清甜红钻软籽甜石榴26.9"
          },
          {
            "description": "滑嫩佳沛阳光金果12.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1557412737,
            "name": "滑嫩佳沛阳光金果12.9",
            "tips": "滑嫩佳沛阳光金果12.9"
          },
          {
            "description": "【礼盒】红钻软籽甜石榴",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1557308257,
            "name": "【礼盒】红钻软籽甜石榴",
            "tips": "【礼盒】红钻软籽甜石榴"
          },
          {
            "description": "【中秋礼盒】A级-甜蜜蜜冬枣（大）99",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 554057978,
            "name": "【中秋礼盒】A级-甜蜜蜜冬枣（大）99",
            "tips": "【中秋礼盒】A级-甜蜜蜜冬枣（大）99"
          },
          {
            "description": "1",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1556199569,
            "name": "1",
            "tips": "1"
          },
          {
            "description": "清甜多汁花皮有籽瓜11.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 553507898,
            "name": "清甜多汁花皮有籽瓜11.9",
            "tips": "清甜多汁花皮有籽瓜11.9"
          },
          {
            "description": "甜蜜多汁进口车厘子",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 553490306,
            "name": "甜蜜多汁进口车厘子",
            "tips": "甜蜜多汁进口车厘子"
          },
          {
            "description": "立减15进口无核珍珠红",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 552691610,
            "name": "立减15进口无核珍珠红",
            "tips": "立减15进口无核珍珠红"
          },
          {
            "description": "多汁浓甜法兰西西梅23.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 552565186,
            "name": "多汁浓甜法兰西西梅23.9",
            "tips": "多汁浓甜法兰西西梅23.9"
          },
          {
            "description": "香甜多汁八六王哈蜜瓜29.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 552544098,
            "name": "香甜多汁八六王哈蜜瓜29.9",
            "tips": "香甜多汁八六王哈蜜瓜29.9"
          },
          {
            "description": "香甜多汁沙漠蜜瓜16.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 552539738,
            "name": "香甜多汁沙漠蜜瓜16.9",
            "tips": "香甜多汁沙漠蜜瓜16.9"
          },
          {
            "description": "粒粒多汁青皮甜石榴4.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 552499778,
            "name": "粒粒多汁青皮甜石榴4.9",
            "tips": "粒粒多汁青皮甜石榴4.9"
          },
          {
            "description": "果肉饱满三红蜜柚24.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 552108170,
            "name": "果肉饱满三红蜜柚24.9",
            "tips": "果肉饱满三红蜜柚24.9"
          },
          {
            "description": "甜蜜脆爽甜蜜蜜冬枣13.9",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 551777186,
            "name": "甜蜜脆爽甜蜜蜜冬枣13.9",
            "tips": "甜蜜脆爽甜蜜蜜冬枣13.9"
          },
          {
            "attribute": "15.0",
            "description": "新用户下单立减15元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 901046954,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减15元",
            "type": 103
          }
        ],
        "address": "深圳市宝安区民治街道梅龙南路东侧世纪春城2栋A座商铺48",
        "authentic_id": 7323660532446433,
        "business_info": "{}",
        "delivery_mode": {
          "border": "",
          "color": "2395FF",
          "gradient": {
            "rgb_from": "00AAFF",
            "rgb_to": "0085FF"
          },
          "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
          "id": 1,
          "is_solid": true,
          "text": "蜂鸟专送",
          "text_color": "FFFFFF"
        },
        "description": "好吃就在百果园，我们承诺不好吃，三无退货，无小票无实物无理由",
        "distance": 897,
        "favored": false,
        "flavors": [
          {
            "id": 245,
            "name": "水果"
          }
        ],
        "float_delivery_fee": 3.5,
        "float_minimum_order_amount": 20,
        "folding_restaurant_brand": "百果园",
        "folding_restaurants": [
          {
            "distance": 1083,
            "id": 156554316,
            "name": "百果园（梅陇2店）",
            "order_lead_time": 44,
            "scheme": "eleme://retail_store?re_store_id=156554316",
            "type": 1
          },
          {
            "distance": 1579,
            "id": 1383413,
            "name": "百果园（水榭春天店）",
            "order_lead_time": 40,
            "scheme": "eleme://retail_store?re_store_id=1383413",
            "type": 1
          },
          {
            "distance": 2180,
            "id": 156554243,
            "name": "百果园(万众城店)",
            "order_lead_time": 31,
            "scheme": "eleme://retail_store?re_store_id=156554243",
            "type": 1
          },
          {
            "distance": 2754,
            "id": 1383409,
            "name": "百果园（榕苑店）",
            "order_lead_time": 30,
            "scheme": "eleme://retail_store?re_store_id=1383409",
            "type": 1
          },
          {
            "distance": 3380,
            "id": 156260407,
            "name": "百果园（深圳四季花城2店）",
            "order_lead_time": 34,
            "scheme": "eleme://retail_store?re_store_id=156260407",
            "type": 1
          }
        ],
        "has_story": false,
        "id": 155778233,
        "image_path": "cdb3660f08d4b62e95c025421a7e644fjpeg",
        "is_new": false,
        "is_premium": true,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 22.627365,
        "longitude": 114.035454,
        "max_applied_quantity_per_order": -1,
        "name": "百果园(世纪春城店)",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "09:00/23:00"
        ],
        "order_lead_time": 33,
        "phone": "25330895",
        "piecewise_agent_fee": {
          "description": "配送费¥3.5",
          "extra_fee": 0,
          "is_extra": false,
          "no_subsidy_fee": "",
          "rules": [
            {
              "fee": 3.5,
              "price": 20
            }
          ],
          "tips": "配送费¥3.5"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "好吃就在百果园！不好吃“三无”退货，无小票，无实物，无理由！",
        "rating": 4.6,
        "rating_count": 1297,
        "recent_order_num": 1341,
        "recommend": {
          "color": "#e8470b",
          "image_hash": "",
          "is_ad": false,
          "reason": "",
          "track": "{\"rankType\":\"13\"}"
        },
        "recommend_reasons": [
          {
            "name": "配送飞快"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://retail_store?re_store_id=155778233",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "水果",
            "type": 1
          },
          {
            "border": "dddddd",
            "color": "666666",
            "text": "口碑人气好店"
          }
        ],
        "supports": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 1
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "{\"200\": {\"1\": 100.0, \"0\": 0}, \"25\": {\"1\": 20.0, \"0\": 0}, \"45\": {\"1\": 25.0, \"0\": 0}, \"79\": {\"1\": 35.0, \"0\": 0}}",
            "description": "满25减20，满45减25，满79减35，满200减100",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1470961634,
            "is_exclusive_with_food_activity": true,
            "name": "满减",
            "tips": "满25减20，满45减25，满79减35，满200减100",
            "type": 102
          },
          {
            "description": "品质生活节5折特惠",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 531118537,
            "name": "品质生活节5折特惠",
            "tips": "品质生活节5折特惠"
          },
          {
            "attribute": "17.0",
            "description": "新用户下单立减17元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 901118954,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减17元",
            "type": 103
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1348379225,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1348379161,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1348379169,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1348379177,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1348379193,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1348379217,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1348379249,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1348379201,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1348379185,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1348379241,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1348379233,
            "name": "单品定价",
            "tips": "单品定价"
          }
        ],
        "address": "深圳市宝安区民治街道电站路93号",
        "authentic_id": 6313650530856527,
        "bidding": "{\"core\":{\"index\":3,\"extraInfo\":\"{\\\"bidding\\\":\\\"{536286:184}\\\",\\\"rankId\\\":\\\"d4fc2b45bed04b5f837bd3ccfc26ae03\\\",\\\"rankTime\\\":\\\"1537685994\\\",\\\"cityId\\\":\\\"11\\\"}\",\"target\":{\"restaurantId\":788427,\"weight\":150,\"probability\":0.1256600022315979},\"come_from\":0,\"next\":{\"restaurantId\":166789898,\"weight\":200,\"probability\":0.092289999127388}}}",
        "business_info": "{}",
        "description": "订餐请上饿了么。。。。",
        "distance": 3617,
        "favored": false,
        "flavors": [
          {
            "id": 265,
            "name": "简餐"
          },
          {
            "id": 221,
            "name": "川湘菜"
          }
        ],
        "float_delivery_fee": 8.88,
        "float_minimum_order_amount": 0,
        "has_story": false,
        "id": 788427,
        "image_path": "504f24bf7a43ffaf44e9b7372b127a33jpeg",
        "is_new": false,
        "is_premium": false,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 22.644759,
        "longitude": 114.021027,
        "max_applied_quantity_per_order": -1,
        "name": "湘乡人家木桶饭(网红店)",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "09:50/23:05"
        ],
        "order_lead_time": 46,
        "phone": "17722607488 17876992626",
        "piecewise_agent_fee": {
          "description": "配送费¥8.88",
          "extra_fee": 0,
          "is_extra": false,
          "no_subsidy_fee": "",
          "rules": [
            {
              "fee": 8.88,
              "price": 0
            }
          ],
          "tips": "配送费¥8.88"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "餐厅优先配送饿了么订单，为了避免高峰期配送问题，请各位上帝提前40分钟下单，提高我们的配送效率，尽快将美味可口的菜饭送到你的嘴边，让您一天有个美好的心情。投诉催单电话：\t17722607488",
        "rating": 4.1,
        "rating_count": 2474,
        "recent_order_num": 6524,
        "recommend": {
          "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
          "is_ad": true,
          "reason": "广告",
          "track": "{\"rankType\":\"8\"}"
        },
        "recommend_reasons": [],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=788427",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "简餐",
            "type": 1
          }
        ],
        "supports": [],
        "tags": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "{\"25\": {\"1\": 6.0, \"0\": 0}, \"35\": {\"1\": 8.0, \"0\": 0}, \"100\": {\"1\": 18.0, \"0\": 0}, \"85\": {\"1\": 15.0, \"0\": 0}, \"55\": {\"1\": 10.0, \"0\": 0}}",
            "description": "满25减6，满35减8，满55减10，满85减15，满100减18",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1559555714,
            "is_exclusive_with_food_activity": true,
            "name": "自营销复杂满减活动",
            "tips": "满25减6，满35减8，满55减10，满85减15，满100减18",
            "type": 102
          },
          {
            "attribute": "17.0",
            "description": "新用户下单立减17元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 1561741577,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减17元",
            "type": 103
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1552243585,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1552243617,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1552243577,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1552243601,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1552243593,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1552243625,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1462009145,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1462009185,
            "name": "单品折扣",
            "tips": "单品折扣"
          }
        ],
        "address": "深圳市龙华区民治街道新牛社区万众生活村25栋-3",
        "authentic_id": 2393600524648798,
        "bidding": "{\"core\":{\"index\":4,\"extraInfo\":\"{\\\"bidding\\\":\\\"{536286:184}\\\",\\\"rankId\\\":\\\"d4fc2b45bed04b5f837bd3ccfc26ae03\\\",\\\"rankTime\\\":\\\"1537685994\\\",\\\"cityId\\\":\\\"11\\\"}\",\"target\":{\"restaurantId\":166789898,\"weight\":200,\"probability\":0.092289999127388},\"come_from\":0,\"next\":{\"restaurantId\":164193837,\"weight\":250,\"probability\":0.0700099989771843}}}",
        "business_info": "{}",
        "delivery_mode": {
          "border": "",
          "color": "2395FF",
          "gradient": {
            "rgb_from": "00AAFF",
            "rgb_to": "0085FF"
          },
          "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
          "id": 1,
          "is_solid": true,
          "text": "蜂鸟专送",
          "text_color": "FFFFFF"
        },
        "description": "",
        "distance": 1914,
        "favored": false,
        "flavors": [
          {
            "id": 213,
            "name": "米粉面馆"
          }
        ],
        "float_delivery_fee": 4,
        "float_minimum_order_amount": 20,
        "has_story": false,
        "id": 166789898,
        "image_path": "7363c22357461ddc3bce6b46bcef2827jpeg",
        "is_new": true,
        "is_premium": false,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 22.633636,
        "longitude": 114.037573,
        "max_applied_quantity_per_order": -1,
        "name": "香味客重庆小面",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "10:00/03:00"
        ],
        "order_lead_time": 31,
        "phone": "17608846888",
        "piecewise_agent_fee": {
          "description": "配送费¥4",
          "extra_fee": 0,
          "is_extra": false,
          "no_subsidy_fee": "",
          "rules": [
            {
              "fee": 4,
              "price": 20
            }
          ],
          "tips": "配送费¥4"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "",
        "rating": 4.3,
        "rating_count": 54,
        "recent_order_num": 191,
        "recommend": {
          "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
          "is_ad": true,
          "reason": "广告",
          "track": "{\"rankType\":\"8\"}"
        },
        "recommend_reasons": [
          {
            "name": "配送飞快"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=166789898",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "米粉面馆",
            "type": 1
          }
        ],
        "supports": [
          {
            "border": "90dddddd",
            "description": "该商户食品安全已由国泰产险承担，食品安全有保障",
            "icon_color": "999999",
            "icon_name": "保",
            "id": 7,
            "name": "食安保",
            "text_color": "666666",
            "two_characters_icon_name": "保险"
          }
        ],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "17.0",
            "description": "新用户下单立减17元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 1500006593,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减17元",
            "type": 103
          }
        ],
        "address": "深圳市龙华新区民治街道民治大道与布龙路交汇处左邻香颂购物中心一层N－L178-3",
        "authentic_id": 4363670511944730,
        "business_info": "{}",
        "delivery_mode": {
          "border": "",
          "color": "2395FF",
          "gradient": {
            "rgb_from": "00AAFF",
            "rgb_to": "0085FF"
          },
          "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
          "id": 1,
          "is_solid": true,
          "text": "蜂鸟专送",
          "text_color": "FFFFFF"
        },
        "description": "",
        "distance": 1379,
        "favored": false,
        "flavors": [
          {
            "id": 240,
            "name": "奶茶果汁"
          },
          {
            "id": 265,
            "name": "简餐"
          }
        ],
        "float_delivery_fee": 2,
        "float_minimum_order_amount": 20,
        "folding_restaurant_brand": "台盖",
        "folding_restaurants": [
          {
            "distance": 1897,
            "id": 156482541,
            "name": "台盖(龙华九方店)",
            "order_lead_time": 40,
            "scheme": "eleme://catering?restaurant_id=156482541",
            "type": 0
          },
          {
            "distance": 2635,
            "id": 155170685,
            "name": "台盖（民治天虹店）",
            "order_lead_time": 30,
            "scheme": "eleme://catering?restaurant_id=155170685",
            "type": 0
          }
        ],
        "has_story": false,
        "id": 155170630,
        "image_path": "7829732a1d371f71724ef4136c070972jpeg",
        "is_new": false,
        "is_premium": true,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 22.630299,
        "longitude": 114.036558,
        "max_applied_quantity_per_order": -1,
        "name": "台盖（绿景香颂店）",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "10:00/21:00"
        ],
        "order_lead_time": 36,
        "phone": "0755-23573071",
        "piecewise_agent_fee": {
          "description": "优惠配送费¥2",
          "extra_fee": -2,
          "is_extra": true,
          "no_subsidy_fee": "¥4",
          "rules": [
            {
              "fee": 2,
              "price": 20
            }
          ],
          "tips": "优惠配送费¥2"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "",
        "rating": 4.8,
        "rating_count": 168,
        "recent_order_num": 337,
        "recommend": {
          "color": "#e8470b",
          "image_hash": "",
          "is_ad": false,
          "reason": "",
          "track": "{\"rankType\":\"3\"}"
        },
        "recommend_reasons": [],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=155170630",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "奶茶果汁",
            "type": 1
          },
          {
            "border": "dddddd",
            "color": "666666",
            "text": "口碑人气好店"
          }
        ],
        "supports": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "{\"100\": {\"1\": 53.0, \"0\": 0}, \"50\": {\"1\": 28.0, \"0\": 0}, \"20\": {\"1\": 17.0, \"0\": 0}, \"14\": {\"1\": 14.0, \"0\": 0}}",
            "description": "满14减14，满20减17，满50减28，满100减53",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1534745482,
            "is_exclusive_with_food_activity": true,
            "name": "满减",
            "tips": "满14减14，满20减17，满50减28，满100减53",
            "type": 102
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1545925001,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1545844905,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1545844865,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1545844889,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1545844921,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1545844881,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1545844873,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1545844897,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品定价(限10:00-20:00)",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1534453305,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价(限10:00-20:00)",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1534453313,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "attribute": "17.0",
            "description": "新用户下单立减17元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 1504768737,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减17元",
            "type": 103
          },
          {
            "description": "单品定价(限10:00-20:00)",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1534612113,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价(限10:00-20:00)",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1534453321,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价(限10:00-20:00)",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1534453329,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "超值换购",
            "icon_color": "f1884f",
            "icon_name": "换",
            "id": 1533627457,
            "name": "超值换购",
            "tips": "超值换购"
          },
          {
            "description": "超值换购",
            "icon_color": "f1884f",
            "icon_name": "换",
            "id": 1533627441,
            "name": "超值换购",
            "tips": "超值换购"
          }
        ],
        "address": "深圳市龙华区民治街道民强社区水尾三区21栋102",
        "authentic_id": 5323640525448869,
        "business_info": "{}",
        "description": "",
        "distance": 972,
        "favored": false,
        "flavors": [
          {
            "id": 265,
            "name": "简餐"
          },
          {
            "id": 268,
            "name": "咖喱饭"
          }
        ],
        "float_delivery_fee": 0,
        "float_minimum_order_amount": 20,
        "has_story": false,
        "id": 166984869,
        "image_path": "b07c92f7ccbc4aded397dee133669c55png",
        "is_new": true,
        "is_premium": false,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 22.627743,
        "longitude": 114.035791,
        "max_applied_quantity_per_order": -1,
        "name": "饭点到了",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "10:00/20:00"
        ],
        "order_lead_time": 40,
        "phone": "13612689775",
        "piecewise_agent_fee": {
          "description": "优惠免配送费",
          "extra_fee": -1,
          "is_extra": true,
          "no_subsidy_fee": "¥2",
          "rules": [
            {
              "fee": 0,
              "price": 20
            }
          ],
          "tips": "优惠免配送费"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "感谢各位亲的支持！我们会用心做好每一份餐，让各位能吃的放心！\n如在用餐过程中遇到任何问题，可联系我们，电话13612689775，我们会及时解决，给您一个满意的回答。如果您有好的建议或意见，亦可联系我们，我们一定会认真采纳，完善，谢谢！！！",
        "rating": 4.6,
        "rating_count": 24,
        "recent_order_num": 119,
        "recommend": {
          "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
          "is_ad": false,
          "track": "{\"rankType\":\"6\",\"trafficCardId\":\"46270985\"}"
        },
        "recommend_reasons": [],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=166984869",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "简餐",
            "type": 1
          }
        ],
        "supports": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "{\"25\": {\"1\": 25.0, \"0\": 0}, \"10\": {\"1\": 10.0, \"0\": 0}, \"100\": {\"1\": 70.0, \"0\": 0}, \"70\": {\"1\": 50.0, \"0\": 0}, \"46\": {\"1\": 36.0, \"0\": 0}}",
            "description": "满10减10，满25减25，满46减36，满70减50，满100减70",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1494403345,
            "is_exclusive_with_food_activity": true,
            "name": "自营销复杂满减活动",
            "tips": "满10减10，满25减25，满46减36，满70减50，满100减70",
            "type": 102
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1555820385,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1519274737,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495451393,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495451401,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495451377,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495451385,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495451369,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495451409,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495447273,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495447265,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495447257,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495443081,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495443073,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495443065,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1495443057,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "attribute": "17.0",
            "description": "新用户下单立减17元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 1494190257,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减17元",
            "type": 103
          }
        ],
        "address": "深圳市龙华区民治街道民强社区向南三区30栋103",
        "authentic_id": 6323680534268628,
        "business_info": "{}",
        "description": "",
        "distance": 1078,
        "favored": false,
        "flavors": [
          {
            "id": 240,
            "name": "奶茶果汁"
          }
        ],
        "float_delivery_fee": 0,
        "float_minimum_order_amount": 0,
        "has_story": false,
        "id": 166967028,
        "image_path": "6477283970554be0f246a917cbdfa004jpeg",
        "is_new": true,
        "is_premium": false,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 22.619163,
        "longitude": 114.039468,
        "max_applied_quantity_per_order": -1,
        "name": "贡茶(民治旗舰店)",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "09:00/01:00"
        ],
        "order_lead_time": 40,
        "phone": "14776206958 13790803267",
        "piecewise_agent_fee": {
          "description": "免配送费",
          "extra_fee": 0,
          "is_extra": false,
          "no_subsidy_fee": "",
          "rules": [
            {
              "fee": 0,
              "price": 0
            }
          ],
          "tips": "免配送费"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "欢迎光临：延禧贡茶（民治店）1.外卖制作+配送都需要消耗时间，为了能及时用餐，希望大家提前30分钟以上预订。2.可在备注填写用量。如没有备注一律视为标准糖！(为防止泄漏和美观)所有外卖饮品统一封杯口！不便之处，敬请谅解。声明:本店采用新鲜水果，进口原料，拒绝浓缩，制作良心产品！",
        "rating": 4.8,
        "rating_count": 298,
        "recent_order_num": 974,
        "recommend": {
          "color": "#e8470b",
          "image_hash": "",
          "is_ad": false,
          "reason": "",
          "track": "{\"rankType\":\"6\",\"trafficCardId\":\"46058905\"}"
        },
        "recommend_reasons": [
          {
            "name": "回头客多"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=166967028",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "奶茶果汁",
            "type": 1
          },
          {
            "border": "dddddd",
            "color": "666666",
            "text": "口碑人气好店"
          },
          {
            "border": "dddddd",
            "color": "333333",
            "text": "品质联盟"
          }
        ],
        "supports": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    }
  ],
  "meta": {
    "rank_id": "d4fc2b45bed04b5f837bd3ccfc26ae03"
  }
}