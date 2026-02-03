import { NavLink, Outlet, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Accordion from '../components/Accordion'
import {
	BriefcaseBusiness,
	GraduationCap,
	IdCard,
	Landmark,
	Mail,
	User,
	User2,
} from 'lucide-react'
import { GetEmployeeProfileByID } from '../api/EmployeeProfiles'
import { useEffect, useState } from 'react'
import { Loading } from '../components/Breadcrumbs'

const EmployeePage = () => {
	const { employeeid, achievements } = useParams()
	const [employeeInfo, setEmployeeInfo] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const load = async () => {
			try {
				const data = await GetEmployeeProfileByID(employeeid)
				console.log(data)
				setEmployeeInfo(data)
			} finally {
				setLoading(false)
			}
		}

		load()
	}, [])

	const accordionData = [
		{
			title: 'Учебная деятельность',
			option: [
				{ title: 'Методические пособия', to: 'teaching-materials' },
				{ title: 'Повышение квалификации', to: 'professional-development' },
				{ title: 'Преподаваемые дисциплины', to: 'taught-disciplines' },
				{ title: 'Руководство диссертациями', to: 'thesis-supervision' },
			],
		},
		{
			title: 'Научная деятельность',
			option: [
				{ title: 'Конференции', to: 'conferences' },
				{ title: 'Патенты', to: 'patents' },
				{ title: 'Публикации', to: 'publications' },
				{ title: 'Участие в научных проектах', to: 'research-projects' },
			],
		},
		{
			title: 'Конкурсная деятельность',
			option: [
				{ title: 'Конкурсы', to: 'competitions' },
				{ title: 'Выставки', to: 'exhibitions' },
				{ title: 'Достижения', to: 'achievements' },
				{ title: 'Концерты', to: 'concerts' },
				{
					title: 'Программа повышения конкурентоспособности',
					to: 'competitiveness-program',
				},
			],
		},
	]
	const activeTitle = accordionData
		.flatMap(section => section.option)
		.find(item => item.to === achievements)?.title

	const infoBlocks1 = [
		{
			icon: User,
			label: 'Должность',
			value: employeeInfo?.employee_position?.title || 'Неизвестно',
		},
		{
			icon: BriefcaseBusiness,
			label: 'Общий стаж',
			value: employeeInfo?.total_experience_years || 'Неизвестно',
		},
		{
			icon: GraduationCap,
			label: 'Образование',
			value: employeeInfo?.academic_degree || 'Неизвестно',
		},
	]
	const infoBlocks2 = []

	if (loading) return <Loading className={'text-[var(--gray)]'} />

	if (!employeeInfo) {
		return (
			<div className='text-4xl font-semibold text-[var(--text)]'>
				Сотрудник не найден
			</div>
		)
	}

	return (
		<div>
			<p className='text-4xl font-semibold text-[var(--text)] mb-1'>
				{employeeInfo?.first_name} {employeeInfo?.last_name}
				{employeeInfo?.middle_name}
			</p>

			<p className='text-[26px] font-thin text-[var(--subtext)]'>
				{achievements ? activeTitle : 'Профиль'}
			</p>

			<div className='grid grid-cols-4 max-[1335px]:grid-cols-2 max-md:grid-cols-1 gap-5'>
				{achievements ? (
					<Outlet />
				) : (
					<>
						<div className='col-span-1 order-1'>
							<div className='bg-[var(--bg)] rounded-md shadow-[var(--shadow)] overflow-hidden border border-[var(--border)] w-full'>
								{employeeInfo?.img ? (
									<img src={employeeInfo?.img} alt='' />
								) : (
									<User2 className='w-full h-full p-10 bg-[var(--border)] text-[var(--gray)]' />
								)}

								<div className='flex justify-between items-center'>
									<div className='flex w-full justify-center py-2 border-r border-[var(--border)] hover:bg-[var(--bg-second)] cursor-pointer'>
										<Mail className='text-[var(--gray)] h-4' />
									</div>
									<div className='flex w-full justify-center py-2 border-r border-[var(--border)] hover:bg-[var(--bg-second)] cursor-pointer'>
										<IdCard className='text-[var(--gray)] h-4' />
									</div>
									<div className='flex w-full justify-center py-2 hover:brightness-90 cursor-pointer'>
										<User className='text-[var(--gray)] h-4' />
									</div>
								</div>
								<p className='flex w-full justify-center text-white bg-[var(--hero)] hover:brightness-90 cursor-pointer items-center py-1 transition-all'>
									Запись на получение пропуска
								</p>
							</div>
						</div>

						<div className=' min-md:col-span-2 flex flex-col gap-5 max-[1335px]:order-3 order-2'>
							<div className='bg-[var(--bg)] rounded-md border border-[var(--border)] shadow-[var(--shadow)]'>
								<p className='text-sm px-4 py-1 font-semibold text-[var(--text)]'>
									О сотруднике
								</p>
								{infoBlocks1.map(item => {
									const Icon = item.icon
									return (
										<div
											key={item.label}
											className='flex gap-3 items-center px-3 py-3 border-t border-[var(--border)]  '
										>
											<Icon className='text-[var(--gray)]' />
											<p className='flex flex-col gap-1'>
												<span className='text-[var(--subtext)] text-sm font-light'>
													{item.label}
												</span>
												{item.isList ? (
													item.value.map((val, i) => (
														<span
															key={i}
															className='text-sm text-[var(--text)]'
														>
															{val}
														</span>
													))
												) : (
													<span className='text-sm text-[var(--text)]'>
														{item.value}
													</span>
												)}
											</p>
										</div>
									)
								})}
							</div>

							<div
								className={`${infoBlocks2?.length === 0 && 'hidden'} bg-[var(--bg)] rounded-md border border-[var(--border)] shadow-[var(--shadow)]`}
							>
								<p className='text-sm px-4 py-1 font-semibold text-[var(--text)]'>
									Начальник управления
								</p>
								{infoBlocks2.map(item => (
									<div
										key={item.label}
										className='flex gap-3 items-center px-3 py-3 border-t border-[var(--border)]'
									>
										<Landmark className='text-[var(--gray)]' />
										<p className='flex flex-col gap-1'>
											<span className='text-[var(--subtext)] text-sm font-light'>
												{item.label}
											</span>
											<span className='text-sm text-[var(--text)]'>
												{item.value}
											</span>
										</p>
									</div>
								))}
							</div>
						</div>
					</>
				)}
				<div className='col-span-1 flex flex-col gap-5 max-[1335px]:order-2 order-3'>
					{accordionData.map(item => (
						<Accordion
							key={item.title}
							title={item.title}
							option={item.option}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default EmployeePage
