const params=new URLSearchParams(location.search);
const business=params.get('empresa')||params.get('name')||'nosso estabelecimento';
const reviewUrl=params.get('google')||params.get('url')||'';
document.title='SmartReview | '+business;
document.getElementById('headline').innerHTML='Sua experiência<br>faz a diferença.';
document.getElementById('intro').textContent='Conte como foi sua experiência com '+business+'. Sua opinião é importante.';
document.getElementById('footerName').textContent=business;
const stars=[...document.querySelectorAll('.star')], label=document.getElementById('ratingLabel'), submit=document.getElementById('submitBtn');
const form=document.getElementById('feedbackForm');let rating=0;
const labels=['','Muito ruim','Ruim','Regular','Boa','Excelente'];
function paint(value){stars.forEach(s=>{const active=Number(s.dataset.value)<=value;s.classList.toggle('active',active);s.setAttribute('aria-checked',Number(s.dataset.value)===value?'true':'false')});label.textContent=value?labels[value]:'Selecione uma nota';}
stars.forEach(s=>{s.addEventListener('click',()=>{rating=Number(s.dataset.value);paint(rating);submit.disabled=false});s.addEventListener('mouseenter',()=>stars.forEach(x=>x.classList.toggle('hover',Number(x.dataset.value)<=Number(s.dataset.value))));s.addEventListener('mouseleave',()=>stars.forEach(x=>x.classList.remove('hover')));s.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const next=Math.min(5,Math.max(1,Number(s.dataset.value)+(e.key==='ArrowRight'?1:-1)));stars[next-1].focus();stars[next-1].click()}})});
const comment=document.getElementById('comment');comment.addEventListener('input',()=>document.getElementById('count').textContent=comment.value.length);
form.addEventListener('submit',e=>{e.preventDefault();if(!rating)return;document.getElementById('reviewCard').classList.add('hidden');document.getElementById('successCard').classList.remove('hidden');const link=document.getElementById('googleLink');if(reviewUrl){link.href=reviewUrl;link.classList.remove('hidden')}else{link.href='https://www.google.com/search?q='+encodeURIComponent(business);link.textContent='Encontrar no Google ↗';}});
document.getElementById('backBtn').addEventListener('click',()=>{document.getElementById('successCard').classList.add('hidden');document.getElementById('reviewCard').classList.remove('hidden')});
