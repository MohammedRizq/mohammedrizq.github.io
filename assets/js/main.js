(function(){
  var supported=['en','ar','es','fr','id','tr','pt'];
  var playStoreUrl='https://play.google.com/store/apps/details?id=com.mrizq.echo_path';
  function lang(){
    var saved=localStorage.getItem('echoGateLanguage');
    if(supported.indexOf(saved)>-1)return saved;
    var list=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'en'];
    for(var i=0;i<list.length;i++){var c=String(list[i]).slice(0,2).toLowerCase();if(supported.indexOf(c)>-1)return c;}
    return 'en';
  }
  function applyLang(l){
    var t=(window.ECHO_TRANSLATIONS&&window.ECHO_TRANSLATIONS[l])||window.ECHO_TRANSLATIONS.en;
    document.documentElement.lang=l; document.documentElement.dir=l==='ar'?'rtl':'ltr';
    document.querySelectorAll('[data-t]').forEach(function(el){var k=el.getAttribute('data-t'); if(t[k]) el.textContent=t[k];});
    var s=document.getElementById('languageSelect'); if(s)s.value=l;
  }
  function theme(){return localStorage.getItem('echoGateTheme')||((window.matchMedia&&matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark');}
  function applyTheme(th){document.documentElement.setAttribute('data-theme',th);var b=document.getElementById('themeToggle'); if(b)b.textContent=th==='dark'?'☾':'☀';}
  document.addEventListener('DOMContentLoaded',function(){
    applyTheme(theme()); applyLang(lang());
    document.querySelectorAll('a[href="https://play.google.com/store/apps"]').forEach(function(a){a.href=playStoreUrl;});
    var y=document.getElementById('year'); if(y)y.textContent=new Date().getFullYear();
    var s=document.getElementById('languageSelect'); if(s)s.addEventListener('change',function(){localStorage.setItem('echoGateLanguage',s.value); location.reload();});
    var b=document.getElementById('themeToggle'); if(b)b.addEventListener('click',function(){var n=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';localStorage.setItem('echoGateTheme',n);applyTheme(n);});
    var v=document.getElementById('loadVideo'), box=document.getElementById('videoBox'); if(v&&box)v.addEventListener('click',function(){box.innerHTML='<iframe src="https://www.youtube.com/embed/WQzhi43B-gw?autoplay=1" title="Echo Gate trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';});
  });
})();
