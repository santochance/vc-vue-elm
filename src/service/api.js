import { stringify } from 'qs'
import request from '@/util/request'

export const fetchHello = () => request(`/hello`)

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

/**
 * 查询当前登录用户
 */
export const fetchCurrentUser = () =>
  request(`https://h5.ele.me/restapi/eus/v1/current_user?${
    stringify({
      info_raw: {},
    })
  }`)

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

/**
 * 查询餐厅信息
 */
export const fetchRestaurant = (restaurantId) =>
  request(`/restaurants/${restaurantId}`)

/**
 * 查询餐厅菜单
 */
export const fetchFoodMenu = (restaurantId) =>
  request(`/restaurants/${restaurantId}/menu`)

/**
 * 查询餐厅评分概况
 */
export const fetchRatingOverview = (restaurantId) =>
  request(`/restaurants/${restaurantId}/ratings`)

/**
 * 查询餐厅评价
 */
export const fetchComments = ({ restaurantId, tagName, offset, limit }) =>
  request(`/restaurants/${restaurantId}/comments?${stringify({
    tag_name: tagName,
    offset,
    limit,
  })}`)

/**
 * 结算购物车
 */
export const submitCart = ({ userId, restaurantId, addressId, deliverTime, entities, sig, tableware, remark } = {}) =>
  request(`/checkout`, {
    method: 'POST',
    body: {
      user_id: userId,
      restaurant_id: restaurantId,
      address_id: addressId,
      deliver_time: deliverTime,
      paymethod_id: -1,
      entities,
      sig,
      come_from: 'mobile',
      // geohash,

      // cancel_disposable_tableware: 0, // Optional, 是否取消餐具
      // number_of_meals: 2份, // Optional，餐具份数不为 0 时显示
      ...(tableware ? (
        tableware === '0' ? { cancel_disposable_tableware: 1 }
        : { cancel_disposable_tableware: 0, number_of_meals: tableware }
      ) : undefined),

      // description: '不要香菜', // Optional, 有备注信息是显示
      ...(remark ? { description: remark } : undefined),
  }
})

/**
 * 查询地址列表
 */
export const fetchAddressList = (userId) =>
  request(`/addresses?user_id=${userId}`)

/**
 * 获取备注选项列表
 */
export const fetchRemarkList = (restaurantId) =>
  request(`/restaurant/${restaurantId}/remarks`)
