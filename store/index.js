import JWTDecode from 'jwt-decode'
import cookieparser from 'cookieparser'
import Cookie from 'js-cookie'

export const actions = {
  nuxtClientInit({ commit }) {
    console.log(' nuxtClientInit work')
    // if (process.server && process.static) return
    // if (!req.headers.cookie) return
    const cookie = Cookie.get('access_token')
    console.log('cookie')
    console.log(cookie)
    // const parsed = cookieparser.parse(cookie)
    // console.log('parsed')
    // console.log(parsed)
    const accessTokenCookie = cookie

    if (!accessTokenCookie) return

    console.log('accessTokenCookie')
    console.log(accessTokenCookie)
    const decoded = JWTDecode(accessTokenCookie)
    if (decoded) {
      console.log('WORKSSS')
      commit('users/SET_USER', {
        uid: decoded.user_id,
        email: decoded.email,
      })
    }
  },
}
