import Demo from '@/demos/Demo'
import AdjustedPage from '@/demos/AdjustedPage'


export default function (config) {
  let demoRoutes = [{
    path: '/demo',
    component: Demo,
    children: [{
      path: 'adjust-page',
      component: AdjustedPage,
    }],
  }]

  return { ...config, routes: [ ...config.routes, ...demoRoutes ] }
}