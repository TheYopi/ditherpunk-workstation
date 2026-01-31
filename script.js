// --- CONSTANTS (Top Level) ---
const bayer4 = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
const bayer2 = [0, 2, 3, 1];
const bayer8 = [
    0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26,
    12, 44, 4, 36, 14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54, 22,
    3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25,
    15, 47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29, 53, 21
];
const cluster4 = [12, 5, 6, 13, 4, 0, 1, 7, 11, 3, 2, 8, 15, 10, 9, 14]; 
const linesH = [0, 0, 0, 0, 8, 8, 8, 8, 16, 16, 16, 16, 8, 8, 8, 8]; 
const linesV = [0, 8, 16, 8, 0, 8, 16, 8, 0, 8, 16, 8, 0, 8, 16, 8]; 
const halftone4 = [12, 5, 6, 13, 4, 0, 1, 7, 11, 3, 2, 8, 15, 10, 9, 14];
const halftone8 = [
    62, 57, 48, 36, 37, 49, 58, 63,
    56, 47, 35, 21, 22, 38, 50, 59,
    46, 34, 20, 10, 11, 23, 39, 51,
    33, 19,  9,  3,  0,  4, 12, 24,
    32, 18,  8,  2,  1,  5, 13, 25,
    45, 31, 17,  7,  6, 14, 26, 40,
    55, 44, 30, 16, 15, 27, 41, 52,
    61, 54, 43, 29, 28, 42, 53, 60
];

const round8 = [
    28, 14, 10, 12, 24, 40, 50, 46,
    20, 4, 0, 6, 18, 36, 60, 54,
    22, 8, 2, 16, 32, 56, 62, 58,
    30, 26, 34, 44, 48, 52, 42, 38,
    46, 50, 40, 24, 12, 10, 14, 28,
    54, 60, 36, 18, 6, 0, 4, 20,
    58, 62, 56, 32, 16, 2, 8, 22,
    38, 42, 52, 48, 44, 34, 26, 30
];
const line45 = [0,0,0,8,0,0,8,8,0,8,8,16,8,8,16,16];
const crosshatch = [
    0, 8, 0, 8, 16, 24, 16, 24,
    8, 16, 8, 16, 24, 32, 24, 32,
    0, 8, 0, 8, 16, 24, 16, 24,
    8, 16, 8, 16, 24, 32, 24, 32,
    16, 24, 16, 24, 0, 8, 0, 8,
    24, 32, 24, 32, 8, 16, 8, 16,
    16, 24, 16, 24, 0, 8, 0, 8,
    24, 32, 24, 32, 8, 16, 8, 16
];
const checker = [0, 8, 8, 0];
const snake = [0, 2, 4, 6, 14, 12, 10, 8, 16, 18, 20, 22, 30, 28, 26, 24];
const zigzag = [0,8,16,24,32,40,48,56, 57,49,41,33,25,17,9,1, 2,10,18,26,34,42,50,58, 59,51,43,35,27,19,11,3, 4,12,20,28,36,44,52,60, 61,53,45,37,29,21,13,5, 6,14,22,30,38,46,54,62, 63,55,47,39,31,23,15,7];
const vert50 = [0, 255]; 
const horz50 = [0, 255];
const magic = [0, 14, 3, 13, 11, 5, 8, 6, 12, 2, 15, 1, 7, 9, 4, 10];

const kernels = {
    floyd: [[1,0,7], [-1,1,3], [0,1,5], [1,1,1]],
    falseFloyd: [[1,0,3], [0,1,3], [1,1,2]], 
    shiau: [[1,0,4], [-1,1,1], [0,1,1], [1,1,2]],
    atkinson: [[1,0,1], [2,0,1], [-1,1,1], [0,1,1], [1,1,1], [0,2,1]],
    stucki: [[1,0,8], [2,0,4], [-2,1,2], [-1,1,4], [0,1,8], [1,1,4], [2,1,2], [-2,2,1], [-1,2,2], [0,2,4], [1,2,2], [2,2,1]],
    burkes: [[1,0,8], [2,0,4], [-2,1,2], [-1,1,4], [0,1,8], [1,1,4], [2,1,2]],
    sierra2: [[1,0,4], [2,0,3], [-2,1,1], [-1,1,2], [0,1,3], [1,1,2], [2,1,1], [-1,2,2], [0,2,3], [1,2,2]],
    sierraLite: [[1,0,2], [-1,1,1], [0,1,1]],
    jjn: [[1,0,7], [2,0,5], [-2,1,3], [-1,1,5], [0,1,7], [1,1,5], [2,1,3], [-2,2,1], [-1,2,3], [0,2,5], [1,2,3], [2,2,1]]
};

const DEFAULTS = {
    active: {
        glitch: false, jitter: false, slicer: false, block: false, wave: false,
        sort: false, rgb: false, bitcrush: false, noise: false, ghost: false, solar: false,
        pre: false, dither: true, post: false, depth: true
    },
    glitch: {
        seed: 1337, jitter: 0, jitterProb: 10, 
        sliceAmount: 0, blockShift: 0,
        waveAmp: 0, waveDensity: 10, waveNoise: 0,
        sortThresh: 0, sortDir: 'hor',
        offR: 0, offG: 0, offB: 0,
        bitCrush: 0, noiseAmt: 0,
        ghostOffset: 0, ghostOpacity: 0, solarMix: 0
    },
    pre: {
        brightness: 0, contrast: 0, saturation: 0, blur: 0
    },
    dither: {
        algo: 'none', scale: 1, colorMode: 'rgb', threshold: 128, depth: 32, banding: 255,
        ditherScale: 1, ditherBias: 0, diffStrength: 100,
        ditherStretch: 0, ditherNoise: 0, preCon: 0, quantBias: 0,
        patternAngle: 0, rgbPhase: 0, threshMod: 0, modShape: 'sine',
        errBleed: 100, lumaWeight: 0,
        useGamma: false,
        light: '#00e5ff', dark: '#0a0a0a',
        custom: { count: 2, c1: '#000000', c2: '#ffffff', c3: '#ff0000', c4: '#0000ff' }
    },
    post: {
        bloom: 0, bloomRadius: 0, bloomMix: 'screen',
        scanlineOp: 0, scanlineVertOp: 0,
        vignette: 0, grain: 0, hueShift: 0,
        postInvert: 0, postSepia: 0,
        postBri: 0, postCon: 0, postSat: 0, postBlur: 0,
        mirrorX: false, mirrorY: false
    }
};

const SLIDER_DEFAULTS = {
    brightness: 0, contrast: 0, saturation: 0, blur: 0,
    jitter: 0, jitterProb: 10, 
    sliceAmount: 0, blockShift: 0, waveAmp: 0, waveDensity: 10, waveNoise: 0,
    sortThresh: 0, offR: 0, offG: 0, offB: 0, bitCrush: 0,
    noiseAmt: 0, ghostOffset: 0, ghostOpacity: 0, solarMix: 0,
    scale: 1, threshold: 128, depth: 32, banding: 255, 
    ditherScale: 1, ditherBias: 0, diffStrength: 100,
    ditherStretch: 0, ditherNoise: 0, preCon: 0, quantBias: 0,
    patternAngle: 0, rgbPhase: 0, threshMod: 0, errBleed: 100, lumaWeight: 0,
    customCount: 2, custom1: '#000000', custom2: '#ffffff', custom3: '#ff0000', custom4: '#0000ff',
    bloom: 0, bloomRadius: 0, scanlineOp: 0, scanlineVertOp: 0,
    vignette: 0, grain: 0, hueShift: 0, postInvert: 0, postSepia: 0,
    postBri: 0, postCon: 0, postSat: 0, postBlur: 0
};

