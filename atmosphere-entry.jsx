import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import WireTerrain from './WireTerrain';
import CursorAnimations from './CursorAnimations';
const probe=document.createElement('canvas');const webgl=probe.getContext('webgl');
if(webgl){webgl.getExtension('WEBGL_lose_context')?.loseContext();}
else{const fallback=document.createElement('script');fallback.src='atmosphere-fallback.js?v=6';document.head.append(fallback);}
const host=document.createElement('div');host.id='originkit-atmosphere';document.body.prepend(host);
function Atmosphere(){
 const [paused,setPaused]=useState(matchMedia('(prefers-reduced-motion: reduce)').matches);
 useEffect(()=>{const query=matchMedia('(prefers-reduced-motion: reduce)');const change=e=>setPaused(e.matches);query.addEventListener('change',change);return()=>query.removeEventListener('change',change)},[]);
 return <>
 {webgl&&<div className="original-terrain" aria-hidden="true"><WireTerrain speed={paused?0:100} hover={paused?0:200} style={{minWidth:0,minHeight:0}}/></div>}
 {matchMedia('(hover:hover) and (pointer:fine)').matches&&<div className="original-cursor" aria-hidden="true"><CursorAnimations label={false}/></div>}
 {webgl&&<button className="terrain-motion" aria-label={paused?'Play background motion':'Pause background motion'} aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>BACKGROUND / {paused?'PLAY ↗':'PAUSE Ⅱ'}</button>}
 </>;
}
createRoot(host).render(<Atmosphere/>);
