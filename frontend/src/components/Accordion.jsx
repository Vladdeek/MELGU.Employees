import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Accordion = ({ title, option }) => {
	const [dropdown, setDropdown] = useState(true)
	const { employeeid } = useParams()
	return (
		<div className='rounded-md overflow-hidden border border-[var(--border)] shadow-[var(--shadow)] select-none'>
			<div className='flex justify-between px-3 py-1 bg-[var(--hero)] text-white items-center'>
				<p>{title}</p>
				<ChevronDown
					onClick={() => setDropdown(prev => !prev)}
					className={`cursor-pointer ${
						dropdown ? 'rotate-x-180' : ''
					} transition-all w-5 h-5`}
				/>
			</div>

			<AnimatePresence mode='wait'>
				{dropdown && (
					<motion.div
						key='dropdown'
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: 'easeInOut' }}
						className='flex flex-col overflow-hidden bg-[var(--bg)]'
					>
						{option?.map((item, idx) => (
							<NavLink
								key={item.to}
								to={`/employee/${employeeid}/${item.to}`}
								end={false}
								className='block'
							>
								{({ isActive }) => (
									<motion.div
										initial={{ opacity: 0, x: -8 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -8 }}
										transition={{ duration: 0.2, delay: idx * 0.04 }}
										className={`px-3 py-2 text-sm  cursor-pointer transition-colors
					
					${
						isActive
							? 'bg-[var(--bg-second)] text-[var(--hero)] border-l-3 border-l-[var(--hero)]'
							: 'text-[var(--text)] hover:bg-[var(--bg-second)] hover:text-[var(--hero)] border-t border-[var(--border)]'
					}
				`}
									>
										<p className='font-medium'>{item.title}</p>
									</motion.div>
								)}
							</NavLink>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Accordion
