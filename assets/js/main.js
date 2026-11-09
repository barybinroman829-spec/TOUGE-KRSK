
// ===== DATA =====
const accountsData = [
    { name: 'Такуми Фудживара', car: 'Toyota AE86 Trueno', initials: '拓', color: '#F5F5F5', wins: 47, km: 12400, rating: 98, badges: [{text:'Призрак Акины',cls:'badge-red'},{text:'Дрифт-Кинг',cls:'badge-yellow'},{text:'Тофу-Мастер',cls:'badge-blue'}] },
    { name: 'Кэйсуке Такахаси', car: 'Mazda RX-7 FD3S', initials: '啓', color: '#E63946', wins: 38, km: 9800, rating: 95, badges: [{text:'Красная комета',cls:'badge-red'},{text:'Даунхилл',cls:'badge-yellow'}] },
    { name: 'Рёсуке Такахаси', car: 'Mazda RX-7 FC3S', initials: '涼', color: '#00B4D8', wins: 52, km: 15200, rating: 99, badges: [{text:'Белая комета',cls:'badge-blue'},{text:'Стратег',cls:'badge-yellow'},{text:'Project D',cls:'badge-red'}] },
    { name: 'Идзаки', car: 'Nissan Silvia S13', initials: '樹', color: '#FFD60A', wins: 12, km: 3200, rating: 72, badges: [{text:'Новичок',cls:'badge-yellow'}] },
    { name: 'Кэндо', car: 'Mitsubishi Evo III', initials: '健', color: '#4A90D9', wins: 21, km: 6100, rating: 82, badges: [{text:'Апхилл',cls:'badge-blue'},{text:'Myogi',cls:'badge-red'}] },
    { name: 'Сэйджи Ивасе', car: 'Nissan Skyline R32', initials: '星', color: '#9B59B6', wins: 33, km: 11000, rating: 91, badges: [{text:'Император',cls:'badge-red'},{text:'AWD Мастер',cls:'badge-blue'}] },
];

let routesData = [
    { name: 'Ночной забег по Акине', driver: 'Такуми Фудживара', type: 'downhill', start: 'Вершина Акины', end: 'Подножие Акины', length: 5.8, difficulty: 'hard', desc: 'Классический маршрут по пяти шпилькам горы Акина. На пятом повороте — знаменитый инерционный дрифт, при котором заднее колесо не касается бордюра.' },
    { name: 'Акаги — скоростной спуск', driver: 'Кэйсуке Такахаси', type: 'downhill', start: 'Вершина Акаги', end: 'Парковка у подножия', length: 7.2, difficulty: 'medium', desc: 'Широкая и быстрая трасса, где преимущество у мощных машин. FD3S здесь раскрывает свой потенциал — турбонаддув на максимум.' },
    { name: 'Мёги — техничный маршрут', driver: 'Кэндо', type: 'touge', start: 'Ворота Мёги', end: 'Святилище Мёги', length: 6.5, difficulty: 'extreme', desc: 'Один из самых сложных маршрутов. Слепые повороты, крутые уклоны и узкая дорога. Требует идеального знания трассы.' },
    { name: 'Usui Pass — гравийный участок', driver: 'Рёсуке Такахаси', type: 'downhill', start: 'Вход Усуи', end: 'Выход Усуи', length: 4.3, difficulty: 'hard', desc: 'Уникальный участок с гравийным покрытием. Занос начинается раньше, требуется контроль на пределе. Идеально для тренировки чувства автомобиля.' },
];

