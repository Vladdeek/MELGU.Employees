import { NavLink } from 'react-router-dom'

import { motion } from 'framer-motion'
import { SearchIcon } from 'lucide-react'
import { Loading } from '../components/Breadcrumbs'
import { useEffect, useState } from 'react'
import { GetAllUsers } from '../api/Users'

export const Search = () => {
	return (
		<div className='w-full bg-[var(--bg)] h-10 border border-[var(--border)] focus-within:bg-[var(--bg)] focus-within:ring-3 ring-[var(--glow)] rounded-sm pl-3 flex items-center transition-all overflow-hidden'>
			<input
				type='text'
				placeholder='Поиск...'
				className='w-full outline-none placeholder:text-[var(--gray)] focus:text-[var(--text)] focus:placeholder:text-[var(--subtext)] bg-transparent text-white '
			/>
			<SearchIcon className='text-[var(--gray)] group-focus:text-[var(--text)] border-l border-[var(--border)] flex items-center justify-center h-full aspect-square w-10 p-2.5 hover:bg-[var(--bg-second)] active:bg-[var(--hero)] active:text-white transition-all cursor-pointer' />
		</div>
	)
}

const EmployeesPage = () => {
	const [loading, setLoading] = useState(true)
	const [employees, setEmployees] = useState([])

	useEffect(() => {
		const load = async () => {
			try {
				const data = await GetAllUsers()
				setEmployees(data)
			} finally {
				setLoading(false)
			}
		}

		load()
	}, [])

	if (loading) return <Loading className={'text-[var(--gray)]'} />

	return (
		<div className='w-full'>
			<div className='flex justify-between'>
				<p className='text-4xl font-semibold text-[var(--text)]'>
					Список сотрудников
				</p>
				<button
					type='button'
					className='text-sm font-normal px-4 rounded-md bg-[var(--hero)] text-white text-[var(--text)] hover:bg-[var(--dark-hero)] active:scale-98 transition-all h-10 cursor-pointer'
				>
					Только НПР
				</button>
			</div>

			<p className='text-3xl font-thin text-[var(--gray)]'>
				{employees?.length}
			</p>
			<Search />
			<div className='rounded-md border border-[var(--border)] h-full mt-4 overflow-hidden'>
				{employees?.map((item, idx) => (
					<NavLink to={`/employee/${item.id}`} className='block'>
						<motion.div
							key={idx}
							initial={{ opacity: 0, x: -8 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -8 }}
							transition={{ duration: 0.2, delay: idx * 0.04 }}
							className={`px-3 py-3 text-[var(--text)] text-sm hover:bg-[var(--hero)] hover:text-white transition-colors cursor-pointer ${
								idx % 2 === 0 ? 'bg-[var(--bg-second)]' : 'bg-[var(--bg)]'
							}`}
						>
							{item.username}
						</motion.div>
					</NavLink>
				))}
			</div>
		</div>
	)
}
export default EmployeesPage