const HARDWARE_PALETTES = {
    "p-gb":   [{r:15,g:56,b:15}, {r:48,g:98,b:48}, {r:139,g:172,b:15}, {r:155,g:188,b:15}],
    "p-mac":  [{r:0,g:0,b:0}, {r:255,g:255,b:255}],
    "p-cga1": [{r:0,g:0,b:0}, {r:85,g:255,b:255}, {r:255,g:85,b:255}, {r:255,g:255,b:255}],
    "p-cga2": [{r:0,g:0,b:0}, {r:85,g:255,b:85}, {r:255,g:85,b:85}, {r:255,g:255,b:85}],
    "p-vga":  [{r:0,g:0,b:0}, {r:0,g:170,b:0}, {r:0,g:255,b:0}]
};

// --- STATE & UTILS ---
let srcImage = null;
let procCanvas = document.createElement('canvas');
let procCtx = procCanvas.getContext('2d', { willReadFrequently: true });
let bloomCanvas = document.createElement('canvas');
let bloomCtx = bloomCanvas.getContext('2d');

let viewState = { scale: 1, x: 0, y: 0 };
let isDragging = false, lastMouse = {x:0, y:0};
let scheduleTimeout;

function clamp(v) { return Math.max(0, Math.min(255, v)); }
function hexToRgb(hex) {
    return { r: parseInt(hex.slice(1,3), 16), g: parseInt(hex.slice(3,5), 16), b: parseInt(hex.slice(5,7), 16) };
}
function seededRandom(seed) {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function findClosestPaletteColor(r, g, b, palette, lumaWeight) {
    let minDist = Infinity;
    let closest = palette[0];

    for(let c of palette) {
        // ENHANCEMENT: "Redmean" Perceptual Color Distance
        const rmean = (r + c.r) / 2;
        const dr = r - c.r;
        const dg = g - c.g;
        const db = b - c.b;

        let wR = 2 + rmean / 256;
        let wG = 4.0;
        let wB = 2 + (255 - rmean) / 256;

        if (lumaWeight > 0) {
            wG += (lumaWeight / 5); 
        }

        const dist = Math.sqrt(wR * dr*dr + wG * dg*dg + wB * db*db);

        if(dist < minDist) {
            minDist = dist;
            closest = c;
        }
    }
    return closest;
}

// --- INIT ---
window.onload = () => {
    generateMatrixGrid();
    setupViewport();
    handleAlgoChange();
    togglePaletteControls();

    document.getElementById('fileIn').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(event) {
            srcImage = new Image();
            srcImage.onload = () => initImage(event.target.result);
            srcImage.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });

    document.querySelectorAll('input[type="range"]').forEach(input => {
        input.addEventListener('dblclick', function() {
            if(SLIDER_DEFAULTS.hasOwnProperty(this.id)) {
                this.value = SLIDER_DEFAULTS[this.id];
                this.dispatchEvent(new Event('input'));
            }
        });
    });

    document.addEventListener('paste', (e) => {
        const items = e.clipboardData.items;
        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
                const blob = items[i].getAsFile();
                const r = new FileReader();
                r.onload = (ev) => {
                    srcImage = new Image();
                    srcImage.onload = () => initImage(ev.target.result);
                    srcImage.src = ev.target.result;
                };
                r.readAsDataURL(blob);
                break;
            }
        }
    });
};

// --- CORE UI ---
function initImage(url) {
    document.getElementById('original-overlay').style.backgroundImage = `url(${url})`;
    processImage();
}

function toggleCompare() {
    const btn = document.getElementById('compare-btn');
    const ov = document.getElementById('original-overlay');
    const isVisible = ov.classList.contains('visible');
    if(isVisible) {
        ov.classList.remove('visible');
        btn.innerText = "SHOW ORIGINAL";
    } else {
        ov.classList.add('visible');
        btn.innerText = "SHOW DITHERED";
    }
}

function stepSeed(dir) {
    const el = document.getElementById('glitchSeed');
    el.value = parseInt(el.value) + dir;
    update('glitch');
}

function update(stage) {
    updateLabels();
    if(stage === 'view') { renderToViewport(); return; }
    if(stage === 'post') { composeOutput(); return; }

    clearTimeout(scheduleTimeout);
    document.getElementById('loading-overlay').style.display = 'flex';
    document.getElementById('loading-overlay').innerHTML = '<div class="spinner"></div><span>Processing</span>';
    
    scheduleTimeout = setTimeout(() => {
        processImage();
        generateSettingsSeed(); 
    }, 50);
}

function updateCustomPaletteUI() {
    const count = parseInt(document.getElementById('customCount').value);
    document.getElementById('custom3').style.display = (count >= 3) ? 'inline-block' : 'none';
    document.getElementById('custom4').style.display = (count >= 4) ? 'inline-block' : 'none';
}

function processImage() {
    if(!srcImage) {
            document.getElementById('loading-overlay').style.display = 'none';
            return;
    }
    if(srcImage.width === 0 || srcImage.height === 0) {
            document.getElementById('loading-overlay').style.display = 'none';
            return;
    }

    try {
        const pixelScale = parseInt(document.getElementById('scale').value);
        
        // Use native resolution
        const finalW = Math.floor(srcImage.width / pixelScale);
        const finalH = Math.floor(srcImage.height / pixelScale);

        if(finalW <= 0 || finalH <= 0) throw new Error("Invalid dims");

        if(procCanvas.width !== finalW || procCanvas.height !== finalH) {
            procCanvas.width = finalW;
            procCanvas.height = finalH;
        }
        
        procCtx.clearRect(0, 0, finalW, finalH);
        procCtx.drawImage(srcImage, 0, 0, finalW, finalH);
        let imgData = procCtx.getImageData(0, 0, finalW, finalH);
        let data = imgData.data;

        if(document.getElementById('on-pre').checked) applyPreProcess(data);
        if(document.getElementById('on-glitch').checked) applyGlitch(data, finalW, finalH);
        if(document.getElementById('on-dither').checked) applyDithering(data, finalW, finalH);

        procCtx.putImageData(imgData, 0, 0);
        renderToViewport();
        document.getElementById('loading-overlay').style.display = 'none';

    } catch (e) {
        console.error(e);
        document.getElementById('loading-overlay').innerHTML = '<span style="color:var(--danger)">ERROR IN PROCESSING</span>';
    }
}

