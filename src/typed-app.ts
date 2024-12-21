import { Hono } from 'hono'
import { typedApp as app1 } from './apps/app-1'
import { typedApp as app2 } from './apps/app-2'
import { typedApp as app3 } from './apps/app-3'
import { typedApp as app4 } from './apps/app-4'
import { typedApp as app5 } from './apps/app-5'

const app = new Hono()
  .route('', app1)
  .route('', app2)
  .route('', app3)
  .route('', app4)
  .route('', app5)

export default app
