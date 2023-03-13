import { ReactNode, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'

interface Props{
    children?: ReactNode
}
export default function MainLayout({children, ...props}: Props){
    return (
        <div className='main_layout'>
            <Header/>
            <main {...props} className="min-h-[60vh] page-width py-[50px]">
                {children}
            </main>
            <Footer />
        </div>
    )
}