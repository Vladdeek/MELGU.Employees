import {
	BookText,
	ChevronDown,
	ChevronRight,
	GraduationCap,
	Landmark,
	Link,
	Mail,
	Phone,
} from 'lucide-react'
import { HeaderHeight } from './Header'
import { use, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const SideBarWidth = '240px'

const SideBar = () => {
	const sidebarItems = [
		{
			label: 'Другие сайты МелГУ',
			icon: hovered => (
				<Link
					strokeWidth={2.5}
					className={`${
						hovered ? 'text-white' : 'text-[var(--gray)]'
					} transition-all`}
				/>
			),
			option: [
				{ title: 'LMS MELGU1', href: 'https://lms.melgu.ru' },
				{ title: 'LMS MELGU2', href: 'https://lms.melgu.ru' },
				{ title: 'LMS MELGU3', href: 'https://lms.melgu.ru' },
			],
		},
		{
			label: 'Структура университета',
			icon: hovered => (
				<Landmark
					strokeWidth={2.5}
					className={`${
						hovered ? 'text-white' : 'text-[var(--gray)]'
					} transition-all`}
				/>
			),
			to: '/departments',
		},
		{
			label: 'Телефонный справочник',
			icon: hovered => (
				<BookText
					strokeWidth={2.5}
					className={`${
						hovered ? 'text-white' : 'text-[var(--gray)]'
					} transition-all`}
				/>
			),
			to: '/phone',
		},
	]
	return (
		<aside
			className={`fixed left-0 top-0 h-screen bg-[var(--bg)]`}
			style={{ width: SideBarWidth }}
		>
			<div
				className='flex items-center justify-center gap-1 shadow-lg font-semibold text-white bg-[var(--dark-hero)]'
				style={{ height: HeaderHeight }}
			>
				<img src='/MelGUwl.svg' className='h-full' />
				<p>МелГУ.Сотрудники</p>
			</div>
			<div className='border-r border-[var(--border)] flex flex-col justify-between h-full px-2 py-6'>
				<div className='flex flex-col h-fit'>
					<p className='uppercase font-semibold text-[13px] text-[var(--gray)] ml-2'>
						меню
					</p>
					<div className='flex flex-col gap-3 mt-4'>
						{sidebarItems.map((item, idx) => (
							<motion.div
								key={idx}
								target='_blank'
								rel='noopener noreferrer'
								initial={{ opacity: 0, x: -8 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -8 }}
								transition={{ duration: 0.2, delay: idx * 0.04 }}
							>
								<SideBarMenuItem
									key={idx}
									label={item.label}
									icon={item.icon}
									option={item.option}
									to={item.to}
								/>
							</motion.div>
						))}
					</div>
				</div>
				<div className='flex flex-col items-center gap-1 text-[13px] h-fit mb-10'>
					<SideBarFooterLink
						label='support@accounts.melsu.ru'
						icon={() => <Mail strokeWidth={2.5} className='w-4 h-4' />}
						to={'https://science.melgu.ru'}
					/>
					<SideBarFooterLink
						label='Телефон поддержки'
						icon={() => <Phone strokeWidth={2.5} className='w-4 h-4' />}
						to={'https://science.melgu.ru'}
					/>
					<SideBarFooterLink
						label='Научные достижения'
						icon={() => <GraduationCap strokeWidth={2.5} className='w-4 h-4' />}
						to={'https://science.melgu.ru'}
					/>
					<div className='flex gap-1'>
						<p>© 2026.</p>
						<a
							href='/d'
							target='_blank'
							rel='noopener noreferrer'
							className='group text-[var(--hero)] items-center flex flex-col hover:brightness-75 transition-all'
						>
							МелГУ
							<div className='h-[1px] w-0 bg-[var(--hero)] group-hover:w-full transition-all'></div>
						</a>
					</div>
					<a
						href='/d'
						target='_blank'
						rel='noopener noreferrer'
						className='group text-[var(--hero)] items-center flex flex-col hover:brightness-75 transition-all'
					>
						Политика в отношении ПД
						<div className='h-[1px] w-0 bg-[var(--hero)] group-hover:w-full transition-all'></div>
					</a>
				</div>
			</div>
		</aside>
	)
}

const SideBarMenuItem = ({ icon, label, option, to }) => {
	const [dropdown, setDropdown] = useState(false)
	const [hovered, setHovered] = useState(false)

	const navigate = useNavigate()

	const onClickFunc = () => {
		if (to) {
			return () => {
				navigate(to)
			}
		} else if (option) {
			return () => {
				setDropdown(prev => !prev)
			}
		}
	}
	return (
		<div className='flex flex-col select-none'>
			<div
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				onClick={onClickFunc()}
				className='group flex items-center gap-2 hover:bg-[var(--hero)] hover:text-white px-2 py-0.5  rounded-md text-[var(--text)] cursor-pointer transition-all'
			>
				{icon(hovered)}
				<p className='text-sm w-full whitespace-nowrap overflow-hidden text-ellipsis'>
					{label}
				</p>
				{option && (
					<ChevronRight
						strokeWidth={3}
						className={`w-4 h-4 text-[var(--gray)] group-hover:text-white ${
							dropdown ? 'rotate-90' : ''
						} transition-all`}
					/>
				)}
			</div>
			<AnimatePresence>
				{option && dropdown && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: 'easeInOut' }}
						className='flex flex-col bg-[var(--bg)] ml-7 overflow-hidden'
					>
						{option.map((opt, idx) => (
							<motion.a
								key={idx}
								href={opt.href}
								target='_blank'
								rel='noopener noreferrer'
								initial={{ opacity: 0, x: -8 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -8 }}
								transition={{ duration: 0.2, delay: idx * 0.04 }}
								className='px-4 py-2 text-[var(--gray)] text-sm hover:text-[var(--hero)] transition-colors cursor-pointer'
							>
								{opt.title}
							</motion.a>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

const SideBarFooterLink = ({ icon: Icon, label, to }) => {
	return (
		<a
			href={to}
			target='_blank'
			rel='noopener noreferrer'
			className='flex items-center gap-1 text-[var(--gray)] hover:text-[var(--hero)] transition-all cursor-pointer'
		>
			<Icon />
			<p className='text-sm w-full'>{label}</p>
		</a>
	)
}

export default SideBar
