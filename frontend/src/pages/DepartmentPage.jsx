import { NavLink, useParams } from 'react-router-dom'

import { motion } from 'framer-motion'
import {
	GetStructuralUnitsByID,
	GetStructuralUnitsEmployees,
	GetSubStructuralUnitsByID,
} from '../api/StructuralUnits'
import { useEffect, useState } from 'react'
import { Loading } from '../components/Breadcrumbs'

const DepartmentPage = () => {
	const { departmentid } = useParams()

	const [loading, setLoading] = useState(true)
	const [depInfo, setDepInfo] = useState([])
	const [depEmpl, setDepEmpl] = useState([])
	const [depSubs, setDepSubs] = useState([])

	useEffect(() => {
		const info = async () => {
			try {
				const data = await GetStructuralUnitsByID(departmentid)
				setDepInfo(data)
			} finally {
			}
		}
		const employees = async () => {
			try {
				const data = await GetStructuralUnitsEmployees(departmentid)
				setDepEmpl(data)
			} finally {
				setLoading(false)
			}
		}
		const subs = async () => {
			try {
				const data = await GetSubStructuralUnitsByID(departmentid)
				setDepSubs(data)
			} finally {
			}
		}

		info()
		employees()
		subs()
	}, [departmentid])

	if (!depInfo) {
		return (
			<div className='text-4xl font-semibold text-[var(--text)]'>
				Департамент не найден
			</div>
		)
	}

	return (
		<div>
			<p className='text-4xl font-semibold text-[var(--text)]'>
				{depInfo.name}
			</p>

			<div className='grid grid-cols-3 gap-5 mt-3'>
				<div
					className={`col-span-2 rounded-md border border-[var(--border)] shadow-[var(--shadow)] ${depEmpl?.length === 0 ? 'h-[75vh]' : 'h-full'}  overflow-hidden`}
				>
					<p className='text-md px-4 py-1 font-semibold text-[var(--text)]'>
						Сотрудники{' '}
						<span className='text-md font-thin text-[var(--subtext)]'>
							{depEmpl?.length}
						</span>
					</p>
					{!loading ? (
						depEmpl.length === 0 ? (
							<p className='w-full h-full flex justify-center items-center text-[var(--gray)]'>
								Список сотрудников пуст
							</p>
						) : (
							depEmpl?.map((item, idx) => (
								<NavLink to={`/employee/${item?.id}`} className='block'>
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
											{item.first_name} {item.last_name} {item.middle_name}
										</p>
										<p className='text-sm font-normal group group-hover:text-red-100 text-[var(--gray)]'>
											{item.position}
										</p>
									</motion.div>
								</NavLink>
							))
						)
					) : (
						<div className='w-full h-full flex justify-center items-center'>
							<Loading className={'text-[var(--gray)]'} />
						</div>
					)}
				</div>
				<div className='col-span-1 flex flex-col gap-5'>
					<motion.div
						initial={{ opacity: 0, x: -8 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -8 }}
						transition={{ duration: 0.2, delay: 0.15 }}
						className='rounded-md border border-[var(--border)] shadow-[var(--shadow)] h-fit overflow-hidden '
					>
						<p className='text-sm font-semibold text-[var(--text)]  border-b border-[var(--border)] w-full px-4 py-1'>
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
					{depSubs.length !== 0 && (
						<motion.div
							initial={{ opacity: 0, x: -8 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -8 }}
							transition={{ duration: 0.2, delay: 0.3 }}
							className='rounded-md border border-[var(--border)] shadow-[var(--shadow)] h-125 overflow-hidden '
						>
							<p className='text-sm font-semibold text-[var(--text)] border-b border-[var(--border)] w-full px-4 py-1'>
								Отделы{' '}
								<span className='font-thin text-[var(--subtext)]'>
									{depSubs?.length}
								</span>
							</p>
							<div className='h-full overflow-scroll'>
								{depSubs?.map((item, idx) => (
									<NavLink to={`/department/${item.id}`} className='block z-20'>
										<motion.div
											key={idx}
											initial={{ opacity: 0, x: -8 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -8 }}
											transition={{ duration: 0.2, delay: idx * 0.04 }}
											className={`px-3 py-3 text-[var(--text)] text-sm hover:bg-[var(--hero)] hover:text-white transition-colors cursor-pointer ${
												idx % 2 === 0
													? 'bg-[var(--bg-second)]'
													: 'bg-[var(--bg)]'
											}`}
										>
											{item.name}
										</motion.div>
									</NavLink>
								))}
							</div>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	)
}

export default DepartmentPage
