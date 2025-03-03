import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Menu, LogOut, User, Database, Book, Users, Home, Clock, FileText } from 'lucide-react';
import './AdminDashboard.css';

// Sidebar component
const Sidebar = ({ items, isOpen, onClose }) => {
  const navigate = useNavigate();
  const [expandedMenus, setExpandedMenus] = useState([]);

  const handleItemClick = (path, label, hasSubMenu) => {
    if (hasSubMenu) {
      // Toggle submenu expansion
      setExpandedMenus(prev => 
        prev.includes(label) 
          ? prev.filter(item => item !== label) 
          : [...prev, label]
      );
    } else {
      // Navigate only if it's not a parent menu with submenu
      navigate(path);
      
      // Close sidebar on mobile after navigation
      if (window.innerWidth <= 1024) {
        onClose();
      }
    }
  };

  const isMenuExpanded = (label) => {
    return expandedMenus.includes(label);
  };

  return (
    <div className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        {items.map((item, index) => (
          <div key={index}>
            <div 
              className={`sidebar-item ${isMenuExpanded(item.label) ? 'active' : ''}`} 
              onClick={() => handleItemClick(item.path, item.label, !!item.subMenu)}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.subMenu && (
                <span className="submenu-arrow">
                  {isMenuExpanded(item.label) ? '▼' : '▶'}
                </span>
              )}
            </div>
            
            {/* Show submenu if it's expanded */}
            {item.subMenu && isMenuExpanded(item.label) && (
              <div className="sidebar-submenu">
                {item.subMenu.map((subItem, subIndex) => (
                  <div 
                    key={subIndex} 
                    className="sidebar-item submenu-item" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(subItem.path, subItem.label, false);
                    }}
                  >
                    {subItem.icon}
                    <span>{subItem.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// DashboardCard component
const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="dashboard-card">
      <div className="card-content">
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <p className="card-value">{value}</p>
        </div>
        <div className="card-icon">
          {icon}
        </div>
      </div>
    </div>
  );
};

// Main component
const IndexAdmin = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const menuItems = [
    { label: 'Dashboard Admin', icon: <Home size={20} />, path: '/admin' },
    { 
      label: 'Kelola Master Data', 
      icon: <Database size={20} />, 
      path: '/admin/master-data',
      subMenu: [
        { label: 'Kelola Data Siswa', icon: <Users size={20} />, path: '/admin/master-data/siswa' },
        { label: 'Kelola Data Guru', icon: <Users size={20} />, path: '/admin/master-data/guru' },
        { label: 'Kelola Data Orang Tua', icon: <Users size={20} />, path: '/admin/master-data/orang-tua' },
        { label: 'Kelola Data Kelas', icon: <Users size={20} />, path: '/admin/master-data/kelas' },
        { label: 'Kelola Data Jurusan', icon: <Book size={20} />, path: '/admin/master-data/jurusan' },
        { label: 'Kelola Data Jadwal', icon: <Clock size={20} />, path: '/admin/master-data/jadwal' },
      ]
    },
    { label: 'Notifikasi', icon: <Bell size={20} />, path: '/admin/data-siswa' },
    { label: 'Kelola Absensi', icon: <Users size={20} />, path: '/admin/data-guru' },
    { label: 'Kelola Laporan', icon: <FileText size={20} />, path: '/admin/laporan' },
    { label: 'Log-out', icon: <LogOut size={20} />, path: '/login' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const mainContentClass = `admin-main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`;

  return (
    <div className="admin-container">
      <div className="admin-topbar">
        <div className="topbar-left">
          <div 
            className={`menu-toggle ${sidebarOpen ? 'active' : ''}`} 
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </div>
          <h1>Sistem Absensi Sekolah</h1>
        </div>
        <div className="topbar-right">
          <div className="notification-icon">
            <Bell size={24} />
          </div>
          <div className="user-info">
            <User size={24} />
            <span>Admin</span>
          </div>
          <button className="icon-button" onClick={handleLogout}>
            <LogOut size={24} />
          </button>
        </div>
      </div>

      {/* Overlay to close sidebar on mobile */}
      {isMobile && sidebarOpen && (
        <div 
          className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`} 
          onClick={closeSidebar}
        />
      )}

      <Sidebar items={menuItems} isOpen={sidebarOpen} onClose={closeSidebar} />
      
      <div className={mainContentClass}>
        <h2 className="page-title">Dashboard Admin</h2>
        
        <div className="dashboard-cards">
          <DashboardCard 
            title="Total Guru"
            value="45"
            icon={<Users size={24} className="icon-blue" />}
          />
          <DashboardCard 
            title="Total Siswa"
            value="750"
            icon={<Users size={24} className="icon-green" />}
          />
          <DashboardCard 
            title="Total Kelas"
            value="24"
            icon={<Book size={24} className="icon-purple" />}
          />
          <DashboardCard 
            title="Kehadiran Hari Ini"
            value="95%"
            icon={<Clock size={24} className="icon-yellow" />}
          />
        </div>

        <div className="admin-statistics">
          <div className="statistics-card">
            <h3>Statistik Kehadiran</h3>
            <div className="chart-placeholder">
              <p>Chart akan ditampilkan di sini</p>
            </div>
          </div>
          
          <div className="statistics-card">
            <h3>Aktivitas Terbaru</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon blue">
                  <User size={20} />
                </div>
                <div className="activity-details">
                  <p>Data guru baru ditambahkan</p>
                  <span>2 menit yang lalu</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon green">
                  <FileText size={20} />
                </div>
                <div className="activity-details">
                  <p>Laporan absensi diekspor</p>
                  <span>10 menit yang lalu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-footer">
        <p>&copy; {new Date().getFullYear()} Powered by Undipa</p>
      </div>
    </div>
  );
};

export default IndexAdmin;