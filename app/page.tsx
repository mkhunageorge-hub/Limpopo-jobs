'use client';
import { useState, useEffect } from 'react';

// --- YOUR MONEY LINKS - CHANGE THESE ---
const MONETAG_DIRECT_LINK = "https://uplcm.com/4/11942303"; // Your Monetag
const ADSTERRA_DIRECT_LINK = "https://www.highperformanceformat.com/xxxx"; // Your Adsterra - PASTE YOUR LINK HERE
const MZANSI_FLIP_LINK = "https://mzansi-flip.vercel.app"; // Your game link

const DEFAULT_JOBS = [
  { id:1, title:"General Worker Festive", company:"Shoprite", location:"Polokwane", salary:"R4,500-R6,500", website:"https://shoprite.jobs", desc:"Grade 10-12 needed, No experience. Apply at Shoprite careers." },
  { id:2, title:"Cashier", company:"SPAR", location:"Tzaneen", salary:"R5k-R8.5k", website:"https://spar.co.za", desc:"Grade 11-12, till operator, customer service." },
  { id:3, title:"Cleaner x8 Posts", company:"Limpopo Dept", location:"Giyani", salary:"R4,500", website:"https://limpopo.gov.za", desc:"Grade 10-12, cleaning experience advantage." },
  // Add more jobs - you can add 100+ via Admin panel
];

