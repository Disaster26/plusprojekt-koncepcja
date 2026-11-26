(function(){
  // menu mobilne
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  if(b&&n){
    b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu');});
    n.addEventListener('click',function(e){if(e.target.closest('a')){n.classList.remove('open');b.setAttribute('aria-expanded',false);}});
  }
  // slider realizacji: strzalki + przeciaganie mysza
  var s=document.querySelector('.slider');
  if(s){
    var krok=function(){var c=s.querySelector('.rcard');return c?c.getBoundingClientRect().width+20:400;};
    var p=document.querySelector('.sl-prev'),x=document.querySelector('.sl-next');
    if(p)p.addEventListener('click',function(){s.scrollBy({left:-krok(),behavior:'smooth'});});
    if(x)x.addEventListener('click',function(){s.scrollBy({left:krok(),behavior:'smooth'});});
    var d=false,sx=0,sl=0,ruch=0;
    s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;d=true;ruch=0;sx=e.clientX;sl=s.scrollLeft;});
    window.addEventListener('pointermove',function(e){if(!d)return;var dx=e.clientX-sx;ruch=Math.abs(dx);if(ruch>4)s.classList.add('drag');s.scrollLeft=sl-dx;});
    window.addEventListener('pointerup',function(){if(!d)return;d=false;s.classList.remove('drag');});
  }
  // filtr realizacji
  var f=document.querySelectorAll('.fch');
  f.forEach(function(btn){btn.addEventListener('click',function(){
    f.forEach(function(z){z.classList.toggle('on',z===btn);});
    var k=btn.dataset.f;
    document.querySelectorAll('#rlista .rrow').forEach(function(r){r.hidden=!(k==='*'||(' '+r.dataset.sys+' ').indexOf(' '+k+' ')>-1);});
  });});
  // formularz pokazowy
  var fm=document.getElementById('form');
  if(fm)fm.addEventListener('submit',function(e){e.preventDefault();fm.querySelector('.fmsg').hidden=false;});
})();
