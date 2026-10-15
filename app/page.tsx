'use client';
import { useState } from 'react';

const MONETAG = ["https://uplcm.com/4/11942303","https://uplcm.com/4/11942596","https://uplcm.com/4/11953459","https://uplcm.com/4/11942289"];
const ADSTERRA = "https://arwf.org/4/4481f3557951526a3ce4d89f4eba5ba5";

const JOBS = Array.from({length:1050}, (_,i)=>{
  const locs = ["Polokwane","Tzaneen","Giyani","Thohoyandou","Lebowakgomo"];
  const titles = ["General Worker","Cashier","Cleaner","Security Guard","Driver","Shop Assistant"];
  const comps = ["Shoprite","Boxer","SPAR","Pick n Pay","Department"];
  return {
    id:i+1,
    title: titles[i % titles.length] + " - " + locs[i % locs.length],
    company: comps[i % comps.length],
    loc: locs[i % locs.length],
    salary: "R4,500 - R8,500",
    desc: "Grade 10-12 required. Updated today. Apply before closing date.",
    site: "https://www.google.com/search?q=jobs+" + locs[i % locs.length]
  }
});

export default function Page(){
  const [search,setSearch] = useState('');
  const [count,setCount] = useState(50);
  const today = new Date().toLocaleDateString();
  
  const handleApply = (job:any)=>{
    const m = MONETAG[Math.floor(Math.random()*MONETAG.length)];
    window.open(m, '_blank');
    setTimeout(()=> window.open(ADSTERRA, '_blank'), 700);
    setTimeout(()=> window.open(job.site, '_blank'), 1200);
  };

  const filtered = JOBS.filter(j=> (j.title+j.loc).toLowerCase().includes(search.toLowerCase())).slice(0,count);

  return(
    <div style={{maxWidth:900,margin:'0 auto',padding:10}}>
      <div style={{background:'#16a34a',color:'#fff',padding:16,borderRadius:12,textAlign:'center'}}>
        <h1 style={{margin:0}}>LIMPOPO JOBS 2026</h1>
        <p style={{margin:0}}>{JOBS.length}+ Jobs - Updated: {today}</p>
      </div>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search jobs..." style={{width:'100%',padding:14,margin:'12px 0',borderRadius:10,border:'1px solid #ccc'}}/>
      <div style={{display:'grid',gap:10}}>
        {filtered.map((j:any)=>
          <div key={j.id} style={{border:'1px solid #ddd',borderRadius:12,padding:12,background:'#fff'}}>
            <h3 style={{margin:0,color:'#15803d'}}>{j.title}</h3>
            <p style={{margin:'4px 0',fontSize:13}}>{j.company} - {j.loc}</p>
            <p style={{fontSize:12,color:'#555'}}>{j.desc}</p>
            <button onClick={()=>handleApply(j)} style={{width:'100%',background:'#16a34a',color:'#fff',padding:12,borderRadius:8,fontWeight:'bold',border:'none'}}>APPLY NOW</button>
          </div>
        )}
      </div>
      <button onClick={()=>setCount(c=>c+100)} style={{width:'100%',marginTop:15,background:'#000',color:'#fff',padding:14,borderRadius:10}}>LOAD MORE - 100 More</button>
    </div>
  )
}
