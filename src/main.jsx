import React, {useState, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {motion, MotionConfig} from 'motion/react';
import {ArrowUpRight, ArrowRight, Play, Pause, Mail, FileText, BarChart3, Check, Layers, X, Sparkles, Menu, Users, Package, PenTool} from 'lucide-react';
import './styles.css';
import './page.css';
import {PageSections} from './content.jsx';
const workflows = [
 {name:'Leads & customers', result:'CRM', tag:'CRM', icon:Users, text:'Manage leads, customers, sales and team performance.'},
 {name:'Orders & operations', result:'OMS', tag:'ORDER MANAGEMENT', icon:Package, text:'Manage orders, operations and fulfilment efficiently.'},
 {name:'Ideas & campaigns', result:'AI Content Writing', tag:'AI CONTENT WRITING', icon:PenTool, text:'Create faster, consistent and business-ready content with AI.'},
 {name:'Your unique workflows', result:'Custom AI Solutions', tag:'CUSTOM AI SOLUTIONS', icon:Layers, text:'Customise AI-powered solutions around your workflows, requirements and goals.'}
];
function App(){
 const [active,setActive]=useState(0),[paused,setPaused]=useState(false),[menu,setMenu]=useState(false),[interest,setInterest]=useState('Business demo'),[review,setReview]=useState(null); const dialog=useRef(null); const scene=useRef(null); const current=workflows[active];
 function openDemo(topic='Business demo'){setInterest(typeof topic==='string'?topic:'Business demo');setReview(null);dialog.current.showModal()}
 function previewRequest(e){e.preventDefault();const data=new FormData(e.currentTarget);setReview(Object.fromEntries(data));}
 function move(e){if(!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const r=e.currentTarget.getBoundingClientRect();scene.current.style.setProperty('--mx',`${((e.clientX-r.left)/r.width-.5)*10}px`);scene.current.style.setProperty('--my',`${((e.clientY-r.top)/r.height-.5)*8}px`)}
 return <MotionConfig reducedMotion="user"><main className={paused?'paused':''}>
 <a className="skip-link" href="#main-content">Skip to content</a>
 <header id="top"><a href="#top" className="brand" aria-label="Avatar home"><span className="brand-mark">Λ</span>AVATAR</a><nav aria-label="Main navigation" className={menu?'site-nav open':'site-nav'}><a href="#why-avatar" onClick={()=>setMenu(false)}>Why Avatar</a><a href="#services" onClick={()=>setMenu(false)}>Services</a><button onClick={()=>{setMenu(false);openDemo('Pricing enquiry')}}>Pricing</button><a href="#about" onClick={()=>setMenu(false)}>About</a></nav><div className="header-actions"><button className="header-cta" onClick={()=>openDemo()}>Book a demo <ArrowUpRight size={17}/></button><button className="menu-toggle" aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X size={21}/>:<Menu size={21}/>}</button></div></header>
 <section id="main-content" className="hero" aria-labelledby="headline">
 <motion.div className="intro" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
 <div className="eyebrow"><span/> CONNECTED INTELLIGENCE. REAL POSSIBILITIES.</div>
 <div className="heading-row"><h1 id="headline">Less complexity.<br/><span>More possibility.</span></h1><div className="pitch"><p>CRM, operations and content. Connected by AI.<br/>Manage, automate and scale your business<br className="desktop"/> with one ecosystem built around you.</p><div className="actions"><button className="primary" onClick={openDemo}>Book a demo <ArrowUpRight size={19}/></button><a className="text-button" href="#services">Explore the ecosystem <ArrowRight size={17}/></a></div></div></div>
 </motion.div>
 <motion.div className="ecosystem" ref={scene} onPointerMove={move} onPointerLeave={()=>{scene.current.style.setProperty('--mx','0px');scene.current.style.setProperty('--my','0px')}} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1,delay:.2}}>
 <div className="scene-top"><span><i/> YOUR BUSINESS, CONNECTED</span><button className="play-control" aria-label={paused?'Play animation':'Pause animation'} onClick={()=>setPaused(!paused)}>{paused?<Play size={13}/>:<Pause size={13}/>}<span>{paused?'Play motion':'Pause motion'}</span></button></div>
 <div className="flow-scene">
 <svg className="connections" viewBox="0 0 1200 330" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="line"><stop stopColor="#6d958b" stopOpacity=".15"/><stop offset=".5" stopColor="#b4efce"/><stop offset="1" stopColor="#b4efce" stopOpacity=".3"/></linearGradient></defs>{[54,128,202,276].map((y,i)=><g key={y} className={active===i?'selected-path':''}><path d={`M 230 ${y} C 405 ${y}, 385 165, 600 165 S 825 ${y}, 970 ${y}`}/><path className="signal" style={{animationDelay:`${i*-.8}s`}} d={`M 230 ${y} C 405 ${y}, 385 165, 600 165 S 825 ${y}, 970 ${y}`}/></g>)}</svg>
 <div className="inputs"><div className="column-label">01 / EVERYDAY COMPLEXITY</div>{workflows.map((w,i)=><button id={`workflow-${i}`} key={w.name} className={`input-card ${active===i?'active':''}`} onClick={()=>setActive(i)} onFocus={()=>setActive(i)} onMouseEnter={()=>setActive(i)} aria-pressed={active===i}><w.icon size={18}/><span>{w.name}</span><ArrowRight size={14}/></button>)}</div>
 <div className="core-area"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="core"><Sparkles size={30} strokeWidth={1}/><strong>AVATAR</strong><span>INTELLIGENCE, CONNECTED</span></div><span className="core-caption">One connected ecosystem</span></div>
 <div className="outputs"><div className="column-label">02 / INTELLIGENT POSSIBILITIES</div>{workflows.map((w,i)=><div key={w.result} className={`output-card ${active===i?'active':''}`}><span className="check"><Check size={13}/></span><span>{w.result}</span><span className="output-dot"/></div>)}</div>
 </div>
 <div className="scene-bottom"><div className="detail" aria-live="polite"><span>{current.tag}</span><p>{current.text}</p></div><span className="example-label">CRM · OMS · CONTENT · CUSTOM AI<br/>SELECT A CARD TO EXPLORE ↗</span></div>
 </motion.div>
 <div className="hero-foot"><span>BUILT AROUND YOUR BUSINESS.</span><div><span>Connect.</span><span>Automate.</span><span>Evolve.</span></div><span className="edition">THE NEXT CHAPTER STARTS HERE ↗</span></div>
 </section>
 <PageSections openDemo={openDemo}/>
 <dialog ref={dialog} aria-labelledby="dialog-title" onClick={e=>{if(e.target===dialog.current)dialog.current.close()}}><button className="close" aria-label="Close dialog" onClick={()=>dialog.current.close()}><X/></button><span className="eyebrow">LET’S FIND YOUR NEXT POSSIBILITY</span><h2 id="dialog-title">{interest==='Pricing enquiry'?'Let’s talk pricing.':'Your next chapter starts here.'}</h2><p>{interest==='Pricing enquiry'?'Tell us what your business needs so you can discuss the right solution.':'Explore how Avatar could support the way your business works.'}</p>
 {!review?<form onSubmit={previewRequest}><label>Your name<input name="name" required autoComplete="name" placeholder="Full name"/></label><label>Work email<input name="email" type="email" required autoComplete="email" placeholder="you@company.com"/></label><label>Company<input name="company" required autoComplete="organization" placeholder="Company name"/></label><label>What would you like to explore?<select name="interest" value={interest} onChange={e=>setInterest(e.target.value)}>{Array.from(new Set([interest,'Business demo','CRM','OMS','AI Content Writing','Custom AI solution','Pricing enquiry'])).map(v=><option key={v}>{v}</option>)}</select></label><label>Your business needs<textarea name="needs" rows="2" placeholder="Tell us a little about your workflows…"/></label><p className="form-note">Demo form only. Your details stay in this page and are not sent or booked.</p><button className="primary" type="submit">Preview enquiry <ArrowRight size={17}/></button></form>:<div className="request-review" role="status"><Check size={30}/><h3>Your enquiry preview</h3><p><strong>{review.name}</strong> · {review.company}</p><p>{review.email}</p><p>Interested in: {review.interest}</p>{review.needs&&<p>{review.needs}</p>}<p className="form-note">Nothing has been submitted. This preview demonstrates the enquiry flow.</p><button className="primary" onClick={()=>dialog.current.close()}>Done <Check size={16}/></button></div>}</dialog>

 </main></MotionConfig>
}
createRoot(document.getElementById('root')).render(<App/>);
