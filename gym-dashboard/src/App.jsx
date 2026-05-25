import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import DashboardOverview from './pages/DashboardOverview';
import Members from './pages/Members';
import ClassSchedule from './pages/ClassSchedule';
import Settings from './pages/Settings';

function App() {
  return (
    <body>
      <div className="app">
        <Navbar />
        <Sidebar />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/members" element={<Members />} />
            <Route path="/schedule" element={<ClassSchedule />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>

    </body>
  );
}

export default App;