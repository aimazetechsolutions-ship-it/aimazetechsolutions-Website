/* AimAze lead form: sends to FormSubmit + stores local backup.
   IMPORTANT: FormSubmit requires one-time email activation from info@aimazetechsolutions.com.
   After activation, every website inquiry is emailed to info@aimazetechsolutions.com. */
(function(){
  const EMAIL_ENDPOINT='https://formsubmit.co/ajax/info@aimazetechsolutions.com';
  function storeLocal(key,obj){try{const arr=JSON.parse(localStorage.getItem(key)||'[]');arr.unshift(obj);localStorage.setItem(key,JSON.stringify(arr.slice(0,500)));}catch(e){}}
  function formToObject(form){const o={}; new FormData(form).forEach((v,k)=>{ o[k]=String(v).trim(); }); o.source='AimAze Website'; o.page=location.href; o.submitted_at=new Date().toISOString(); return o;}
  function mailtoFallback(lead){
    const subject=encodeURIComponent('New Website Inquiry - AimAze Tech Solutions');
    const body=encodeURIComponent(`Name: ${lead.name||''}\nEmail: ${lead.email||''}\nPhone/WhatsApp: ${lead.phone||''}\nCompany: ${lead.company||''}\nService: ${lead.service||''}\n\nRequirement:\n${lead.message||''}`);
    return `mailto:info@aimazetechsolutions.com?subject=${subject}&body=${body}`;
  }
  document.addEventListener('DOMContentLoaded',function(){
    const form=document.getElementById('contact-form');
    const status=document.getElementById('form-status');
    const submit=document.getElementById('submit-btn');
    if(!form) return;
    form.addEventListener('submit',async function(e){
      e.preventDefault();
      const lead=formToObject(form);
      storeLocal('aimaze_leads',lead);
      if(window.aimazeTrackEvent) window.aimazeTrackEvent('lead_form_submit', lead.service||'General');
      if(status){status.style.display='block';status.style.color='#27c7d7';status.textContent='Sending your inquiry to info@aimazetechsolutions.com...';}
      if(submit){submit.disabled=true; submit.textContent='Sending...';}
      try{
        const fd=new FormData(form);
        fd.set('_subject','New Website Inquiry - AimAze Tech Solutions');
        fd.set('_template','table');
        fd.set('_captcha','false');
        const res=await fetch(EMAIL_ENDPOINT,{method:'POST',body:fd,headers:{'Accept':'application/json'}});
        if(res.ok){
          if(status){status.style.color='#16a34a';status.textContent='✅ Inquiry sent successfully. We will contact you shortly.';}
          form.reset();
          setTimeout(()=>{ window.location.href='thank-you.html'; }, 900);
          return;
        }
        throw new Error('FormSubmit response was not successful');
      }catch(err){
        if(status){
          status.style.color='#f59e0b';
          status.innerHTML='Email service needs one-time activation. Opening your email app as backup...';
        }
        window.location.href=mailtoFallback(lead);
      }finally{
        if(submit){submit.disabled=false; submit.textContent='Send Inquiry →';}
      }
    });
  });
})();
