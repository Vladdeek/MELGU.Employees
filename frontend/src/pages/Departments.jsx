import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { GetAllDepartment } from '../api/Departments'
import { GetAllStructuralUnits } from '../api/StructuralUnits'
import { Loading } from '../components/Breadcrumbs'

const Departments = () => {
	const [departments, setDepartments] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const load = async () => {
			try {
				const data = await GetAllStructuralUnits()
				console.log(data)
				setDepartments(data)
			} finally {
				setLoading(false)
			}
		}

		load()
	}, [])

	if (loading) return <Loading className={'text-[var(--gray)]'} />

	return (
		<div className='w-full'>
			<p className='text-4xl font-semibold text-[var(--text)]'>Подразделение</p>
			<p className='text-3xl font-thin text-[var(--gray)]'>
				{departments?.length}
			</p>
			<div className='rounded-md border border-[var(--border)] h-full overflow-hidden shadow-[var(--shadow)]'>
				{departments?.map((item, idx) => (
					<NavLink to={`/department/${item.id}`} className='block'>
						<motion.div
							key={idx}
							initial={{ opacity: 0, x: -8 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -8 }}
							transition={{ duration: 0.2, delay: idx * 0.04 }}
							className={`px-3 w-full whitespace-nowrap py-3 text-[var(--text)] text-sm hover:bg-[var(--hero)] hover:text-white transition-colors cursor-pointer ${
								idx % 2 === 0 ? 'bg-[var(--bg-second)]' : 'bg-[var(--bg)]'
							}`}
						>
							{item.name}
						</motion.div>
					</NavLink>
				))}
			</div>
		</div>
	)
}

export default Departments
