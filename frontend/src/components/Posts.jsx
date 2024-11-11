import { useEffect, useState } from 'react'

import PostDetails from './PostDetails'

const Posts = () => {
	const [posts, setPosts] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [showMessage, setShowMessage] = useState(false)

	useEffect(() => {
		// Set timer for delayed message
		const messageTimer = setTimeout(() => {
			setShowMessage(true)
		}, 3000)

		const fetchPosts = async () => {
			try {
				// Simulate Render's slow loading time
				// await new Promise((resolve) => setTimeout(resolve, 15000))

				// const res = await fetch(import.meta.env.VITE_RAILWAY_URL + '/api/posts')
				const res = await fetch(import.meta.env.VITE_RENDER_URL + '/api/posts')
				const json = await res.json()

				if (res.ok) {
					setPosts(json)
				}
			} catch (error) {
				console.error('Error fetching posts:', error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchPosts()

		// Cleanup timer if component unmounts
		return () => clearTimeout(messageTimer)
	}, [])

	return (
		<section>
			{isLoading ? (
				<div className='flex flex-col items-center justify-center space-y-4 text-gray-light-txt p-8 text-center'>
					<svg
						className='animate-spin h-8 w-8 text-gray-light-txt'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
					>
						<circle
							className='opacity-25'
							cx='12'
							cy='12'
							r='10'
							stroke='currentColor'
							strokeWidth='4'
						></circle>
						<path
							className='opacity-75'
							fill='currentColor'
							d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
						></path>
					</svg>
					{showMessage && (
						<p className='text-4xl transition-opacity duration-1000 ease-in opacity-0 animate-fadeIn'>
							Project is hosted on Render&apos;s free tier and may take up to 15
							seconds to load, please hold...
						</p>
					)}
				</div>
			) : (
				<ul className='space-y-4'>
					{posts &&
						posts.map((post) => <PostDetails post={post} key={post._id} />)}
				</ul>
			)}
		</section>
	)
}
export default Posts
