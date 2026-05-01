import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    const d = localStorage.getItem('user'), t = localStorage.getItem('token');
    if (!t && !d) { navigate('/login'); return; }
    if (d) setUser(JSON.parse(d));
  }, [navigate]);

  const getInitials = () => user?.fullName ? user.fullName.charAt(0).toUpperCase() : 'U';

  const headerTabs = ['Dashboard','Family','Transactions','Settings'];

  const s = {
    page: { display:'flex', height:'100vh', width:'100vw', background:'#FDFCF8', overflow:'hidden', fontFamily:"'Inter','Segoe UI',sans-serif" },
  };

  return (
    <div style={s.page}>
      <Sidebar user={user} />

      {/* Main */}
      <div style={{flex:1,display:'flex',flexDirection:'column',height:'100%',overflow:'hidden'}}>
        {/* Header */}
        <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 32px',background:'#fff',borderBottom:'1px solid #f0f0f0',flexShrink:0}}>
          <div style={{display:'flex',alignItems:'center',gap:'32px'}}>
            <div>
              <div style={{fontSize:'10px',fontWeight:700,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'4px'}}>Velora / Account</div>
              <h1 style={{fontSize:'22px',fontWeight:800,color:'#111827',margin:0}}>Settings</h1>
            </div>
            <div style={{display:'flex',gap:'16px',marginLeft:'24px',alignSelf:'flex-end',paddingBottom:'4px'}}>
              {headerTabs.map(t=>(
                <button key={t} onClick={()=>{ if(t==='Dashboard') navigate('/dashboard'); else if(t==='Family') navigate('/family'); else if(t==='Transactions') navigate('/transactions'); }}
                  style={{fontSize:'13px',fontWeight:600,color:t==='Settings'?'#127475':'#9ca3af',background:'none',border:'none',cursor:'pointer',padding:'4px 0',borderBottom:t==='Settings'?'2px solid #127475':'2px solid transparent'}}>{t}</button>
              ))}
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
            <button style={{background:'none',border:'none',cursor:'pointer',color:'#6b7280',position:'relative'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </button>
            <button style={{background:'#127475',color:'#fff',border:'none',borderRadius:'10px',padding:'9px 18px',fontSize:'12px',fontWeight:700,cursor:'pointer',display:'flex',alignItems:'center',gap:'6px'}}>Add Transaction</button>
            <div style={{width:'34px',height:'34px',borderRadius:'50%',overflow:'hidden',border:'2px solid #e5e7eb'}}>
              <img src={user?.picture||'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
          </div>
        </header>

        {/* Content */}
        <div style={{flex:1,overflowY:'auto',padding:'32px 40px 40px'}}>
          <div style={{maxWidth:'1050px',margin:'0 auto'}}>
            <h1 style={{fontSize:'28px',fontWeight:800,color:'#111827',margin:'0 0 6px'}}>Profile & Preferences</h1>
            <p style={{fontSize:'13px',color:'#9ca3af',margin:'0 0 32px'}}>Refine your Velora experience and security parameters.</p>

            {/* Top Row: Personal Identity + Security */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 300px',gap:'20px',marginBottom:'20px'}}>
              {/* Personal Identity */}
              <div style={{background:'#fff',borderRadius:'24px',border:'1px solid #f0f0f0',padding:'28px 32px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'28px'}}>
                  <h2 style={{fontSize:'18px',fontWeight:700,color:'#111827',margin:0}}>Personal Identity</h2>
                  <button style={{background:'none',border:'none',color:'#EF4444',fontSize:'12px',fontWeight:700,cursor:'pointer'}}>Edit All</button>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px'}}>
                  <div>
                    <label style={{fontSize:'9px',fontWeight:700,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.08em',display:'block',marginBottom:'8px'}}>Legal Full Name</label>
                    <div style={{background:'#F9FAFB',borderRadius:'12px',padding:'14px 16px',fontSize:'14px',fontWeight:600,color:'#111827',border:'1px solid #f0f0f0'}}>{user?.fullName || 'Alexander Sterling'}</div>
                  </div>
                  <div>
                    <label style={{fontSize:'9px',fontWeight:700,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.08em',display:'block',marginBottom:'8px'}}>Digital Signature / Alias</label>
                    <div style={{background:'#F9FAFB',borderRadius:'12px',padding:'14px 16px',fontSize:'14px',fontWeight:600,color:'#111827',border:'1px solid #f0f0f0'}}>asterling_exec</div>
                  </div>
                  <div>
                    <label style={{fontSize:'9px',fontWeight:700,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.08em',display:'block',marginBottom:'8px'}}>Verified Email</label>
                    <div style={{background:'#F9FAFB',borderRadius:'12px',padding:'14px 16px',fontSize:'14px',fontWeight:600,color:'#111827',border:'1px solid #f0f0f0',display:'flex',alignItems:'center',gap:'8px'}}>
                      {user?.email || 'alex@sterling-holdings.co'}
                      <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'#127475',flexShrink:0}}/>
                    </div>
                  </div>
                  <div>
                    <label style={{fontSize:'9px',fontWeight:700,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.08em',display:'block',marginBottom:'8px'}}>Secure Contact</label>
                    <div style={{background:'#F9FAFB',borderRadius:'12px',padding:'14px 16px',fontSize:'14px',fontWeight:600,color:'#111827',border:'1px solid #f0f0f0'}}>+1 (555) 902-1244</div>
                  </div>
                </div>
              </div>

              {/* Security Overview */}
              <div style={{background:'linear-gradient(135deg,#0f3d3e,#127475)',borderRadius:'24px',padding:'28px',color:'#fff'}}>
                <h3 style={{fontSize:'16px',fontWeight:700,margin:'0 0 24px'}}>Security Overview</h3>
                <div style={{display:'flex',flexDirection:'column',gap:'18px',marginBottom:'28px'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                    <div style={{width:'36px',height:'36px',borderRadius:'12px',background:'rgba(255,255,255,0.12)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <div style={{fontSize:'13px',fontWeight:700}}>Two-Factor Active</div>
                      <div style={{fontSize:'10px',opacity:0.6}}>Secured via Biometric/TOTP</div>
                    </div>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                    <div style={{width:'36px',height:'36px',borderRadius:'12px',background:'rgba(255,255,255,0.12)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </div>
                    <div>
                      <div style={{fontSize:'13px',fontWeight:700}}>Passkey Enabled</div>
                      <div style={{fontSize:'10px',opacity:0.6}}>Hardware-level encryption</div>
                    </div>
                  </div>
                </div>
                <button style={{width:'100%',background:'transparent',color:'#fff',border:'1px solid rgba(255,255,255,0.3)',borderRadius:'12px',padding:'12px',fontSize:'12px',fontWeight:700,cursor:'pointer'}}>Audit Session History</button>
              </div>
            </div>

            {/* Bottom Row: Currency, Visual, Subscriptions */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 300px',gap:'20px'}}>
              {/* Currency & Region */}
              <div style={{background:'#fff',borderRadius:'24px',border:'1px solid #f0f0f0',padding:'28px'}}>
                <h3 style={{fontSize:'16px',fontWeight:700,color:'#111827',margin:'0 0 24px'}}>Currency & Region</h3>
                <div style={{marginBottom:'20px'}}>
                  <label style={{fontSize:'9px',fontWeight:700,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.08em',display:'block',marginBottom:'8px'}}>Primary Reporting Currency</label>
                  <div style={{background:'#F9FAFB',borderRadius:'12px',padding:'14px 16px',fontSize:'14px',fontWeight:600,color:'#111827',border:'1px solid #f0f0f0',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    USD - United States Dollar ($)
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div>
                  <label style={{fontSize:'9px',fontWeight:700,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.08em',display:'block',marginBottom:'8px'}}>Locale & Number Format</label>
                  <div style={{background:'#F9FAFB',borderRadius:'12px',padding:'14px 16px',fontSize:'14px',fontWeight:600,color:'#111827',border:'1px solid #f0f0f0'}}>United States (1,234.56)</div>
                </div>
              </div>

              {/* Visual Interface */}
              <div style={{background:'#fff',borderRadius:'24px',border:'1px solid #f0f0f0',padding:'28px'}}>
                <h3 style={{fontSize:'16px',fontWeight:700,color:'#111827',margin:'0 0 24px'}}>Visual Interface</h3>
                <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                      <span style={{fontSize:'14px',fontWeight:600,color:'#111827'}}>Light Mode</span>
                    </div>
                    <button onClick={()=>setLightMode(true)} style={{width:'48px',height:'26px',borderRadius:'13px',border:'none',cursor:'pointer',position:'relative',background:lightMode?'#127475':'#e5e7eb',transition:'all 0.3s'}}>
                      <div style={{width:'20px',height:'20px',borderRadius:'50%',background:'#fff',position:'absolute',top:'3px',transition:'all 0.3s',left:lightMode?'25px':'3px',boxShadow:'0 1px 3px rgba(0,0,0,0.15)'}}/>
                    </button>
                  </div>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                      <span style={{fontSize:'14px',fontWeight:600,color:'#111827'}}>Dark Mode</span>
                    </div>
                    <button onClick={()=>setLightMode(false)} style={{width:'48px',height:'26px',borderRadius:'13px',border:'none',cursor:'pointer',position:'relative',background:!lightMode?'#127475':'#e5e7eb',transition:'all 0.3s'}}>
                      <div style={{width:'20px',height:'20px',borderRadius:'50%',background:'#fff',position:'absolute',top:'3px',transition:'all 0.3s',left:!lightMode?'25px':'3px',boxShadow:'0 1px 3px rgba(0,0,0,0.15)'}}/>
                    </button>
                  </div>
                </div>
                <p style={{fontSize:'10px',color:'#9ca3af',marginTop:'20px'}}>System sync enabled by default.</p>
              </div>

              {/* Subscription Card */}
              <div style={{background:'#fff',borderRadius:'24px',border:'1px solid #f0f0f0',padding:'28px'}}>
                <label style={{fontSize:'9px',fontWeight:700,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.08em',display:'block',marginBottom:'16px'}}>Subscriptions</label>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'4px'}}>
                  <span style={{fontSize:'18px',fontWeight:800,color:'#111827'}}>Family Premium</span>
                  <span style={{background:'#E8F5F4',color:'#127475',fontSize:'9px',fontWeight:700,padding:'4px 10px',borderRadius:'20px',textTransform:'uppercase'}}>Active</span>
                </div>
                <p style={{fontSize:'12px',color:'#9ca3af',margin:'0 0 20px'}}>$19.99 / Monthly</p>
                <p style={{fontSize:'11px',color:'#6b7280',margin:'0 0 20px'}}>Next billing date: <span style={{fontWeight:700,color:'#111827'}}>October 14, 2024</span></p>
                <button style={{width:'100%',background:'#fff',color:'#374151',border:'1px solid #e5e7eb',borderRadius:'12px',padding:'12px',fontSize:'12px',fontWeight:700,cursor:'pointer'}}>MANAGE PLAN</button>
              </div>
            </div>

            {/* Footer */}
            <div style={{marginTop:'40px',paddingTop:'20px',borderTop:'1px solid #f0f0f0',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <span style={{fontSize:'10px',color:'#9ca3af',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em'}}>© 2024 Velora Financial. All rights reserved.</span>
              <div style={{display:'flex',gap:'20px'}}>
                {['Privacy Policy','Terms of Service','Security','Contact'].map(l=>(
                  <button key={l} style={{background:'none',border:'none',fontSize:'10px',color:'#9ca3af',fontWeight:600,cursor:'pointer',textTransform:'uppercase',letterSpacing:'0.05em'}}>{l}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