export default function Page(){
  const [jobs,setJobs]=useState(DEFAULT_JOBS);
  const [search,setSearch]=useState('');
  const [isAdmin,setIsAdmin]=useState(false);
  const [verified,setVerified]=useState(false);
  const [newJob,setNewJob]=useState({title:'',company:'',location:'',salary:'',website:'',desc:''});

  useEffect(()=>{
    const saved=localStorage.getItem('limpopo_jobs_final');
    if(saved){ try{setJobs(JSON.parse(saved))}catch{} }
    if(window.location.search.includes('admin=george777')){ setIsAdmin(true); localStorage.setItem('isAdminFinal','yes'); }
    else if(localStorage.getItem('isAdminFinal')==='yes'){ setIsAdmin(true); }
    // Load Monetag + Adsterra codes here if you have script tags from dashboard
  },[]);

  const saveJobs=(j:any)=>{setJobs(j); localStorage.setItem('limpopo_jobs_final',JSON.stringify(j));};
  const addJob=()=>{ if(!verified) return alert('Please verify you are George! Enter code: george777'); if(!newJob.title) return alert('Title required'); const j={id:Date.now(),...newJob}; saveJobs([j,...jobs]); setNewJob({title:'',company:'',location:'',salary:'',website:'',desc:''}); alert('Job Posted! Now showing to public!'); };

  const handleApply = (job:any) => {
    // 1. Earn - Open Monetag
    window.open(MONETAG_DIRECT_LINK, '_blank');
    // 2. Earn - Open Adsterra after 0.5 sec
    setTimeout(()=>{ window.open(ADSTERRA_DIRECT_LINK, '_blank'); }, 600);
    // 3. Then go to real job website
    setTimeout(()=>{ window.open(job.website || 'https://www.google.com/search?q='+encodeURIComponent(job.title+' '+job.location), '_blank'); }, 1200);
  };

  const filtered = jobs.filter(j=> (j.title+j.company+j.location+j.desc).toLowerCase().includes(search.toLowerCase()));

  if(isAdmin){
    return(
      <div style={{maxWidth:700,margin:'0 auto',padding:20}}>
        <h2>ADMIN PANEL - George Only ✅</h2>
        <div style={{background:'#fef3c7',padding:10,borderRadius:8,marginBottom:10}}>
          Verification: <input placeholder="Enter george777" onChange={e=> setVerified(e.target.value==='george777')} style={{padding:8}}/>
          {verified ? ' ✅ Verified' : ' ❌ Not verified'}
        </div>
        <button onClick={()=>{setIsAdmin(false); localStorage.removeItem('isAdminFinal'); location.href='/';}} style={{background:'black',color:'#fff',padding:10,borderRadius:8}}>View Public Site</button>
        <div style={{border:'1px solid #ccc',padding:15,borderRadius:12,display:'grid',gap:10,marginTop:15}}>
          <input placeholder="Job Title *" value={newJob.title} onChange={e=>setNewJob({...newJob,title:e.target.value})} style={{padding:12,borderRadius:8,border:'1px solid #ccc'}}/>
          <input placeholder="Company" value={newJob.company} onChange={e=>setNewJob({...newJob,company:e.target.value})} style={{padding:12,borderRadius:8,border:'1px solid #ccc'}}/>
          <input placeholder="Job Location (e.g. Polokwane)" value={newJob.location} onChange={e=>setNewJob({...newJob,location:e.target.value})} style={{padding:12,borderRadius:8,border:'1px solid #ccc'}}/>
          <input placeholder="Salary" value={newJob.salary} onChange={e=>setNewJob({...newJob,salary:e.target.value})} style={{padding:12,borderRadius:8,border:'1px solid #ccc'}}/>
          <input placeholder="Job Website Link (where to apply)" value={newJob.website} onChange={e=>setNewJob({...newJob,website:e.target.value})} style={{padding:12,borderRadius:8,border:'1px solid #ccc'}}/>
          <textarea placeholder="Job Description" value={newJob.desc} onChange={e=>setNewJob({...newJob,desc:e.target.value})} style={{padding:12,borderRadius:8,border:'1px solid #ccc'}}/>
          <button onClick={addJob} disabled={!verified} style={{background: verified?'green':'gray',color:'#fff',padding:14,borderRadius:8,fontWeight:'bold'}}>POST JOB - Add to 100+ List</button>
        </div>
        <h3>Total Jobs: {jobs.length}</h3>
      </div>
    )
  }

  return(
    <div style={{maxWidth:900,margin:'0 auto',padding:15,background:'#f8fafc',minHeight:'100vh'}}>
      
      {/* TOP PROMO - MZANSI FLIP */}
      <div style={{background:'linear-gradient(90deg,#9333ea,#ec4899)',color:'#fff',padding:15,borderRadius:12,textAlign:'center',marginBottom:15}}>
        <h3 style={{margin:0}}>🎮 MZANSI-FLIP - PLAY FOR FREE!</h3>
        <p style={{margin:'5px 0'}}>Win Weekly Prizes - Airtime, Cash & More!</p>
        <a href={MZANSI_FLIP_LINK} target="_blank" style={{background:'#fff',color:'#9333ea',padding:'8px 16px',borderRadius:20,fontWeight:'bold',display:'inline-block',textDecoration:'none',marginTop:5}}>PLAY NOW - FREE ENTRY</a>
      </div>

      <div style={{background:'#16a34a',color:'#fff',padding:18,borderRadius:12,textAlign:'center'}}>
        <h1 style={{margin:0}}>LIMPOPO JOBS 2026</h1>
        <p style={{margin:'5px 0 0'}}>{jobs.length}+ Real Jobs - Updated Daily</p>
      </div>

      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Search Job Title, Location (Polokwane, Giyani...)" style={{width:'100%',padding:14,margin:'15px 0',borderRadius:10,border:'1px solid #ccc'}}/>

      <div style={{display:'grid',gap:12}}>
        {filtered.map(j=>
          <div key={j.id} style={{border:'1px solid #ddd',borderRadius:12,padding:14,background:'#fff'}}>
            <h3 style={{margin:'0 0 4px',color:'#15803d'}}>{j.title}</h3>
            <p style={{margin:0,fontSize:14}}><b>{j.company}</b> | 📍 {j.location} | 💰 {j.salary}</p>
            <p style={{fontSize:13,margin:'6px 0',color:'#444'}}>{j.desc}</p>
            {j.website && <p style={{fontSize:11,color:'blue',margin:'4px 0'}}>🌐 {j.website}</p>}
            <button onClick={()=>handleApply(j)} style={{width:'100%',background:'#16a34a',color:'#fff',padding:13,borderRadius:8,fontWeight:'bold',border:'none',marginTop:8}}>APPLY NOW - View Details</button>
          </div>
        )}
      </div>

      {filtered.length===0 && <p style={{textAlign:'center',padding:30}}>No jobs found for "{search}"</p>}

      <div style={{textAlign:'center',marginTop:40,padding:20}}>
        <p style={{fontSize:12,color:'#888'}}>© 2026 Limpopo Jobs - All rights reserved</p>
        <a href="?admin=george777" style={{fontSize:8,color:'#f8fafc'}}>admin</a>
      </div>
    </div>
  )
}
