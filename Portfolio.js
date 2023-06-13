
const observer=new IntersectionObserver((entries)=>{
    for(let a=0;a<entries.length;a++)
    {
        const entry=entries[a];
        console.log(entry);
        if(entry.isIntersecting)
        entry.target.classList.add('show');
        else
        entry.target.classList.remove('show');
    }
})
const HiddenElemt=document.querySelectorAll('.hidden');
HiddenElemt.forEach((el)=>observer.observe(el));