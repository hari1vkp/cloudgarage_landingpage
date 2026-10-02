const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),lr=(a,b,t)=>a+(b-a)*t,sm=t=>t*t*(3-2*t);
const NS='http://www.w3.org/2000/svg',mk=(t,a,p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);p&&p.appendChild(e);return e};
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches&&innerWidth>820;
/* ---- content ---- */
const SV=[["Cloud Consulting","Infrastructure evaluation · Architecture design · Feasibility · Security design · Strategy"],["Cloud Migration","Strategy · Planning · Risk mitigation · Execution · Cutover · Optimization"],["Application Modernization","Application development · Migration · Cloud-ready architectures"],["Data Modernization","Data migration · Modern data platforms · ML &amp; AI · BI &amp; analytics"],["Cloud Security","Architecture · Assessment · Penetration testing · Monitoring · Hardening · Incident handling"],["Managed Cloud Operations","Monitoring · Alert handling · Troubleshooting · Change requests · Remediation"]];
$('#sv').innerHTML=SV.map((s,i)=>`<a class="srow" href="mailto:contact@cloudgarage.io" data-stick><span class="n">0${i+1}</span><div class="fw"><div class="flip"><span class="a">${s[0]}</span><span class="b">${s[1]}</span></div></div><p class="caps">${s[1]}</p></a>`).join('');
const MG=[["System Survey","Mapping the existing environment, dependencies and workloads."],["Risk Assessment","Identifying technical, business and security risk before anything moves."],["Architecture Design","Shaping the target cloud architecture and network."],["Component Design","Detailing each component, integration and security control."],["Verification","Validating the design against requirements."],["System Test","Testing the migrated system end to end."],["Cutover","Moving production to the new environment."],["Optimization","Tuning performance, resilience and efficiency."],["Operations","Monitoring, support and continuous improvement."]];
$('#mk').innerHTML=MG.map(()=>'<i></i>').join('');
const SC=["Assess","Architect","Implement","Test","Monitor","Harden","Respond"];
$('#sl').innerHTML=SC.map((s,i)=>`<li><span>0${i+1}</span>${s}</li>`).join('');
const TC=[["Service management",["ServiceNow","xMatters","Universal CMDB"]],["Automation",["Terraform","Vault","Ansible"]],["Observability",["Dynatrace","Splunk"]],["Security",["CrowdStrike","Tenable","SailPoint","Secberus","Panorama"]],["Testing",["Applitools"]]];
const tb=$('#tb');function showT(i){$$('#tb button').forEach((b,j)=>b.setAttribute('aria-selected',i==j));$('#tlist').innerHTML=TC[i][1].map((t,k)=>`<span style="--i:${k}">${t}</span>`).join('')}
TC.forEach((c,i)=>{const b=document.createElement('button');b.setAttribute('role','tab');b.textContent=c[0];b.dataset.stick='';b.onclick=b.onmouseenter=()=>showT(i);b.onfocus=()=>showT(i);tb.appendChild(b)});showT(0);
/* word reveal */
const wr=$('#wr');wr.innerHTML=wr.textContent.split(' ').map(w=>`<span>${w}</span>`).join(' ');const ws=$$('#wr span');
/* hero build */
let sd=7;const rnd=()=>(sd=sd*16807%2147483647)/2147483647,N=20,nodes=[],lines=[];
for(let i=0;i<N;i++){const w=50+rnd()*60,h=26+rnd()*30;nodes.push({a:{x:70+rnd()*460,y:100+rnd()*400,r:(rnd()-.5)*60,w,h},b:{x:100+(i%5)*100,y:250+Math.floor(i/5)*62,r:0,w:88,h:40},e:mk('rect',{rx:6,fill:'var(--card)',stroke:'currentColor','stroke-width':1.3},$('#nd')),o:i%6==0})}
for(let i=0;i<16;i++)lines.push({i,j:(i*3+5)%N,e:mk('line',{'stroke-width':1},$('#ln'))});
const arcs=[0,1,2,3,4].map(c=>mk('line',{x1:100+c*100,x2:100+c*100,y1:190,y2:230},$('#arc')));
const stg=$$('#stg li');
const H={hero(p){const tp=sm(cl((p-.15)/.5)),cp=sm(cl((p-.55)/.15)),sc=sm(cl((p-.78)/.12));
 nodes.forEach(n=>{const x=lr(n.a.x,n.b.x,tp),y=lr(n.a.y,n.b.y,tp),w=lr(n.a.w,n.b.w,tp),h=lr(n.a.h,n.b.h,tp);n.cx=x;n.cy=y;
  n.e.setAttribute('x',-w/2);n.e.setAttribute('y',-h/2);n.e.setAttribute('width',w);n.e.setAttribute('height',h);n.e.setAttribute('transform',`translate(${x} ${y}) rotate(${lr(n.a.r,0,tp)})`);
  n.e.setAttribute('stroke',n.o&&cp>.3?'var(--o)':'currentColor');n.e.setAttribute('opacity',lr(1,n.o||tp<.3?1:.85,tp))});
 lines.forEach(l=>{const a=nodes[l.i],b=nodes[l.j];l.e.setAttribute('x1',a.cx);l.e.setAttribute('y1',a.cy);l.e.setAttribute('x2',b.cx);l.e.setAttribute('y2',b.cy);l.e.setAttribute('opacity',(1-tp)*.4)});
 $('#cld').style.opacity=cp;$('#cld').style.transform=`translateY(${(1-cp)*-24}px)`;$('#arc').style.opacity=cp;
 const sh=$('#shd');sh.style.opacity=sc;sh.setAttribute('stroke-dashoffset',(1-sc)*120);
 const z=p<.3?lr(.85,1,p/.3):p<.6?lr(1,1.12,(p-.3)/.3):p<.9?lr(1.12,1,(p-.6)/.3):1;$('#sys').style.transform=`scale(${z})`;
 const hp=cl(p/.28),h=$('#hl');h.style.opacity=1-hp;h.style.transform=`translateY(calc(-50% - ${hp*70}px))`;h.style.filter=hp>.05?`blur(${hp*6}px)`:'';h.style.pointerEvents=hp>.8?'none':'';
 const ep=sm(cl((p-.88)/.08));$('#end').style.opacity=ep;
 const k=Math.min(6,Math.floor(p*7));stg.forEach((l,i)=>l.classList.toggle('on',i<=k))},
prob(p){const k=cl((p-.1)/.65)*ws.length;ws.forEach((w,i)=>w.classList.toggle('on',i<k))},
adv(p){const k=Math.min(2,Math.floor(p*3)),sp=p*3-k;$$('.aw div').forEach((d,i)=>d.classList.toggle('on',i==k));
 $$('.ap ul').forEach((u,i)=>{u.classList.toggle('on',i==k);if(i==k)[...u.children].forEach((li,j)=>{const t=sm(cl(sp*3-j*.4));li.style.opacity=t;li.style.transform=`translateY(${(1-t)*30}px)`})})},
mig(p){const q=p*9,k=Math.min(8,Math.floor(q));$('#mn').textContent='0'+(k+1);$('#mh').textContent=MG[k][0];$('#mp').textContent=MG[k][1];$$('#mk i').forEach((e,i)=>e.classList.toggle('on',i<=k));
 $('#lg').style.opacity=1-sm(cl(q-6.4));
 $$('#lg rect').forEach(r=>r.setAttribute('opacity',cl(q*.8)>.01?1:1));
 $$('#tl rect').forEach(r=>{r.setAttribute('stroke-opacity',sm(cl(q-2)));r.setAttribute('fill-opacity',.2*sm(cl((q-4)/2)));r.setAttribute('stroke',q>=7?'var(--o)':'#8a8268')});
 $('#shl').style.opacity=sm(cl(q-4.6));$('#shl').classList.toggle('live',q>=8);
 $$('#dt circle').forEach((c,j)=>{const t=cl((q-3.2-j*.15)/2.8),e=sm(t),cc=j%3,rr=Math.floor(j/3);c.setAttribute('cx',lr(130,436+cc*88,e));c.setAttribute('cy',lr(125+(j%4)*68,131+rr*86,e));c.setAttribute('opacity',t<=0?0:1-sm(cl((t-.92)/.08)))})},
lay(p){const sp=lr(6,64,sm(cl(p*1.5)));$$('.pl').forEach((e,i)=>e.style.transform=`translateZ(${i*sp}px)`);
 const k=Math.min(3,Math.floor(p*4));$$('.pl').forEach((e,i)=>e.classList.toggle('on',i==[2,1,0,3][k]));$$('.lc li').forEach((e,i)=>e.classList.toggle('on',i==k));
 $('#lst').style.transform=`rotateX(${lr(62,54,p)}deg) rotateZ(${lr(-38,-26,p)}deg) scale(${lr(.9,1.06,p)})`},
sec(p){const k=Math.min(6,Math.floor(p*7.2));$$('#sl li').forEach((l,i)=>l.classList.toggle('on',i<=k));
 $$('#rg circle.r').forEach((c,i)=>{const t=sm(cl(p*7.2-i));c.setAttribute('stroke-dashoffset',1-t);c.setAttribute('stroke-opacity',.25+.75*t)});$('#rc').setAttribute('r',lr(34,40,p))},
cloud(p){const t=sm(cl(p*1.4)),d=lr(250,180,t);$$('#mc .nd').forEach((g,i)=>{const a=(i*90+45+lr(-18,0,t))*Math.PI/180,x=350+Math.cos(a)*d*1.2,y=270+Math.sin(a)*d*.78;g.setAttribute('transform',`translate(${x} ${y})`);const l=$$('#mc line')[i];l.setAttribute('x2',x);l.setAttribute('y2',y);l.setAttribute('stroke-dashoffset',1-sm(cl(p*3-i*.4)))})}};
/* static svgs */
const lg=$('#lg');for(let i=0;i<4;i++){mk('rect',{x:40,y:100+i*68,width:100,height:50,rx:6,fill:'none',stroke:'#8a8268'},lg);mk('line',{x1:55,x2:90,y1:125+i*68,y2:125+i*68,stroke:'#8a8268'},lg)}
for(let r=0;r<3;r++)for(let c=0;c<3;c++)mk('rect',{x:410+c*88,y:100+r*86,width:72,height:64,rx:10,fill:'var(--o)','fill-opacity':0,stroke:'#8a8268','stroke-opacity':0},$('#tl'));
for(let j=0;j<9;j++)mk('circle',{r:6,fill:'var(--o)',opacity:0},$('#dt'));
const rg=$('#rg');for(let i=0;i<7;i++)mk('circle',{class:'r',cx:260,cy:260,r:60+i*30,fill:'none',stroke:'var(--o)','stroke-width':1.6,pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1},rg);
mk('circle',{id:'rc',cx:260,cy:260,r:34,fill:'var(--o)'},rg);mk('text',{x:260,y:264,'text-anchor':'middle',fill:'#fff','font-size':10,'font-weight':700},rg).textContent='WORKLOAD';
const mc=$('#mc');['Google Cloud','AWS','Microsoft Azure','Alibaba Cloud'].forEach(()=>mk('line',{x1:350,y1:270,x2:350,y2:270,stroke:'var(--o)','stroke-width':1.5,pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1},mc));
const LOGO={
 'Google Cloud':q=>{const d='M-9 6h13a5.5 5.5 0 0 0 .8-10.9A7.5 7.5 0 0 0-9.6-2.5 4.4 4.4 0 0 0-9 6z';['#4285F4','#34A853','#FBBC04','#EA4335'].forEach((c,i)=>mk('path',{d,fill:'none',stroke:c,'stroke-width':3,pathLength:100,'stroke-dasharray':'25 75','stroke-dashoffset':-25*i,'stroke-linejoin':'round'},q))},
 'AWS':q=>{mk('text',{y:2,'text-anchor':'middle','font-size':14,'font-weight':800,fill:'currentColor'},q).textContent='aws';mk('path',{d:'M-11 6q11 6 22 0M8 4.6l3 1.4-1.2 2.8',fill:'none',stroke:'#FF9900','stroke-width':2,'stroke-linecap':'round'},q)},
 'Microsoft Azure':q=>{mk('path',{d:'M-12 9-2-9h6l-8 18z',fill:'#0078D4'},q);mk('path',{d:'M3-9l9 18H-1l5-4-3-3z',fill:'#50A0E8'},q)},
 'Alibaba Cloud':q=>{['M-4-7h-6v14h6','M4-7h6v14h-6','M-4 0h8'].forEach(d=>mk('path',{d,fill:'none',stroke:'#FF6A00','stroke-width':2.6,'stroke-linecap':'round','stroke-linejoin':'round'},q))}};
