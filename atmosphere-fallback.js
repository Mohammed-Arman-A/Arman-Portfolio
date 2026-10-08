// Adapted from the supplied Originkit cursor and WireTerrain references.
// Canvas projection keeps the terrain available without a WebGL requirement.
(()=>{
 const canvas=document.createElement('canvas');canvas.id='wire-terrain';canvas.setAttribute('aria-hidden','true');document.body.prepend(canvas);
 const ctx=canvas.getContext('2d');if(!ctx)return;
 const motion=matchMedia('(prefers-reduced-motion: reduce)'),mobile=matchMedia('(max-width:760px)').matches;
 let w=1,h=1,dpr=1,travel=0,time=0,tx=0,ty=0,px=0,py=0,raf=0,last=0,paused=motion.matches;
 const control=document.createElement('button');control.className='terrain-motion';document.body.append(control);
 function label(){control.textContent=paused?'BACKGROUND / PLAY ↗':'BACKGROUND / PAUSE Ⅱ';control.setAttribute('aria-label',paused?'Play background motion':'Pause background motion');control.setAttribute('aria-pressed',String(paused))}label();
 const fract=v=>v-Math.floor(v),hash=(x,z)=>fract(Math.sin(x*127.1+z*311.7)*43758.5453),smooth=t=>t*t*(3-2*t),mix=(a,b,t)=>a+(b-a)*t;
 function noise(x,z){const ix=Math.floor(x),iz=Math.floor(z),u=smooth(fract(x)),v=smooth(fract(z));return mix(mix(hash(ix,iz),hash(ix+1,iz),u),mix(hash(ix,iz+1),hash(ix+1,iz+1),u),v)}
 function height(x,z){const n=noise(x/6,z/6)*.6+noise(x/3,z/3)*.27+noise(x/1.5,z/1.5)*.13;const side=smooth(Math.min(1,Math.max(0,(Math.abs(x)-3)/13)));return 4.2*(side*(Math.pow(n,1.6)*2.1+.55*Math.abs(x)/64)+.1*(n-.5))}
 const step=mobile?2.5:1.8,cols=mobile?32:48;
 function point(x,y,z){const yaw=px*.085,xx=x*Math.cos(yaw)-z*Math.sin(yaw),zz=x*Math.sin(yaw)+z*Math.cos(yaw);if(zz<.7)return null;const focal=h*.95;return{x:w*.5+xx/zz*focal,y:h*.47+(1.7+py*.3-y)/zz*focal,z:zz}}
 function draw(){ctx.clearRect(0,0,w,h);px+=(tx-px)*.035;py+=(ty-py)*.035;
 const sx=w*(.73-px*.04),sy=h*.43+py*h*.015,r=Math.min(w*.115,h*.17);
 const halo=ctx.createRadialGradient(sx,sy,0,sx,sy,r*3);halo.addColorStop(0,'rgba(227,88,39,.17)');halo.addColorStop(.4,'rgba(197,65,34,.07)');halo.addColorStop(1,'rgba(197,65,34,0)');ctx.fillStyle=halo;ctx.fillRect(0,0,w,h);
 ctx.save();ctx.beginPath();ctx.arc(sx,sy,r,0,Math.PI*2);ctx.clip();const sun=ctx.createLinearGradient(0,sy-r,0,sy+r);sun.addColorStop(0,'rgba(255,190,126,.54)');sun.addColorStop(1,'rgba(217,72,39,.23)');ctx.fillStyle=sun;ctx.fillRect(sx-r,sy-r,r*2,r*2);ctx.globalCompositeOperation='destination-out';for(let i=0;i<10;i++){const y=sy-r*.1+i*r*.135;ctx.fillRect(sx-r,y,r*2,2+i*.65)}ctx.restore();
 const offset=travel%step,base=travel-offset,rows=[];
 for(let j=0;j<29;j++){const z=1+j*step-offset;const row=[];for(let i=0;i<=cols;i++){const x=(i-cols/2)*step;row.push(point(x,height(x,base+1+j*step),z))}rows.push(row)}
 // Far-to-near opaque faces occlude the rear grid, preserving the valley silhouette.
 for(let j=rows.length-2;j>=0;j--){const fog=Math.max(0,1-j/29);for(let i=0;i<cols;i++){const a=rows[j][i],b=rows[j][i+1],c=rows[j+1][i+1],d=rows[j+1][i];if(!a||!b||!c||!d)continue;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.lineTo(c.x,c.y);ctx.lineTo(d.x,d.y);ctx.closePath();ctx.fillStyle='#090d12';ctx.fill();ctx.strokeStyle=`rgba(206,109,69,${.06+fog*.25})`;ctx.lineWidth=.7;ctx.stroke();}}
 const fade=ctx.createLinearGradient(0,0,0,h);fade.addColorStop(0,'rgba(9,13,18,.25)');fade.addColorStop(.38,'rgba(9,13,18,.08)');fade.addColorStop(1,'rgba(9,13,18,.14)');ctx.fillStyle=fade;ctx.fillRect(0,0,w,h);
 }
 function resize(){w=innerWidth;h=innerHeight;dpr=Math.min(devicePixelRatio||1,mobile?1:1.3);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw()}
 function frame(now){raf=0;if(paused||document.hidden)return;if(now-last>1000/(mobile?18:24)){const dt=last?Math.min(.08,(now-last)/1000):0;travel+=dt*1.7;time+=dt;last=now;draw()}raf=requestAnimationFrame(frame)}
 function run(){last=0;if(!raf&&!paused&&!document.hidden)raf=requestAnimationFrame(frame)}
 control.addEventListener('click',()=>{paused=!paused;label();if(paused){cancelAnimationFrame(raf);raf=0}else run()});
 motion.addEventListener('change',e=>{paused=e.matches;label();cancelAnimationFrame(raf);raf=0;draw();run()});
 addEventListener('resize',resize);addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||motion.matches)return;tx=e.clientX/w*2-1;ty=e.clientY/h*2-1;if(paused)draw()},{passive:true});document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(raf);raf=0;run()});resize();run();

})();
