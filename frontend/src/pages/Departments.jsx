import { NavLink, Outlet } from 'react-router-dom'
import { Search } from '../components/Header'
import { departments } from '../data/data'
import { motion } from 'framer-motion'

const Departments = () => {
	return (
		<div className='w-full'>
			<p className='text-4xl font-semibold text-[var(--text)]'>Подразделение</p>
			<p className='text-3xl font-thin text-[var(--gray)]'>
				{departments.length}
			</p>
			<div className='rounded-md border border-[var(--border)] h-full overflow-hidden shadow-[var(--shadow)]'>
				{departments.map((item, idx) => (
					<NavLink to={`/department/${item.to}`} className='block'>
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
							{item.title}
						</motion.div>
					</NavLink>
				))}
			</div>
		</div>
	)
}

export default Departments
