// Homepage package cards; all booking CTAs open the dedicated multi-step booking page.
const PACKAGES = {
  '1 BHK': { base: 4000, wallMin: 5500, wallMax: 6000 },
  '2 BHK': { base: 4500, wallMin: 7500, wallMax: 7500 },
  '3 BHK': { base: 6000, wallMin: 9000, wallMax: 9000 },
  '4 BHK': { base: 8000, wallMin: 12000, wallMax: 12000 }
};
const inr = n => '₹' + n.toLocaleString('en-IN');
const priceGrid = document.getElementById('priceGrid');
if (priceGrid) Object.entries(PACKAGES).forEach(([bhk,p],i)=>{
  const card=document.createElement('article'); card.className='price-card'+(i===1?' popular':'');
  card.innerHTML=`${i===1?'<span class="tag">POPULAR CHOICE · पसंदीदा</span>':''}<small>FULL HOME CLEANING / पूरे घर की सफाई</small><h3>${bhk}</h3><div class="price">${inr(p.base)}</div><p class="price-note">Without wall cleaning · दीवार की सफाई के बिना</p><div class="wallprice">With wall cleaning / दीवारों के साथ <b>${p.wallMin===p.wallMax?inr(p.wallMin):inr(p.wallMin)+'–'+inr(p.wallMax)}</b></div><a class="btn btn-ghost" href="booking.html">Choose ${bhk} / चुनें ↗</a>`;
  priceGrid.appendChild(card);
});
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const menu=document.getElementById('menuBtn');if(menu)menu.addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav')?.classList.remove('open')));
