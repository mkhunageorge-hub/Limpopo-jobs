'use client';
import { useState, useEffect } from 'react';
import AdBanner from './ad-banner';

const MONETAG_LINKS = [
  "https://uplcm.com/4/11942303",
  "https://uplcm.com/4/11942596",
  "https://uplcm.com/4/11953459",
  "https://uplcm.com/4/11942289"
];
const ADSTERRA_DIRECT = "https://arwf.org/4/4481f3557951526a3ce4d89f4eba5ba5";
const MZANSI_FLIP = "https://mzansi-flip.vercel.app";

type Job = { id: number; title: string; company: string; loc: string; salary: string; site: string; desc: string };

const JOBS_DEFAULT: Job[] = [
  { id:1, title:"General Worker Festive", company:"Shoprite", loc:"Polokwane", salary:"R4,500", site:"https://shoprite.jobs", desc:"Grade 10-12, No exp" },
  { id:2, title:"Cashier", company:"SPAR", loc:"Tzaneen", salary:"R5k-R8.5k", site:"https://spar.co.za", desc:"Grade 11-12" },
  { id:3, title:"Cleaner x8", company:"Limpopo Gov", loc:"Giyani", salary:"R4,500", site:"https://limpopo.gov.za", desc:"Grade 10-12" },
  { id:4, title:"Finance Officer", company:"Giyani Municipality", loc:"Giyani", salary:"Gov", site:"https://giyani.gov.za", desc:"Degree NQF7" },
];

const EMPTY_FORM = { title:'', company:'', loc:'Polokwane', salary:'', site:'', desc:'' };

export default function Page(){
  const [jobs,setJobs]=useState<Job[]>(JOBS_DEFAULT);
  const [search,setSearch]=useState('');
  const [isAdmin,setIsAdmin]=useState(false);
  const [ok,setOk]=useState(false);
  const [form,setForm]=useState(EMPTY_FORM);

  useEffect(()=>{
    const s=localStorage.getItem('limpopo_final_jobs');
    if(s) try{setJobs(JSON.parse(s))}catch{}
    if(location.search.includes('admin=george777')){ setIsAdmin(true); localStorage.setItem('isAdmin2','yes'); }
    else if(localStorage.getItem('isAdmin2')==='yes') setIsAdmin(true);
  },[]);

  const save=(j:Job[])=>{setJobs(j); localStorage.setItem('limpopo_final_jobs',JSON.stringify(j));};

  const handleApply = (job:Job) => {
    const monetag = MONETAG_LINKS[Math.floor(Math.random()*MONETAG_LINKS.length)];
    window.open(monetag, '_blank');
    setTimeout(()=> window.open(ADSTERRA_DIRECT, '_blank'), 700);
    setTimeout(()=> window.open(job.site, '_blank'), 1200);
  };

  const filtered = jobs.filter(j=> (j.title+j.company+j.loc).toLowerCase().includes(search.toLowerCase()));

  if(isAdmin){
    return(
      <div style={{maxWidth:700,margin:'0 auto',padding:20}}>
        <h2>ADMIN - George Only</h2>
        Verify: <input type="password" placeholder="Admin password" onChange={e=>setOk(e.target.value==='george777')} style={{padding:10,border:'1px solid #ccc',borderRadius:8}}/> {ok?'Verified':''}
        <div style={{display:'grid',gap:10,marginTop:15,border:'1px solid #ccc',padding:15,borderRadius:12}}>
          <input placeholder="Job Title *" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} style={{padding:12}}/>
          <input placeholder="Company" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} style={{padding:12}}/>
          <input placeholder="Location" value={form.loc} onChange={e=>setForm({...form,loc:e.target.value})} style={{padding:12}}/>
          <input placeholder="Salary" value={form.salary} onChange={e=>setForm({...form,salary:e.target.value})} style={{padding:12}}/>
          <input placeholder="Website Link" value={form.site} onChange={e=>setForm({...form,site:e.target.value})} style={{padding:12}}/>
          <textarea placeholder="Description" value={form.desc} onChange={e=>setForm({...form,desc:e.target.value})} style={{padding:12}}/>
          <button disabled={!ok} onClick={()=>{if(!form.title)return alert('Title!'); save([{id:Date.now(),...form},...jobs]); setForm(EMPTY_FORM); alert('Posted!');}} style={{background:ok?'green':'gray',color:'#fff',padding:14,borderRadius:8,fontWeight:'bold'}}>POST JOB</button>
        </div>
        <button onClick={()=>{setIsAdmin(false); localStorage.removeItem('isAdmin2'); location.href='/';}} style={{marginTop:20,background:'black',color:'#fff',padding:10,borderRadius:8}}>View Public Site</button>
      </div>
    )
  }

  return(
    <div style={{maxWidth:900,margin:'0 auto',padding:12}}>
      <div style={{background:'linear-gradient(90deg,#9333ea,#ec4899)',color:'#fff',padding:14,borderRadius:12,textAlign:'center',marginBottom:12}}>
        <b>MZANSI-FLIP: PLAY FOR FREE &amp; WIN WEEKLY PRIZES!</b><br/>
        <a href={MZANSI_FLIP} target="_blank" rel="noopener noreferrer" style={{background:'#fff',color:'#9333ea',padding:'6px 14px',borderRadius:20,fontWeight:'bold',display:'inline-block',marginTop:6,textDecoration:'none'}}>PLAY NOW</a>
      </div>

      <AdBanner adKey="e74a73b48f7cf6550b98793122c36be3" width={320} height={50} />

      <div style={{background:'#16a34a',color:'#fff',padding:18,borderRadius:12,textAlign:'center'}}>
        <h1 style={{margin:0}}>LIMPOPO JOBS 2026</h1><p style={{margin:0}}>{jobs.length}+ Jobs - No PIN Needed</p>
      </div>

      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search Polokwane, Giyani, Tzaneen..." aria-label="Search jobs" style={{width:'100%',boxSizing:'border-box',padding:14,margin:'12px 0',borderRadius:10,border:'1px solid #ccc'}}/>

      <div style={{display:'grid',gap:12}}>
        {filtered.map((j,i)=>
          <div key={j.id}>
            {i===2 && <AdBanner adKey="7cb44d6f14347be2ef43d8c068a81a82" width={468} height={60} />}
            <div style={{border:'1px solid #ddd',borderRadius:12,padding:12,background:'#fff'}}>
              <h3 style={{margin:0,color:'#15803d'}}>{j.title}</h3>
              <p style={{margin:'4px 0',fontSize:14}}><b>{j.company}</b> - {j.loc} - {j.salary}</p>
              <p style={{fontSize:13,margin:'4px 0'}}>{j.desc}</p>
              <button onClick={()=>handleApply(j)} style={{width:'100%',background:'#16a34a',color:'#fff',padding:12,borderRadius:8,fontWeight:'bold',border:'none'}}>APPLY NOW</button>
            </div>
            {i===4 && <AdBanner adKey="fe4d9039466ebb135d135faf9b05eaf9" width={300} height={250} />}
          </div>
        )}
      </div>

      <div style={{marginTop:30}}>
        <AdBanner adKey="aa5848a3136727187ce046816ada54c8" width={728} height={90} />
      </div>

      <a href="?admin=george777" style={{fontSize:8,color:'#f8fafc'}}>admin</a>
    </div>
  )
}