// --- GLITCH ENGINE ---
function applyGlitch(data, w, h) {
    let seed = parseInt(document.getElementById('glitchSeed').value);
    const original = new Uint8ClampedArray(data); 

    const jitterEl = document.getElementById('jitter');
    const jitterProbEl = document.getElementById('jitterProb');

    const jitter = jitterEl ? parseInt(jitterEl.value) : 0;
    const jitterProb = jitterProbEl ? parseInt(jitterProbEl.value) / 100 : 0.1;

    const sliceAmount = parseInt(document.getElementById('sliceAmount').value); 
    const blockShift = parseInt(document.getElementById('blockShift').value); 
    
    const waveAmp = parseInt(document.getElementById('waveAmp').value); 
    const waveDen = parseInt(document.getElementById('waveDensity').value);
    const waveNoise = parseInt(document.getElementById('waveNoise').value);
    
    const sortThresh = parseInt(document.getElementById('sortThresh').value); 
    const sortDir = document.getElementById('sortDir').value;
    
    const offR = parseInt(document.getElementById('offR').value); 
    const offG = parseInt(document.getElementById('offG').value);
    const offB = parseInt(document.getElementById('offB').value);
    
    const bitCrush = parseInt(document.getElementById('bitCrush').value); 
    const noiseAmt = parseInt(document.getElementById('noiseAmt').value); 
    
    const ghostOffset = parseInt(document.getElementById('ghostOffset').value); 
    const ghostOpacity = parseInt(document.getElementById('ghostOpacity').value) / 100;
    const solarMix = parseInt(document.getElementById('solarMix').value) / 100; 

    const getSrc = (x, y) => {
        if(x<0) x=0; if(x>=w) x=w-1;
        if(y<0) y=0; if(y>=h) y=h-1;
        return (y*w + x)*4;
    };

    let crushStep = 1;
    if(bitCrush > 0) crushStep = 255 / Math.pow(2, 8-bitCrush);

    const onSort = document.getElementById('on-sort').checked;
    if (onSort && sortThresh > 0) {
        const thresholdVal = sortThresh * 2.55; 
        if (sortDir === 'hor') {
            for(let y=0; y<h; y++) {
                let span = [], spanStart = -1;
                for(let x=0; x<w; x++) {
                    const idx = (y*w + x)*4;
                    const lum = 0.299*data[idx] + 0.587*data[idx+1] + 0.114*data[idx+2];
                    if (lum > thresholdVal) {
                        if (spanStart === -1) spanStart = x;
                        span.push({r:data[idx], g:data[idx+1], b:data[idx+2], a:data[idx+3], l:lum});
                    } else {
                        if (spanStart !== -1) {
                            span.sort((a,b) => a.l - b.l); 
                            for(let k=0; k<span.length; k++) {
                                const tIdx = (y*w + (spanStart+k))*4;
                                data[tIdx] = span[k].r; data[tIdx+1] = span[k].g; data[tIdx+2] = span[k].b;
                                data[tIdx+3] = span[k].a;
                            }
                            span = []; spanStart = -1;
                        }
                    }
                }
                if(spanStart !== -1) {
                    span.sort((a,b) => a.l - b.l); 
                    for(let k=0; k<span.length; k++) {
                        const tIdx = (y*w + (spanStart+k))*4;
                        data[tIdx] = span[k].r; data[tIdx+1] = span[k].g; data[tIdx+2] = span[k].b;
                        data[tIdx+3] = span[k].a;
                    }
                }
            }
        } else if (sortDir === 'vert') {
            for(let x=0; x<w; x++) {
                let span = [], spanStart = -1;
                for(let y=0; y<h; y++) {
                    const idx = (y*w + x)*4;
                    const lum = 0.299*data[idx] + 0.587*data[idx+1] + 0.114*data[idx+2];
                    if (lum > thresholdVal) {
                        if (spanStart === -1) spanStart = y;
                        span.push({r:data[idx], g:data[idx+1], b:data[idx+2], a:data[idx+3], l:lum});
                    } else {
                        if (spanStart !== -1) {
                            span.sort((a,b) => a.l - b.l);
                            for(let k=0; k<span.length; k++) {
                                const tIdx = ((spanStart+k)*w + x)*4;
                                data[tIdx] = span[k].r; data[tIdx+1] = span[k].g; data[tIdx+2] = span[k].b;
                                data[tIdx+3] = span[k].a;
                            }
                            span = []; spanStart = -1;
                        }
                    }
                }
                if (spanStart !== -1) {
                    span.sort((a,b) => a.l - b.l);
                    for(let k=0; k<span.length; k++) {
                        const tIdx = ((spanStart+k)*w + x)*4;
                        data[tIdx] = span[k].r; data[tIdx+1] = span[k].g; data[tIdx+2] = span[k].b;
                        data[tIdx+3] = span[k].a;
                    }
                }
            }
        }
        for(let i=0; i<data.length; i++) original[i] = data[i];
    }

    const onJitter = document.getElementById('on-jitter').checked;
    const onSlicer = document.getElementById('on-slicer').checked;
    const onBlock = document.getElementById('on-block').checked;
    const onWave = document.getElementById('on-wave').checked;
    const onRgb = document.getElementById('on-rgb').checked;
    const onBitcrush = document.getElementById('on-bitcrush').checked;
    const onNoise = document.getElementById('on-noise').checked;
    const onGhost = document.getElementById('on-ghost').checked;
    const onSolar = document.getElementById('on-solar').checked;

    for(let y=0; y<h; y++) {
        let rowShiftX = 0;
        
        if(onJitter && jitter > 0) {
            if(seededRandom(seed + y) < jitterProb) {
                rowShiftX = Math.floor((seededRandom(seed + y + 1) - 0.5) * jitter);
            }
        }

        if(onWave && waveAmp > 0) {
                let noiseComp = 0;
                if(waveNoise > 0) noiseComp = (seededRandom(seed+y*2) - 0.5) * waveNoise;
                rowShiftX += Math.floor(Math.sin(y * (waveDen/1000) + seed) * waveAmp + noiseComp);
        }

        for(let x=0; x<w; x++) {
            let srcX = x + rowShiftX;
            let srcY = y;

            if(onSlicer && sliceAmount > 0) {
                const sliceWidth = Math.floor(w / 10) + 1;
                const sliceIdx = Math.floor(x / sliceWidth);
                if(seededRandom(seed + sliceIdx) > 0.5) {
                    srcY += Math.floor((seededRandom(seed + sliceIdx + 100) - 0.5) * sliceAmount);
                }
            }

            if(onBlock && blockShift > 0) {
                const blockSize = 32;
                const bx = Math.floor(x/blockSize);
                const by = Math.floor(y/blockSize);
                if(seededRandom(seed + bx + by * 50) < 0.1) {
                    srcX += Math.floor((seededRandom(seed + bx * by) - 0.5) * blockShift);
                    srcY += Math.floor((seededRandom(seed + bx * by + 5) - 0.5) * blockShift);
                }
            }

            let r, g, b, a; 
            if(onRgb) {
                const idxR = getSrc(srcX + offR, srcY);
                const idxG = getSrc(srcX + offG, srcY);
                const idxB = getSrc(srcX + offB, srcY);
                r = original[idxR]; g = original[idxG+1]; b = original[idxB+2];
                a = original[getSrc(srcX, srcY)+3];
            } else {
                const idx = getSrc(srcX, srcY);
                r = original[idx]; g = original[idx+1]; b = original[idx+2];
                a = original[idx+3];
            }

            if(onBitcrush && bitCrush > 0) {
                r = Math.floor(r / crushStep) * crushStep;
                g = Math.floor(g / crushStep) * crushStep;
                b = Math.floor(b / crushStep) * crushStep;
            }

            if(onNoise && noiseAmt > 0) {
                    if(Math.random() < (noiseAmt/1000)) { 
                        r = Math.random() * 255;
                        g = Math.random() * 255;
                        b = Math.random() * 255;
                    } else { 
                        const n = (Math.random() - 0.5) * (noiseAmt / 2);
                        r += n; g += n; b += n;
                    }
            }

            if(onGhost && ghostOpacity > 0) {
                    const gIdx = getSrc(srcX - ghostOffset, srcY);
                    const gr = original[gIdx];
                    const gg = original[gIdx+1];
                    const gb = original[gIdx+2];
                    r = r * (1-ghostOpacity) + gr * ghostOpacity;
                    g = g * (1-ghostOpacity) + gg * ghostOpacity;
                    b = b * (1-ghostOpacity) + gb * ghostOpacity;
            }

            if(onSolar && solarMix > 0) {
                if(r + g + b > 380) { 
                    r = Math.abs(r - 255 * solarMix);
                    g = Math.abs(g - 255 * solarMix);
                    b = Math.abs(b - 255 * solarMix);
                }
            }

            const destIdx = (y*w + x)*4;
            data[destIdx] = clamp(r);
            data[destIdx+1] = clamp(g);
            data[destIdx+2] = clamp(b);
            data[destIdx+3] = a; 
        }
    }
}

