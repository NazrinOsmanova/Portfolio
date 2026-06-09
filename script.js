// ── THEME & LANG STATE ──
let currentLang = 'az';
let currentTheme = 'light';

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme();
}

function applyTheme() {
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-toggle').textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('theme-toggle').textContent = '🌙';
  }
}

function setLang(lang) {
  currentLang = lang;
  document.getElementById('btn-az').classList.toggle('active-lang', lang === 'az');
  document.getElementById('btn-en').classList.toggle('active-lang', lang === 'en');
  const activeSection = document.querySelector('.nav-item.active')?.dataset.section || 'haqqimda';
  rebuildAll();
  navigate(activeSection);
}

// expose to inline onclick
window.toggleTheme = toggleTheme;
window.setLang = setLang;

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  rebuildAll();
  navigate('haqqimda');

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.section));
  });
});

function d() { return portfolioData[currentLang]; }

function rebuildAll() {
  updateNavLabels();
  buildSidebar();
  buildSections();
}

function updateNavLabels() {
  const data = d();
  const navGroups = ['Əsas', 'Karyera', 'Bacarıqlar', 'Əlavə'];
  const labels = data.nav.groups;
  document.querySelectorAll('.nav-label').forEach((el, i) => {
    if (labels[i]) el.textContent = labels[i];
  });
  const secs = data.nav.sections;
  document.querySelectorAll('.nav-item').forEach(btn => {
    const id = btn.dataset.section;
    if (secs[id]) {
      btn.querySelector('.nav-icon').outerHTML; // keep icon
      const icon = btn.querySelector('.nav-icon');
      btn.textContent = ' ' + secs[id];
      btn.prepend(icon);
    }
  });
}

function buildSidebar() {
  const top = document.getElementById('sidebar-top');
  const p = d().personal;
  top.innerHTML = `
      <div class="avatar-ring">
        <span class="avatar-initials">NO</span>
      </div>
      <div class="sidebar-name">${p.name}</div>
      <div class="sidebar-title">${p.title}</div>
    `;
}

function navigate(id) {
  document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.section === id));
  document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === id));
  if (id === 'diller') animateLangBars();
}

function buildSections() {
  buildHaqqimda();
  buildTehsil();
  buildTecrube();
  buildTexnikiBariqlar();
  buildYumsaqBariqlar();
  buildSertifikatlar();
  buildDiller();
  buildLayiheler();
  buildKonullu();
}

function sectionHeader(title) {
  return `<div class="section-header">
        <h1 class="section-title">${title}</h1>
        <div class="section-line"></div>
    </div>`;
}

// HAQQIMDA
function buildHaqqimda() {
  const el = document.getElementById('haqqimda');
  const p = d().personal;
  const nav = d().nav;
  el.innerHTML = `
      ${sectionHeader(nav.sections.haqqimda)}
      <div class="about-bio">${p.about}</div>
      <div class="about-grid">
        <div class="about-card">
          <div class="about-card-label">Email</div>
          <div class="about-card-value"><a href="mailto:${p.email}">${p.email}</a></div>
        </div>
        <div class="about-card">
          <div class="about-card-label">LinkedIn</div>
          <div class="about-card-value"><a href="${p.linkedin}" target="_blank">linkedin.com/in/nazrin-osmanova</a></div>
        </div>
        <div class="about-card">
          <div class="about-card-label">GitHub</div>
          <div class="about-card-value"><a href="${p.github}" target="_blank">github.com/nazrinosmanova</a></div>
        </div>
        <div class="about-card">
          <div class="about-card-label">${currentLang === 'az' ? 'Ünvan' : 'Address'}</div>
          <div class="about-card-value">${p.address}</div>
        </div>
        <div class="about-card">
          <div class="about-card-label">Portfolio</div>
          <div class="about-card-value"><a href="${p.portfolio}" target="_blank">nazrinosmanova.github.io/Portfolio</a></div>
        </div>
      </div>
    `;
}

// TƏHSİL
function buildTehsil() {
  const el = document.getElementById('tehsil');
  const items = d().education.map(e => `
      <div class="timeline-item">
        <div class="timeline-org">${e.institution}</div>
        <div class="timeline-role">${e.degree}</div>
        <div class="timeline-period">${e.period}</div>
        <div style="font-size:14px;color:var(--muted);font-style:italic">${e.field}</div>
      </div>
    `).join('');
  el.innerHTML = `${sectionHeader(d().nav.sections.tehsil)}<div class="timeline">${items}</div>`;
}

