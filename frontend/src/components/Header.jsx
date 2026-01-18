import {
	ArrowLeftFromLine,
	MenuIcon,
	Moon,
	SearchIcon,
	Sidebar,
	Sun,
	X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { SideBarWidth } from './SideBar'

export const HeaderHeight = '56px'

export const Search = () => {
	return (
		<div className='w-full bg-[#ffffff40] h-10 focus-within:bg-[var(--bg)] focus-within:ring-3 ring-[var(--glow)] rounded-sm pl-3 flex items-center transition-all overflow-hidden'>
			<input
				type='text'
				placeholder='Поиск...'
				className='w-full outline-none placeholder:text-[#ffffff75] focus:text-[var(--text)] focus:placeholder:text-[var(--subtext)] bg-transparent text-white '
			/>
			<SearchIcon className='text-[#ffffff75] group-focus:text-[var(--text)] border-l border-[#ffffff45] flex items-center justify-center h-full aspect-square w-10 p-2.5 hover:bg-[#ffffff45] active:bg-[#ffffff75]active:text-white transition-all cursor-pointer' />
		</div>
	)
}
export const SearchMobile = ({}) => {
	const [searchIsActive, setSearchIsActive] = useState(false)
	return (
		<div
			className={`${
				searchIsActive && 'w-full pl-3 bg-[#ffffff40]'
			}  h-10 focus-within:bg-[var(--bg)] focus-within:ring-3 ring-[var(--glow)] rounded-sm flex items-center transition-all overflow-hidden`}
		>
			<input
				type='text'
				placeholder='Поиск...'
				className={`${
					searchIsActive ? 'w-full' : 'hidden'
				} outline-none placeholder:text-[#ffffff75] focus:text-[var(--text)] focus:placeholder:text-[var(--subtext)] bg-transparent text-white transition-all`}
			/>
			{!searchIsActive ? (
				<SearchIcon
					onClick={() => setSearchIsActive(prev => !prev)}
					className={`${
						searchIsActive
							? 'text-[#ffffff75] group-focus:text-[var(--text)] border-l border-[#ffffff45] hover:bg-[#ffffff45] active:bg-[#ffffff75] active:text-white'
							: 'text-white hover:bg-[var(--dark-hero)]'
					}  flex items-center justify-center h-full aspect-square w-10 p-2.5  transition-all cursor-pointer`}
				/>
			) : (
				<X
					onClick={() => setSearchIsActive(prev => !prev)}
					className={`${
						searchIsActive
							? 'text-[#ffffff75] group-focus:text-[var(--text)] border-l border-[#ffffff45] hover:bg-[#ffffff45] active:bg-[#ffffff75] active:text-white'
							: 'text-white hover:bg-[var(--dark-hero)]'
					}  flex items-center justify-center h-full aspect-square w-10 p-1  transition-all cursor-pointer`}
				/>
			)}
		</div>
	)
}

export const ToggleTheme = () => {
	const [isLight, setIsLight] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme) {
			return savedTheme === 'light'
		}
		return document.documentElement.dataset.theme === 'light'
	})

	useEffect(() => {
		const theme = isLight ? 'light' : 'dark'
		document.documentElement.dataset.theme = theme
		localStorage.setItem('theme', theme)
	}, [isLight])

	const toggleTheme = () => {
		setIsLight(prev => !prev)
	}

	return (
		<button
			onClick={toggleTheme}
			className={`relative rounded-lg p-[14px] hover:bg-[var(--hero)] hover:text-white text-white transition-all flex items-center justify-center cursor-pointer `}
		>
			{!isLight ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	)
}

const Header = ({ onChange, isMobile }) => {
	const [showSideBar, setShowSideBar] = useState(false)

	useEffect(() => {
		onChange?.(showSideBar)
	}, [showSideBar])

	return (
		<header
			className={`sticky w-full items-center max-md:justify-between flex gap-3 top-0 bg-[var(--hero)] px-[34px] shadow-[var(--shadow)] ${
				isMobile ? 'z-5 pl-[5px]' : 'z-10 py-[10px]'
			} `}
			style={{ height: HeaderHeight }}
		>
			{/* 			
			<div
				onClick={() => setShowSideBar(prev => !prev)}
				className={`relative h-9 w-9 p-1 flex flex-col justify-center items-center 
			`}
				style={{ marginLeft: showSideBar ? SideBarWidth : '0px' }}
			>
				<div
					className={`h-[3px] rounded-full w-[27px] bg-white absolute transition-all ${
						showSideBar ? 'rotate-45' : 'top-2'
					}`}
				></div>
				<div
					className={`h-[3px] rounded-full  bg-white absolute transition-all ${
						showSideBar ? 'w-0' : 'items-center w-[27px]'
					}`}
				></div>
				<div
					className={`h-[3px] rounded-full w-[27px] bg-white absolute transition-all ${
						showSideBar ? '-rotate-45' : 'bottom-2'
					}`}
				></div>
			</div> */}

			<div
				onClick={() => setShowSideBar(prev => !prev)}
				className={`${
					!showSideBar && 'rotate-y-180'
				} text-white md:hidden my-[17px] h-10 w-10 flex items-center justify-center aspect-square rounded-md hover:bg-[var(--dark-hero)] cursor-pointer transition-all p-2`}
				style={{ marginLeft: showSideBar ? SideBarWidth : '0px' }}
			>
				<ArrowLeftFromLine />
			</div>

			{isMobile ? (
				<div className='flex gap-3 items-center w-full justify-end'>
					<SearchMobile />

					<ToggleTheme />
					<p className='text-white cursor-pointer select-none'>Войти</p>
				</div>
			) : (
				<>
					<Search />

					<ToggleTheme />
					<p className='text-white cursor-pointer select-none'>Войти</p>
				</>
			)}
		</header>
	)
}

export default Header