// --- PRE & DITHER EFFECTS ---
function applyPreProcess(data) {
    const bri = parseInt(document.getElementById('brightness').value);
    const con = parseInt(document.getElementById('contrast').value);
    const sat = parseInt(document.getElementById('saturation').value);
    const blur = parseInt(document.getElementById('blur').value);

    if(blur > 0) {
        procCtx.filter = `blur(${blur/2}px)`;
        procCtx.drawImage(procCanvas, 0, 0);
        data.set(procCtx.getImageData(0,0,procCanvas.width,procCanvas.height).data);
        procCtx.filter = 'none'; 
    }

    const cFactor = (259 * (con + 255)) / (255 * (259 - con));
    
    for (let i = 0; i < data.length; i += 4) {
        let r = data[i], g = data[i+1], b = data[i+2];
        r += bri; g += bri; b += bri;
        r = cFactor * (r - 128) + 128;
        g = cFactor * (g - 128) + 128;
        b = cFactor * (b - 128) + 128;
        if (sat !== 0) {
            const lum = 0.299*r + 0.587*g + 0.114*b;
            const s = 1 + (sat/100);
            r = lum + (r - lum) * s;
            g = lum + (g - lum) * s;
            b = lum + (b - lum) * s;
        }
        data[i] = clamp(r); data[i+1] = clamp(g); data[i+2] = clamp(b);
    }
}

function applyDithering(data, w, h) {
    const algo = document.getElementById('algo').value;
    const mode = document.getElementById('colorMode').value;
    const depth = parseInt(document.getElementById('depth').value);
    const useDepth = document.getElementById('on-depth').checked;
    const threshold = parseInt(document.getElementById('threshold').value);
    const useGamma = document.getElementById('useGamma').checked;
    
    const bandingLevels = parseInt(document.getElementById('banding').value);
    let bandingStep = 1;
    if (bandingLevels < 255) bandingStep = 255 / bandingLevels; 
    
    const ditherScale = parseInt(document.getElementById('ditherScale').value);
    const ditherBias = parseInt(document.getElementById('ditherBias').value);
    const diffStrength = parseInt(document.getElementById('diffStrength').value) / 100;
    
    const ditherStretch = parseInt(document.getElementById('ditherStretch').value); 
    const ditherNoise = parseInt(document.getElementById('ditherNoise').value); 
    const preCon = parseInt(document.getElementById('preCon').value); 
    const quantBias = parseInt(document.getElementById('quantBias').value); 

    const patternAngle = parseInt(document.getElementById('patternAngle').value);
    const rgbPhase = parseInt(document.getElementById('rgbPhase').value);
    const threshMod = parseInt(document.getElementById('threshMod').value);
    const modShape = document.getElementById('modShape').value; 
    const errBleed = parseInt(document.getElementById('errBleed').value) / 100;
    const lumaWeight = parseInt(document.getElementById('lumaWeight').value);
    
    const isSimple = (algo === 'none' || algo === 'whiteNoise' || algo === 'ign');
    const isErrorDiff = (!isSimple && !algo.startsWith('bayer') && !algo.startsWith('cluster') && !algo.startsWith('lines') && !algo.startsWith('halftone') && !algo.startsWith('round') && !algo.startsWith('cross') && !algo.startsWith('check') && !algo.startsWith('snake') && !algo.startsWith('zig') && !algo.startsWith('vert') && !algo.startsWith('horz') && !algo.startsWith('magic') && !algo.startsWith('line'));
    const isOrdered = !isErrorDiff && !isSimple;
    const serpentine = document.getElementById('serpentine').checked;

    let matrix = bayer4;
    let mSize = 4;
    if (algo === 'bayer2') { matrix = bayer2; mSize = 2; }
    if (algo === 'bayer8') { matrix = bayer8; mSize = 8; }
    if (algo === 'cluster4') { matrix = cluster4; mSize = 4; }
    if (algo === 'linesH') { matrix = linesH; mSize = 4; }
    if (algo === 'linesV') { matrix = linesV; mSize = 4; }
    if (algo === 'halftone4') { matrix = halftone4; mSize = 4; }
    if (algo === 'halftone8') { matrix = halftone8; mSize = 8; }
    if (algo === 'round8') { matrix = round8; mSize = 8; }
    if (algo === 'line45') { matrix = line45; mSize = 4; }
    if (algo === 'crosshatch') { matrix = crosshatch; mSize = 8; }
    if (algo === 'checker') { matrix = checker; mSize = 2; }
    if (algo === 'snake') { matrix = snake; mSize = 4; }
    if (algo === 'zigzag') { matrix = zigzag; mSize = 8; }
    if (algo === 'vert50') { matrix = vert50; mSize = 2; }
    if (algo === 'horz50') { matrix = horz50; mSize = 2; }
    if (algo === 'magic') { matrix = magic; mSize = 4; }
    if (algo === 'bayer4') { 
        const inputs = document.querySelectorAll('.m-cell');
        matrix = Array.from(inputs).map(inp => parseInt(inp.value));
    }

    let kernel = [];
    let kDiv = 1;
    if(isErrorDiff) {
        kernel = kernels[algo];
        if (algo === 'atkinson') kDiv = 8; 
        else kDiv = kernel.reduce((acc, k) => acc + k[2], 0);
    }

    const light = hexToRgb(document.getElementById('col-light').value);
    const dark = hexToRgb(document.getElementById('col-dark').value);
    const hwPalette = HARDWARE_PALETTES[mode];
    const depthStep = 255 / (depth - 1);

    const angRad = patternAngle * (Math.PI / 180);
    const cAng = Math.cos(angRad);
    const sAng = Math.sin(angRad);

    let scaleX = 1, scaleY = 1;
    if(ditherStretch > 0) scaleX = 1 + (ditherStretch / 10);
    else if(ditherStretch < 0) scaleY = 1 + (Math.abs(ditherStretch) / 10);

    const preConFactor = (259 * (preCon + 255)) / (255 * (259 - preCon));

    let customPalette = [];
    if(mode === 'custom') {
        const count = parseInt(document.getElementById('customCount').value);
        for(let i=1; i<=count; i++) {
            customPalette.push(hexToRgb(document.getElementById('custom' + i).value));
        }
    }
    
    const toLin = new Float32Array(256);
    const toSrgb = new Uint8ClampedArray(256); 
    if(useGamma) {
        for(let i=0; i<256; i++) {
            toLin[i] = Math.pow(i / 255, 2.2); 
        }
    }

    for (let y = 0; y < h; y++) {
        const isReverse = serpentine && (y % 2 !== 0);
        const startX = isReverse ? w - 1 : 0;
        const endX = isReverse ? -1 : w;
        const stepX = isReverse ? -1 : 1;

        for (let x = startX; x !== endX; x += stepX) {
            const idx = (y * w + x) * 4;
            if (data[idx+3] < 10) continue;

            let r = data[idx], g = data[idx+1], b = data[idx+2];
            
            if(useGamma) {
                r = toLin[r] * 255;
                g = toLin[g] * 255;
                b = toLin[b] * 255;
            }
            
            if (preCon > 0) {
                r = preConFactor * (r - 128) + 128;
                g = preConFactor * (g - 128) + 128;
                b = preConFactor * (b - 128) + 128;
            }

            if (bandingLevels < 255) {
                r = Math.floor(r / bandingStep) * bandingStep;
                g = Math.floor(g / bandingStep) * bandingStep;
                b = Math.floor(b / bandingStep) * bandingStep;
            }

            if (quantBias !== 0) {
                r += quantBias; g += quantBias; b += quantBias;
            }

            if (algo === 'whiteNoise') {
                const noise = (Math.random() - 0.5) * 255; 
                r += noise; g += noise; b += noise;
            }
            else if (algo === 'ign') { 
                const ign = (52.9829189 * Math.abs(((0.06711056 * x + 0.00583715 * y) % 1.0))) % 1.0;
                const noise = (ign - 0.5) * 255;
                r += noise; g += noise; b += noise;
            }else if (algo === 'random') {
                const noise = (Math.random() - 0.5) * 60;
                r += noise; g += noise; b += noise;
            } else if (isOrdered) {
                
                let tx = Math.floor(x / (ditherScale * scaleX));
                let ty = Math.floor(y / (ditherScale * scaleY));

                if(patternAngle !== 0) {
                    const rx = tx * cAng - ty * sAng;
                    const ry = tx * sAng + ty * cAng;
                    tx = Math.floor(rx); ty = Math.floor(ry);
                }

                const getMatVal = (ox, oy) => {
                    const mx = ((ox % mSize) + mSize) % mSize;
                    const my = ((oy % mSize) + mSize) % mSize;
                    if (algo === 'vert50') return matrix[mx % 2];
                    if (algo === 'horz50') return (oy%2===0) ? 0 : 255;
                    return matrix[my * mSize + mx];
                };

                const mapValR = getMatVal(tx, ty);
                const mapValG = getMatVal(tx + rgbPhase, ty + rgbPhase); 
                const mapValB = getMatVal(tx + rgbPhase*2, ty + rgbPhase*2); 
                
                const normR = (mapValR / (mSize*mSize)) - 0.5;
                const normG = (mapValG / (mSize*mSize)) - 0.5;
                const normB = (mapValB / (mSize*mSize)) - 0.5;
                
                const spread = 255 / (depth < 4 ? 2 : 4);
                
                let mod = 0;
                if(threshMod > 0) {
                    const sx = x / ditherScale;
                    const sy = y / ditherScale;
                    const phase = (sx*0.1 + sy*0.1);
                    if(modShape === 'sine') mod = Math.sin(phase) * threshMod;
                    else if(modShape === 'triangle') mod = (Math.abs((phase % 2) - 1) * 2 - 1) * threshMod;
                    else if(modShape === 'noise') mod = (Math.random() - 0.5) * threshMod * 2;
                }

                let patNoise = 0;
                if (ditherNoise > 0) {
                    patNoise = (Math.random() - 0.5) * ditherNoise;
                }

                r += (normR * spread) + ditherBias + mod + patNoise;
                g += (normG * spread) + ditherBias + mod + patNoise;
                b += (normB * spread) + ditherBias + mod + patNoise;
            }

            let nr, ng, nb;
            let er = 0, eg = 0, eb = 0;

            if (mode === 'mono') {
                const lum = 0.299*r + 0.587*g + 0.114*b;
                const val = lum >= threshold ? 1 : 0;
                nr = val ? light.r : dark.r;
                ng = val ? light.g : dark.g;
                nb = val ? light.b : dark.b;
                er = eg = eb = (lum - (val ? 255 : 0));
            } else if (mode === 'gray') {
                    const lum = 0.299*r + 0.587*g + 0.114*b;
                    if (useDepth) {
                    const qLum = Math.round(lum / depthStep) * depthStep;
                    nr = ng = nb = qLum;
                    er = eg = eb = (lum - qLum);
                    } else {
                    nr = ng = nb = lum;
                    er = eg = eb = 0;
                    }
            } else if (mode === 'custom') {
                const match = findClosestPaletteColor(r, g, b, customPalette, lumaWeight);
                nr = match.r; ng = match.g; nb = match.b;
                er = (r - nr); eg = (g - ng); eb = (b - nb);
            } else if (hwPalette) {
                const match = findClosestPaletteColor(r, g, b, hwPalette, lumaWeight);
                nr = match.r; ng = match.g; nb = match.b;
                er = (r - nr); eg = (g - ng); eb = (b - nb);
            } else {
                if (useDepth) {
                    nr = Math.round(r / depthStep) * depthStep;
                    ng = Math.round(g / depthStep) * depthStep;
                    nb = Math.round(b / depthStep) * depthStep;
                    er = (r - nr); eg = (g - ng); eb = (b - nb);
                } else {
                    nr = r; ng = g; nb = b;
                    er = 0; eg = 0; eb = 0;
                }
            }

            if(useGamma) {
                data[idx] = Math.pow(clamp(nr) / 255, 1/2.2) * 255;
                data[idx+1] = Math.pow(clamp(ng) / 255, 1/2.2) * 255;
                data[idx+2] = Math.pow(clamp(nb) / 255, 1/2.2) * 255;
            } else {
                data[idx] = nr; data[idx+1] = ng; data[idx+2] = nb;
            }

            if (isErrorDiff) {
                er *= errBleed; eg *= errBleed; eb *= errBleed;

                for (let k = 0; k < kernel.length; k++) {
                    const kx = isReverse ? -kernel[k][0] : kernel[k][0]; 
                    const ky = kernel[k][1];
                    const kFactor = (kernel[k][2] / kDiv) * diffStrength;
                    const nx = x + kx;
                    const ny = y + ky;
                    if (nx >= 0 && nx < w && ny < h) {
                        const nIdx = (ny * w + nx) * 4;
                        data[nIdx]   += er * kFactor;
                        data[nIdx+1] += eg * kFactor;
                        data[nIdx+2] += eb * kFactor;
                    }
                }
            }
        }
    }
}

