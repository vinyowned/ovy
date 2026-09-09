const button=document.getElementById('motion');
const label=button.querySelector('span');
const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
let paused=preference.matches;
function update(){document.body.classList.toggle('paused',paused);button.setAttribute('aria-pressed',String(paused));label.textContent=paused?'Ativar movimento':'Pausar movimento';button.querySelector('svg').innerHTML=paused?'<path d="m7 4 8 6-8 6V4Z" fill="currentColor"/>':'<path d="M7 5v10M13 5v10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';}
button.addEventListener('click',()=>{paused=!paused;document.body.classList.toggle('motion-enabled',!paused);update();});
preference.addEventListener('change',e=>{paused=e.matches;document.body.classList.remove('motion-enabled');update();});update();
