import * as qs from 'qs'
import request from '@/util/request'

/* 注意 Array 风格的选择 */
/*
  qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'indices' })
  // 'a[0]=b&a[1]=c'
  qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' })
  // 'a[]=b&a[]=c'
  qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' })
  // 'a=b&a=c'
 */

const { stringify } = qs

export const fetchHello = (/* payload */) =>
  request(`/path` + `?${stringify({/* query */})}`)

/* login */

/**
 * 获取短信验证码
 */
export const fetchMobileCode = ({ mobile, captcha_value, captcha_hash }) =>
  request(`https://h5.ele.me/restapi/eus/login/mobile_send_code`, {
    method: 'POST',
    body: {
      mobile,
      captcha_value,
      captcha_hash,
    },
  })

/**
 * 获取图形验证码
 */
export const fetchCaptcha = ({ captcha_str }) =>
  request(`https://h5.ele.me/restapi/eus/v3/captchas`, {
    method: 'POST',
    body: {
      captcha_str,
    },
  })

/**
 * 短语登录
 */
export const loginByMobile = ({ mobile, validate_code, validate_token }) =>
  request(`https://h5.ele.me/restapi/eus/login/login_by_mobile`, {
    method: 'POST',
    body: {
      mobile,
      validate_code,
      validate_token,
    },
  })

/**
 * 退出登录
 */
export const logout = ({ user_id }) =>
  request(`https://h5.ele.me/restapi/eus/login/logout`, {
    method: 'POST',
    body: {
      user_id,
    },
  })

/* user */

/**
 * 查询当前登录用户
 */
export const fetchCurrentUser = () =>
  request(`https://h5.ele.me/restapi/eus/v1/current_user` + `?${stringify({
    info_raw: {},
  })}`)

/**
 * 查询用户信息
 */
export const fetchUser = ({ user_id }) =>
  request(`https://h5.ele.me/restapi/eus/v3/users/${user_id}`)

/**
 * 查询额外的用户信息
 */
export const fetchExtraProfile = ({ user_id }) =>
  request(`https://h5.ele.me/restapi/eus/v1/users/${user_id}/extra_profile`)

/**
 * 修改用户名
 */
export const saveUsername = ({ userId, username }) =>
  request(`/users/${userId}/username`, {
    method: 'POST',
    body: {
      username,
    }
  })

/* shop */

/**
 * 批量查询餐馆信息（菜单、评价、商家详情）
 */
export const fetchBatchShop = ({ restaurantId, user_id,  latitude, longitude }) =>
  // request(`/restaurants/${restaurantId}`)
  request(`https://h5.ele.me/pizza/shopping/restaurants/${restaurantId}/batch_shop` + `?${stringify({
    user_id,
    code: 0.6971780616926742,
    extras: JSON.stringify(["activities","albums","license","identification","qualification"]),
    terminal: 'h5',
    latitude,
    longitude,
  })}`, {
    headers: {
      "x-shard": `shopid=${restaurantId}`
    }
  })

/**
 * 批量查询餐饮评价信息（评价概况，过滤标签）
 */
export const fetchBatchComments = ({ restaurantId, has_content }) =>
  request(`https://h5.ele.me/pizza/ugc/restaurants/${restaurantId}/batch_comments` + `?${stringify({
      has_content,
      offset: 0,
      limit: 20,
  })}`, {
    headers: {
      "x-shard": `shopid=${restaurantId}`
    }
  })

/**
 * 查询餐馆评价
 */
export const fetchRatings = ({ restaurantId, has_content, tag_name, offset  }) =>
  request(`https://h5.ele.me/restapi/ugc/v3/restaurants/${restaurantId}/ratings` + `?${stringify({
      tag_name,
      has_content,
      offset,
      limit: 20,
  })}`, {
    headers: {
      "x-shard": `shopid=${restaurantId}`
    }
  })

/**
 * 更新购物车
 */
export const updateCart = ({ geohash, user_id, restaurant_id, entities, sku_ids }) =>
  request(`https://h5.ele.me/restapi/booking/v1/cart_client`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;chartset=utf-8',
      "x-shard": `shopid=${restaurant_id}`
    },
    body: {
      "sub_channel": "",
      "geohash": geohash,
      "user_id": user_id,
      "add_on_type": 0,
      "restaurant_id": restaurant_id,
      "come_from": "mobile",
      "additional_actions": [],
      "entities": [entities],
      "entities_with_ingredient": [
        []
      ],
      "operating_sku_ids": sku_ids,
      "tying_sku_entities": [
        []
      ],
      "packages": [
        []
      ]
    }
  })

/**
 * 结算购物车
 */