// --- RENDER & PRESET UTILS ---
function renderToViewport() {
    const outC = document.getElementById('output-canvas');
    const clip = document.getElementById('canvas-clipper');
    const pixelScale = parseInt(document.getElementById('scale').value);
    const newW = procCanvas.width * pixelScale;
    const newH = procCanvas.height * pixelScale;

    if(outC.width !== newW || outC.height !== newH) {
        outC.width = newW;
        outC.height = newH;
    }
    clip.style.width = newW + 'px';
    clip.style.height = newH + 'px';
    document.getElementById('resolution-display').innerText = `${procCanvas.width} x ${procCanvas.height}`;

    if(!window.hasFit) { fitView(); window.hasFit = true; }
    composeOutput();
}

function composeOutput() {
    const outC = document.getElementById('output-canvas');
    const ctx = outC.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    // FIX: Clear output canvas before draw
    ctx.clearRect(0, 0, outC.width, outC.height);

    // Reset
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1.0;
    ctx.filter = 'none';

    // 1. Draw Base
    const mirrorX = document.getElementById('mirrorX').checked;
    const mirrorY = document.getElementById('mirrorY').checked;
    
    ctx.save();
    if(mirrorX || mirrorY) {
        ctx.translate(mirrorX ? outC.width : 0, mirrorY ? outC.height : 0);
        ctx.scale(mirrorX ? -1 : 1, mirrorY ? -1 : 1);
    }
    ctx.drawImage(procCanvas, 0, 0, outC.width, outC.height);
    ctx.restore();

    if(document.getElementById('on-post').checked) {
        // --- POST FILTERS (CSS Style) ---
        const hue = document.getElementById('hueShift').value;
        const invert = document.getElementById('postInvert').value;
        const sepia = document.getElementById('postSepia').value;
        const bri = parseInt(document.getElementById('postBri').value);
        const con = parseInt(document.getElementById('postCon').value);
        const sat = parseInt(document.getElementById('postSat').value);
        const blur = document.getElementById('postBlur').value;
        
        if (hue>0 || invert>0 || sepia>0 || bri!==0 || con!==0 || sat!==0 || blur>0) {
            ctx.save();
            if(mirrorX || mirrorY) {
                ctx.translate(mirrorX ? outC.width : 0, mirrorY ? outC.height : 0);
                ctx.scale(mirrorX ? -1 : 1, mirrorY ? -1 : 1);
            }
            const f = [];
            if(hue>0) f.push(`hue-rotate(${hue}deg)`);
            if(invert>0) f.push(`invert(${invert}%)`);
            if(sepia>0) f.push(`sepia(${sepia}%)`);
            if(bri!==0) f.push(`brightness(${100+bri}%)`);
            if(con!==0) f.push(`contrast(${100+con}%)`);
            if(sat!==0) f.push(`saturate(${100+sat}%)`);
            if(blur>0) f.push(`blur(${blur}px)`);
            ctx.filter = f.join(' ');
            ctx.clearRect(0,0,outC.width,outC.height);
            ctx.drawImage(procCanvas, 0, 0, outC.width, outC.height);
            ctx.restore();
        }

        // --- BLOOM ---
        const bloom = parseInt(document.getElementById('bloom').value);
        const radius = parseInt(document.getElementById('bloomRadius').value);
        const mix = document.getElementById('bloomMix').value;
        
        if(bloom > 0) {
            const bw = outC.width / 4;
            const bh = outC.height / 4;
            if(bloomCanvas.width !== bw || bloomCanvas.height !== bh) {
                bloomCanvas.width = bw; 
                bloomCanvas.height = bh;
            }
            bloomCtx.drawImage(outC, 0, 0, bw, bh);
            ctx.save();
            ctx.globalCompositeOperation = mix;
            ctx.filter = `blur(${radius}px)`;
            ctx.globalAlpha = bloom/500;
            ctx.drawImage(bloomCanvas, 0, 0, outC.width, outC.height);
            ctx.restore();
        }

        // --- GRAIN ---
        const grain = parseInt(document.getElementById('grain').value);
        if(grain > 0) {
            ctx.save();
            ctx.globalCompositeOperation = 'overlay';
            ctx.globalAlpha = grain / 100;
            if(!window.noiseCanvas) {
                window.noiseCanvas = document.createElement('canvas');
                window.noiseCanvas.width = 128; window.noiseCanvas.height = 128;
                const nCtx = window.noiseCanvas.getContext('2d');
                const nData = nCtx.createImageData(128,128);
                for(let i=0; i<nData.data.length; i+=4) {
                    const v = Math.random()*255;
                    nData.data[i] = v; nData.data[i+1] = v; nData.data[i+2] = v; nData.data[i+3] = 255;
                }
                nCtx.putImageData(nData,0,0);
            }
            const pat = ctx.createPattern(window.noiseCanvas, 'repeat');
            ctx.fillStyle = pat;
            ctx.fillRect(0,0,outC.width,outC.height);
            ctx.restore();
        }

        // --- VIGNETTE ---
        const vign = parseInt(document.getElementById('vignette').value);
        if(vign > 0) {
            ctx.save();
            ctx.globalCompositeOperation = 'multiply';
            const grad = ctx.createRadialGradient(outC.width/2, outC.height/2, outC.width/3, outC.width/2, outC.height/2, outC.width);
            grad.addColorStop(0, 'rgba(0,0,0,0)');
            grad.addColorStop(1, `rgba(0,0,0,${vign/100})`);
            ctx.fillStyle = grad;
            ctx.fillRect(0,0,outC.width, outC.height);
            ctx.restore();
        }

        // --- SCANLINES ---
        document.getElementById('scanlines').style.opacity = document.getElementById('scanlineOp').value / 100;
        document.getElementById('scanlines-vert').style.opacity = document.getElementById('scanlineVertOp').value / 100;
    } else {
        document.getElementById('scanlines').style.opacity = 0;
        document.getElementById('scanlines-vert').style.opacity = 0;
    }
}

