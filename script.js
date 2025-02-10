const canvas = document.getElementById('functionGraph');
const ctx = canvas.getContext('2d');

// Function to plot
function f(x) {
    return x * x + 3 * x + 2;
}

// Graph settings
const scale = 20; // Pixels per unit
const originX = canvas.width / 2;
const originY = canvas.height / 2;

// Draw axes
ctx.strokeStyle = '#555';
ctx.beginPath();
ctx.moveTo(0, originY);
ctx.lineTo(canvas.width, originY);
ctx.moveTo(originX, 0);
ctx.lineTo(originX, canvas.height);
ctx.stroke();

// Draw grid
ctx.strokeStyle = '#333';
for (let i = 0; i <= canvas.width; i += scale) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
}

// Draw function
ctx.strokeStyle = '#ff6347';
ctx.beginPath();
for (let x = -10; x <= 10; x += 0.1) {
    const y = f(x);
    const plotX = originX + x * scale;
    const plotY = originY - y * scale;
    if (x === -10) {
        ctx.moveTo(plotX, plotY);
    } else {
        ctx.lineTo(plotX, plotY);
    }
}
ctx.stroke();
