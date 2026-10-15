'use client';
import { useState } from 'react';

const MONETAG = ["https://uplcm.com/4/11942303","https://uplcm.com/4/11942596","https://uplcm.com/4/11953459","https://uplcm.com/4/11942289"];
const ADSTERRA_DIRECT = "https://arwf.org/4/4481f3557951526a3ce4d89f4eba5ba5";

// Generate 1000+ Limpopo Jobs
const LOCS = ["Polokwane","Tzaneen","Giyani","Thohoyandou","Lebowakgomo","Mokopane","Burgersfort","Musina","Louis Trichardt","Phalaborwa"];
const TITLES = ["General Worker","Cashier","Cleaner","Security Guard","Retail Assistant","Data Capturer","Admin Clerk","Driver","Shop Assistant","Packer","Waiter","Kitchen Staff","Domestic Worker"," till Operator","Warehouse Worker","Receptionist","Call Centre Agent"];
const COMPANIES = ["Shoprite","Boxer","SPAR","Pick n Pay","Woolworths","Clicks","Dis-Chem","Capitec","Department of Health","Department of Education","Mopani Municipality","Vhembe Municipality","Sekhukhune Municipality"];

const JOBS = Array.from({length:1050}, (_,i)=>{
  const title = TITLES[i % TITLES.length];
  const loc = LOCS[i % LOCS.length];
  const comp = COMPANIES[i % COMPANIES.length];
  return {
    id: i+1,
    title: `${title} - ${loc} ${i>17?`(${i})`:''}`,
    company: comp,
    loc,
    salary: i%3===0?"R4,500 - R6,500": i%3===1?"R5,000 - R8,500" : "Market Related",
    desc: `${title} vacancy at ${comp} in ${loc}. Grade 10-12 required. No experience needed for some posts. Updated today. Apply online before closing date.`,
    site: `https://www.google.com/search?q=${encodeURIComponent(title+" jobs "+loc+" Limpopo")}`
  }
});

export default function Page(){
  const [search,setSearch] = useState('');
  const [showCount,setShowCount] = useState(50);

  const handleApply = (job:any) => {
    const m = MONETAG[Math.floor(Math.random()*MONETAG.length)];
    window.open(m, '_blank');
    setTimeout(()=> window.open(ADSTERRA_DIRECT, '_blank'), 600);
    setTimeout(()=> window.open(job.site, '_blank'), 1100);
  };

  const filtered = JOBS.filter(j=> (j.title+j.company+j.loc).toLowerCase().includes(search.toLowerCase())).slice(0, showCount);
  const today = new Date().toLocaleDateString('en-ZA', {day:'2-digit', month:'long', year:'numeric'});

  return(
    <div style={{maxWidth:900,margin:'0 auto',padding:10,background:'#f8fafc',minHeight:'100vh'}}>
      
      {/* MZANSI FLIP PROMO */}
      <div style={{background:'linear-gradient(90deg,#9333ea,#ec4899)',color:'#fff',padding:12,borderRadius:12,textAlign:'center',marginBottom:10}}>
        <b>🎮 MZANSI-FLIP - PLAY FOR FREE & WIN WEEKLY PRIZES!</b><br/>
        <a href="https://mzansi-flip.vercel.app" target="_blank" style={{background:'#fff',color:'#9333ea',padding:'6px 14px',borderRadius:20,fontWeight:'bold',display:'inline-block',marginTop:5,textDecoration:'none'}}>PLAY NOW FREE</a>
      </div>

      {/* Adsterra 320x50 */}
      <div style={{textAlign:'center',margin:'8px 0'}}>
        <script dangerouslySetInnerHTML={{__html: ``}} />
        <div dangerouslySetInnerHTML={{__html: `<script>atOptions={'key':'e74a73b48f7cf6550b98793122c36be3','format':'iframe','height':50,'width':320,'params':{}};</script><script src="https://bicea.org/22/e74a73b48f7cf6550b98793122c36be3"></script>`}} />
      </div>

      <div style={{background:'#16a34a',color:'#fff',padding:16,borderRadius:12,textAlign:'center'}}>
        <h1 style={{margin:0,fontSize:22}}>LIMPOPO JOBS 2026</h1>
        <p style={{margin:'4px 0 0',fontSize:14}}>{JOBS.length}+ Jobs | Updated Everyday: {today}</p>
      </div>

      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Search Polokwane, Giyani, Tzaneen, Cashier..." style={{width:'100%',padding:14,margin:'12px 0',borderRadius:10,border:'1px solid #ccc',fontSize:16}}/>

      <p style={{fontSize:
