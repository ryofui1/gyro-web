const canvas = document.getElementById('c');
const context = canvas.getContext('2d');
const debugElement = document.getElementById('debug');
const button = document.getElementById('btn');

function resize() {
    const dpr = window.devicePixelRatio ?? 1;
    canvas.width = Math.floor(innerWidth * dpr);
    canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
}

window.addEventListener('resize', resize);

window.addEventListener('DOMContentLoaded', () => {
    resize();
});
