import { createRoot } from 'react-dom/client'
import { SWRConfig } from 'swr'
import { App } from './App'
import { GlobalStyle } from './GlobalStyle'

const fetcher = async (url: string) => {
	const res = await fetch(url)
	if (!res.ok) throw new Error(`TMDB request failed: ${res.status}`)
	return res.json()
}

createRoot(document.getElementById('root')!).render(
	<SWRConfig value={{ fetcher }}>
		<GlobalStyle />
		<App />
	</SWRConfig>
)
