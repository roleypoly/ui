import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

export const InjectTypekitFont = () => (
  <Head>
    <link
      key="typekit-js-preload"
      rel="preload"
      href="https://use.typekit.net/bck0pci.js"
    />
    <link
      key="typekit-css-preload"
      rel="preload"
      href="https://use.typekit.net/bck0pci.css"
    />
    <script key="typekit-load" async>{`
        ;(function(d) {
    var config = {
        kitId: 'bck0pci',
        scriptTimeout: 3000,
        async: true,
      },
      h = d.documentElement,
      t = setTimeout(function() {
        h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
      }, config.scriptTimeout),
      tk = d.createElement('script'),
      f = false,
      s = d.getElementsByTagName('script')[0],
      a
    h.className += ' wf-loading'
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
    tk.async = true
    tk.onload = tk.onreadystatechange = function() {
      a = this.readyState
      if (f || (a && a != 'complete' && a != 'loaded')) return
      f = true
      clearTimeout(t)
      try {
        Typekit.load(config)
      } catch (e) {}
    }
    s.parentNode.insertBefore(tk, s)
  })(document)
    `}</script>
  </Head>
)

export const UseFontStyled = styled.div`
  font-family: 'source-han-sans-japanese', 'Source Sans Pro', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important;
`
