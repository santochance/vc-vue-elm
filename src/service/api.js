import { stringify } from 'qs'
import request from '@/util/request'

export const fetchHello = () => request(`/hello`)

/**
 * 查询餐厅信息
 */
export const fetchRestaurant = (restaurantId) =>
  request(`/restaurants/${restaurantId}`)

/**
 * 查询餐厅菜单
 */
export const  fetchFoodMenu = (restaurantId) =>
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