// TƏCRÜBƏ
function buildTecrube() {
  const el = document.getElementById('tecrube');
  const items = d().experience.map(e => `
      <div class="timeline-item">
        <div class="timeline-org">${e.company}</div>
        <div class="timeline-role">${e.role}</div>
        <div class="timeline-period">${e.period}</div>
        <ul class="timeline-tasks">
          ${e.tasks.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  el.innerHTML = `${sectionHeader(d().nav.sections.tecrube)}<div class="timeline">${items}</div>`;
}

// TEXNİKİ BACARIQLAR
function buildTexnikiBariqlar() {
  const el = document.getElementById('texniki-bacariqlar');
  const groups = d().technicalSkills.map(g => `
      <div class="skills-group">
        <div class="skills-group-title">${g.category}</div>
        <div class="skills-tags">
          ${g.items.map(i => `<span class="skill-tag">${i}</span>`).join('')}
        </div>
      </div>
    `).join('');
  el.innerHTML = `${sectionHeader(d().nav.sections['texniki-bacariqlar'])}${groups}`;
}

// YUMSAQ BACARIQLAR
function buildYumsaqBariqlar() {
  const el = document.getElementById('yumsaq-bacariqlar');
  const items = d().softSkills.map(s => `
      <div class="soft-skill-item">
        <span class="soft-skill-dot"></span>
        ${s}
      </div>
    `).join('');
  el.innerHTML = `${sectionHeader(d().nav.sections['yumsaq-bacariqlar'])}<div class="soft-skills-grid">${items}</div>`;
}

// SERTİFİKATLAR
function buildSertifikatlar() {
  const el = document.getElementById('sertifikatlar');
  const items = d().certificates.map(c => `
      <div class="cert-item">
        <div class="cert-left">
          <div class="cert-name">${c.name}</div>
          <div class="cert-meta">
            ${c.issuer ? `<span>${c.issuer}</span>` : ''}
          </div>
        </div>
        <div class="cert-date">${c.date}</div>
        ${c.link ? `<a class="cert-link" href="${c.link}" target="_blank">↗</a>` : ''}
      </div>
    `).join('');
  el.innerHTML = `${sectionHeader(d().nav.sections.sertifikatlar)}<div class="cert-grid">${items}</div>`;
}

// DİLLƏR
function buildDiller() {
  const el = document.getElementById('diller');
  const items = d().languages.map(l => `
      <div class="lang-item">
        <div class="lang-header">
          <span class="lang-name">${l.lang}</span>
          <span class="lang-level">${l.level}</span>
        </div>
        <div class="lang-bar">
          <div class="lang-fill" data-pct="${l.percent}" style="width:0%"></div>
        </div>
      </div>
    `).join('');
  el.innerHTML = `${sectionHeader(d().nav.sections.diller)}<div class="lang-list">${items}</div>`;
}

function animateLangBars() {
  document.querySelectorAll('.lang-fill').forEach(bar => {
    const pct = bar.dataset.pct;
    setTimeout(() => { bar.style.width = pct + '%'; }, 80);
  });
}

// ŞƏXSİ LAYİHƏLƏR
function buildLayiheler() {
  const el = document.getElementById('layiheler');
  const data = d();
  const keys = Object.keys(data.projects);
  const countLabel = data.nav.projectCount;

  const cards = keys.map(k => {
    const p = data.projects[k];
    return `
        <div class="project-card" data-project="${k}" style="--card-accent:${p.color}">
          <span class="project-card-count">${p.items.length} ${countLabel}</span>
          <span class="project-card-icon">${p.icon}</span>
          <div class="project-card-label">${p.label}</div>
          <div class="project-card-desc">${p.description}</div>
        </div>
      `;
  }).join('');

  const detailPanels = keys.map(k => {
    const p = data.projects[k];
    const items = p.items.map(item => `
        <div class="project-item">
          <div class="project-item-top">
            <div class="project-item-name">${item.name}</div>
            ${item.link ? `<a class="project-item-link" href="${item.link}" target="_blank">↗ ${currentLang === 'az' ? 'Bax' : 'View'}</a>` : ''}
          </div>
          <div class="project-item-desc">${item.description}</div>
          <div class="project-tags">
            ${item.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
        </div>
      `).join('');

    return `
        <div class="project-detail" id="detail-${k}">
          <div class="project-detail-header">
            <button class="back-btn" data-back="layiheler">${data.nav.backBtn}</button>
            <div class="project-detail-title">${p.icon} ${p.label}</div>
          </div>
          <div class="project-items">${items}</div>
        </div>
      `;
  }).join('');

  el.innerHTML = `
      ${sectionHeader(data.nav.sections.layiheler)}
      <div id="project-cards-wrap">
        <div class="project-cards">${cards}</div>
      </div>
      <div id="project-details-wrap">${detailPanels}</div>
    `;

  el.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.project;
      el.querySelector('#project-cards-wrap').style.display = 'none';
      el.querySelectorAll('.project-detail').forEach(d => d.classList.remove('visible'));
      const detail = el.querySelector(`#detail-${key}`);
      if (detail) detail.classList.add('visible');
    });
  });

  el.addEventListener('click', e => {
    const btn = e.target.closest('.back-btn');
    if (btn) {
      el.querySelector('#project-cards-wrap').style.display = '';
      el.querySelectorAll('.project-detail').forEach(d => d.classList.remove('visible'));
    }
  });
}

// KÖNÜLLü TƏCRÜBƏ
function buildKonullu() {
  const el = document.getElementById('konullu');
  const items = d().volunteer.map(v => `
      <div class="timeline-item">
        <div class="timeline-org">${v.org}</div>
        <div class="timeline-role">${v.role}</div>
        <div class="timeline-period">${v.period}</div>
        <ul class="timeline-tasks">
          ${v.tasks.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  el.innerHTML = `${sectionHeader(d().nav.sections.konullu)}<div class="timeline">${items}</div>`;
}
