/* ============================================================
   DATA  –  bütün məzmun burada saxlanılır
   ============================================================ */

const TABS = [
    { id: 'tehsil', label: 'Təhsil' },
    { id: 'tecrube', label: 'Təcrübə' },
    { id: 'bacariqlar', label: 'Texniki Bacarıqlar' },
    { id: 'sertifikatlar', label: 'Sertifikatlar' },
    { id: 'layiheler', label: 'Layihələr / Praktik İşlər' },
    { id: 'melumatlar', label: 'Şəxsi Məlumatlar' },
    { id: 'konulluluq', label: 'Könüllülük' },
    { id: 'dil', label: 'Dil Bilikləri' },
];

/* ── Təhsil ── */
const EDUCATION = [
    {
        color: 'lavender',
        title: 'Azərbaycan Texniki Universiteti',
        date: 'Sentyabr 2025 – Davam edir',
        subtitle: 'Magistratura – Kompüter Elmləri (İqtisadiyyatda Optimal İdarəetmənin Riyazi Üsulları)',
        body: 'Kompüter elmləri və riyazi modelləşdirmə istiqamətlərini özündə birləşdirən magistratura proqramı.',
    },
    {
        color: 'rose',
        title: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        date: 'Sentyabr 2021 – İyun 2025',
        subtitle: 'Bakalavr – İnformasiya Texnologiyaları',
        body: 'İnformasiya texnologiyaları üzrə bakalavr dərəcəsi. Proqramlaşdırma əsasları, alqoritmlər və sistemlər üzrə təhsil alınmışdır.',
    },
];

/* ── Təcrübə ── */
const EXPERIENCE = [
    {
        color: 'sky',
        title: 'Buta Group – Təcrübəçi',
        date: 'Oktyabr 2024 – Yanvar 2025',
        subtitle: 'Analitika / Hesabat',
        items: [
            'Excel vasitəsilə əməliyyat və biznes məlumatlarının təhlili, vizuallaşdırılması və hesabatların hazırlanması prosesində iştirak;',
            'Müxtəlif biznes istiqamətləri üzrə SWOT analizlərinin hazırlanaraq strateji qiymətləndirmə proseslərinə dəstək göstərilməsi;',
            'ERP və CRM sistemlərindən istifadə edərək məlumatların idarə olunması və biznes proseslərinin izlənilməsi;',
            'Proseslərin prosedur və daxili qaydalara uyğun şəkildə sənədləşdirilməsi və sistemləşdirilməsi.',
        ],
    },
    {
        color: 'mint',
        title: 'Azersun Holdinq – Təcrübəçi',
        date: 'İyul 2024 – Sentyabr 2024',
        subtitle: 'Proseslərin İnkişafı Departamenti',
        items: [
            'BPMN vasitəsilə biznes proseslərinin modelləşdirilməsi və proses axınlarının analizində iştirak edərək əməliyyat mərhələlərinin daha strukturlaşdırılmış formada sənədləşdirilməsinə dəstək göstərilməsi;',
            'Müxtəlif şöbələr üzrə workflow-ların hazırlanması və mövcud proseslərin təhlili vasitəsilə proses optimallaşdırılması fəaliyyətlərində iştirak;',
            'Risklərin müəyyənləşdirilməsi və qiymətləndirilməsi üçün risk matrisi hazırlanması və proses risklərinin təhlili;',
            'Şirkətdaxili prosedur və sənədlərin standartlara uyğun şəkildə hazırlanması, yenilənməsi və sistemləşdirilməsi prosesində iştirak.',
        ],
    },
];

