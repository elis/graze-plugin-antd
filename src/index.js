import { useEffect } from 'react'

export default (options) => ({
  client: client(options),
  server: server(options)
})

const client = options => ({
  onLoad: () => {
    options?.theme?.()
  },
  Wrapper: ({children}) => {
    useEffect(() => {
      const jssStyles = document.getElementById('antd-server-side')
      if (jssStyles && jssStyles.parentNode) {
        setTimeout(() => {
          jssStyles.parentNode.removeChild(jssStyles)
        }, 800)
      }
    }, [])

    return children
  }
})

const server = options => ({
  onRequest: () => ({}),
  output: (props, markup) => {
    const antd = require('antd/dist/antd.less')
    const theme = options?.theme?.() ?? ''

    const dropcss = require('dropcss');

    let cleaned = dropcss({
      html: `<html><body>${markup}</body></html>`,
      css: `${theme}` || `${antd}`
    })

    return [`<style id="antd-server-side">${cleaned.css}</style>`]
  }
})