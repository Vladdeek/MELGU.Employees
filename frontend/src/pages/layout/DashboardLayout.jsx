import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import api, { API } from '../../API'

export default function DashboardLayout({}) {
	return (
		<>
			<Outlet />
		</>
	)
}
