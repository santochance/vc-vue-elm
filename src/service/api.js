import { stringify } from 'qs'
import request from '@/util/request'

export const fetchHello = () => request(`/hello`)

/**
 * 查询当前登录用户
 */
export const fetchCurrentUser = () =>
  request(`/users/current`)

/**
 * 查询用户信息
 */
export const fetchUser = (userId) =>
  request(`/users/${userId}`)

 /**
  * 查询额外的用户信息
  */
export const fetchExtraProfile = (userId) =>
  request(`/users/${userId}/extra_profile`) 

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

