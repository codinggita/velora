import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const ReportsPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('Analytics');
  const [activeFilter, setActiveFilter] = useState('Monthly Overview');

  useEffect(() => {
    const d = localStorage.getItem('user'), t = localStorage.getItem('token');
    if (!t && !d) { navigate('/login'); return; }
    if (d) setUser(JSON.parse(d));
  }, [navigate]);

  const getLastName = () => { if (!user?.fullName) return 'Sharma'; const p = user.fullName.split(' '); return p.length > 1 ? p[p.length-1] : p[0]; };
  const getInitials = () => user?.fullName ? user.fullName.charAt(0).toUpperCase() : 'U';


  const tabs = ['Overview','Analytics','Activity'];
  const filters = ['Monthly Overview','Category Breakdown','Member Insights','Year to Date'];

  return (
    <div style={{display:'flex',height:'100vh',width:'100vw',background:'#FDFCF8',overflow:'hidden',fontFamily:"'Inter','Segoe UI',sans-serif"}}>
      <Sidebar user={user} />

      {/* Main */}
      <div style={{flex:1,display:'flex',flexDirection:'column',height:'100%',overflow:'hidden'}}>
        {/* Header */}
        <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 32px',background:'#fff',borderBottom:'1px solid #f0f0f0',flexShrink:0}}>
          <div style={{display:'flex',alignItems:'center',gap:'32px'}}>
            <div>
              <div style={{fontSize:'10px',fontWeight:700,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'4px'}}>Velora / Analytics</div>
              <h1 style={{fontSize:'22px',fontWeight:800,color:'#111827',margin:0}}>Reports & Analytics</h1>
            </div>
            <div style={{display:'flex',gap:'16px',marginLeft:'24px',alignSelf:'flex-end',paddingBottom:'4px'}}>
              {tabs.map(t=>(
                <button key={t} onClick={()=>setActiveTab(t)} style={{fontSize:'13px',fontWeight:600,color:activeTab===t?'#127475':'#9ca3af',background:'none',border:'none',cursor:'pointer',padding:'4px 0',borderBottom:activeTab===t?'2px solid #127475':'2px solid transparent'}}>{t}</button>
              ))}
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
            <div style={{background:'#f3f4f6',borderRadius:'20px',padding:'6px 14px',fontSize:'12px',fontWeight:600,color:'#6b7280',display:'flex',alignItems:'center',gap:'6px'}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              October 2023
            </div>
            <button style={{background:'none',border:'none',cursor:'pointer',color:'#6b7280',position:'relative'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </button>
            <button style={{background:'none',border:'none',cursor:'pointer',color:'#6b7280'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </button>
            <button style={{border:'1px solid #e5e7eb',background:'#fff',borderRadius:'10px',padding:'8px 16px',fontSize:'12px',fontWeight:600,color:'#374151',cursor:'pointer',display:'flex',alignItems:'center',gap:'6px'}}>Add Member</button>
            <div style={{width:'32px',height:'32px',borderRadius:'50%',overflow:'hidden',border:'2px solid #f0f0f0'}}>
              <img src={user?.picture||'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh'} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
          </div>
        </header>

        {/* Content */}
        <div style={{flex:1,overflowY:'auto',padding:'28px 32px 40px'}}>
          <div style={{maxWidth:'1100px',margin:'0 auto'}}>

            {/* Title Row */}
            <div style={{marginBottom:'24px'}}>
              <div style={{fontSize:'11px',color:'#9ca3af',marginBottom:'4px'}}>Velora / Reports</div>
              <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                <div>
                  <h1 style={{fontSize:'28px',fontWeight:800,color:'#111827',margin:'0 0 6px'}}>Reports & Analytics</h1>
                  <div style={{display:'flex',alignItems:'center',gap:'6px',color:'#9ca3af',fontSize:'12px'}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    01 Oct 2025 — 31 Oct 2025
                  </div>
                </div>
                <div style={{display:'flex',gap:'10px'}}>
                  <button style={{border:'1px solid #e5e7eb',background:'#fff',borderRadius:'10px',padding:'10px 20px',fontSize:'12px',fontWeight:600,color:'#374151',cursor:'pointer',display:'flex',alignItems:'center',gap:'6px'}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Export
                  </button>
                  <button style={{background:'#127475',color:'#fff',border:'none',borderRadius:'10px',padding:'10px 20px',fontSize:'12px',fontWeight:700,cursor:'pointer',display:'flex',alignItems:'center',gap:'6px'}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                    Share Report
                  </button>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div style={{display:'flex',gap:'8px',marginBottom:'24px'}}>
              {filters.map(f=>(
                <button key={f} onClick={()=>setActiveFilter(f)}
                  style={{padding:'8px 18px',borderRadius:'20px',fontSize:'12px',fontWeight:600,border:'none',cursor:'pointer',transition:'all 0.2s',
                    background:activeFilter===f?'#127475':'#fff',
                    color:activeFilter===f?'#fff':'#6b7280',
                    border:activeFilter===f?'none':'1px solid #e5e7eb'
                  }}>{f}</button>
              ))}
            </div>

            {/* Summary Cards */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'16px',marginBottom:'28px'}}>
              {/* Income */}
              <div style={{background:'#fff',borderRadius:'20px',border:'1px solid #f0f0f0',padding:'22px',position:'relative'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'16px'}}>
                  <div style={{width:'36px',height:'36px',borderRadius:'12px',background:'#F0FAF9',color:'#127475',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
                  </div>
                  <span style={{background:'#E8F5F4',color:'#127475',fontSize:'9px',fontWeight:700,padding:'4px 10px',borderRadius:'20px',textTransform:'uppercase',letterSpacing:'0.05em'}}>Income</span>
                </div>
                <div style={{fontSize:'10px',color:'#9ca3af',fontWeight:600,marginBottom:'4px'}}>Total Income</div>
                <div style={{fontSize:'26px',fontWeight:800,color:'#111827'}}>₹85,000</div>
              </div>

              {/* Expense */}
              <div style={{background:'#fff',borderRadius:'20px',border:'1px solid #f0f0f0',padding:'22px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'16px'}}>
                  <div style={{width:'36px',height:'36px',borderRadius:'12px',background:'#FEF2F2',color:'#EF4444',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/></svg>
                  </div>
                  <span style={{background:'#FEF2F2',color:'#EF4444',fontSize:'9px',fontWeight:700,padding:'4px 10px',borderRadius:'20px',textTransform:'uppercase',letterSpacing:'0.05em'}}>Expense</span>
                </div>
                <div style={{fontSize:'10px',color:'#9ca3af',fontWeight:600,marginBottom:'4px'}}>Total Expenses</div>
                <div style={{fontSize:'26px',fontWeight:800,color:'#111827'}}>₹52,340</div>
              </div>

              {/* Savings */}
              <div style={{background:'linear-gradient(135deg,#0f3d3e,#127475)',borderRadius:'20px',padding:'22px',color:'#fff'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'16px'}}>
                  <div style={{width:'36px',height:'36px',borderRadius:'12px',background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <span style={{background:'rgba(255,255,255,0.2)',fontSize:'9px',fontWeight:700,padding:'4px 10px',borderRadius:'20px',textTransform:'uppercase',letterSpacing:'0.05em'}}>Savings</span>
                </div>
                <div style={{fontSize:'10px',opacity:0.7,fontWeight:600,marginBottom:'4px'}}>Net Savings</div>
                <div style={{fontSize:'26px',fontWeight:800,marginBottom:'8px'}}>₹32,660</div>
                <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                  <span style={{fontSize:'10px',opacity:0.7}}>Savings Rate</span>
                  <div style={{flex:1,height:'4px',background:'rgba(255,255,255,0.15)',borderRadius:'999px',overflow:'hidden'}}><div style={{height:'100%',borderRadius:'999px',width:'38%',background:'#2DD4BF'}}/></div>
                  <span style={{fontSize:'10px',fontWeight:700}}>38%</span>
                </div>
              </div>

              {/* Peak */}
              <div style={{background:'#fff',borderRadius:'20px',border:'1px solid #f0f0f0',padding:'22px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'16px'}}>
                  <div style={{width:'36px',height:'36px',borderRadius:'12px',background:'#FEF3C7',color:'#F59E0B',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
                  </div>
                  <span style={{background:'#FEF3C7',color:'#B45309',fontSize:'9px',fontWeight:700,padding:'4px 10px',borderRadius:'20px',textTransform:'uppercase',letterSpacing:'0.05em'}}>Peak</span>
                </div>
                <div style={{fontSize:'10px',color:'#9ca3af',fontWeight:600,marginBottom:'4px'}}>Highest Spend Day</div>
                <div style={{fontSize:'26px',fontWeight:800,color:'#111827'}}>Oct 15</div>
                <div style={{fontSize:'11px',color:'#9ca3af',marginTop:'2px'}}>₹12,458</div>
              </div>
            </div>

            {/* Charts Row */}
            <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:'20px',marginBottom:'28px'}}>
              {/* Monthly Spending Trend */}
              <div style={{background:'#fff',borderRadius:'24px',border:'1px solid #f0f0f0',padding:'28px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'28px'}}>
                  <h3 style={{fontSize:'16px',fontWeight:700,color:'#111827',margin:0}}>Monthly Spending Trend</h3>
                  <button style={{background:'none',border:'none',cursor:'pointer',color:'#9ca3af',fontSize:'18px'}}>•••</button>
                </div>
                <div style={{position:'relative',height:'200px',marginBottom:'16px'}}>
                  <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="45" x2="400" y2="45" stroke="#f3f4f6" strokeWidth="1"/>
                    <line x1="0" y1="90" x2="400" y2="90" stroke="#f3f4f6" strokeWidth="1"/>
                    <line x1="0" y1="135" x2="400" y2="135" stroke="#f3f4f6" strokeWidth="1"/>
                    {/* Income line (green) */}
                    <path d="M0 140 C50 135, 80 130, 100 125 C130 118, 160 100, 200 70 C240 45, 280 30, 320 20 C350 15, 380 10, 400 8" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
                    {/* Expense line (red) */}
                    <path d="M0 150 C50 148, 80 145, 100 140 C130 130, 160 110, 200 95 C240 90, 280 100, 320 110 C350 115, 380 120, 400 125" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                  {/* X-axis labels */}
                  <div style={{display:'flex',justifyContent:'space-between',paddingTop:'8px'}}>
                    {['WK 1','WK 2','WK 3','WK 4'].map(w=>(<span key={w} style={{fontSize:'10px',color:'#9ca3af',fontWeight:600}}>{w}</span>))}
                  </div>
                </div>
                <div style={{display:'flex',gap:'20px',justifyContent:'center'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'6px'}}><div style={{width:'8px',height:'8px',borderRadius:'50%',background:'#10B981'}}/><span style={{fontSize:'11px',color:'#6b7280',fontWeight:600}}>Income</span></div>
                  <div style={{display:'flex',alignItems:'center',gap:'6px'}}><div style={{width:'8px',height:'8px',borderRadius:'50%',background:'#EF4444'}}/><span style={{fontSize:'11px',color:'#6b7280',fontWeight:600}}>Expense</span></div>
                </div>
              </div>

              {/* Category Breakdown */}
              <div style={{background:'#fff',borderRadius:'24px',border:'1px solid #f0f0f0',padding:'28px'}}>
                <h3 style={{fontSize:'16px',fontWeight:700,color:'#111827',margin:'0 0 28px'}}>Category Breakdown</h3>
                <div style={{display:'flex',alignItems:'center',gap:'24px'}}>
                  {/* Donut Chart */}
                  <div style={{position:'relative',width:'140px',height:'140px',flexShrink:0}}>
                    <svg viewBox="0 0 36 36" style={{width:'100%',height:'100%',transform:'rotate(-90deg)'}}>
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#E5E7EB" strokeWidth="4"/>
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#127475" strokeWidth="4" strokeLinecap="round" strokeDasharray="35 65" strokeDashoffset="0"/>
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#5CB8B2" strokeWidth="4" strokeLinecap="round" strokeDasharray="25 75" strokeDashoffset="-35"/>
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" strokeDasharray="26 74" strokeDashoffset="-60"/>
                    </svg>
                    <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <span style={{fontSize:'9px',color:'#9ca3af',fontWeight:600}}>Total</span>
                      <span style={{fontSize:'20px',fontWeight:800,color:'#111827'}}>₹52.3K</span>
                    </div>
                  </div>
                  {/* Legend */}
                  <div style={{flex:1,display:'flex',flexDirection:'column',gap:'14px'}}>
                    {[
                      {name:'Housing & Rent',color:'#127475',pct:'35%'},
                      {name:'Groceries',color:'#5CB8B2',pct:'25%'},
                      {name:'Transport',color:'#F59E0B',pct:'26%'},
                    ].map((c,i)=>(
                      <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                        <div style={{width:'10px',height:'10px',borderRadius:'3px',background:c.color,flexShrink:0}}/>
                        <span style={{fontSize:'12px',color:'#6b7280',fontWeight:500,flex:1}}>{c.name}</span>
                        <span style={{fontSize:'12px',fontWeight:700,color:'#111827'}}>{c.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
