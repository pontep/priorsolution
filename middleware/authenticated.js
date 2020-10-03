export default function ({ store, route, redirect }) {
  const user = store.state.users.user
  const blockedRoute = /\/admin\/*/g
  const loginRoute = '/login'

  if (!user && route.path.match(blockedRoute)) {
    redirect('/')
  }
  if (user && route.path === loginRoute) {
    redirect('/admin')
  }
}