export const submitCart = ({ userId, restaurantId, addressId, deliverTime, entities, tableware, remark, geohash, sig } = {}) =>
  request(`https://h5.ele.me/restapi/booking/v1/carts/checkout`, {
    method: 'POST',
    headers: {
      "x-shard": `shopid=${restaurantId}`
    },
    body: {
      "restaurant_id": restaurantId,
      "entities": [
        entities
      ],
      "entities_with_ingredient": [
        []
      ],
      "packages": [
        []
      ],
      "geohash": geohash,
      "come_from": "mobile",
      "deliver_time": deliverTime,
      "paymethod_id": -1,
      "address_id": addressId,
      "address_select_by": "user",
      "sig": sig,
      "hongbao_sn": "",
      "hongbao_action": 0,
      "merchant_coupon_action": 1,
      "merchant_coupon_id": "",
      "user_id": userId,
      "tying_entities": [],
      "is_ant_diamond_vip": 0,
      "is_pintuan": null,
      "sub_channel": "",

      // cancel_disposable_tableware: 0, // Optional, 是否取消餐具
      // number_of_meals: 2份, // Optional，餐具份数不为 0 时显示
      ...(tableware ? (
        tableware === '0' ? { cancel_disposable_tableware: 1, is_ninja: 1 }
        : { cancel_disposable_tableware: 0, number_of_meals: tableware }
      ) : undefined),

      // description: '不要香菜', // Optional, 有备注信息是显示
      ...(remark ? { description: remark } : undefined),
    }
})

/**
 * 查询购物车地址列表
 */
export const fetchCartAddresses = ({ userId, cartId, sig, restaurantId }) => {
  return request(`https://h5.ele.me/restapi/booking/v1/users/${userId}/carts/${cartId}/addresses?sig=${sig}`, {
    headers: {
      "x-shard": `shopid=${restaurantId}`
    }
  })
}

/**
 * 获取备注选项列表
 */
export const fetchRemarkList = ({ cartId, sig, restaurantId }) => {
  return request(`https://h5.ele.me/restapi/v1/carts/${cartId}/remarks?sig=${sig}`, {
    headers: {
      "x-shard": `shopid=${restaurantId}`
    }
  })
}

/* index */

/**
 * 检测新用户
 */
export const checkNewUser = () =>
  request(`https://h5.ele.me/restapi/eus/v2/new_user_check`)

/**
 * 查询餐馆列表
 */
export const fetchRestaurantList = ({ latitude, longitude, offset, ...options }) =>
  request(`https://h5.ele.me/restapi/shopping/v3/restaurants` + `?${stringify({
    latitude,
    longitude,
    offset,
    limit: 8,
    extras: ['activities', 'tags'],
    extra_filters: 'home',
    rank_id: '',
    terminal: 'h5',
    ...options,
  }, { arrayFormat: 'brackets' })}`)

/**
 * 查询用户地址信息v2
 */
export const fetchLocation = ({ latitude, longitude }) =>
  request(`https://h5.ele.me/restapi/member/v2/users/:id/location` + `?${stringify({
    longitude,
    latitude,
  })}}`)

/**
 * 批量查询餐馆列表筛选器
 */
export const fetchBatchFilter = ({ latitude, longitude }) =>
  request(`https://h5.ele.me/pizza/shopping/restaurants/batch_filter` + `?${stringify({
    latitude,
    longitude,
    terminal: 'h5',
  })}`)

/**
 * 逆向查询 geo 编码
 */
export const reverseGeoCoding = ({ latitude, longitude }) =>
  request(`https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding` + `?${stringify({
    latitude,
    longitude,
  })}`)

/**
 * 查询导航入口列表
 */
export const fetchEntryList = ({ latitude, longitude }) =>
  request(`https://h5.ele.me/restapi/shopping/v2/entries` + `?${stringify({
    latitude,
    longitude,
    templates: ['main_template', 'favourable_template', 'svip_template'],
    terminal: 'h5',
  }, { arrayFormat: 'brackets' })}`)

/**
 * 查询 banner 列表
 */
export const fetchBannerList = ({ latitude, longitude }) =>
  request(`https://h5.ele.me/restapi/shopping/v2/banners` + `?${stringify({
    consumer: 1,
    type: 1,
    latitude,
    longitude,
  })}`)


/**
 * 获取城市列表
 */
export const fetchCityList = () =>
  request(`https://shadow.elemecdn.com/lib/city-list@0.0.3/city_list.json`, {
    credentials: 'omit',
  })

/**
 * 搜索附近 POI
 */
export const searchNearby = ({ keyword, latitude, longitude }) =>
  request(`https://h5.ele.me/restapi/bgs/poi/search_poi_nearby_alipay` + `?${stringify({
    keyword,
    ...(latitude && longitude ? { latitude, longitude } : null),
    offset: 0,
    limit: 20,
  })}`)


/* discover */

/**
 * 查询发现页 banner
 */
export const fetchDiscoveryBanner = ({ latitude, longitude, params }) =>
  request(`https://h5.ele.me/restapi/shopping/v1/sale_list_index` + `?${stringify({
    type: 'special_food',
    latitude,
    longitude,
    params,
  })}`)

/**
 * 查询发现页入口
 */
export const fetchDiscoverEntries = ({ latitude, longitude }) =>
  request(`https://h5.ele.me/restapi/member/v1/discover` + `?${stringify({
    platform: 1,
    block_index: 0,
    latitude,
    longitude,
  })}`)

/**
 * 查询发现页活动版块
 */
export const fetchDiscoverSuggestion = () =>
  request(`https://h5.ele.me/restapi/member/gifts/suggest`)


/**
 * 查询用户地址列表
 */
export const fetchAddressList = (userId) =>
  request(`/addresses?user_id=${userId}`)