// --- NEW: DIFF & MERGE UTILS ---
function getDiff(obj, base) {
    const diff = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            const nestedDiff = getDiff(obj[key], base[key]);
            if (Object.keys(nestedDiff).length > 0) {
                diff[key] = nestedDiff;
            }
        } else if (obj[key] !== base[key]) {
            diff[key] = obj[key];
        }
    }
    return diff;
}

function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepMerge(target[key], source[key]));
        }
    }
    Object.assign(target || {}, source);
    return target;
}

function getSettingsState() {
    return {
        active: {
            glitch: document.getElementById('on-glitch').checked,
            jitter: document.getElementById('on-jitter').checked,
            slicer: document.getElementById('on-slicer').checked,
            block: document.getElementById('on-block').checked,
            wave: document.getElementById('on-wave').checked,
            sort: document.getElementById('on-sort').checked,
            rgb: document.getElementById('on-rgb').checked,
            bitcrush: document.getElementById('on-bitcrush').checked,
            noise: document.getElementById('on-noise').checked,
            ghost: document.getElementById('on-ghost').checked,
            solar: document.getElementById('on-solar').checked,
            pre: document.getElementById('on-pre').checked,
            dither: document.getElementById('on-dither').checked,
            post: document.getElementById('on-post').checked,
            depth: document.getElementById('on-depth').checked
        },
        glitch: {
            seed: document.getElementById('glitchSeed').value,
            jitter: document.getElementById('jitter').value,
            jitterProb: document.getElementById('jitterProb') ? document.getElementById('jitterProb').value : 10,
            sliceAmount: document.getElementById('sliceAmount').value,
            blockShift: document.getElementById('blockShift').value,
            waveAmp: document.getElementById('waveAmp').value,
            waveDensity: document.getElementById('waveDensity').value,
            waveNoise: document.getElementById('waveNoise').value,
            sortThresh: document.getElementById('sortThresh').value,
            sortDir: document.getElementById('sortDir').value,
            offR: document.getElementById('offR').value,
            offG: document.getElementById('offG').value,
            offB: document.getElementById('offB').value,
            bitCrush: document.getElementById('bitCrush').value,
            noiseAmt: document.getElementById('noiseAmt').value,
            ghostOffset: document.getElementById('ghostOffset').value,
            ghostOpacity: document.getElementById('ghostOpacity').value,
            solarMix: document.getElementById('solarMix').value
        },
        pre: {
            brightness: document.getElementById('brightness').value,
            contrast: document.getElementById('contrast').value,
            saturation: document.getElementById('saturation').value,
            blur: document.getElementById('blur').value
        },
        dither: {
            algo: document.getElementById('algo').value,
            useGamma: document.getElementById('useGamma').checked,
            scale: document.getElementById('scale').value,
            colorMode: document.getElementById('colorMode').value,
            threshold: document.getElementById('threshold').value,
            depth: document.getElementById('depth').value,
            banding: document.getElementById('banding').value, 
            ditherScale: document.getElementById('ditherScale').value,
            ditherBias: document.getElementById('ditherBias').value,
            diffStrength: document.getElementById('diffStrength').value,
            patternAngle: document.getElementById('patternAngle').value,
            rgbPhase: document.getElementById('rgbPhase').value,
            threshMod: document.getElementById('threshMod').value,
            modShape: document.getElementById('modShape').value, 
            errBleed: document.getElementById('errBleed').value,
            lumaWeight: document.getElementById('lumaWeight').value,
            ditherStretch: document.getElementById('ditherStretch').value,
            ditherNoise: document.getElementById('ditherNoise').value,
            preCon: document.getElementById('preCon').value,
            quantBias: document.getElementById('quantBias').value,
            custom: {
                count: document.getElementById('customCount').value,
                c1: document.getElementById('custom1').value,
                c2: document.getElementById('custom2').value,
                c3: document.getElementById('custom3').value,
                c4: document.getElementById('custom4').value
            },
            light: document.getElementById('col-light').value,
            dark: document.getElementById('col-dark').value
        },
        post: {
            bloom: document.getElementById('bloom').value,
            bloomRadius: document.getElementById('bloomRadius').value,
            bloomMix: document.getElementById('bloomMix').value,
            scanlineOp: document.getElementById('scanlineOp').value,
            scanlineVertOp: document.getElementById('scanlineVertOp').value,
            vignette: document.getElementById('vignette').value,
            grain: document.getElementById('grain').value,
            hueShift: document.getElementById('hueShift').value,
            postInvert: document.getElementById('postInvert').value,
            postSepia: document.getElementById('postSepia').value,
            postBri: document.getElementById('postBri').value,
            postCon: document.getElementById('postCon').value,
            postSat: document.getElementById('postSat').value,
            postBlur: document.getElementById('postBlur').value,
            mirrorX: document.getElementById('mirrorX').checked,
            mirrorY: document.getElementById('mirrorY').checked,
        }
    };
}

function generateSettingsSeed() {
    const state = getSettingsState();
    // Use DEFAULTS to create a minimal diff
    const diff = getDiff(state, DEFAULTS);
    const json = JSON.stringify(diff);
    const b64 = btoa(json);
    document.getElementById('settings-seed').value = b64;
}

