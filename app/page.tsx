'use client';
import { useState, useEffect } from 'react';
const DEFAULT_JOBS = [
  { id: 1, title: "General Worker - Festive", company: "Shoprite", location: "Polokwane", salary: "R4,500 - R6,500", closing: "15 Nov 2026", desc: "Grade 10-12, No experience needed" },
  { id: 2, title: "Cashier", company: "SPAR", location: "Tzaneen", salary: "R5k - R8.5k", closing: "Urgent", desc: "Grade 11-12, Till operator" },
  { id: 3, title: "Graduate Internship", company: "Limpopo Public Works", location: "Polokwane", salary: "R8,174 / month", closing: "06 Nov 2026", desc: "Diploma/Degree Property Science, GIS" },
  { id: 4, title: "Finance Officer", company: "Giyani Municipality", location: "Giyani", salary: "Gov", closing: "Apply Now", desc: "Degree NQF7, 5 years exp" },
  { id: 5, title: "Cleaner x8", company: "Limpopo Govt", location: "Giyani, Thohoyandou", salary: "R4,500", closing: "06 Nov 2026", desc: "Grade 10-12" },
  { id: 6, title: "Security Guard", company: "Fidelity", location: "Musina", salary: "R5,200", closing: "Ongoing", desc: "PSIRA registered" },
  { id: 7, title: "Boxer Learnership", company: "Boxer", location: "Seshego", salary: "R3,500", closing: "31 Oct 2026", desc: "18-28 yrs, Grade 12" },
  { id: 8, title: "Call Centre Agent", company: "Capitec", location: "Polokwane", salary: "R7k-R12k", closing: "30 Nov 2026", desc: "Grade 12, Computer" },
];
export default function Page(){
  const [jobs,setJobs]=useState(DEFAULT_JOBS);
  const [search,setSearch]=useState('');
  const [isAdmin,setIsAdmin]=useState(false);
  const [newJob,setNewJob]=useState({title:'',company:'',location:'Polokwane',salary:'',closing:'',desc:''});
  useEffect(()=>{
    if(window.location.search.includes('admin=george')) setIsAdmin(true);
    const saved=localStorage.getItem('limpopo_jobs');
    if(saved) setJobs(JSON.parse(saved));
  },[]);
  const saveJobs=(j:any)=>{setJobs(j);localStorage.setItem('limpopo_jobs',JSON.stringify(j));};
  const addJob=()=>{if(!newJob.title) return alert('Add title!');const j={id:Date.now(),...newJob};const u=[j,...jobs];saveJobs(u);setNewJob({title:'',company:'',location:'Polokwane',salary:'',closing:'',desc:''});alert('Added!');};
  const deleteJob=(id:number)=>{if(confirm('Delete?')) saveJobs(jobs.filter(j=>j.id!==id));};
  const filtered=jobs.filter(j=>(j.title+j.company+j.location).toLowerCase().includes(search.toLowerCase()));
  if(isAdmin){
    return(<div style={{maxWidth:700,margin:'0 auto',padding:20}}><h2>ADMIN - Add Real Jobs</h2><div style={{border:'1px solid #ccc',padding:15,borderRadius:10,display:'grid',gap:10}}><input placeholder="Job Title" value={newJob.title} onChange={e=>setNewJob({...newJob,title:e.target.value})} style={{padding:10}}/><input placeholder="Company" value={newJob.company} onChange={e=>setNewJob({...newJob,company:e.target.value})} style={{padding:10}}/><input placeholder="Location" value={newJob.location} onChange={e=>setNewJob({...newJob,location:e.target.value})} style={{padding:10}}/><input placeholder="Salary" value={newJob.salary} onChange={e=>setNewJob({...newJob,salary:e.target.value})} style={{padding:10}}/><input placeholder="Closing" value={newJob.closing} onChange={e=>setNewJob({...newJob,closing:e.target.value})} style={{padding:10}}/><textarea placeholder="Description" value={newJob.desc} onChange={e=>setNewJob({...newJob,desc:e.target.value})} style={{padding:10}}/><button onClick={addJob} style={{background:'green',color:'white',padding:12,borderRadius:8}}>ADD JOB +</button></div><h3>Jobs ({jobs.length})</h3>{jobs.map(j=><div key={j.id} style={{border:'1px solid #eee',padding:6}}>{j.title} - {j.location} <button onClick={()=>deleteJob(j.id)} style={{color:'red'}}>X</button></div>)}<br/><a href="/">Public View</a></div>)
  }
  return(<div style={{maxWidth:900,margin:'0 auto',padding:15}}><div style={{background:'#16a34a',color:'#fff',padding:20,borderRadius:12,textAlign:'center'}}><h1>LIMPOPO JOBS 2026</h1><p>Real Jobs Daily</p></div><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search Polokwane, Giyani..." style={{width:'100%',padding:14,margin:'15px 0',borderRadius:10,border:'1px solid #ccc'}}/><p><b>{filtered.length} Jobs Found</b></p><div style={{display:'grid',gap:12}}>{filtered.map(j=><div key={j.id} style={{border:'1px solid #ddd',borderRadius:12,padding:12}}><h3 style={{margin:0,color:'#15803d'}}>{j.title}</h3><p style={{margin:'2px 0',fontWeight:'bold'}}>{j.company} - {j.location}</p><p style={{fontSize:13}}>💰 {j.salary} | ⏰ {j.closing}</p><p style={{fontSize:13}}>{j.desc}</p><a href="https://arwf.org" target="_blank" style={{display:'block',background:'#16a34a',color:'#fff',textAlign:'center',padding:11,borderRadius:8,textDecoration:'none',fontWeight:'bold'}}>APPLY NOW</a></div>)}</div><p style={{textAlign:'center',fontSize:11,marginTop:20}}><a href="?admin=george" style={{color:'#ccc'}}>Admin</a></p></div>)
}
