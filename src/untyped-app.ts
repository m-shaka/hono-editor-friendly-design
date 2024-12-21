import { Hono } from 'hono'
import { app as app1 } from './apps/app-1'
import { app as app2 } from './apps/app-2'
import { app as app3 } from './apps/app-3'
import { app as app4 } from './apps/app-4'
import { app as app5 } from './apps/app-5'

const app = new Hono()
  .route('', app1)
  .route('', app2)
  .route('', app3)
  .route('', app4)
  .route('', app5)

export default app
