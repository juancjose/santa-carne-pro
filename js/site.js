// Interacciones compartidas: header, menú móvil, reveal y año. Respeta prefers-reduced-motion.
(()=>{const d=document,h=d.querySelector('.hdr'),b=d.querySelector('.burger'),n=d.getElementById('nav');
const onS=()=>h&&h.classList.toggle('scrolled',scrollY>24);addEventListener('scroll',onS,{passive:true});onS();
if(b&&n){b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);d.body.classList.toggle('menu-open',!o)});
n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');d.body.classList.remove('menu-open')}));
d.addEventListener('keydown',e=>{if(e.key==='Escape'&&d.body.classList.contains('menu-open')){b.click();b.focus()}})}
const r=d.querySelectorAll('.rv');if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){r.forEach(e=>e.classList.add('in'))}
else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});r.forEach(e=>io.observe(e))}
d.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());})();

// Armador de pedido -> WhatsApp
(()=>{const WA='5491100000000',L=[],list=document.getElementById('order-list'),cnt=document.querySelectorAll('[data-count]'),send=document.getElementById('order-send'),live=document.getElementById('live');
const render=()=>{list.innerHTML=L.length?L.map((x,i)=>`<li><span>${x.n}</span><label class="sr" for="q${i}">Cantidad de ${x.n}</label><select id="q${i}" data-i="${i}">${['500 g','1 kg','1,5 kg','2 kg','3 kg','A consultar'].map(v=>`<option${v===x.q?' selected':''}>${v}</option>`).join('')}</select><button data-r="${i}" aria-label="Quitar ${x.n}">×</button></li>`).join(''):'<li class="empty">Todavía no agregaste cortes.</li>';
cnt.forEach(c=>c.textContent=L.length);const msg='Hola Santa Carne! Quiero hacer un pedido:%0A'+L.map(x=>`• ${encodeURIComponent(x.n)} — ${encodeURIComponent(x.q)}`).join('%0A');send.href='https://wa.me/'+WA+'?text='+(L.length?msg:'Hola%20Santa%20Carne!%20Quiero%20consultar%20por%20cortes.');};
document.querySelectorAll('.add').forEach(b=>b.addEventListener('click',()=>{const n=b.dataset.name;if(!L.find(x=>x.n===n)){L.push({n,q:'1 kg'});b.classList.add('on');b.lastChild.textContent=' En el pedido';live.textContent=n+' agregado al pedido';render();document.querySelector('.fab').animate([{transform:'scale(1)'},{transform:'scale(1.15)'},{transform:'scale(1)'}],{duration:350})}}));
list.addEventListener('change',e=>{if(e.target.dataset.i)L[e.target.dataset.i].q=e.target.value;render()});
list.addEventListener('click',e=>{const i=e.target.dataset.r;if(i!==undefined){const n=L[i].n;L.splice(i,1);const b=document.querySelector(`.add[data-name="${n}"]`);b.classList.remove('on');b.lastChild.textContent=' Agregar al pedido';render()}});
document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{document.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===c));const f=c.dataset.f;document.querySelectorAll('.cut').forEach(el=>el.hidden=!(f==='all'||el.dataset.cat===f))}));render();})();