function applySeedFromInput() {
    const seed = document.getElementById('seed-input').value.trim();
    if(!seed) return;
    try {
        const json = atob(seed);
        const partialState = JSON.parse(json);
        applySettingsState(partialState);
    } catch(e) {
        alert("Invalid settings code!");
    }
}

function randomizeAll() {
    const rInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const rFloat = (max) => Math.random() * max;
    const rBool = () => Math.random() > 0.5;
    
    document.getElementById('on-jitter').checked = rBool();
    document.getElementById('on-slicer').checked = rBool();
    document.getElementById('on-block').checked = rBool();
    document.getElementById('on-wave').checked = rBool();
    document.getElementById('on-sort').checked = Math.random() > 0.7; // Sort is heavy, lower chance
    document.getElementById('on-rgb').checked = rBool();
    document.getElementById('on-bitcrush').checked = Math.random() > 0.7;
    document.getElementById('on-noise').checked = rBool();
    document.getElementById('on-ghost').checked = rBool();
    document.getElementById('on-solar').checked = Math.random() > 0.8;
    
    document.getElementById('jitter').value = rInt(0, 50);
    document.getElementById('jitterProb').value = rInt(5, 50);
    document.getElementById('sliceAmount').value = rInt(0, 30);
    document.getElementById('blockShift').value = rInt(0, 50);
    document.getElementById('waveAmp').value = rInt(0, 60);
    document.getElementById('waveDensity').value = rInt(1, 20);
    document.getElementById('waveNoise').value = rInt(0, 50);
    document.getElementById('sortThresh').value = rInt(10, 200);
    document.getElementById('offR').value = rInt(-20, 20);
    document.getElementById('offG').value = rInt(-20, 20);
    document.getElementById('offB').value = rInt(-20, 20);
    document.getElementById('bitCrush').value = rInt(0, 4); // Don't go too high (unrecognizable)
    document.getElementById('noiseAmt').value = rInt(0, 60);
    document.getElementById('ghostOffset').value = rInt(0, 50);
    document.getElementById('ghostOpacity').value = rInt(0, 80);
    document.getElementById('solarMix').value = rInt(0, 100);
    
    document.getElementById('on-dither').checked = true;
    
    const algos = [
        'bayer4','bayer2','bayer8','cluster4','linesH','linesV',
        'halftone4','halftone8','line45','crosshatch','snake','zigzag',
        'atkinson','floyd','falseFloyd','sierraLite'
    ];
    document.getElementById('algo').value = algos[rInt(0, algos.length - 1)];
    
    document.getElementById('scale').value = rInt(1, 4); // Pixel scale 1-4
    document.getElementById('ditherScale').value = rInt(1, 4);
    document.getElementById('patternAngle').value = rInt(0, 180);
    document.getElementById('ditherStretch').value = rInt(-20, 20);
    document.getElementById('banding').value = rInt(4, 255);
    document.getElementById('diffStrength').value = rInt(50, 100);
    document.getElementById('threshold').value = rInt(80, 180);
    document.getElementById('on-post').checked = true;
    document.getElementById('bloom').value = rInt(0, 100);
    document.getElementById('bloomRadius').value = rInt(10, 50);
    document.getElementById('vignette').value = rInt(0, 80);
    document.getElementById('grain').value = rInt(0, 50);
    document.getElementById('postSat').value = rInt(-50, 50);
    document.getElementById('postCon').value = rInt(0, 50);
    document.getElementById('hueShift').value = Math.random() > 0.8 ? rInt(0, 360) : 0; // Occasional hue shift
    document.getElementById('scanlineOp').value = rInt(0, 50);
    
    handleAlgoChange();
    update('glitch');
}

function applySettingsState(partialState) {
    // Start with fresh defaults
    const fullState = JSON.parse(JSON.stringify(DEFAULTS));
    // Merge the partial state on top
    deepMerge(fullState, partialState);
    
    // Apply fullState to UI
    const s = fullState;

    if(s.active) {
        const map = {
            'on-glitch': s.active.glitch, 'on-jitter': s.active.jitter, 'on-slicer': s.active.slicer,
            'on-block': s.active.block, 'on-wave': s.active.wave, 'on-sort': s.active.sort,
            'on-rgb': s.active.rgb, 'on-bitcrush': s.active.bitcrush, 'on-noise': s.active.noise,
            'on-ghost': s.active.ghost, 'on-solar': s.active.solar, 'on-pre': s.active.pre,
            'on-dither': s.active.dither, 'on-post': s.active.post, 'on-depth': s.active.depth
        };
        for(let k in map) {
            const el = document.getElementById(k);
            if(el && map[k] !== undefined) el.checked = map[k];
        }
    }

    if(s.glitch) {
        for(let k in s.glitch) {
            const el = document.getElementById(k === 'seed' ? 'glitchSeed' : k);
            if(el) el.value = s.glitch[k];
        }
    }
    if(s.pre) {
        for(let k in s.pre) document.getElementById(k).value = s.pre[k];
    }
    if(s.dither) {
        for(let k in s.dither) {
            if(k === 'useGamma') { document.getElementById('useGamma').checked = s.dither.useGamma; continue; }
            if(k === 'custom') {
                document.getElementById('customCount').value = s.dither.custom.count;
                document.getElementById('custom1').value = s.dither.custom.c1;
                document.getElementById('custom2').value = s.dither.custom.c2;
                document.getElementById('custom3').value = s.dither.custom.c3;
                document.getElementById('custom4').value = s.dither.custom.c4;
                continue;
            }
            
            const el = document.getElementById(k === 'light' ? 'col-light' : (k === 'dark' ? 'col-dark' : k));
            if(el) el.value = s.dither[k];
        }
        handleAlgoChange(); togglePaletteControls(); updateCustomPaletteUI();
    }
    if(s.post) {
        for(let k in s.post) {
            const el = document.getElementById(k);
            if(el) {
                if(el.type === 'checkbox') el.checked = s.post[k];
                else el.value = s.post[k];
            }
        }
    }
    update('glitch');
}

function loadBuiltInPreset() {
    const key = document.getElementById('preset-select').value;
    // Note: FACTORY_PRESETS would be defined here if you had built-in presets.
    if(window.FACTORY_PRESETS && window.FACTORY_PRESETS[key]) applySettingsState(FACTORY_PRESETS[key]);
}

function savePreset() {
    // Save DIFFED json to keep file size small
    const state = getSettingsState();
    const diff = getDiff(state, DEFAULTS);
    const blob = new Blob([JSON.stringify(diff, null, 2)], {type: "application/json"});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = "dither_preset.json";
    a.click();
}

function loadUserPreset(input) {
    const f = input.files[0];
    if(!f) return;
    const r = new FileReader();
    r.onload = (e) => {
        const partial = JSON.parse(e.target.result);
        applySettingsState(partial);
    };
    r.readAsText(f);
}

function setupViewport() {
    const vp = document.getElementById('viewport');
    
    vp.addEventListener('wheel', (e) => { 
        e.preventDefault(); 
        const step = e.deltaY > 0 ? -0.1 : 0.1;
        zoom(step, e.clientX, e.clientY); 
    }, { passive: false });

    vp.addEventListener('mousedown', (e) => { 
        isDragging = true; lastMouse = { x: e.clientX, y: e.clientY }; vp.style.cursor = 'grabbing'; 
    });
    window.addEventListener('mouseup', () => { isDragging = false; vp.style.cursor = 'default'; });
    window.addEventListener('mousemove', (e) => {
        if(isDragging) {
            viewState.x += e.clientX - lastMouse.x;
            viewState.y += e.clientY - lastMouse.y;
            lastMouse = { x: e.clientX, y: e.clientY };
            updateTransform();
        }
    });
}

