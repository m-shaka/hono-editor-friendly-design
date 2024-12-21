import { writeFile } from 'node:fs'

const appCount = 5
const handlerCount = 200

const generateRoutes = (appNumber: number, count: number) => {
  let routes = `import { Hono } from 'hono'
import { hc } from 'hono/client'
export const app = new Hono().basePath('app-${appNumber}')
export const typedApp = app`
  for (let i = 1; i <= count; i++) {
    routes += `
  .get('/route-${i}/:id', (c) => {
    return c.json({
      ok: true
    })
  })`
  }
  routes += `

export const hcWithType = (...args: Parameters<typeof hc>) =>
  hc<typeof typedApp>(...args)
`
  return routes
}

for (let i = 1; i <= appCount; i++) {
  const routes = generateRoutes(i, handlerCount)
  writeFile(`./src/apps/app-${i}.ts`, routes, (err) => {
    if (err) { throw err }
    console.log(`${handlerCount} routes have been written to app-${i}.ts`)
  })
}
