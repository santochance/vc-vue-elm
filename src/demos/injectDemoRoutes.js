import Demo from '@/demos/Demo'
import AdjustedPage from '@/demos/AdjustedPage'
import AutoBlurInput from '@/demos/AutoBlurInput'


export default function (config) {
  let demoRoutes = [{
    path: '/demo',
    component: Demo,
    children: [{
      path: 'adjust-page',
      component: AdjustedPage,
    }, {
      path: 'auto-blur-input',
      component: AutoBlurInput,
    }],
  }]

  return { ...config, routes: [ ...config.routes, ...demoRoutes ] }
}