let placesData = [
    { name: 'Гора Акина (Харуна)', region: 'Префектура Гумма', type: 'downhill', desc: 'Легендарная гора, где всё началось. Пять шпилек, узкая дорога, туман по утрам. Каждое утро Такуми проходил этот путь на своей AE86.', visits: 2847, rating: 5, gradient: 'linear-gradient(135deg,#1a2a3a,#0a1520)' },
    { name: 'Гора Акаги', region: 'Префектура Гумма', type: 'downhill', desc: 'Домашняя трасса команды Redsuns. Более широкая и быстрая, чем Акина. Здесь Кэйсуке Такахаси оттачивал свой даунхилл-мастерство.', visits: 1923, rating: 4, gradient: 'linear-gradient(135deg,#2a1a1a,#1a0a0a)' },
    { name: 'Парковка Фудживара Тофу', region: 'Префектура Гумма', type: 'garage', desc: 'Место, где всё начинается. Старая доставка тофу Фудживары — колыбель легенды. Здесь Бунта тайно тренировал Такуми, наливая воду в стакан на приборной панели.', visits: 1456, rating: 5, gradient: 'linear-gradient(135deg,#2a2a2a,#1a1a1a)' },
    { name: 'Святилище Мёги', region: 'Префектура Гумма', type: 'scenic', desc: 'Живописная видовая точка на вершине горы Мёги. Отсюда открывается панорама на весь регион Канто. Идеальное место для встречи рассвета после ночной гонки.', visits: 987, rating: 5, gradient: 'linear-gradient(135deg,#1a2a1a,#0a150a)' },
    { name: 'Мёги — техничная секция', region: 'Префектура Гумма', type: 'downhill', desc: 'Самая сложная часть перевала Мёги. Серия S-образных поворотов с перепадом высоты. Требует точного контроля и отличного знания трассы.', visits: 1234, rating: 4, gradient: 'linear-gradient(135deg,#1a1a2e,#0a0a1a)' },
    { name: 'Гараж SpeedStars', region: 'Префектура Гумма', type: 'garage', desc: 'Гараж команды Akina SpeedStars. Место встреч, обсуждений стратегий и подготовки машин. Здесь собирались перед каждой гонкой.', visits: 876, rating: 3, gradient: 'linear-gradient(135deg,#2a2020,#1a1010)' },
];

// ===== NAVIGATION =====
let currentPage = 'home';

function navigate(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.getElementById('page-' + page).classList.add('page-transition');
    
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.page === page) a.classList.add('active');
    });
    
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu
    document.getElementById('navLinks').classList.remove('active');
    
    // Re-trigger reveals
    setTimeout(() => {
        document.querySelectorAll('#page-' + page + ' .reveal').forEach(el => {
            revealObserver.observe(el);
        });
    }, 100);
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// ===== NOTIFICATION =====
function showNotification(title, text) {
    const notif = document.getElementById('notification');
    document.getElementById('notifTitle').textContent = title;
    document.getElementById('notifText').textContent = text;
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 3000);
}

