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
				<Route
					path='/'
					element={
						<DashboardLayout
							onChange={data => {
								setRole(data.role)
								setTeacherProfileId(data.teacher_profile_id)
							}}
						/>
					}
				>
					<Route path='/departments' element={<Departments />}>
						<Route index element={<div>Выбери кафедру</div>} />
						<Route path=':departmentName' element={<DepartmentPage />} />
					</Route>
				</Route>
			</Routes>
		</Suspense>
	)
}

createRoot(document.getElementById('root')).render(
	<Router>
		<Toaster position='top-right' />
		<div className='relative'>
			<Snowfall
				style={{
					position: 'fixed',
					width: '100vw',
					height: '100vh',
					zIndex: 9999,
					pointerEvents: 'none',
				}}
			/>
			<MainApp />
		</div>
	</Router>
)