/* ── Könüllülük ── */
const VOLUNTEERING = [
    {
        color: 'peach',
        title: 'Sofar Baku – Tədbir heyətinin üzvü',
        date: 'Noyabr 2025 – Davam edir',
        subtitle: 'Könüllü',
        items: [
            'Konsertlərdə qonaqların qarşılanması, yönləndirilməsi və sualların cavablandırılması;',
            'Tədbir zamanı yaranan məsələləri operativ şəkildə həll edərək konsertin düzgün keçirilməsinin təmin edilməsi;',
            'Tədbir öncəsi və sonrası işlərin icrası və koordinasiyasında komanda ilə sıx əməkdaşlıq.',
        ],
    },
    {
        color: 'rose',
        title: 'Baku Session (Sound of Caucasus) – Tədbir heyətinin üzvü',
        date: 'Fevral 2026',
        subtitle: 'Staff Member',
        items: [
            'İştirakçıların suallarının cavablandırılması və düzgün yönləndirilməsinin təmin edilməsi;',
            'Tədbir ərazisində nizam-intizamın qorunmasına nəzarət edilməsi;',
            'Təşkilati proseslərə dəstəyin göstərilməsi.',
        ],
    },
    {
        color: 'peach',
        title: 'IZfest – Tədbir heyətinin üzvü',
        date: 'Oktyabr 2025',
        subtitle: 'Staff Member',
        items: [
            'Tədbir və konsert öncəsi hazırlıq işlərində iştirak və tapşırıqların yerinə yetirilməsi;',
            'Qonaqların qarşılanması və yönləndirilməsi;',
            'Qonaqların suallarının cavablandırılması və yaranan problemlərin həll edilməsi.',
        ],
    },
    {
        color: 'rose',
        title: 'FrontEnd üzrə müsabiqə – Mentor',
        date: 'May 2024',
        subtitle: 'Mentor',
        items: [
            'Tapşırıqlar zamanı tələbə komandalarına rəhbərlik və dəstəyin göstərilməsi;',
            'Texniki sualların cavablandırılması;',
            'Problemlərin həlli strategiyalarının izah edilməsi;',
            'Komanda əməkdaşlığının dəstəklənməsi.',
        ],
    },
    {
        color: 'peach',
        title: '"Müasir Gənclərin İnkişafına Dəstək" İctimai Birliyi – Koordinator',
        date: 'May 2023 – Sentyabr 2023',
        subtitle: 'Könüllü Koordinator',
        items: [
            'Tələblərə uyğun layihə təkliflərinin hazırlanması və təqdim olunması;',
            'Təhsil sahəsinə aid yeni layihə ideyalarının formalaşdırılması və yazılması;',
            'Tədbir və təlim planlarının hazırlanması və təşkili.',
        ],
    },
    {
        color: 'rose',
        title: 'Azərbaycan Dövlət Neft və Sənaye Universiteti (Aurora Team) – Layihə Meneceri',
        date: 'Fevral 2023 – May 2023',
        subtitle: 'Project Manager',
        items: [
            'Layihə tapşırıqları və vaxt planlarının koordinasiyası və idarə olunması;',
            'Layihənin uyğunluğu və inkişafının təmin edilməsi üçün komanda üzvləri ilə kommunikasiya;',
            'Layihə çətinliklərinin həlli üçün risklərin qiymətləndirilməsi və problemlərin həlli;',
            'Layihə mərhələləri və nəticələri üzrə hesabat və sənədləşdirmə işlərinin aparılması.',
        ],
    },
];

/* ── Texniki Bacarıqlar ── */
const SKILL_GROUPS = [
    {
        color: 'rose',
        title: 'Analitik Alətlər',
        tags: ['SQL (MsSQL)', 'Power BI', 'Power Query', 'Data Vizualizasiya', 'Data Analizi', 'Data Təmizlənməsi'],
    },
    {
        color: 'lavender',
        title: 'Biznes Prosesləri',
        tags: ['BPMN', 'BRD hazırlanması', 'Lucidchart', 'Proses Optimallaşdırma', 'Sənədləşdirmə'],
    },
    {
        color: 'mint',
        title: 'Ofis Proqramları',
        tags: ['Excel', 'Word', 'PowerPoint', 'Outlook'],
    },
    {
        color: 'sky',
        title: 'Layihə İdarəetməsi',
        tags: ['Trello', 'ClickUp', 'Odoo', 'ERP / CRM'],
    },
    {
        color: 'peach',
        title: 'Texniki Baza',
        tags: ['GitHub', 'Alqoritm Düşüncəsi', 'Proqramlaşdırma Əsasları'],
    },
];

const SOFT_SKILLS = [
    'Analitik düşüncə', 'Komanda ilə işləmə', 'Tənqidi düşüncə',
    'Emosional zəka', 'Effektiv ünsiyyət', 'Vaxtın idarəsi',
    'Detallara diqqət', 'Problemlərin həlli',
];

