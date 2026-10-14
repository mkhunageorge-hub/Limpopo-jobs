'use client';
import { useState, useEffect } from 'react';

const DIRECT_LINKS = [
  "https://uplcm.com/4/11942303",
  "https://uplcm.com/4/11942303",
  "https://uplcm.com/4/11942303",
  "https://uplcm.com/4/11942303"
];

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
    const saved=localStorage.getItem('limpopo_jobs');
    if(saved){ try{setJobs(JSON.parse(saved))}catch{} }
    // YOU ARE ONLY ADMIN - secret link
    if(window.location.search.includes('admin=george777')){
      setIsAdmin(true);
      localStorage.setItem('isAdmin','yes');
    } else if(localStorage.getItem('isAdmin')==='yes'){
      setIsAdmin(true);
    }
  },[]);

  const saveJobs=(j:any)=>{setJobs(j);localStorage.setItem('limpopo_jobs',JSON.stringify(j));};
  const addJob=()=>{if(!newJob.title) return alert('Add title!'); const j={id:Date.now(),...newJob}; saveJobs([j,...jobs]); setNewJob({title:'',company:'',location:'Polokwane',salary:'',closing:'',desc:''}); alert('Added!');};
  const deleteJob=(id:number)=>{if(confirm('Delete?')) saveJobs(jobs.filter(j=>j.id!==id));};

  const handleApply = (job:any) => {
    const randomLink = DIRECT_LINKS[Math.floor(Math.random()*DIRECT_LINKS.length)];
    window.open(randomLink, '_blank');
    const query = encodeURIComponent(job.title + ' ' + job.company + ' ' + job.location + ' jobs South Africa');
    setTimeout(()=>{ window.open('https://www.google.com/search?q='+query,'_blank'); }, 700);
  };

  const filtered=jobs.filter(j=>(j.title+j.company+j.location).toLowerCase().includes(search.toLowerCase()));

  if(isAdmin){
    return(
      <div style={{maxWidth:700,margin:'0 auto',padding:20}}>
        <h2>ADMIN - George Only</h2>
        <button onClick={()=>{setIsAdmin(false);localStorage.removeItem('isAdmin'); window.location.href='/';}} style={{background:'black',color:'white',padding:10,borderRadius:8,marginBottom:15}}>Exit Admin - View Public Site</button>
        <div style={{border:'1px solid #ccc',padding:15,borderRadius:10,display:'grid',gap:10}}>
          <input placeholder="Job Title" value={newJob.title} onChange={e=>setNewJob({...newJob,title:e.target.value})} style={{padding:10}}/>
          <input placeholder="Company" value={newJob.company} onChange={e=>setNewJob({...newJob,company:e.target.value})} style={{padding:10}}/>
          <input placeholder="Location" value={newJob.location} onChange={e=>setNewJob({...newJob,location:e.target.value})} style={{padding:10}}/>
          <input placeholder="Salary" value={newJob.salary} onChange={e=>setNewJob({...newJob,salary:e.target.value})} style={{padding:10}}/>
          <input placeholder="Closing" value={newJob.closing} onChange={e=>setNewJob({...newJob,closing:e.target.value})} style={{padding:10}}/>
          <textarea placeholder="Description" value={newJob.desc} onChange={e=>setNewJob({...newJob,desc:e.target.value})} style={{padding:10}}/>
          <button onClick={addJob} style={{background:'green',color
