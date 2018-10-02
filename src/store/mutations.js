import { SAVE_USER_ID } from './mutation-types'

export default {
  /* user */
  [SAVE_USER_ID]: (state, userId) => {
    state.userId = userId
  },
}