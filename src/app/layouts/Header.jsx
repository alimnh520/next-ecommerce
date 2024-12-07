'use client'
import React from 'react'
import TopHead from './TopHead'
import Link from 'next/link'
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Pages from './Pages';

const Header = () => {
    let itemsPrice = 0;
    const cartItem = 0;
    const linkCls = "uppercase hover:text-green-600 transition-all duration-300 py-2 px-5"
    const iconCls = "absolute size-4 flex items-center justify-center -top-3 group-hover:-top-4 transition-all duration-300 -right-1.5 text-sm bg-green-600 rounded-full text-white font-semibold "
    return (
        <div className='w-full flex flex-col bg-red-50'>
            <TopHead />
            <div className="w-full px-20 h-16 flex items-center justify-between ">
                <img src="/header/logo.png.webp" alt="" />
                <ul className='flex items-center justify-center space-x-5 font-semibold text-sm'>
                    <li><Link href="/" className={`${linkCls}`}>Home</Link></li>
                    <li><Link href="/components/shop-page" className={`${linkCls}`}>Shop</Link></li>
                    <li className={`${linkCls} group relative cursor-pointer`}>
                        pages
                        <Pages />
                    </li>
                    <li><Link href="/components/blogs" className={`${linkCls}`}>blogs</Link></li>
                    <li><Link href="/components/contact" className={`${linkCls}`}>contact</Link></li>
                </ul>
                <div className="flex items-center justify-center space-x-5">
                    <Link href="" className="flex items-center justify-center relative group">
                        <p className={iconCls}>{cartItem}</p>
                        <FaHeart className='text-lg' />
                    </Link>
                    <Link href="" className="flex items-center justify-center relative group">
                        <p className={iconCls}>{cartItem}</p>
                        <MdShoppingCart className='text-xl' />
                    </Link>
                    <p className='text-gray-600'>item: <span className='text-base font-semibold text-black'>${itemsPrice}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Header