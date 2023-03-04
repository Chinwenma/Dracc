const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const x = e.clientX - this.offsetLeft;
        const y = e.clientY - this.offsetTop;
        const ripples = document.createElement('span');
        ripples.className = `left-[${x}px] top-[${y}px]` + ' absolute bg-white -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple';
        this.appendChild(ripples);
        setTimeout(() => ripples.remove(), 1000);
    })
})