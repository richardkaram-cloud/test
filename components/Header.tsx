"use client";
import { useState } from "react";
import Link from "next/link";
export default function Header(){const [open,setOpen]=useState(false); const links=[["Services","#services"],["Portfolio","#portfolio"],["Tools","#tools"],["About","#about"],["Contact","#contact"]]; return <header className="header"><Link className="brand" href="#top"><span className="mark">RK</span><span>KARAM<br/><b>ENGINEERING</b></span></Link><button className="menu" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>☰</button><nav className={open?"nav open":"nav"}>{links.map(([t,h])=><Link key={t} href={h} onClick={()=>setOpen(false)}>{t}</Link>)}<Link className="navCta" href="#contact">Request a proposal</Link></nav></header>}
