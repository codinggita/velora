import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TransactionsPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (!token && !userData) {
      navigate('/login');
      return;
    }
    
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const navItems = [
    { name: 'Dashboard', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>, active: false, path: '/dashboard' },
    { name: 'Transactions', icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></>, active: true, path: '/transactions' },
    { name: 'Family', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></>, active: false, path: '/family' },
    { name: 'Budget', icon: <><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></>, active: false, path: '/budget' },
    { name: 'Goals', icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></>, active: false, path: '/goals' },
    { name: 'Subscriptions', icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>, active: false, path: '/subscriptions' },
    { name: 'AI Coach', icon: <><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></>, active: false },
    { name: 'Reports', icon: <><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></>, active: false },
    { name: 'Settings', icon: <><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></>, active: false },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="flex h-screen w-screen bg-[#FDFCF8] font-sans text-gray-800 overflow-hidden">
      {/* ── SIDEBAR ──────────────────────────────────────────────────────────── */}
      <aside className="w-[260px] bg-white border-r border-gray-100 flex flex-col pt-7 pb-6 px-4 shrink-0 h-full overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 px-3 mb-10 cursor-pointer" onClick={() => navigate('/')}>
          <div className="text-[#127475]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <span className="text-[#127475] font-bold text-[22px] tracking-tight">FamilyFinance</span>
        </div>

        {/* Profile Card */}
        <div className="px-3 mb-8 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#127475]/10 shadow-sm">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=family" alt="Family" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-gray-900 font-bold text-[16px] leading-tight">Sharma Family</h2>
            <span className="text-[12px] text-gray-400 font-medium">4 Members</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 mb-auto flex-1 px-1">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => item.path && navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-semibold transition-all ${
                item.active 
                  ? 'bg-[#E5F5F4]/60 text-[#127475] border-r-4 border-[#127475] rounded-r-none' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#FAFAFA]">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-white shrink-0 border-b border-gray-100">
          <div className="flex items-center gap-8">
            <h1 className="text-[20px] font-bold text-gray-900">Transactions</h1>
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100 text-[#127475] font-semibold text-[14px]">
              <button className="hover:text-gray-900">←</button>
              <span>October 2025</span>
              <button className="hover:text-gray-900">→</button>
            </div>
          </div>

          <div className="flex items-center gap-5">
            {/* Search Bar */}
            <div className="relative group">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="bg-gray-100/80 border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 rounded-full pl-12 pr-6 py-2.5 text-[14px] w-[300px] transition-all outline-none"
              />
            </div>
            
            <button className="relative p-2 text-gray-400 hover:text-gray-700 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#EF4444] rounded-full border-2 border-white"></span>
            </button>
            
            <button className="bg-[#127475] text-white px-5 py-2.5 rounded-full text-[14px] font-bold hover:bg-[#0e5d5e] transition-all shadow-sm flex items-center gap-2">
              <span className="text-[18px]">+</span> Add Expense
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-8 pt-8 pb-12">
          <div className="max-w-[1200px] mx-auto">
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Monthly Total Spend */}
              <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Monthly Total Spend</p>
                <div className="flex items-center gap-2">
                  <span className="text-[28px] font-bold text-red-500">- ₹84,250.00</span>
                </div>
              </div>

              {/* Total Income */}
              <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Total Income</p>
                <div className="flex items-center gap-2">
                  <span className="text-[28px] font-bold text-[#127475]">+ ₹1,45,000.00</span>
                </div>
              </div>

              {/* Family Saving Rate */}
              <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Family Saving Rate</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[28px] font-bold text-gray-900">41.8%</span>
                  <span className="text-[#127475] text-[13px] font-bold flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                    +2.4%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-[#127475] rounded-full" style={{ width: '41.8%' }}></div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
                <div className="md:col-span-1">
                  <label className="block text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-2">Search</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" placeholder="Merchant or Category" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-2.5 text-[13.5px] outline-none focus:bg-white focus:border-[#127475]/30" />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-2">Category</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-[13.5px] outline-none appearance-none cursor-pointer focus:bg-white">
                    <option>All Categories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-2">Family Member</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-[13.5px] outline-none appearance-none cursor-pointer focus:bg-white">
                    <option>Everyone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-2">Date Range</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <input type="text" value="Oct 1 - Oct 31, 2025" readOnly className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-2.5 text-[13.5px] outline-none cursor-pointer" />
                  </div>
                </div>

                <button className="bg-gray-100 text-gray-600 font-bold py-2.5 px-6 rounded-xl text-[13.5px] hover:bg-gray-200 transition-colors">
                  Clear
                </button>
              </div>
            </div>

            {/* Transaction List */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 overflow-hidden">
              {/* Today */}
              <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100">
                <h3 className="text-[14px] font-bold text-gray-600">Today, Oct 24</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {/* Swiggy */}
                <div className="px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-[15px]">Swiggy</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-[11px] font-bold uppercase">Food & Dining</span>
                        <span className="text-gray-400 text-[12px]">• 1:45 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-8 h-8 rounded-full border border-gray-100" />
                    <span className="text-[16px] font-bold text-red-500">- ₹850.00</span>
                  </div>
                </div>

                {/* HPCL */}
                <div className="px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"></path><circle cx="7" cy="13" r="3"></circle><circle cx="17" cy="13" r="3"></circle></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-[15px]">HPCL Petrol Pump</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-[11px] font-bold uppercase">Transportation</span>
                        <span className="text-gray-400 text-[12px]">• 9:15 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=A" alt="User" className="w-8 h-8 rounded-full border border-gray-100" />
                    <span className="text-[16px] font-bold text-red-500">- ₹2,000.00</span>
                  </div>
                </div>
              </div>

              {/* Yesterday */}
              <div className="px-6 py-4 bg-gray-50/50 border-t border-b border-gray-100">
                <h3 className="text-[14px] font-bold text-gray-600">Yesterday, Oct 23</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {/* Salary */}
                <div className="px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-green-50 text-[#127475] flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-[15px]">TechCorp Inc. Salary</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-[11px] font-bold uppercase">Income</span>
                        <span className="text-gray-400 text-[12px]">• 10:00 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=B" alt="User" className="w-8 h-8 rounded-full border border-gray-100" />
                    <div className="text-right">
                       <span className="text-[16px] font-bold text-[#127475]">+ ₹1,45,000.00</span>
                    </div>
                  </div>
                </div>

                {/* Myntra */}
                <div className="px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-[15px]">Myntra</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-[11px] font-bold uppercase">Shopping</span>
                        <span className="text-gray-400 text-[12px]">• 4:30 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Meera" alt="User" className="w-8 h-8 rounded-full border border-gray-100" />
                    <span className="text-[16px] font-bold text-red-500">- ₹3,499.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More */}
            <div className="mt-8 flex justify-center">
              <button className="bg-white border border-gray-200 text-gray-600 font-bold px-8 py-3 rounded-xl text-[14px] hover:bg-gray-50 transition-colors shadow-sm">
                Load More
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
