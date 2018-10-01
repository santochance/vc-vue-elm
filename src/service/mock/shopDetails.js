/*
  # 商家 tab

  ## 配送信息

  配送模式，如峰鸟专送, 商家配送 delivery_mode
  配送费 piecewise_agent_fee
  配送时间 order_lead_time
  距离 distance

  ## 活动和服务

  activities
    item.tips

  ## 商家实景

  albums

  ## 商家信息

  简介 description
  品类 flavors
  商家电话 phone
  地址 address
  营业时间 opening_hours

  # 店铺概况

  店铺名称 name
  评价 rating
  月售 recent_order_num

  公告 promotion_info

  是否品牌餐馆  is_premium


 */

module.exports = {
  "activities": [
    {
      "attribute": "17.0",
      "description": "新用户下单立减17元(不与其它活动同享)",
      "icon_color": "70bc46",
      "icon_name": "首单",
      "id": 808726642,
      "is_exclusive_with_food_activity": true,
      "name": "新用户立减(不与其他活动共享)",
      "tips": "新用户下单立减17元(不与其它活动同享)",
      "type": 103
    },
    {
      "attribute": "{\"18\": {\"1\": 7.0, \"0\": 0}, \"35\": {\"1\": 16.0, \"0\": 0}, \"50\": {\"1\": 25.0, \"0\": 0}, \"70\": {\"1\": 30.0, \"0\": 0}}",
      "description": "满18减7，满35减16，满50减25，满70减30",
      "icon_color": "f07373",
      "icon_name": "满减",
      "id": 1150974874,
      "is_exclusive_with_food_activity": true,
      "name": "正新C",
      "tips": "满18减7，满35减16，满50减25，满70减30",
      "type": 102
    },
    {
      "description": "优惠套餐",
      "icon_color": "f1884f",
      "icon_name": "特价",
      "id": 347238498,
      "name": "优惠套餐",
      "tips": "优惠套餐"
    },
    {
      "description": "鱿鱼须",
      "icon_color": "f1884f",
      "icon_name": "特价",
      "id": 322765098,
      "name": "鱿鱼须",
      "tips": "鱿鱼须"
    },
    {
      "description": "优惠套餐",
      "icon_color": "f1884f",
      "icon_name": "特价",
      "id": 347239578,
      "name": "优惠套餐",
      "tips": "优惠套餐"
    },
    {
      "description": "优惠套餐",
      "icon_color": "f1884f",
      "icon_name": "特价",
      "id": 347240634,
      "name": "优惠套餐",
      "tips": "优惠套餐"
    },
    {
      "description": "优惠套餐",
      "icon_color": "f1884f",
      "icon_name": "特价",
      "id": 347240250,
      "name": "优惠套餐",
      "tips": "优惠套餐"
    },
    {
      "description": "优惠套餐",
      "icon_color": "f1884f",
      "icon_name": "特价",
      "id": 347239018,
      "name": "优惠套餐",
      "tips": "优惠套餐"
    },
    {
      "description": "优惠套餐",
      "icon_color": "f1884f",
      "icon_name": "特价",
      "id": 347239850,
      "name": "优惠套餐",
      "tips": "优惠套餐"
    },
    {
      "description": "下单可返3元代金券",
      "icon_color": "ff7239",
      "icon_name": "返券",
      "id": -1,
      "name": "下单返代金券",
      "tips": "下单可返3元代金券"
    }
  ],
  "address": "广东省深圳市龙华区民治大道461号",
  "albums": [
    {
      "count": 1,
      "cover_image_hash": "27f093baad416a6fc7446a742ff9c2bejpeg",
      "name": "门面",
      "photos": [
        {
          "description": "",
          "id": 19191721,
          "image_hash": "27f093baad416a6fc7446a742ff9c2bejpeg",
          "type": "FRONT"
        }
      ]
    }
  ],
  "authentic_id": 8333113745198603,
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
  }, // 配送信息
  "description": "",
  "distance": 0,
  "favored": false,
  "flavors": [
    {
      "id": 234,
      "name": "炸鸡炸串"
    },
    {
      "id": 212,
      "name": "汉堡"
    }
  ],
  "float_delivery_fee": 8,
  "float_minimum_order_amount": 20,
  "has_story": false,
  "id": 157158603,
  "image_path": "358a93fd92d242a7352e9fdb64b7d2eapng",
  "is_new": false,
  "is_premium": true, // 是否品牌餐馆
  "is_stock_empty": 0,
  "is_valid": 1,
  "latitude": 22.622349,
  "longitude": 114.038961,
  "max_applied_quantity_per_order": -1,
  "name": "正新鸡排(民治店)",
  "next_business_time": "",
  "only_use_poi": false,
  "opening_hours": [
    "10:00/23:50"
  ],
  "order_lead_time": 29,
  "phone": "18975484261 18975491055",
  "piecewise_agent_fee": {
    "description": "配送费¥8",
    "extra_fee": 3,
    "is_extra": true,
    "rules": [
      {
        "fee": 8,
        "price": 20
      }
    ],
    "tips": "夜间配送费¥8"
  },
  "platform": 0,
  "posters": [],
  "promotion_info": "未填写商家公告\n\n亲！欢迎您光临正新鸡排民治直营",
  "qualification": {
    "link": "https://h5.ele.me/shop/certification/#/?restaurant_id=8333113745198603"
  },
  "rating": 5,
  "rating_count": 1107,
  "recent_order_num": 1212,
  "recommend": {
    "color": "#e8470b",
    "image_hash": "ac124c767ffa7fd296d3e2d6f01798c6png",
    "is_ad": false,
    "reason": "口碑人气好店"
  },
  "recommend_reasons": [
    {
      "name": "回头客多"
    },
    {
      "name": "配送飞快"
    }
  ],
  "regular_customer_count": 0,
  "scheme": "eleme://catering?restaurant_id=157158603",
    "shop_sign": {
      "brand_story": "正新鸡排，美味与实惠，为您共享给您的生活带去方便与快乐。。",
    "image_hash": "98283c1281547324a0c7ef294ee47bffpng"
  },
  "status": 1,
  "support_tags": [],
  "supports": [],
  "type": 0,
  "weight": {
    "basic": 20000,
    "maximum": 20000,
    "unit": 20000,
    "unit_fee": 20000
  }
}