import { Outlet } from 'react-router-dom'
import Header, { HeaderHeight } from '../../components/Header'
import { NavTrail } from '../../components/Breadcrumbs'
import SideBar, { SideBarWidth } from '../../components/SideBar'

export default function DashboardLayout() {
	return (
		<div className='flex'>
			<SideBar />
			<div
				className={`flex min-h-screen  flex-col w-full`}
				style={{ marginLeft: SideBarWidth }}
			>
				<Header />
				<main className={`p-4`}>
					{/* <NavTrail /> */}
					<Outlet />
				</main>
			</div>
		</div>
	)
}
