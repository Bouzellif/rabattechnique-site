// Language toggle and simple form demo (non-functional sending)
(function(){
  const langBtn = document.getElementById('langBtn');
  let lang = localStorage.getItem('rt_lang') || 'ar'; // 'ar' or 'fr'

  function setLang(l){
    lang = l;
    localStorage.setItem('rt_lang', l);
    // show/hide translations
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const isAr = el.getAttribute('data-i18n').endsWith('_ar');
      const isFr = el.getAttribute('data-i18n').endsWith('_fr');
      // fallback: many elements used text nodes rather than attributes; we'll toggle by class 'hidden' applied in HTML
    });
    // simple toggle by showing/hiding elements with .hidden class that correspond to French/Arabic headings:
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      // elements with both AR and FR are present — they were given _ar or _fr tokens in HTML as attributes
      // We'll simply toggle visibility by checking presence of Arabic text nodes (containing Arabic letters) — simpler approach:
    });
    // toggle all FR headings/elements: those that have class 'hidden' by default are FR; we find and swap based on lang
    if(lang === 'fr'){
      document.querySelectorAll('.hidden').forEach(el=>el.style.display='block');
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n') || '';
        if(key.endsWith('_ar')) el.style.display='none';
      });
      langBtn.textContent = 'AR';
      document.documentElement.lang = 'fr';
      document.documentElement.dir = 'ltr';
    } else {
      document.querySelectorAll('.hidden').forEach(el=>el.style.display='none');
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n') || '';
        if(key.endsWith('_ar')) el.style.display='block';
      });
      langBtn.textContent = 'FR';
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    }
  }

  langBtn.addEventListener('click', ()=>{
    setLang(lang === 'ar' ? 'fr' : 'ar');
  });

  // Initialize visibility
  setLang(lang);

  // Booking form: non-functional (stores locally for demo)
  window.submitBooking = function(e){
    e.preventDefault();
    const form = document.getElementById('bookingForm');
    const data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      device: form.device.value,
      problem: form.problem.value.trim(),
      createdAt: new Date().toISOString()
    };
    // Save in localStorage as demo only
    const store = JSON.parse(localStorage.getItem('rt_bookings') || '[]');
    store.push(data);
    localStorage.setItem('rt_bookings', JSON.stringify(store));
    alert('تم حفظ الطلب محليًا (عرض تجريبي). / Enregistrement local (démo).');
    form.reset();
    console.log('Booking (demo):', data);
  };
})();
