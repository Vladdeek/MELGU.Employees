import { Outlet } from 'react-router-dom'
import Header, { HeaderHeight } from '../../components/Header'
import { NavTrail } from '../../components/Breadcrumbs'
import SideBar, { SideBarWidth } from '../../components/SideBar'
import { useEffect, useState } from 'react'

export default function DashboardLayout() {
	// РАБОТАЕТ КАК MAX-MD: В TAILWIND
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768)
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const [showSideBar, setShowSideBar] = useState(false)

	return (
		<div className='flex'>
			<SideBar showSideBar={showSideBar} isMobile={isMobile} />

			<div
				className={`flex min-h-screen  flex-col w-full`}
				style={{
					marginLeft: isMobile ? '0px' : SideBarWidth,
				}}
			>
				<Header onChange={data => setShowSideBar(data)} isMobile={isMobile} />
				<main className={`p-4`}>
					{/* <NavTrail /> */}
					<Outlet />
				</main>
			</div>
		</div>
	)
}
