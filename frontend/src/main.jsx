import { createRoot } from 'react-dom/client'
import Snowfall from 'react-snowfall'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from 'react-router-dom'
import { Suspense, useState } from 'react'
import './index.css'
import './themes.css'

import axios from 'axios'
import api, { API } from './API'
import { Toaster } from 'react-hot-toast'
import DashboardLayout from './pages/layout/DashboardLayout'
import Departments from './pages/Departments'
import DepartmentPage from './pages/DepartmentPage'
import SectionPage from './pages/SectionPage'
import EmployeePage from './pages/EmployeePage'
import ContactDirectoryPage from './pages/ContactDirectoryPage'
import EmployeesPage from './pages/Employees'
import AchievmentsSection, { AchievmentInfo } from './pages/Achievments'

function MainApp() {
	const [role, setRole] = useState()
	const [teacherProfileId, setTeacherProfileId] = useState()
	return (
		<Suspense
			fallback={
				<>
					<p>Загрузка</p>
				</>
			}
		>
			<Routes>
				<Route path='/' element={<DashboardLayout />}>
					<Route path='departments/list' element={<Departments />} />
					<Route path='employees/list' element={<EmployeesPage />} />

					<Route path='department/:departmentid' element={<DepartmentPage />} />
					<Route path='employee/:employeeid' element={<EmployeePage />}>
						<Route path=':achievements' element={<AchievmentsSection />}>
							<Route path=':achievementid' element={<AchievmentInfo />} />
						</Route>
					</Route>
					<Route path='contacts' element={<ContactDirectoryPage />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

createRoot(document.getElementById('root')).render(
	<Router>
		<Toaster position='top-right' />
		<div className='relative'>
			{/* <Snowfall
				style={{
					position: 'fixed',
					width: '100vw',
					height: '100vh',
					zIndex: 9999,
					pointerEvents: 'none',
				}}
			/> */}
			<MainApp />
		</div>
	</Router>,
)
