import React, { createContext, useContext, useState } from 'react';
import Wrapper from '../assets/wrappers/Dashboard';
import BigSideBar from '../components/BigSideBar';
import SmallSideBar from '../components/SmallSideBar';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DashboardContext = createContext();

const DashboardLayout = () => {
  //temp
  const user = { name: 'iman' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const toggleDarkTheme = () => {
    console.log('set dark theme');
  }

  const logoutUser = async () => {
    console.log('logout user')
  }

  return (
    <DashboardContext.Provider value={{user,showSidebar,isDarkTheme,toggleDarkTheme,toggleSidebar,logoutUser}}>
      <Wrapper>
        <main className="dashboard">
          <BigSideBar />
          <SmallSideBar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = useContext(DashboardContext);
export default DashboardLayout;