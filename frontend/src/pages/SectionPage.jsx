import { NavLink, useParams } from 'react-router-dom'
import { departments, employees, sections } from '../data/data'
import { motion } from 'framer-motion'

const SectionPage = () => {
	const { sectionid } = useParams()

	const section = sections.find(dep => dep.to === sectionid)

	if (!section) {
		return (
			<div className='text-4xl font-semibold text-[var(--text)]'>
				Отдел не найден
			</div>
		)
	}

	return (
		<div>
			<p className='text-4xl font-semibold text-[var(--text)]'>
				{section.title}
			</p>

			<div className='grid grid-cols-3 gap-5'>
				<div className='col-span-2 rounded-md border border-[var(--border)] shadow-[var(--shadow)] h-full overflow-hidden'>
					<p className='text-md px-4 py-1 font-semibold text-[var(--text)]'>
						Сотрудники{' '}
						<span className='text-md font-thin text-[var(--subtext)]'>
							{employees.length}
						</span>
					</p>

					{employees.map((item, idx) => (
						<NavLink to={`/employee/${item.id}`} className='block'>
							<motion.div
								key={idx}
								initial={{ opacity: 0, x: -8 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -8 }}
								transition={{ duration: 0.2, delay: idx * 0.04 }}
								className={`px-3 py-2 text-[var(--text)] group text-sm hover:bg-[var(--hero)]  hover:text-white transition-colors cursor-pointer ${
									idx % 2 === 0 ? 'bg-[var(--bg-second)]' : 'bg-[var(--bg)]'
								}`}
							>
								<p className='text-[var(--text)] group group-hover:text-white font-medium'>
									{item.fullName}
								</p>
								<p className='text-sm font-normal group group-hover:text-red-100 text-[var(--gray)]'>
									{item.position}
								</p>
							</motion.div>
						</NavLink>
					))}
				</div>
				<div className='col-span-1 flex flex-col gap-5'>
					<motion.div
						initial={{ opacity: 0, x: -8 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -8 }}
						transition={{ duration: 0.2, delay: 0.15 }}
						className='rounded-md border border-[var(--border)] shadow-[var(--shadow)] h-fit overflow-hidden '
					>
						<p className='text-sm font-semibold text-[var(--text)] border-b border-[var(--border)] w-full px-4 py-1'>
							Исполняющий обязанности
						</p>
						<p className='text-sm text-[var(--subtext)] px-4 py-1'>
							Нет Информации
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -8 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -8 }}
						transition={{ duration: 0.2, delay: 0.2 }}
						className='rounded-md border border-[var(--border)] shadow-[var(--shadow)] h-fit overflow-hidden '
					>
						<p className='text-sm font-semibold text-[var(--text)] border-b border-[var(--border)] w-full px-4 py-1'>
							Руководитель
						</p>
						<p className='text-sm text-[var(--subtext)] px-4 py-1'>
							Нет Информации
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -8 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -8 }}
						transition={{ duration: 0.2, delay: 0.25 }}
						className='rounded-md border border-[var(--border)] shadow-[var(--shadow)] h-fit overflow-hidden '
					>
						<p className='text-sm font-semibold text-[var(--text)] border-b border-[var(--border)] w-full px-4 py-1'>
							Дополнительные контакты
						</p>
						<p className='text-sm text-[var(--subtext)] px-4 py-1'>
							Нет Информации
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default SectionPage
