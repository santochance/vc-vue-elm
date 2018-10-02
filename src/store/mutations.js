import {
  SAVE_USER_ID,
  SAVE_USER,
} from './mutation-types'

export default {
  /* user */
  [SAVE_USER_ID]: (state, userId) => {
    state.userId = userId
  },
  [SAVE_USER]: (state, user) => {
    state.user = user
  },
}