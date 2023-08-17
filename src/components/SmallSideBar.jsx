import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
//import { useDashboardContext } from '../pages/DashboardLayout'

const SmallSideBar = () => {
    //const data = useDashboardContext();
    //console.log(data);
    return (
        <Wrapper>
            <div className='sidebar-container show-sidebar'>
                <div className='content'>
                    <button className='close-btn' type='button'>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <div className='nav-links'>
                        {links.map((link) => {
                            const { text, icon, path } = link;
                            return (
                                <NavLink className='nav-link' to={path} key={text} >
                                    <span className='icon'>{icon}</span>
                                    {text}
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSideBar