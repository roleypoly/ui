import NextApp from 'next/app'
import { GlobalStyleColors } from '../atoms/colors'
import * as React from 'react'

export default class App extends NextApp {
	render() {
		const { Component, pageProps, router } = this.props
		return (
			<main>
				<GlobalStyleColors />
				<Component {...pageProps} router={router} />
			</main>
		)
	}
}