/* ── Sertifikatlar ── */
const CERTIFICATES = [
    {
        name: 'Biznes İntellekti Əsasları',
        org: 'Simplilearn',
        date: '11 Mart 2026',
        link: 'https://simpli-web.app.link/e/7KqJEjSWp1b',
    },
    {
        name: 'Proses Mədənçiliyi: Məlumat Elminin Tətbiqi',
        org: 'Eindhoven Texnologiya Universiteti',
        date: '6 Dekabr 2025',
        link: 'https://www.coursera.org/account/accomplishments/verify/Z13VGLSC044Z',
    },
    {
        name: 'Biznes Analitikanın Əsasları',
        org: 'IBM',
        date: '15 Sentyabr 2025',
        link: 'https://www.coursera.org/account/accomplishments/verify/W8F5R5WJL71P',
    },
    {
        name: 'Excelin Əsasları',
        org: 'IBM',
        date: '7 Sentyabr 2025',
        link: 'https://www.credly.com/badges/3d032db1-9a58-4df6-b9c0-5498df12c449',
    },
    {
        name: 'Layihə Menecerləri üçün Süni İntellekt',
        org: 'PMI',
        date: '31 Mart 2025',
        link: 'https://www.credly.com/badges/7f2c28b7-30af-474e-bc32-8d3e82acbfa3',
    },
    {
        name: 'Exceldə Pivot Cədvəllər',
        org: 'Bilgeiş',
        date: '8 Noyabr 2024',
        link: null,
    },
    {
        name: 'APTIS (B1)',
        org: 'İngilis dili sertifikatı',
        date: 'Oktyabr 2022',
        link: null,
    },
    {
        name: 'Layihələrin İdarə Olunması',
        org: 'Azərbaycan Texniki Universiteti',
        date: '17 Mart 2022',
        link: null,
    },
];

/* ── Şəxsi Layihələr ── */
const PROJECTS = [
    {
        title: 'Biznes Tələbləri Sənədi (BRD)',
        desc: 'EduX Sertifikatlaşdırma Sisteminin Avtomatlaşdırılması üzrə hazırlanmış biznes tələbləri sənədi. Proses analizi, maraqlı tərəflərin müəyyənləşdirilməsi və sistem tələblərinin sənədləşdirilməsini əhatə edir.',
        link: 'https://swift-noise-6de.notion.site/EduX-Sertifikatla-d-rma-Sisteminin-Avtomatla-d-r-lmas-34c604d0d07480408851dab51ebcc166',
        linkLabel: 'Layihəyə bax',
    },
    {
        title: 'Power BI: Satış Analitikası Dashboard',
        desc: 'Satış məlumatları üzərində interaktiv Power BI dashboard. Satış trendlərinin vizuallaşdırılması, regional analiz və performans göstəriciləri daxildir.',
        link: 'https://github.com/NazrinOsmanova/Sales_Dashboard',
        linkLabel: 'GitHub-da bax',
    },
    {
        title: 'PCA: Yüksək Ölçülü Tibbi Verilənlərin Analizi',
        desc: 'Breast cancer verilənlər bazasında Principal Component Analysis (PCA) tətbiqi. Yüksək ölçülü tibbi məlumatların ölçülülüyünün azaldılması və klasifikasiyası.',
        link: 'https://github.com/NazrinOsmanova/PCA_Analysis_Breast_Cancer',
        linkLabel: 'GitHub-da bax',
    },
];

/* ── Şəxsi Məlumatlar ── */
const PERSONAL_INFO = [
    { label: 'Ünvan', value: 'Azərbaycan, Bakı, Xətai' },
    { label: 'Email', value: 'nazrinosmanovaa@gmail.com', href: 'mailto:nazrinosmanovaa@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/nazrin-osmanova', href: 'https://www.linkedin.com/in/nazrin-osmanova/' },
    { label: 'GitHub', value: 'github.com/NazrinOsmanova', href: 'https://github.com/NazrinOsmanova' },
];

/* ── Dil Bilikləri ── */
const LANGUAGES = [
    { name: 'Azərbaycan dili', note: 'Ana dil', badgeClass: 'native', badgeText: 'Ana dil' },
    { name: 'İngilis dili', note: 'APTIS sertifikatı', badgeClass: 'b1', badgeText: 'B1' },
];


/* ============================================================
   RENDER HELPERs
   ============================================================ */

/** Klassik kart (təhsil / iş / könüllülük) */
function renderCard({ color, title, date, subtitle, body, items }) {
    const bodyHtml = items
        ? `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`
        : `<p>${body}</p>`;
    return `
    <div class="card ${color}">
      <div class="card-accent"></div>
      <div class="card-header">
        <div class="card-title">${title}</div>
        ${date ? `<div class="card-date">${date}</div>` : ''}
      </div>
      ${subtitle ? `<div class="card-subtitle">${subtitle}</div>` : ''}
      <div class="card-body">${bodyHtml}</div>
    </div>`;
}