['Google Cloud','AWS','Microsoft Azure','Alibaba Cloud'].forEach(n=>{const g=mk('g',{class:'nd'},mc);mk('rect',{x:-82,y:-30,width:164,height:60,rx:30,fill:'var(--card)',stroke:'var(--line)'},g);
 LOGO[n](mk('g',{transform:'translate(-52 0)'},g));
 const t=mk('text',{x:-30,y:5,fill:'currentColor','font-size':13,'font-weight':600},g);
 if(n=='AWS'){t.setAttribute('y',-1);t.innerHTML='<tspan x="-30">Amazon</tspan><tspan x="-30" dy="14">Web Services</tspan>'}else t.textContent=n});
mk('circle',{cx:350,cy:270,r:46,fill:'var(--o)'},mc);mk('text',{x:350,y:275,'text-anchor':'middle',fill:'#fff','font-size':13,'font-weight':700},mc).textContent='CloudGarage';
/* scroll loop */
const scenes=$$('.scene'),nav=$('#nav');let tick=0;
function upd(){tick=0;const vh=innerHeight;nav.classList.toggle('sm',scrollY>40);scenes.forEach(s=>{const r=s.getBoundingClientRect();if(r.bottom<-50||r.top>vh+50)return;H[s.dataset.s](cl(-r.top/(s.offsetHeight-vh)))})}
const req=()=>tick||(tick=requestAnimationFrame(upd));addEventListener('scroll',req,{passive:true});addEventListener('resize',req);upd();
/* menu */
const mn=$('#menu'),bg=$('#bg');const tm=o=>{mn.classList.toggle('on',o);bg.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
bg.onclick=()=>tm(true);$('#mx').onclick=()=>tm(false);$$('#menu a').forEach(a=>a.onclick=()=>tm(false));addEventListener('keydown',e=>e.key=='Escape'&&tm(false));
/* pixel trail (cursor-pixel-trailing) */
if(FINE&&!RM)$$('.pxc').forEach(cv=>{const x=cv.getContext('2d'),S=38;let g={},on=0,W,Hh;const rs=()=>{const r=cv.getBoundingClientRect(),d=devicePixelRatio||1;W=cv.width=r.width*d;Hh=cv.height=r.height*d;x.setTransform(d,0,0,d,0,0)};rs();addEventListener('resize',rs);
 const lp=()=>{x.clearRect(0,0,W,Hh);let a=0;for(const k in g){g[k]-=.03;if(g[k]<=0){delete g[k];continue}a=1;const[i,j]=k.split(',');x.fillStyle=`rgba(150,128,22,${g[k]*.55})`;x.fillRect(i*S,j*S,S-3,S-3)}on=a?requestAnimationFrame(lp):0};
 addEventListener('mousemove',e=>{const r=cv.getBoundingClientRect();if(e.clientY<r.top||e.clientY>r.bottom)return;g[Math.floor((e.clientX-r.left)/S)+','+Math.floor((e.clientY-r.top)/S)]=1;if(!on)on=requestAnimationFrame(lp)},{passive:true})});
/* magnetic buttons + sticky cursor */
if(FINE&&!RM){$$('[data-mag]').forEach(b=>{const s=b.firstElementChild;b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2;b.style.transform=`translate(${dx*.3}px,${dy*.4}px)`;s.style.transform=`translate(${dx*.12}px,${dy*.18}px)`});b.addEventListener('mouseleave',()=>{b.style.transform='';s.style.transform=''})});
 const c=$('#cur');let mx=0,my=0,cx=0,cy=0,cw=18,ch=18,tg=null,run=0;
 const lp=()=>{let tx=mx,ty=my,tw=18,th=18;if(tg){const r=tg.getBoundingClientRect();tx=r.left+r.width/2+(mx-r.left-r.width/2)*.15;ty=r.top+r.height/2+(my-r.top-r.height/2)*.25;tw=r.width+14;th=r.height+8}
  cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;cw+=(tw-cw)*.2;ch+=(th-ch)*.2;c.style.width=cw+'px';c.style.height=ch+'px';c.style.transform=`translate(${cx-cw/2}px,${cy-ch/2}px)`;
  run=(Math.abs(tx-cx)+Math.abs(ty-cy)+Math.abs(tw-cw)>.4||tg)?requestAnimationFrame(lp):0};
 addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;c.style.opacity=1;if(!run)run=requestAnimationFrame(lp)},{passive:true});
 document.addEventListener('mouseover',e=>{const t=e.target.closest('[data-stick]');tg=t;c.classList.toggle('st',!!t);c.style.borderRadius=t?(t.classList.contains('srow')?'14px':'99px'):'50%'});
 document.addEventListener('mouseleave',()=>c.style.opacity=0)}
