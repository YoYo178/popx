import { Outlet } from 'react-router-dom'
import './RootLayout.css'

export const RootLayout = () => {
    return (
        <div className='container'>
            <Outlet />
        </div>
    )
}