/** Sertifikat sırası */
function renderCertRow({ name, org, date, link }) {
    const linkHtml = link
        ? `<a class="cert-link" href="${link}" target="_blank">Sertifikata bax →</a>`
        : '';
    return `
    <div class="cert-row">
      <div>
        <div class="cert-name">${name}</div>
        <div class="cert-org">${org}</div>
        ${linkHtml}
      </div>
      <div class="cert-meta">
        <div class="cert-date">${date}</div>
      </div>
    </div>`;
}

/** Layihə kartı */
function renderProjectCard({ title, desc, link, linkLabel }) {
    return `
    <div class="project-card">
      <div class="project-title">${title}</div>
      <p class="project-desc">${desc}</p>
      <a class="project-link" href="${link}" target="_blank">${linkLabel} →</a>
    </div>`;
}

/** Şəxsi məlumat elementi */
function renderInfoItem({ label, value, href }) {
    const val = href
        ? `<a href="${href}" target="${href.startsWith('mailto') ? '_self' : '_blank'}">${value}</a>`
        : value;
    return `
    <div class="info-item">
      <div class="info-label">${label}</div>
      <div class="info-value">${val}</div>
    </div>`;
}


/* ============================================================
   SECTION BUILDERS
   ============================================================ */

const SECTIONS = {

    tehsil: () => `
    <h2 class="section-heading">Təhsil</h2>
    ${EDUCATION.map(renderCard).join('')}`,

    tecrube: () => `
    <h2 class="section-heading">Təcrübə</h2>
    ${EXPERIENCE.map(renderCard).join('')}`,

    konulluluq: () => `
    <h2 class="section-heading">Könüllülük</h2>
    ${VOLUNTEERING.map(renderCard).join('')}`,

    bacariqlar: () => `
    <h2 class="section-heading">Texniki Bacarıqlar</h2>
    <div class="skills-grid">
      ${SKILL_GROUPS.map(g => `
        <div class="skill-box ${g.color}">
          <h3>${g.title}</h3>
          ${g.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
        </div>`).join('')}
    </div>
    <p class="soft-subheading">Yumşaq Bacarıqlar</p>
    <div class="soft-grid">
      ${SOFT_SKILLS.map(s => `<span class="soft-pill">${s}</span>`).join('')}
    </div>`,

    sertifikatlar: () => `
    <h2 class="section-heading">Sertifikatlar</h2>
    <div class="cert-card">
      <div class="card-accent"></div>
      ${CERTIFICATES.map(renderCertRow).join('')}
    </div>`,

    layiheler: () => `
    <h2 class="section-heading">Şəxsi Layihələr</h2>
    ${PROJECTS.map(renderProjectCard).join('')}`,

    melumatlar: () => `
    <h2 class="section-heading">Şəxsi Məlumatlar</h2>
    <div class="info-grid">
      ${PERSONAL_INFO.map(renderInfoItem).join('')}
    </div>`,

    dil: () => `
    <h2 class="section-heading">Dil Bilikləri</h2>
    <div class="lang-card">
      <div class="card-accent"></div>
      ${LANGUAGES.map(l => `
        <div class="lang-row">
          <div>
            <div class="lang-name">${l.name}</div>
            <div class="lang-note">${l.note}</div>
          </div>
          <span class="lang-badge ${l.badgeClass}">${l.badgeText}</span>
        </div>`).join('')}
    </div>`,
};


/* ============================================================
   INIT  –  navı və bölmələri render et
   ============================================================ */

(function init() {
    const navEl = document.getElementById('navTabs');
    const contentEl = document.getElementById('contentArea');

    /* Bölmə konteynerlərini yarat */
    TABS.forEach(({ id }) => {
        const div = document.createElement('div');
        div.className = 'section';
        div.id = id;
        contentEl.appendChild(div);
    });

    /* Nav düymələrini yarat */
    TABS.forEach(({ id, label }) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.addEventListener('click', () => showSection(id, btn));
        li.appendChild(btn);
        navEl.appendChild(li);
    });

    /* İlk bölməni göstər */
    showSection(TABS[0].id, navEl.querySelector('button'));
})();


/* ============================================================
   SHOW SECTION  –  lazy render: ilk dəfə açılanda render edilir
   ============================================================ */

function showSection(id, btn) {
    /* Aktiv vəziyyəti sıfırla */
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-tabs button').forEach(b => b.classList.remove('active'));

    /* Lazy render */
    const el = document.getElementById(id);
    if (!el.dataset.rendered) {
        el.innerHTML = SECTIONS[id]();
        el.dataset.rendered = '1';
    }

    el.classList.add('active');
    btn.classList.add('active');
}