function fitView() {
    const vp = document.getElementById('viewport');
    const clip = document.getElementById('canvas-clipper');
    if(parseInt(clip.style.width) === 0) return;
    const scale = Math.min((vp.clientWidth-40)/parseInt(clip.style.width), (vp.clientHeight-40)/parseInt(clip.style.height));
    viewState.scale = scale;
    viewState.x = (vp.clientWidth - (parseInt(clip.style.width) * scale)) / 2;
    viewState.y = (vp.clientHeight - (parseInt(clip.style.height) * scale)) / 2;
    updateTransform();
}

function zoom(amt, cx, cy) {
    const oldScale = viewState.scale;
    const newScale = Math.max(0.1, viewState.scale + amt);
    const vp = document.getElementById('viewport');
    const rect = vp.getBoundingClientRect();
    const mx = (cx !== undefined ? cx : rect.left + rect.width/2) - rect.left;
    const my = (cy !== undefined ? cy : rect.top + rect.height/2) - rect.top;
    const canvasX = (mx - viewState.x) / oldScale;
    const canvasY = (my - viewState.y) / oldScale;
    viewState.x = mx - canvasX * newScale;
    viewState.y = my - canvasY * newScale;
    viewState.scale = newScale;
    updateTransform();
}

function updateTransform() {
    document.getElementById('canvas-wrapper').style.transform = `translate(${viewState.x}px, ${viewState.y}px) scale(${viewState.scale})`;
}

function handleAlgoChange() {
    const v = document.getElementById('algo').value;
    const isErrorDiff = (v !== 'none' && v !== 'random' && !v.startsWith('bayer') && !v.startsWith('cluster') && !v.startsWith('lines') && !v.startsWith('round') && !v.startsWith('cross') && !v.startsWith('check') && !v.startsWith('snake') && !v.startsWith('zig') && !v.startsWith('vert') && !v.startsWith('horz') && !v.startsWith('magic') && !v.startsWith('line'));
    document.getElementById('advanced-matrix').style.display = (v === 'bayer4') ? 'block' : 'none';
    document.getElementById('serpentine-row').style.display = isErrorDiff ? 'flex' : 'none';
    update('dither');
}
function togglePaletteControls() {
    const m = document.getElementById('colorMode').value;
    document.getElementById('pal-mono').style.display = (m === 'mono') ? 'block' : 'none';
    document.getElementById('pal-rgb').style.display = (m === 'rgb' || m === 'gray') ? 'block' : 'none';
    document.getElementById('pal-custom').style.display = (m === 'custom') ? 'block' : 'none'; 
    updateCustomPaletteUI(); 
    update('dither');
}
function updateLabels() {
    document.querySelectorAll('input[type="range"]').forEach(el => {
        const d = document.getElementById('disp-' + el.id);
        if(d) d.innerText = el.value;
        if(el.id === 'diffStrength' || el.id === 'errBleed' || el.id === 'lumaWeight' || el.id === 'jitterProb') d.innerText += '%';
        if(el.id === 'patternAngle') d.innerText += '°';
    });
}
function generateMatrixGrid() {
    const g = document.getElementById('matrix-grid');
    g.innerHTML = '';
    bayer4.forEach((val, i) => {
        const inp = document.createElement('input');
        inp.type = 'number'; inp.className = 'm-cell'; inp.value = val;
        inp.oninput = () => update('dither');
        g.appendChild(inp);
    });
}
function resetMatrix() { document.querySelectorAll('.m-cell').forEach((c, i) => c.value = bayer4[i]); update('dither'); }

function globalReset() {
    // Resets now use applySettingsState({}) which effectively loads defaults
    const currentActiveState = {
        glitch: document.getElementById('on-glitch').checked,
        jitter: document.getElementById('on-jitter').checked,
        slicer: document.getElementById('on-slicer').checked,
        block: document.getElementById('on-block').checked,
        wave: document.getElementById('on-wave').checked,
        sort: document.getElementById('on-sort').checked,
        rgb: document.getElementById('on-rgb').checked,
        bitcrush: document.getElementById('on-bitcrush').checked,
        noise: document.getElementById('on-noise').checked,
        ghost: document.getElementById('on-ghost').checked,
        solar: document.getElementById('on-solar').checked,
        pre: document.getElementById('on-pre').checked,
        dither: document.getElementById('on-dither').checked,
        post: document.getElementById('on-post').checked,
        depth: document.getElementById('on-depth').checked
    };
    const resetState = {
        active: currentActiveState
};
applySettingsState(resetState);
}

function resetGroup(grp) {
    // Simplified reset
    if(grp === 'pre') { document.getElementById('brightness').value=0; document.getElementById('contrast').value=0; document.getElementById('saturation').value=0; document.getElementById('blur').value=0; update('pre'); }
    if(grp === 'post') { 
        const def = DEFAULTS.post;
        for(let k in def) {
            const el = document.getElementById(k);
            if(el) {
                if(el.type === 'checkbox') el.checked = def[k];
                else el.value = def[k];
            }
        }
        update('post'); 
    }
    if(grp === 'dither') { 
        // Reset to DEFAULTS.dither
        const def = DEFAULTS.dither;
        document.getElementById('scale').value = def.scale;
        document.getElementById('algo').value = def.algo;
        document.getElementById('colorMode').value = def.colorMode;
        document.getElementById('depth').value = def.depth;
        document.getElementById('on-depth').checked = DEFAULTS.active.depth; // NEW: Reset depth toggle
        document.getElementById('banding').value = def.banding;
        document.getElementById('ditherScale').value = def.ditherScale;
        document.getElementById('ditherBias').value = def.ditherBias;
        document.getElementById('diffStrength').value = def.diffStrength;
        document.getElementById('patternAngle').value = def.patternAngle;
        document.getElementById('rgbPhase').value = def.rgbPhase;
        document.getElementById('threshMod').value = def.threshMod;
        document.getElementById('errBleed').value = def.errBleed;
        document.getElementById('lumaWeight').value = def.lumaWeight;
        document.getElementById('ditherStretch').value = def.ditherStretch;
        document.getElementById('ditherNoise').value = def.ditherNoise;
        document.getElementById('preCon').value = def.preCon;
        document.getElementById('quantBias').value = def.quantBias;
        update('glitch'); 
    } 
    if(grp === 'glitch') { 
        const toggles = ['jitter','slicer','block','wave','sort','rgb','bitcrush','noise','ghost','solar'];
        toggles.forEach(t => { const el = document.getElementById('on-'+t); if(el) el.checked = false; });
        
        const def = DEFAULTS.glitch;
        for(let k in def) {
            if(k !== 'seed') {
                const el = document.getElementById(k);
                if(el) el.value = def[k];
            }
        }
        document.getElementById('glitchSeed').value = 1337;
        update('glitch');
    }
}

function downloadImage() {
    const outC = document.getElementById('output-canvas');
    const saveC = document.createElement('canvas');
    saveC.width = outC.width;
    saveC.height = outC.height;
    const ctx = saveC.getContext('2d');
    
    ctx.drawImage(outC, 0, 0);

    if(document.getElementById('on-post').checked) {
        const opH = document.getElementById('scanlineOp').value / 100;
        if(opH > 0) {
            ctx.fillStyle = `rgba(0,0,0,${0.5 * opH})`; 
            for(let y=0; y<saveC.height; y+=4) {
                ctx.fillRect(0, y, saveC.width, 2);
            }
        }
        const opV = document.getElementById('scanlineVertOp').value / 100;
        if(opV > 0) {
            ctx.fillStyle = `rgba(0,0,0,${0.5 * opV})`;
            for(let x=0; x<saveC.width; x+=4) {
                ctx.fillRect(x, 0, 2, saveC.height);
            }
        }
    }

    const link = document.createElement('a');
    link.download = 'ditherpunk_export.png';
    link.href = saveC.toDataURL();
    link.click();
}
