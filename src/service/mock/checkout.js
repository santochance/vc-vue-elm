module.exports = {
  "account_address_count": 2, // 地址数量
  "app_abandoned_info": {
    "description": "",
    "is_abandoned": false,
    "scheme": "eleme://web?"
  },
  "book_hongbao_promotion_tips": "",
  "cart": {
    "abandoned_extra": [],
    "deliver_amount": 38.5,
    "deliver_time": "",
    "delivery_tip": {
      "color": "999999",
      "content": "准时达服务: 当前特殊情况暂不享受超时赔付",
      "scheme": "eleme://web?url=https%3A//h5.ele.me/service/%23ontime"
    },
    "discount_amount": -16, // 优惠金额
    "discount_amount_sum": -16, // 优惠总额
    "extra": { // 额外费用
      "agent_fee": { // 配送费
        "category_id": 2,
        "description": "",
        "icon": { // 配送费图标
          "color": "2396ff",
          "image_hash": "",
          "name": "蜂鸟"
        },
        "id": -10,
        "max_quantity": 1,
        "name": "配送费", // 配送费名称
        "original_price": 5,
        "price": 5,
        "quantity": 1,
        "type": 0
      },
      "others": [
        {
          "category_id": 12,
          "description": "",
          "icon": {
            "color": "f07373",
            "image_hash": "",
            "name": "满减"
          },
          "id": 1258673754,
          "max_quantity": 1,
          "name": "在线支付立减优惠",
          "original_price": -16,
          "price": -16,
          "quantity": 1,
          "type": 102
        }
      ],
      "packing_fee": { // 包装费
        "category_id": 102,
        "description": "",
        "icon": {
          "color": "62cb92",
          "image_hash": "",
          "name": "包装"
        },
        "id": -70000,
        "max_quantity": 1,
        "name": "餐盒",
        "original_price": 2.5,
        "price": 2.5,
        "quantity": 1,
        "type": 0
      }
    },
    "group": [ // 购物车篮子
      [
        {
          "act_tags": [],
          "activities": [], // 食品优惠活动
          "attrs": [ // 食品规格属性
            {
              "name": "辣度",
              "value": "微辣"
            }
          ],
          "beyond_time_peroid": 0,
          "category_id": 1,  // 菜单分类id
          "garnish": [], // 浇头？
          "group_id": 1229379325,
          "id": 767557495,
          "image_hash": "bc94cbf60e86c033887538b31c02eefdjpeg", // 图片hash
          "is_sold_out": 0,
          "is_understock": 0,
          "is_valid": 1,
          "min_purchase_quantity": 1, // 最小购买量
          "name": "正新热狗",
          "new_specs": [],
          "price": 7, // 价格
          "quantity": 3,  // 数量
          "scheme": "eleme://catering?target_food_id=767557495&restaurant_id=157158603&category_id=1229379325",
          "sku_id": "386338874872",
          "specs": [],
          "stock": 9968  // 库存量
        },
        {
          "act_tags": [],
          "activities": [],
          "attrs": [],
          "beyond_time_peroid": 0,
          "category_id": 1,
          "garnish": [],
          "group_id": 1229393210,
          "id": 1377218560,
          "image_hash": "23203a52fa7647019067ccb0111b53bbjpeg",
          "is_sold_out": 0,
          "is_understock": 0,
          "is_valid": 1,
          "min_purchase_quantity": 1,
          "name": "正新鸡排（孜然味）",
          "new_specs": [],
          "price": 15,
          "quantity": 1,
          "scheme": "eleme://catering?target_food_id=1377218560&restaurant_id=157158603&category_id=1229393210",
          "sku_id": "200000181471830520",
          "specs": [],
          "stock": 9984
        }
      ]
    ],
    "id": "d55981967d2911e8aa0e02420a007e60",
    "is_address_too_far": 0,
    "minimum_order_amount": 20,
    "ontime_description_scheme": "eleme://web?url=https%3A//h5.ele.me/service/%23ontime",
    "ontime_logo": "b3dea805fa0b4b6eb4f93c82d6266073png",
    "ontime_promotion_text": "超时10分钟享赔付",
    "ontime_status": 1,
    "ontime_unavailable_reason": "当前特殊情况暂不享受超时赔付",
    "original_total": 43.5,  // 合计金额
    "paymethod_id": -1,
    "pindan": {
      "is_pindan": 0,
      "lock": 0,
      "num": 0,
      "order_id": 0,
      "order_token": "",
      "owners": [],
      "share_pindan": {
        "description": "我要点【正新鸡排(民治店)】的外卖，有一起点的么？",
        "image_path": "http://fuss10.elemecdn.com/3/58/a93fd92d242a7352e9fdb64b7d2eapng.png?w=86&h=86",
        "title": "有人一起点外卖么？",
        "url": "https://h5.ele.me/spell/#cartId=d55981967d2911e8aa0e02420a007e60&sig=06aef68ac78c732fe67fc1ae4adc5cfa&restaurant_id=157158603"
      },
      "unique_id": "0"
    },
    "restaurant": {
      "address": "广东省深圳市龙华区民治大道461号",
      "closing_remain_seconds": 0,
      "delivery_type": {
        "bg_colors": [
          "00aaff",
          "0085ff"
        ],
        "name": "蜂鸟专送",
        "text_color": "ffffff"
      },
      "id": 157158603,
      "image_path": "358a93fd92d242a7352e9fdb64b7d2eapng",
      "is_closed": 0,
      "is_fengniao": 1,
      "name": "正新鸡排(民治店)", // 餐厅名称
      "next_business_time": "",
      "only_use_poi": 0,
      "phone": "18975484261 18975491055",
      "piecewise_agent_fee": {
        "rules": [
          {
            "fee": 5,
            "price": 20
          }
        ]
      },
      "scheme": "eleme://catering?restaurant_id=157158603",
      "status": 1,
      "type": 0
    }, // 餐厅信息
    "service_fee_explanation": "",
    "sig": "06aef68ac78c732fe67fc1ae4adc5cfa",
    "total": 27.5,
    "total_sum": 27.5,
    "tying_groups": [],
    "tying_sku_group": [],
    "tying_sku_total": 0
  }, // 购物车信息
  "deliver_times": [
    {
      "tab": "今日（周日）",
      "time_points": [
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "",
          "time": "20:55"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "21:00",
          "promotion_tips": "",
          "time": "21:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "21:15",
          "promotion_tips": "",
          "time": "21:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "21:30",
          "promotion_tips": "",
          "time": "21:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "21:45",
          "promotion_tips": "",
          "time": "21:45"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "22:00",
          "promotion_tips": "",
          "time": "22:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "22:15",
          "promotion_tips": "",
          "time": "22:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "22:30",
          "promotion_tips": "",
          "time": "22:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "22:45",
          "promotion_tips": "",
          "time": "22:45"
        }
      ]
    },
    {
      "tab": "明日（周一）",
      "time_points": [
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 10:45",
          "time": "10:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 11:00",
          "time": "11:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 11:15",
          "time": "11:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 11:30",
          "time": "11:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 11:45",
          "time": "11:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 12:00",
          "time": "12:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 12:15",
          "time": "12:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 12:30",
          "time": "12:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 12:45",
          "time": "12:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 13:00",
          "time": "13:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 13:15",
          "time": "13:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 13:30",
          "time": "13:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 13:45",
          "time": "13:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 14:00",
          "time": "14:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 14:15",
          "time": "14:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 14:30",
          "time": "14:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 14:45",
          "time": "14:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 15:00",
          "time": "15:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 15:15",
          "time": "15:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 15:30",
          "time": "15:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 15:45",
          "time": "15:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 16:00",
          "time": "16:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 16:15",
          "time": "16:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 16:30",
          "time": "16:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 16:45",
          "time": "16:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 17:00",
          "time": "17:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 17:15",
          "time": "17:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 17:30",
          "time": "17:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 17:45",
          "time": "17:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 18:00",
          "time": "18:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 18:15",
          "time": "18:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 18:30",
          "time": "18:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 18:45",
          "time": "18:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 19:00",
          "time": "19:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 19:15",
          "time": "19:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 19:30",
          "time": "19:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 19:45",
          "time": "19:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 20:00",
          "time": "20:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 20:15",
          "time": "20:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 20:30",
          "time": "20:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-02 20:45",
          "time": "20:45"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-02 21:00",
          "time": "21:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-02 21:15",
          "time": "21:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-02 21:30",
          "time": "21:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-02 21:45",
          "time": "21:45"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-02 22:00",
          "time": "22:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-02 22:15",
          "time": "22:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-02 22:30",
          "time": "22:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-02 22:45",
          "time": "22:45"
        }
      ]
    },
    {
      "tab": "07-03（周二）",
      "time_points": [
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 10:45",
          "time": "10:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 11:00",
          "time": "11:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 11:15",
          "time": "11:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 11:30",
          "time": "11:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 11:45",
          "time": "11:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 12:00",
          "time": "12:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 12:15",
          "time": "12:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 12:30",
          "time": "12:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 12:45",
          "time": "12:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 13:00",
          "time": "13:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 13:15",
          "time": "13:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 13:30",
          "time": "13:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 13:45",
          "time": "13:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 14:00",
          "time": "14:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 14:15",
          "time": "14:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 14:30",
          "time": "14:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 14:45",
          "time": "14:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 15:00",
          "time": "15:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 15:15",
          "time": "15:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 15:30",
          "time": "15:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 15:45",
          "time": "15:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 16:00",
          "time": "16:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 16:15",
          "time": "16:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 16:30",
          "time": "16:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 16:45",
          "time": "16:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 17:00",
          "time": "17:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 17:15",
          "time": "17:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 17:30",
          "time": "17:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 17:45",
          "time": "17:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 18:00",
          "time": "18:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 18:15",
          "time": "18:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 18:30",
          "time": "18:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 18:45",
          "time": "18:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 19:00",
          "time": "19:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 19:15",
          "time": "19:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 19:30",
          "time": "19:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 19:45",
          "time": "19:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 20:00",
          "time": "20:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 20:15",
          "time": "20:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 20:30",
          "time": "20:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-03 20:45",
          "time": "20:45"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-03 21:00",
          "time": "21:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-03 21:15",
          "time": "21:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-03 21:30",
          "time": "21:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-03 21:45",
          "time": "21:45"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-03 22:00",
          "time": "22:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-03 22:15",
          "time": "22:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-03 22:30",
          "time": "22:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-03 22:45",
          "time": "22:45"
        }
      ]
    },
    {
      "tab": "07-04（周三）",
      "time_points": [
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 10:45",
          "time": "10:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 11:00",
          "time": "11:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 11:15",
          "time": "11:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 11:30",
          "time": "11:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 11:45",
          "time": "11:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 12:00",
          "time": "12:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 12:15",
          "time": "12:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 12:30",
          "time": "12:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 12:45",
          "time": "12:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 13:00",
          "time": "13:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 13:15",
          "time": "13:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 13:30",
          "time": "13:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 13:45",
          "time": "13:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 14:00",
          "time": "14:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 14:15",
          "time": "14:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 14:30",
          "time": "14:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 14:45",
          "time": "14:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 15:00",
          "time": "15:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 15:15",
          "time": "15:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 15:30",
          "time": "15:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 15:45",
          "time": "15:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 16:00",
          "time": "16:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 16:15",
          "time": "16:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 16:30",
          "time": "16:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 16:45",
          "time": "16:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 17:00",
          "time": "17:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 17:15",
          "time": "17:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 17:30",
          "time": "17:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 17:45",
          "time": "17:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 18:00",
          "time": "18:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 18:15",
          "time": "18:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 18:30",
          "time": "18:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 18:45",
          "time": "18:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 19:00",
          "time": "19:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 19:15",
          "time": "19:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 19:30",
          "time": "19:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 19:45",
          "time": "19:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 20:00",
          "time": "20:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 20:15",
          "time": "20:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 20:30",
          "time": "20:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-04 20:45",
          "time": "20:45"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-04 21:00",
          "time": "21:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-04 21:15",
          "time": "21:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-04 21:30",
          "time": "21:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-04 21:45",
          "time": "21:45"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-04 22:00",
          "time": "22:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-04 22:15",
          "time": "22:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-04 22:30",
          "time": "22:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-04 22:45",
          "time": "22:45"
        }
      ]
    },
    {
      "tab": "07-05（周四）",
      "time_points": [
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 10:45",
          "time": "10:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 11:00",
          "time": "11:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 11:15",
          "time": "11:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 11:30",
          "time": "11:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 11:45",
          "time": "11:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 12:00",
          "time": "12:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 12:15",
          "time": "12:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 12:30",
          "time": "12:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 12:45",
          "time": "12:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 13:00",
          "time": "13:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 13:15",
          "time": "13:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 13:30",
          "time": "13:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 13:45",
          "time": "13:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 14:00",
          "time": "14:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 14:15",
          "time": "14:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 14:30",
          "time": "14:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 14:45",
          "time": "14:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 15:00",
          "time": "15:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 15:15",
          "time": "15:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 15:30",
          "time": "15:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 15:45",
          "time": "15:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 16:00",
          "time": "16:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 16:15",
          "time": "16:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 16:30",
          "time": "16:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 16:45",
          "time": "16:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 17:00",
          "time": "17:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 17:15",
          "time": "17:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 17:30",
          "time": "17:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 17:45",
          "time": "17:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 18:00",
          "time": "18:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 18:15",
          "time": "18:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 18:30",
          "time": "18:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 18:45",
          "time": "18:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 19:00",
          "time": "19:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 19:15",
          "time": "19:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 19:30",
          "time": "19:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 19:45",
          "time": "19:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 20:00",
          "time": "20:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 20:15",
          "time": "20:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 20:30",
          "time": "20:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-05 20:45",
          "time": "20:45"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-05 21:00",
          "time": "21:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-05 21:15",
          "time": "21:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-05 21:30",
          "time": "21:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-05 21:45",
          "time": "21:45"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-05 22:00",
          "time": "22:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-05 22:15",
          "time": "22:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-05 22:30",
          "time": "22:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-05 22:45",
          "time": "22:45"
        }
      ]
    },
    {
      "tab": "07-06（周五）",
      "time_points": [
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 10:45",
          "time": "10:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 11:00",
          "time": "11:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 11:15",
          "time": "11:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 11:30",
          "time": "11:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 11:45",
          "time": "11:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 12:00",
          "time": "12:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 12:15",
          "time": "12:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 12:30",
          "time": "12:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 12:45",
          "time": "12:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 13:00",
          "time": "13:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 13:15",
          "time": "13:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 13:30",
          "time": "13:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 13:45",
          "time": "13:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 14:00",
          "time": "14:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 14:15",
          "time": "14:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 14:30",
          "time": "14:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 14:45",
          "time": "14:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 15:00",
          "time": "15:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 15:15",
          "time": "15:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 15:30",
          "time": "15:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 15:45",
          "time": "15:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 16:00",
          "time": "16:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 16:15",
          "time": "16:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 16:30",
          "time": "16:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 16:45",
          "time": "16:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 17:00",
          "time": "17:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 17:15",
          "time": "17:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 17:30",
          "time": "17:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 17:45",
          "time": "17:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 18:00",
          "time": "18:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 18:15",
          "time": "18:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 18:30",
          "time": "18:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 18:45",
          "time": "18:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 19:00",
          "time": "19:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 19:15",
          "time": "19:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 19:30",
          "time": "19:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 19:45",
          "time": "19:45"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 20:00",
          "time": "20:00"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 20:15",
          "time": "20:15"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 20:30",
          "time": "20:30"
        },
        {
          "delivery_fee_description": "5元配送费",
          "delivery_time": "2018-07-06 20:45",
          "time": "20:45"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-06 21:00",
          "time": "21:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-06 21:15",
          "time": "21:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-06 21:30",
          "time": "21:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-06 21:45",
          "time": "21:45"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-06 22:00",
          "time": "22:00"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-06 22:15",
          "time": "22:15"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-06 22:30",
          "time": "22:30"
        },
        {
          "delivery_fee_description": "8元配送费",
          "delivery_time": "2018-07-06 22:45",
          "time": "22:45"
        }
      ]
    }
  ], // 送达时间
  "delivery_reach_time": "20:55", // 尽快送达时间
  "entrances": [],
  "gift_option": {
    "is_available": 0
  },
  "hongbao_info": {
    "available_count": 0,
    "book_available_count": 0,
    "hongbao_sn": "",
    "status": -1,
    "status_text": "暂时只在饿了么APP中支持",
    "unavailable_count": 0
  }, // 红包信息
  "invoice": {
    "is_available": false,
    "is_hidden": true,
    "status_text": "商家不支持开发票"  // 发票状态文本
  }, // 发票信息
  "is_support_ninja": 1,
  "merchant_coupon_info": {
    "available_count": 0,
    "merchant_coupon_id": 0,
    "receive_tip": {
      "is_valid": 0
    },
    "status": -1,
    "status_text": "选择地址后使用红包",
    "unavailable_count": 0
  }, // 商家优惠信息
  "merchant_promise": {
    "is_active": 0
  },
  "mifan_tip": "您的主食点了吗？",
  "ninja_option": {
    "is_auto_select": 0,
    "is_support": 1
  },
  "number_of_meals": {
    "description": "便于商家带够餐具",
    "environmental_slogan": "马上助力环保", // 环保标语
    "is_available": true,
    "notice_cancel_disposable_tableware": true,
    "reward": "3金币"
  }, // 餐具份数
  "pay_methods": [
    {
      "disable_reason": "",
      "id": 1,
      "is_online_payment": true,
      "name": "在线支付",
      "promotion": [],
      "select_state": 1
    }
  ], // 支付方式
  "pay_methods_v2": [],
  "svip_subscribe_remind": {
    "bold_text": "本单立享¥5红包",
    "entrance_text": "去开通",
    "icon": "0c2ce21e3b9230fc1ae352995e1d463apng",
    "is_available": 0,
    "scheme": "eleme://web?url=https%3A//h5.ele.me/supervip/%23path%3D%252Fpurchase%26source%3Deleme_app_checkout%3F",
    "text": "¥6开通会员，"
  },
  "toast": "",
  "tying_bottom_bar": {
    "content": [
      {
        "color": "FFFFFF",
        "font_size": 12,
        "text": "成为超级会员，本单减5元"
      }
    ],
    "icon_hash": "c7aa84b6241f335792edd15457b389cdpng",
    "is_available": true,
    "tip": "成为超级会员，本单减5元"
  },
  "tying_products": [],
  "tying_products_v2": [
    {
      "bottom_bar": {
        "content": [
          {
            "color": "FFFFFF",
            "font_size": 12,
            "text": "成为超级会员，本单减5元"
          }
        ],
        "icon_hash": "c7aa84b6241f335792edd15457b389cdpng",
        "is_available": true,
        "tip": "成为超级会员，本单减5元"
      },
      "category_id": 71,
      "discount_description": [
        {
          "highlight": "",
          "text": "每月送20元奖励金, 可兑至少20元无门槛红包"
        }
      ],
      "discount_description_v2": [
        [
          {
            "color": "999999",
            "image_hash": "",
            "text": "每月送20元奖励金, 可兑至少20元无门槛红包"
          }
        ]
      ],
      "discount_total": 5,
      "exchange_bonus": 0,
      "icon_hash": "c7aa84b6241f335792edd15457b389cdpng",
      "id": 701,
      "logo": "",
      "name": "成为超级会员，本单减5元",
      "original_price": 15,
      "pop_up": {
        "button_text": "去加购",
        "context_image_hash": "1aaf5e388107b541b087b8800c1e1fa1png",
        "is_available": false
      },
      "price": 6,
      "quantity": 1,
      "selected_description": [],
      "sidebar_color": "D7C56F",
      "tip_scheme": "eleme://web?navColor=%2327241f&url=https%3A//h5.ele.me/supervip/%3Fhide_footer%3Dtrue"
    }
  ],
  "tying_sku_products": []
}