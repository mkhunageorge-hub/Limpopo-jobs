'use client';
import { useState } from 'react';

const MONETAG = [
  "https://uplcm.com/4/11942303",
  "https://uplcm.com/4/11942596",
  "https://uplcm.com/4/11953459",
  "https://uplcm.com/4/11942289"
];
const ADSTERRA = "https://arwf.org/4/4481f3557951526a3ce4d89f4eba5ba5";

const LOCS = ["Polokwane","Tzaneen","Giyani","Thohoyandou","Lebowakgomo","Mokopane","Burgersfort","Musina","Louis Trichardt","Phalaborwa"];
const TITLES = ["General Worker","Cashier","Cleaner","Security Guard","Retail Assistant","Data Capturer","Admin Clerk","Driver","Shop Assistant","Packer","Waiter","Kitchen Staff","Domestic Worker","Till Operator","Warehouse Worker","Receptionist","Call Centre Agent"];
const COMPANIES = ["Shoprite","Boxer","SPAR","Pick n Pay","Woolworths","Clicks","Dis-Chem","Capitec","Department of Health","Department of Education","Mopani Municipality","Vhembe Municipality"];

const JOBS = Array.from({length:1050}, (_,i)=>{
  return {
    id: i+1,
    title: TITLES[i % TITLES.length] + " - " + LOCS[i % LOCS.length],
    company: COMPANIES[i % COMPANIES.length],
    loc: LOCS[i % LOCS.length],
    salary: i%3===0?"R4,500-R6,500":"R5,000-R8,500",
    desc: TITLES[i % TITLES.length] + " vacancy at " + COMPANIES[i % COMPANIES.length] + " in " + LOCS[i % LOCS.length] + ". Grade 10-12. Updated today.",
    site: "https://www.google.com/search?q=" + TITLES[i % TITLES.length] + " jobs " + LOCS[i % LOCS.length]
  }
});

export default function Page(){
  const [search,setSearch] = useState('');
  const [showCount,setShowCount] = useState(50);
  const today = new Date().toLocaleDateString('en-ZA', {day:'2-digit', month:'long', year:'numeric'});

  const handleApply = (job:any) => {
    const m = MONETAG[Math.floor(Math.random()*MONETAG.length)];
    window.open(m, '_blank');
    setTimeout(()=>{ window.open(ADSTERRA, '_blank'); }, 600);
    setTimeout(()=>{ window.open(job.site, '_blank'); }, 1100);
  };

  const filtered = JOBS.filter(j=> (j.title+j.company+j.loc).toLowerCase().includes(search.toLowerCase())).slice(0, showCount);

  return(
    <div style={{maxWidth:900,margin:'0 auto',padding:10,background:'#f8fafc',minHeight:'100vh'}}>
      
      <div style={{background:'linear-gradient(90deg,#9333ea,#ec4899)',color:'#fff',padding:12,borderRadius:12,textAlign:'center',marginBottom:10}}>
        <b>🎮 MZANSI-FLIP - PLAY FOR FREE & WIN WEEKLY PRIZES!</b><br/>
        <a href="https://mzansi-flip.vercel.app" target="_blank" style={{background:'#fff',color:'#9333ea',padding:'6px 14px',borderRadius:20,fontWeight:'bold',display:'inline-block',marginTop:5,textDecoration:'none'}}>PLAY NOW FREE</a>
      </div>

      <div style={{background:'#16a34a',color:'#fff',padding:16,borderRadius:12,textAlign:'center'}}>
        <h1 style={{margin:0,fontSize:22}}>LIMPOPO JOBS 2026</h1>
        <p style={{margin:'4px 0 0',fontSize:14}}>{JOBS.length}+ Jobs | Updated: {today}</p>
      </div>

      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search Polokwane, Giyani, Tzaneen..." style={{width:'100%',padding:14,margin:'12px 0',borderRadius:10,border:'1px solid #ccc',fontSize:16}}/>

      <p style={{fontSize:12,color:'#666'}}>Showing {filtered.length} of {JOBS.length}+ jobs - {today}</p>

      <div style={{display:'grid',gap:10}}>
        {filtered.map((j:any)=>
          <div key={j.id} style={{border:'1px solid #e2e8f0',borderRadius:12,padding:12,background:'#fff'}}>
            <h3 style={{margin:0,color:'#15803d',fontSize:16}}>{j.title}</h3>
            <p style={{margin:'4px 0',fontSize:13}}><b>{j.company}</b> | {j.loc} | {j.salary}</p>
            <p style={{fontSize:12,margin:'4px 0',color:'#555'}}>{j.desc}</p>
            <button onClick={()=>handleApply(j)} style={{width:'100%',background:'#16a34a',color:'#fff',padding:12,borderRadius:8,fontWeight:'bold',border:'none',marginTop:6}}>APPLY NOW</button>
          </div>
        )}
      </div>

      <button onClick={()=>setShowCount(c=>c+100)} style={{width:'100%',marginTop:15,background:'#000',color:'#fff',padding:14,borderRadius:10,fontWeight:'bold'}}>LOAD MORE JOBS - Show 100 More</button>

      <p style={{textAlign:'center',fontSize:11,color:'#999',marginTop:20}}>© 2026 Limpopo Jobs - Updated Daily</p>
    </div>
  )
}
