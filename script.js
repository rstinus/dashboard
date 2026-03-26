document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('cyberRain');
    const ctx = canvas.getContext('2d');

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const alphabet = '01{}[];=>/|!#$@%&abcdef0123456789';
    const characters = alphabet.split('');

    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);

    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -canvas.height; 
    }

    function draw() {
        ctx.fillStyle = 'rgba(15, 32, 75, 0.16)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff88';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            drops[i]++;

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
        }
    }

    setInterval(draw, 33);
});