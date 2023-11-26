let selectedDiv = null;
let rotateAngle = 0;

document.addEventListener("DOMContentLoaded", () => {
    const posX = document.getElementById('posX');
    const posY = document.getElementById('posY');
    const width = document.getElementById('width');
    const height = document.getElementById('height');
    const rotation = document.getElementById('rotation');
    const color = document.getElementById('color');

    posX.addEventListener('change', (e) => { if(selectedDiv) selectedDiv.style.left = e.target.value + "px"; });
    posY.addEventListener('change', (e) => { if(selectedDiv) selectedDiv.style.top = e.target.value + "px"; });
    width.addEventListener('change', (e) => { if(selectedDiv) selectedDiv.style.width = e.target.value + "px"; });
    height.addEventListener('change', (e) => { if(selectedDiv) selectedDiv.style.height = e.target.value + "px"; });
    rotation.addEventListener('change', (e) => { if(selectedDiv) selectedDiv.style.transform = `rotate(${e.target.value}deg)`; });
    color.addEventListener('change', (e) => { if(selectedDiv) selectedDiv.style.backgroundColor = e.target.value; });
});

function createDiv() {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.background = 'grey';
    div.style.position = 'absolute';
    div.style.left = '50%';
    div.style.top = '50%';

    div.onclick = function() {
        if (selectedDiv) {
            selectedDiv.style.outline = '';
        }
        selectedDiv = div;
        selectedDiv.style.outline = '2px solid red';
        updateControls();
    };

    document.querySelector('.workspace').appendChild(div);
}

function updateControls() {
    const posX = document.getElementById('posX');
    const posY = document.getElementById('posY');
    const width = document.getElementById('width');
    const height = document.getElementById('height');
    const rotation = document.getElementById('rotation');
    const color = document.getElementById('color');

    posX.value = parseInt(selectedDiv.style.left || 0);
    posY.value = parseInt(selectedDiv.style.top || 0);
    width.value = parseInt(selectedDiv.style.width || 100);
    height.value = parseInt(selectedDiv.style.height || 100);
    rotation.value = rotateAngle;
    color.value = selectedDiv.style.backgroundColor || 'grey';
}

function exportHTML() {
    const htmlContent = document.querySelector('.workspace').innerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'exported.html';
    a.click();
}
