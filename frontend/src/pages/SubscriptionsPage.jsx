import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const subscriptions = [
  { id:1, name:'Disney+ Hotstar', plan:'Premium Annual Plan', price:'₹1,499/yr', logo:'https://img.icons8.com/color/480/hotstar.png', iconBg:'#000000', status:'BURIED', statusColor:'#EF4444', usage:'Not used in 47 days', usageIcon:'⚠', usageColor:'#EF4444', action:'CANCEL' },
  { id:2, name:'Netflix', plan:'Premium 4K Family', price:'₹649/mo', logo:'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png', iconBg:'#000000', status:'ACTIVE', statusColor:'#10B981', usage:'Last used: 2 hours ago', usageIcon:'✓✓', usageColor:'#6B7280', action:'MANAGE' },
  { id:3, name:'Spotify Family', plan:'6 Accounts Premium', price:'₹199/mo', logo:'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg', iconBg:'#000000', status:'ACTIVE', statusColor:'#10B981', usage:'Last used: Yesterday', usageIcon:'✓✓', usageColor:'#6B7280', action:'MANAGE' },
  { id:4, name:'Canva Pro', plan:'Individual Designer Plan', price:'₹499/mo', logo:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png', iconBg:'#000000', status:'BURIED', statusColor:'#EF4444', usage:'Not used in 92 days', usageIcon:'⚠', usageColor:'#EF4444', action:'CANCEL' },
  { id:5, name:'Apple One', plan:'Family Bundle (Music, iCloud, Arcade)', price:'₹365/mo', logo:'https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg', iconBg:'#000000', status:'ACTIVE', statusColor:'#10B981', usage:'Last used: 12 mins ago', usageIcon:'✓✓', usageColor:'#6B7280', action:'MANAGE' },
];

const SubscriptionsPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (!token && !userData) { navigate('/login'); return; }
    if (userData) setUser(JSON.parse(userData));
  }, [navigate]);

  const getLastName = () => { if (!user?.fullName) return 'Sharma'; const p = user.fullName.split(' '); return p.length > 1 ? p[p.length-1] : p[0]; };
  const getInitials = () => user?.fullName ? user.fullName.charAt(0).toUpperCase() : 'U';

  const navItems = [
    { name:'Dashboard', icon:<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>, path:'/dashboard' },
    { name:'Transactions', icon:<><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>, path:'/transactions' },
    { name:'Family', icon:<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, path:'/family' },
    { name:'Budget', icon:<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, path:'/budget' },
    { name:'Goals', icon:<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>, path:'/goals' },
    { name:'Subscriptions', icon:<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>, path:'/subscriptions', active:true },
    { name:'AI Coach', icon:<><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></> },
    { name:'Reports', icon:<><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></> },
    { name:'Settings', icon:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></> },
  ];

  const handleLogout = () => { localStorage.removeItem('token'); localStorage.removeItem('user'); navigate('/'); };

  return (
    <div className="flex h-screen w-screen bg-[#FDFCF8] font-sans text-gray-800 overflow-hidden" style={{fontFamily:'var(--font-heading)'}}>
      {/* SIDEBAR */}
      <aside className="w-[220px] bg-white border-r border-gray-100 flex flex-col pt-7 pb-5 px-4 shrink-0 h-full overflow-y-auto">
        {/* User Profile */}
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#E5F5F4] flex items-center justify-center text-[#127475] text-[14px] font-bold overflow-hidden border-2 border-white shadow-sm shrink-0">
            {user?.picture ? <img src={user.picture} alt="" className="w-full h-full object-cover"/> : getInitials()}
          </div>
          <div>
            <h2 className="text-[14px] font-bold text-gray-900 leading-tight">{getLastName()} Family</h2>
            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">HEAD OF HOUSEHOLD</span>
          </div>
        </div>

        <nav className="flex flex-col gap-1 mb-auto flex-1 px-1">
          {navItems.map((item, i) => (
            <button key={i} onClick={() => item.path && navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${item.active ? 'bg-[#E5F5F4] text-[#127475] font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
              {item.name}
            </button>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="mt-6 px-1 space-y-2">
          <button className="w-full bg-[#127475] text-white py-2.5 rounded-xl text-[12px] font-semibold hover:bg-[#0e5d5e] transition-colors shadow-sm">
            Upgrade to Premium
          </button>
          <button className="w-full text-left py-2 px-3 text-[12px] text-gray-500 font-medium flex items-center gap-2 hover:bg-gray-50 rounded-lg transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Help Center
          </button>
          <button onClick={handleLogout} className="w-full text-left py-2 px-3 text-[12px] text-gray-500 font-medium flex items-center gap-2 hover:bg-gray-50 rounded-lg transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#FDFCF8]">
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-5 shrink-0">
          <div>
            <h1 className="text-[20px] font-bold text-[#127475] leading-tight">Subscription Graveyard</h1>
            <p className="text-[13px] text-gray-500 font-medium mt-1">Identifying the silent leaks in your family wealth.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-400 hover:text-gray-700 transition-colors p-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-[#FDFCF8]"/>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#127475] flex items-center justify-center text-white text-[14px] font-semibold overflow-hidden border-2 border-white shadow-sm">
              {user?.picture ? <img src={user.picture} alt="" className="w-full h-full object-cover"/> : getInitials()}
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-10 pt-2 pb-12">
          <div className="max-w-[1100px] mx-auto">

            {/* Top Stats Row */}
            <div className="grid grid-cols-3 gap-5 mb-10">
              {/* Total Annual Leakage */}
              <div className="bg-gradient-to-br from-[#0b5353] to-[#127475] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"/>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-3">Total Annual Leakage</p>
                <h2 className="text-[38px] font-bold tracking-tight leading-none mb-4" style={{fontFamily:'monospace'}}>₹42,850</h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[12px] text-white/70 font-medium">Monthly Average</span>
                  <span className="text-[14px] font-bold" style={{fontFamily:'monospace'}}>₹3,578</span>
                </div>
                <div className="h-1.5 bg-white/20 rounded-full w-full mb-4 overflow-hidden">
                  <div className="h-full bg-[#32E0C4] rounded-full" style={{width:'65%'}}/>
                </div>
                <p className="text-[12px] text-white/80 leading-relaxed">You could save <strong className="text-[#32E0C4]">₹12,400</strong> by canceling unused "Buried" services.</p>
              </div>

              {/* Action Required */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_16px_rgb(0,0,0,0.02)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  </div>
                  <span className="text-[11px] font-bold text-red-500 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">Action Required</span>
                </div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">4 Buried</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">Subscriptions haven't been touched in over 30 days.</p>
              </div>

              {/* One-Tap Exit */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_16px_rgb(0,0,0,0.02)]">
                <div className="w-10 h-10 rounded-full bg-[#E5F5F4] text-[#127475] flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3 className="text-[16px] font-bold text-gray-900 mb-2">One-Tap Exit</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">FamilyFinance can auto-generate cancellation emails for you.</p>
              </div>
            </div>

            {/* All Subscriptions Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[18px] font-bold text-gray-900">All Subscriptions</h3>
              <div className="flex items-center gap-3">
                <button className="text-[12px] font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-lg bg-white hover:bg-gray-50 transition-colors">Filter: Active</button>
                <button className="text-[12px] font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-lg bg-white hover:bg-gray-50 transition-colors">Sort: Highest Cost</button>
              </div>
            </div>

            {/* Subscription Cards Grid */}
            <div className="grid grid-cols-3 gap-5 mb-10">
              {subscriptions.map(sub => (
                <div key={sub.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_16px_rgb(0,0,0,0.02)] flex flex-col">
                  {/* Top row: icon + status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-[18px] shrink-0 overflow-hidden shadow-sm" style={{backgroundColor: sub.iconBg}}>
                      {sub.logo ? (
                        <img src={sub.logo} alt={sub.name} className="w-7 h-7 object-contain" />
                      ) : sub.icon || (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 4-3 4-6s-2-4-4-4c-1.5 0-2.5 1-4 1s-2.5-1-4-1c-2 0-4 1-4 4s1 6 4 6c1.25 0 2.5-1.06 4-1.06z"/><path d="M12 2a4 4 0 0 0-2 7"/></svg>
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{color: sub.statusColor, backgroundColor: sub.statusColor+'15'}}>
                      {sub.status === 'BURIED' && '⚠ '}{sub.status}
                    </span>
                  </div>

                  {/* Name & Plan */}
                  <h4 className="text-[15px] font-bold text-gray-900 mb-0.5">{sub.name}</h4>
                  <p className="text-[12px] text-gray-500 font-medium mb-3">{sub.plan}</p>

                  {/* Usage info */}
                  <p className="text-[12px] font-medium mb-5 flex items-center gap-1.5" style={{color: sub.usageColor}}>
                    {sub.status === 'BURIED' ? (
                      <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></>
                    ) : (
                      <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></>
                    )}
                    {sub.usage}
                  </p>

                  {/* Bottom: Price + Action */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                    <span className="text-[14px] font-bold text-gray-900" style={{fontFamily:'monospace'}}>{sub.price}</span>
                    <button className={`text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-lg border transition-colors ${
                      sub.action === 'CANCEL' 
                        ? 'border-red-200 text-red-500 bg-red-50 hover:bg-red-100' 
                        : 'border-[#127475]/30 text-[#127475] bg-[#E5F5F4] hover:bg-[#d0ebe9]'
                    }`}>
                      {sub.action}
                    </button>
                  </div>
                </div>
              ))}

              {/* Add Subscription Card */}
              <button className="border-2 border-dashed border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center text-gray-400 hover:text-[#127475] hover:border-[#127475]/40 hover:bg-[#127475]/5 transition-all cursor-pointer min-h-[200px]">
                <div className="w-12 h-12 rounded-full border-[1.5px] border-current flex items-center justify-center mb-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
                <span className="text-[14px] font-bold mb-1">Add Subscription</span>
                <span className="text-[12px] text-gray-400 text-center">Scan emails or statements</span>
              </button>
            </div>

            {/* Bottom Banner - Smart One-Tap Cancellation */}
            <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44] rounded-2xl p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold mb-0.5">Smart One-Tap Cancellation</h4>
                  <p className="text-[13px] text-white/70">We've identified 3 services with complex cancellation flows. Let our AI assistant handle the logout for you.</p>
                </div>
              </div>
              <button className="bg-[#127475] text-white px-6 py-3 rounded-xl text-[13px] font-semibold hover:bg-[#0e5d5e] transition-colors shadow-lg whitespace-nowrap shrink-0 ml-6">
                Enable Auto-Cancel
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
