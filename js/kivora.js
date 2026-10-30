/* Kivora UI 2.0 — zero-dependency behaviors. Auto-inits on DOMContentLoaded. */
const KV=(()=>{const $=(s,r=document)=>[...r.querySelectorAll(s)];
function theme(t){const h=document.documentElement;t=t||(h.dataset.theme==='dark'?'light':'dark');h.dataset.theme=t;try{localStorage.setItem('kv-theme',t)}catch(e){}}
function toast(msg,color){let b=$('.kv-toasts')[0];if(!b){b=Object.assign(document.createElement('div'),{className:'kv-toasts'});b.setAttribute('role','status');document.body.append(b)}
 const t=Object.assign(document.createElement('div'),{className:'kv-toast',textContent:msg});if(color)t.style.setProperty('--c',`var(--${color})`);b.append(t);setTimeout(()=>t.remove(),3500)}
function tabs(root){const L=$('[role=tab]',root),P=$('[role=tabpanel]',root);const pick=i=>{L.forEach((t,j)=>{t.setAttribute('aria-selected',i===j);t.tabIndex=i===j?0:-1;P[j].hidden=i!==j})};
 L.forEach((t,i)=>{t.onclick=()=>pick(i);t.onkeydown=e=>{const n=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(n){const k=(i+n+L.length)%L.length;pick(k);L[k].focus()}}});pick(0)}
function count(el){const to=+el.dataset.count,suf=el.dataset.suffix||'',pre=el.dataset.prefix||'';let s=null;const f=ts=>{s=s||ts;const p=Math.min((ts-s)/1200,1);el.textContent=pre+Math.round(to*(1-Math.pow(1-p,3))).toLocaleString()+suf;if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}
function init(){try{const t=localStorage.getItem('kv-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}
 $('.kv-nav .kv-nav-toggle').forEach(b=>b.onclick=()=>{const n=b.closest('.kv-nav');b.setAttribute('aria-expanded',n.classList.toggle('open'))});$('[data-kv-theme]').forEach(b=>b.onclick=()=>theme());
 $('[data-kv-tabs]').forEach(tabs);
 $('[data-kv-open]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.rcOpen).showModal());
 $('[data-kv-close]').forEach(b=>b.onclick=()=>b.closest('dialog').close());
 $('dialog.kv-modal').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
 $('[data-kv-toast]').forEach(b=>b.onclick=()=>toast(b.dataset.rcToast,b.dataset.rcColor));
 $('[data-kv-copy]').forEach(b=>b.onclick=()=>navigator.clipboard.writeText(b.dataset.rcCopy).then(()=>toast('Copied')));
 $('details.kv-acc[data-group]').forEach(d=>d.ontoggle=()=>{if(d.open)$(`details[data-group="${d.dataset.group}"]`).forEach(o=>o!==d&&(o.open=false))});
 const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');$('[data-count]',e.target).concat(e.target.dataset.count?[e.target]:[]).forEach(count);$('.kv-progress>i',e.target).forEach(i=>i.style.width=i.dataset.v);io.unobserve(e.target)}),{threshold:.2}):null;
 $('.kv-reveal').forEach(el=>io?io.observe(el):el.classList.add('in'));
 $('[data-count]').forEach(el=>{if(!el.closest('.kv-reveal'))io?io.observe(el):count(el)});
 $('.kv-progress>i').forEach(i=>{i.dataset.v=i.style.getPropertyValue('--v')||'50%'});
 const deck=$('.kv-deck')[0];if(deck)document.addEventListener('keydown',e=>{const k={ArrowDown:1,PageDown:1,' ':1,ArrowUp:-1,PageUp:-1}[e.key];if(k){e.preventDefault();deck.scrollBy({top:k*deck.clientHeight,behavior:'smooth'})}})}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
const apps={};const mount=()=>$('[data-kv-app]').forEach(el=>apps[el.dataset.rcApp]&&apps[el.dataset.rcApp](el));
return{theme,toast,tabs,count,init,apps,mount}})();
/* ===== 1.1 additions: carousel, dropdown, charts, typewriter ===== */
(()=>{const $=(s,r=document)=>[...r.querySelectorAll(s)],N='http://www.w3.org/2000/svg',COL=['--yellow','--orange','--red','--blue','--mint','--cyan'];
const el=(t,a,p)=>{const e=document.createElementNS(N,t);for(const k in a)e.setAttribute(k,a[k]);p&&p.append(e);return e};
function chart(h){const v=h.dataset.values.split(',').map(Number),l=(h.dataset.labels||'').split(','),t=h.dataset.chart,W=400,H=240,m=30,mx=Math.max(...v)||1;
 const s=el('svg',{viewBox:`0 0 ${W} ${H}`,class:'kv-chart',role:'img','aria-label':h.dataset.title||t+' chart'});
 if(t==='bar'){const bw=(W-2*m)/v.length;v.forEach((x,i)=>{const bh=(H-2*m)*x/mx;const r=el('rect',{x:m+i*bw+bw*.15,y:H-m-bh,width:bw*.7,height:bh,rx:6,fill:`var(${COL[i%6]})`,class:'bar'},s);r.style.animationDelay=i*.1+'s';el('text',{x:m+i*bw+bw/2,y:H-10,'text-anchor':'middle'},s).textContent=l[i]||''})}
 if(t==='line'){const st=(W-2*m)/(v.length-1),pt=v.map((x,i)=>[m+i*st,H-m-(H-2*m)*x/mx]),d='M'+pt.map(p=>p.join(',')).join('L'),p=el('path',{d,fill:'none',stroke:'var(--blue)','stroke-width':4,'stroke-linecap':'round',class:'ln'},s);p.style.setProperty('--len',Math.ceil(p.getTotalLength?p.getTotalLength():1000)+10);pt.forEach((q,i)=>{el('circle',{cx:q[0],cy:q[1],r:5,fill:'var(--yellow)'},s);el('text',{x:q[0],y:H-10,'text-anchor':'middle'},s).textContent=l[i]||''})}
 if(t==='donut'){const R=80,C=2*Math.PI*R,sum=v.reduce((a,b)=>a+b,0);let off=0;v.forEach((x,i)=>{const a=C*x/sum,c=el('circle',{cx:W/2,cy:H/2,r:R,fill:'none',stroke:`var(${COL[i%6]})`,'stroke-width':36,class:'arc',transform:`rotate(${-90+off/C*360} ${W/2} ${H/2})`},s);c.style.setProperty('--a',a-2);c.style.setProperty('--len',C);c.style.animationDelay=i*.2+'s';off+=a})}
 h.replaceChildren(s)}
function carousel(c){const tr=$('.kv-track',c)[0],n=tr.children.length,nav=c.nextElementSibling;let i=0,tm;const go=k=>{i=(k+n)%n;tr.style.transform=`translateX(-${i*100}%)`;$('button',nav).forEach((b,j)=>b.classList.toggle('on',j===i))};
 nav.replaceChildren(...[...Array(n)].map((_,k)=>Object.assign(document.createElement('button'),{ariaLabel:'Slide '+(k+1),onclick:()=>{go(k);reset()}})));const reset=()=>{clearInterval(tm);if(c.dataset.auto&&!matchMedia('(prefers-reduced-motion:reduce)').matches)tm=setInterval(()=>go(i+1),+c.dataset.auto)};go(0);reset()}
function type(e){const t=e.textContent;e.textContent='';let i=0;const f=()=>{e.textContent=t.slice(0,++i);if(i<t.length)setTimeout(f,60)};f()}
function start(){$('[data-chart]').forEach(h=>{const io=new IntersectionObserver(es=>es[0].isIntersecting&&(chart(h),io.disconnect()));io.observe(h)});$('.kv-carousel').forEach(carousel);$('.kv-type').forEach(type);
 $('.kv-dd>button').forEach(b=>b.onclick=e=>{e.stopPropagation();b.parentNode.classList.toggle('open')});document.addEventListener('click',()=>$('.kv-dd.open').forEach(d=>d.classList.remove('open')));
 $('.kv-marquee>div').forEach(d=>{if(!d.dataset.mq){d.dataset.mq='1';d.innerHTML+=d.innerHTML}})}
KV.start=start;document.readyState==='loading'?document.addEventListener('DOMContentLoaded',start):start()})();

/* ===== 1.2 Object-oriented UI builder =====
   new UI.reg.Card({title:'Hi'}).mount('#app')   |   UI.create({type:'Card',props:{...},children:[...]}) */
const UI=(()=>{
const add=(e,k)=>{for(const c of k.flat(9)){if(c==null||c===false)continue;e.append(c instanceof Component?c.render():c instanceof Node?c:document.createTextNode(c))}};
const h=(tag,a,...k)=>{const e=document.createElement(tag);for(const[n,v]of Object.entries(a||{})){if(v==null||v===false)continue;
 if(n==='class')e.className=v;else if(n==='style'&&typeof v==='object')Object.assign(e.style,v);else if(n==='data'){for(const d in v)if(v[d]!=null)e.dataset[d]=v[d]}
 else if(n.startsWith('on')&&typeof v==='function')e.addEventListener(n.slice(2).toLowerCase(),v);else e.setAttribute(n,v===true?'':v)}add(e,k);return e};
class Component{constructor(p,...k){this.p=p||{};this.kids=k;this.el=null}
 add(...k){this.kids.push(...k);return this}
 build(){return h('div',{},this.kids)}
 render(){return this.el=this.build()}
 mount(t){(typeof t==='string'?document.querySelector(t):t).append(this.render());KV.init();KV.start();return this}
 set(p){Object.assign(this.p,p);if(this.el){const o=this.el;o.replaceWith(this.render());KV.init();KV.start()}return this}}
const col=c=>c?' c-'+c:'';
class Btn extends Component{build(){const{label,variant,size,href,onClick}=this.p;return h(href?'a':'button',{class:'kv-btn'+(variant?' kv-btn-'+variant:'')+(size?' kv-btn-'+size:''),href,onClick},label,this.kids)}}
class Badge extends Component{build(){return h('span',{class:'kv-badge'+col(this.p.color)},this.p.label,this.kids)}}
class Alert extends Component{build(){return h('div',{class:'kv-alert'+col(this.p.color||'cyan'),role:'alert'},this.p.text,this.kids)}}
class Navbar extends Component{build(){const{brand='Brand',links=[],cta,theme=true}=this.p;const nav=h('header',{class:'kv-nav'});
 const burger=h('button',{class:'kv-burger','aria-label':'Toggle menu','aria-expanded':'false',onClick:()=>burger.setAttribute('aria-expanded',nav.classList.toggle('open'))},'☰');
 nav.append(h('div',{class:'kv-container'},h('a',{class:'kv-logo',href:'#/home',style:{textDecoration:'none',color:'inherit'}},brand),
  h('nav',{onClick:e=>e.target.closest('a')&&nav.classList.remove('open')},links.map(l=>h('a',{href:l.href||'#'},l.label))),
  h('div',{class:'kv-row'},theme&&h('button',{class:'kv-btn kv-btn-sm kv-btn-outline',onClick:()=>KV.theme()},'Theme'),cta&&new Btn({size:'sm',...cta}),burger)));return nav}}
class Hero extends Component{build(){const{eyebrow,title,text,actions=[]}=this.p;return h('section',{class:'kv-hero kv-orbs'},h('div',{class:'kv-container kv-stack'},eyebrow&&h('span',{class:'kv-eyebrow'},eyebrow),h('h1',{},title),text&&h('p',{},text),h('div',{class:'kv-row'},actions.map(a=>new Btn({size:'lg',...a}))),this.kids))}}
class Section extends Component{build(){const{id,title,eyebrow,dark,center}=this.p;return h('section',{id,class:'kv-section'+(dark?' kv-dark':'')},h('div',{class:'kv-container kv-stack'},eyebrow&&h('span',{class:'kv-eyebrow'},eyebrow),title&&h('h2',{class:center?'kv-center':''},title),this.kids))}}
class Grid extends Component{build(){const c=this.p.cols;return h('div',{class:'kv-grid'+(c?' kv-grid-'+c:'')},this.kids)}}
class Card extends Component{build(){const{title,text,ring,color}=this.p;return h('div',{class:'kv-card kv-card-hover kv-reveal'+col(color)},ring&&h('span',{class:'kv-ring'},ring),title&&h('h3',{style:{marginTop:'16px'}},title),text&&h('p',{class:'kv-muted'},text),this.kids)}}
class Stat extends Component{build(){const{value,label,color,prefix,suffix}=this.p;return h('div',{class:'kv-card kv-stat'+col(color)},h('b',{data:{count:value,prefix,suffix}},'0'),label)}}
class Chart extends Component{build(){const{type='bar',values=[],labels=[],title}=this.p;return h('div',{data:{chart:type,values:values.join(','),labels:labels.join(','),title}})}}
class Table extends Component{build(){const{head=[],rows=[]}=this.p;return h('div',{style:{overflowX:'auto'}},h('table',{class:'kv-table'},h('tr',{},head.map(c=>h('th',{},c))),rows.map(r=>h('tr',{},r.map(c=>h('td',{},c))))))}}
class Tabs extends Component{build(){const t=this.p.tabs||[];return h('div',{data:{rcTabs:''}},h('div',{class:'kv-tablist',role:'tablist'},t.map(x=>h('button',{class:'kv-tab',role:'tab'},x.label))),t.map(x=>h('div',{class:'kv-tabpanel',role:'tabpanel'},x.content)))}}
class Accordion extends Component{build(){const g='g'+Math.random().toString(36).slice(2,6);return h('div',{},(this.p.items||[]).map((x,i)=>h('details',{class:'kv-acc',open:i===0,data:{group:g}},h('summary',{},x.title),h('p',{},x.content))))}}
class Modal extends Component{build(){const d=h('dialog',{class:'kv-modal'},h('h3',{},this.p.title),h('div',{class:'kv-stack'},this.kids),h('p',{},new Btn({label:'Close',size:'sm',onClick:()=>d.close()})));d.addEventListener('click',e=>e.target===d&&d.close());return d}
 open(){this.el.showModal();return this}close(){this.el.close();return this}}
class Carousel extends Component{build(){return h('div',{},h('div',{class:'kv-carousel',data:{auto:this.p.auto}},h('div',{class:'kv-track'},(this.p.slides||[]).map(s=>h('div',{},s)))),h('div',{class:'kv-car-nav'}))}}
class Pricing extends Component{build(){return h('div',{class:'kv-grid kv-grid-3'},(this.p.plans||[]).map(x=>h('div',{class:'kv-card kv-price'+(x.featured?' kv-feat':'')},h('h3',{},x.name),h('b',{},x.price),h('p',{class:'kv-muted'},x.note),new Btn({label:x.cta||'Choose',variant:x.featured?'':'outline',href:x.href}))))}}
class Timeline extends Component{build(){return h('div',{class:'kv-timeline'},(this.p.steps||[]).map(s=>h('div',{class:col(s.color).trim()},h('h4',{},s.title),h('span',{class:'kv-marker'}),h('p',{},s.text),h('time',{},s.date),h('hr',{class:'kv-rule'}))))}}
class Dropdown extends Component{build(){return h('div',{class:'kv-dd'},h('button',{class:'kv-btn kv-btn-outline'},(this.p.label||'Menu')+' ▾'),h('div',{class:'kv-dd-menu'},(this.p.items||[]).map(i=>h('a',{href:i.href||'#'},i.label))))}}
class Footer extends Component{build(){return h('footer',{class:'kv-footer'},h('div',{class:'kv-container kv-row kv-between'},h('span',{},this.p.text||'© Brand'),this.kids))}}
class Page extends Component{}
const UI={h,Component,reg:{Btn,Badge,Alert,Navbar,Hero,Section,Grid,Card,Stat,Chart,Table,Tabs,Accordion,Modal,Carousel,Pricing,Timeline,Dropdown,Footer,Page},
 register(o){Object.assign(this.reg,o);return this},
 create(s){if(typeof s==='string')return s;const C=this.reg[s.type];if(!C)throw new Error('Unknown component: '+s.type);return new C(s.props,...(s.children||[]).map(c=>this.create(c)))}};
return UI})();

// Expose the library on window so other windows can reach it (e.g. the
// builder's preview iframe): top-level const does not create a window
// property, so frame.contentWindow.UI would otherwise be undefined and the
// builder preview would stay blank.
window.UI = UI;
window.KV = KV;
