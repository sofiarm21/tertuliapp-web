import React from 'react'
import '../styles/theme.scss'
import '../styles/globals.scss'

import App from 'next/app'
import Head from 'next/head'
import withData from '../lib/apollo'
import Layout from'../components/Layout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
            <link
                rel='stylesheet'
                href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
                integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
                crossOrigin='anonymous'
            />
            <link 
                rel='stylesheet'
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"
                integrity="sha256-46r060N2LrChLLb5zowXQ72/iKKNiw/lAmygmHExk/o="
                crossOrigin='anonymous'
            />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}


export default withData(MyApp)
