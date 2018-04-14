import axios from 'axios'
import * as actions from './actions'
import { nowShowingUrl, topRatedUrl } from './movie-island/apiConfig'

export function getNowShowing() {
  return dispatch => {
    return axios.get(nowShowingUrl).then(response => {
      return dispatch(actions.storeNowShowing(response.data.results))
    })
  }
}

export function getTopRated() {
  return dispatch => {
    return axios.get(topRatedUrl).then(response => {
      return dispatch(actions.storeTopRated(response.data.results))
    })
  }
}