// ===== RENDER ACCOUNTS =====
function renderAccounts() {
    const grid = document.getElementById('accountsGrid');
    grid.innerHTML = accountsData.map((acc, i) => `
        <div class="account-card reveal">
            <div class="account-avatar" style="background:linear-gradient(135deg,${acc.color},${acc.color}88)">${acc.initials}</div>
            <div class="account-name">${acc.name}</div>
            <div class="account-car">${acc.car}</div>
            <div class="account-stats">
                <div class="acc-stat">
                    <div class="acc-stat-value">${acc.wins}</div>
                    <div class="acc-stat-label">Побед</div>
                </div>
                <div class="acc-stat">
                    <div class="acc-stat-value">${(acc.km/1000).toFixed(1)}K</div>
                    <div class="acc-stat-label">КМ пройдено</div>
                </div>
                <div class="acc-stat">
                    <div class="acc-stat-value">${acc.rating}</div>
                    <div class="acc-stat-label">Рейтинг</div>
                </div>
                <div class="acc-stat">
                    <div class="acc-stat-value">#${i+1}</div>
                    <div class="acc-stat-label">Ранг</div>
                </div>
            </div>
            <div class="account-badges">
                ${acc.badges.map(b => `<span class="badge ${b.cls}">${b.text}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// ===== RENDER ROUTES =====
function renderRoutes() {
    const list = document.getElementById('routesList');
    list.innerHTML = routesData.map((r, i) => `
        <div class="route-card reveal" onclick="this.classList.toggle('open')">
            <div class="route-header">
                <div class="route-icon" style="background:${r.difficulty==='extreme'?'rgba(230,57,70,0.2)':r.difficulty==='hard'?'rgba(255,214,10,0.2)':r.difficulty==='medium'?'rgba(0,180,216,0.2)':'rgba(76,175,80,0.2)'}">
                    ${r.type==='downhill'?'⬇':r.type==='uphill'?'⬆':r.type==='touge'?'↕':'⏱'}
                </div>
                <div>
                    <div class="route-title">${r.name}</div>
                    <div class="route-meta">${r.driver} · <span>${r.length} км</span> · ${getDifficultyLabel(r.difficulty)}</div>
                </div>
                <div class="route-toggle">+</div>
            </div>
            <div class="route-body">
                <div class="route-body-inner">
                    <div class="route-path">
                        <span class="route-point">${r.start}</span>
                        <span class="route-arrow">→</span>
                        <span class="route-point">${r.end}</span>
                    </div>
                    <div class="route-description">${r.desc}</div>
                    <div class="route-tags">
                        <span class="route-tag">${getTypeLabel(r.type)}</span>
                        <span class="route-tag">${getDifficultyLabel(r.difficulty)}</span>
                        <span class="route-tag">${r.length} км</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function getDifficultyLabel(d) {
    const m = {easy:'Лёгкий',medium:'Средний',hard:'Сложный',extreme:'Экстремальный'};
    return m[d]||d;
}
function getTypeLabel(t) {
    const m = {downhill:'Даунхилл',uphill:'Апхилл',touge:'Тогэ','time-attack':'Time Attack'};
    return m[t]||t;
}

// ===== ADD ROUTE =====
function addRoute(e) {
    e.preventDefault();
    const name = document.getElementById('routeName').value;
    const driver = document.getElementById('routeDriver').value;
    const type = document.getElementById('routeType').value;
    const start = document.getElementById('routeStart').value;
    const end = document.getElementById('routeEnd').value;
    const length = document.getElementById('routeLength').value;
    const desc = document.getElementById('routeDesc').value;
    const difficulty = document.getElementById('routeDifficulty').value;
    
    routesData.unshift({ name, driver, type, start, end, length: parseFloat(length), difficulty, desc });
    renderRoutes();
    document.getElementById('routeForm').reset();
    showNotification('Маршрут добавлен', `«${name}» успешно добавлен в список`);
    
    setTimeout(() => {
        document.querySelectorAll('#page-routes .reveal').forEach(el => {
            revealObserver.observe(el);
        });
    }, 100);
}

// ===== RENDER PLACES =====
function renderPlaces() {
    const grid = document.getElementById('placesGrid');
    grid.innerHTML = placesData.map(p => `
        <div class="place-card reveal">
            <div class="place-image">
                <div class="place-image-bg" style="background:${p.gradient}"></div>
                <div class="place-overlay">
                    <span class="place-type-badge badge-${p.type}">${getTypeLabel(p.type)}</span>
                </div>
            </div>
            <div class="place-details">
                <div class="place-name">${p.name}</div>
                <div class="place-location">📍 ${p.region}</div>
                <div class="place-desc">${p.desc}</div>
                <div class="place-footer">
                    <div class="place-visits">👁 ${p.visits.toLocaleString()} отметок</div>
                    <div class="place-rating">
                        ${[1,2,3,4,5].map(s => `<span class="star ${s <= p.rating ? '' : 'empty'}">★</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== ADD PLACE =====
function addPlace(e) {
    e.preventDefault();
    const name = document.getElementById('placeName').value;
    const region = document.getElementById('placeRegion').value;
    const type = document.getElementById('placeType').value;
    const desc = document.getElementById('placeDesc').value;
    const visited = document.getElementById('placeVisited').value;
    const rating = parseInt(document.getElementById('placeRating').value);
    
    const selectedTags = Array.from(document.querySelectorAll('#placeTags .place-form-tag.selected')).map(el => el.dataset.tag);
    
    const gradients = [
        'linear-gradient(135deg,#1a2a3a,#0a1520)',
        'linear-gradient(135deg,#2a1a1a,#1a0a0a)',
        'linear-gradient(135deg,#1a2a1a,#0a150a)',
        'linear-gradient(135deg,#2a2a2a,#1a1a1a)',
        'linear-gradient(135deg,#2a1a2a,#1a0a1a)',
    ];
    
    placesData.unshift({
        name, region, type, desc,
        visits: visited === 'yes' ? 1 : 0,
        rating,
        gradient: gradients[Math.floor(Math.random() * gradients.length)]
    });
    
    renderPlaces();
    document.getElementById('placeForm').reset();
    document.querySelectorAll('#placeTags .place-form-tag.selected').forEach(el => el.classList.remove('selected'));
    showNotification('Место добавлено', `«${name}» успешно добавлено!`);
    
    setTimeout(() => {
        document.querySelectorAll('#page-places .reveal').forEach(el => {
            revealObserver.observe(el);
        });
    }, 100);
}

function togglePlaceTag(el) {
    el.classList.toggle('selected');
}

// ===== POPULATE DRIVER SELECT =====
function populateDriverSelect() {
    const sel = document.getElementById('routeDriver');
    accountsData.forEach(acc => {
        const opt = document.createElement('option');
        opt.value = acc.name;
        opt.textContent = acc.name;
        sel.appendChild(opt);
    });
}

// ===== TRACK TOGGLE =====
let activeTrack = null;
function toggleTrack(el) {
    const bars = el.querySelector('.audio-bars');
    const btn = el.querySelector('.play-btn');
    if (activeTrack && activeTrack !== el) {
        activeTrack.classList.remove('playing');
        activeTrack.querySelector('.audio-bars').classList.add('paused');
        activeTrack.querySelector('.play-btn').textContent = '▶';
    }
    if (el.classList.contains('playing')) {
        el.classList.remove('playing');
        bars.classList.add('paused');
        btn.textContent = '▶';
        activeTrack = null;
    } else {
        el.classList.add('playing');
        bars.classList.remove('paused');
        btn.textContent = '⏸';
        activeTrack = el;
    }
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== SPEED COUNTER =====
function animateSpeedCounter() {
    const speedEl = document.getElementById('speedValue');
    const rpmEl = document.getElementById('rpmValue');
    const targetSpeed = 220;
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        
        speedEl.textContent = Math.floor(eased * targetSpeed);
        rpmEl.textContent = Math.floor(eased * 9500) + ' ОБ/МИН';
        
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ===== STAT COUNTER =====
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            let current = 0;
            const duration = 2000;
            const startTime = performance.now();
            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                current = Math.floor(eased * target);
                el.textContent = current.toLocaleString();
                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
            statObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-count]').forEach(el => statObserver.observe(el));

// ===== SPEED LINES =====
const canvas = document.getElementById('speedCanvas');
const ctx = canvas.getContext('2d');
let speedLines = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class SpeedLine {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 15 + 5;
        this.opacity = Math.random() * 0.06 + 0.01;
        this.width = Math.random() * 1.5 + 0.5;
    }
    update() {
        this.x += this.speed;
        if (this.x > canvas.width + this.length) {
            this.reset();
            this.x = -this.length;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length, this.y);
        ctx.strokeStyle = `rgba(230, 57, 70, ${this.opacity})`;
        ctx.lineWidth = this.width;
        ctx.stroke();
    }
}

for (let i = 0; i < 50; i++) speedLines.push(new SpeedLine());

function animateSpeedLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    speedLines.forEach(l => { l.update(); l.draw(); });
    requestAnimationFrame(animateSpeedLines);
}
animateSpeedLines();

// ===== LOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
        const needle = document.getElementById('tachoNeedle');
        if (needle) needle.classList.add('active');
        animateSpeedCounter();
    }, 2200);
});

// ===== INIT =====
renderAccounts();
renderRoutes();
renderPlaces();
populateDriverSelect();
