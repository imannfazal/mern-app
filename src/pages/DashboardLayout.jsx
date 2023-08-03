import React from 'react'
import Wrapper from '../assets/wrappers/Dashboard';
import BigSideBar from '../components/BigSideBar';
import SmallSideBar from '../components/SmallSideBar';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
  return (
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
  )
}

export default DashboardLayout