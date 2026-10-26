const projects = [
  {
    id: "shipboard",
    number: "01",
    title: "ShipBoard",
    subtitle: "Kolaborasi tim, proyek, dan pekerjaan sehari-hari.",
    categories: ["web", "mobile", "systems"],
    categoryLabel: "WEB + MOBILE",
    summary: "Platform kolaborasi untuk mengelola workspace, proyek, masukan pengguna, dan pekerjaan tim. Web dan aplikasi Flutter berbagi alur kerja yang sama.",
    scope: ["Workspace, proyek, dan papan Kanban", "Masukan publik, roadmap, dan catatan rilis", "Klien mobile untuk Android dan iOS"],
    stack: ["Laravel", "Flutter", "REST API"],
    visual: "shipboard",
    tone: "lavender"
  },
  {
    id: "intrapdf",
    number: "02",
    title: "IntraPDF",
    subtitle: "Alur pengolahan dokumen PDF untuk tim.",
    categories: ["web", "systems"],
    categoryLabel: "WEB • PDF WORKFLOW",
    summary: "Aplikasi internal untuk merapikan rangkaian pekerjaan dokumen PDF dengan antarmuka web dan pemrosesan di backend.",
    scope: ["Kompres, gabung, pisah, dan susun halaman", "Konversi gambar, ekstrak gambar, dan pratinjau", "Watermark, nomor halaman, serta proteksi PDF"],
    stack: ["React", "TypeScript", "FastAPI", "PDF.js"],
    visual: "pdf",
    tone: "peach"
  },
  {
    id: "simplepos",
    number: "03",
    title: "SimplePos Offline",
    subtitle: "Operasional toko, dari kasir sampai stok.",
    categories: ["web", "mobile", "systems"],
    categoryLabel: "WEB + MOBILE",
    summary: "Rangkaian aplikasi kasir dan pengelolaan toko yang mencakup transaksi, barang, persediaan, pembelian, serta laporan.",
    scope: ["Terminal kasir, transaksi, dan cetak struk", "Barang, stok rendah, mutasi, dan stok opname", "Klien mobile Flutter dan aplikasi web CodeIgniter"],
    stack: ["CodeIgniter 4", "Flutter", "MySQL"],
    visual: "pos",
    tone: "mint"
  },
  {
    id: "pocketstep",
    number: "04",
    title: "Pocketstep Studio",
    subtitle: "Penerbitan aplikasi, dari satu ruang kerja.",
    categories: ["web"],
    categoryLabel: "WEB PLATFORM",
    summary: "Website publisher aplikasi berbahasa Indonesia dan Inggris, dengan panel admin untuk mengelola katalog, platform, artikel bantuan, FAQ, rilis, dan media.",
    scope: ["Katalog aplikasi dengan konten dua bahasa", "Pengelolaan artikel, FAQ, rilis, dan media", "SimplePos Offline sebagai konten awal"],
    stack: ["CodeIgniter 4", "Shield", "Tailwind CSS", "MySQL"],
    visual: "studio",
    tone: "blue"
  },
  {
    id: "solok-terpadu",
    number: "05",
    title: "Solok Terpadu",
    subtitle: "Layanan kota dalam satu aplikasi.",
    categories: ["web", "systems"],
    categoryLabel: "LAYANAN PUBLIK",
    summary: "Portal informasi untuk aplikasi Super Apps Kota Solok yang menghubungkan fasilitas umum, layanan kependudukan, kontak darurat, CCTV, dan direktori publik.",
    scope: ["Halaman informasi aplikasi dan kebijakan", "Backend web, autentikasi, dan API", "Konten layanan publik dan kanal dukungan"],
    stack: ["Laravel", "PHP", "REST API"],
    visual: "solok",
    tone: "sky"
  },
  {
    id: "sodija",
    number: "06",
    title: "Solok Diujung Jari",
    subtitle: "Temukan informasi dan fasilitas sekitar.",
    categories: ["web"],
    categoryLabel: "LAYANAN PUBLIK",
    summary: "Portal publik untuk menjelajahi fasilitas, agenda, dan informasi Kota Solok, dengan pencarian, usulan fasilitas, dan chatbot.",
    scope: ["Direktori fasilitas publik dan pencarian", "Agenda, halaman informasi, dan chatbot", "Usulan fasilitas dan pengelolaan admin"],
    stack: ["Laravel", "Blade", "Maps"],
    visual: "sodija",
    tone: "orange"
  },
  {
    id: "palado",
    number: "07",
    title: "Palado",
    subtitle: "Layanan administrasi kependudukan.",
    categories: ["web", "systems"],
    categoryLabel: "LAYANAN PUBLIK",
    summary: "Aplikasi layanan administrasi kependudukan untuk Disdukcapil Kota Solok. Saya bergabung pada tahap pengembangan lanjutan dan refactor, bukan membangun aplikasi ini dari nol.",
    contribution: "Melanjutkan pengembangan dan melakukan refactor pada codebase existing yang sebelumnya dibangun developer lain.",
    scope: ["Pengembangan lanjutan aplikasi yang sudah berjalan", "Refactor pada codebase existing", "Aplikasi web dan struktur data berbasis MySQL"],
    stack: ["CodeIgniter 3", "PHP", "MySQL"],
    visual: "palado",
    tone: "rose"
  }
];

const visualMarkup = {
  shipboard: `<div class="mock-window mock-board"><div class="mock-top"><span>PRODUCT / SPRINT</span><i></i><i></i><i></i></div><div class="mock-title">Sprint minggu ini <b>•••</b></div><div class="mock-columns"><div><label>TO DO <i>2</i></label><span class="mock-task task-a">Perbaiki alur akses</span><span class="mock-task task-b">Tulis catatan rilis</span></div><div><label>IN PROGRESS <i>1</i></label><span class="mock-task task-c">Halaman proyek</span></div><div><label>DONE <i>2</i></label><span class="mock-task task-d">Pencarian papan</span></div></div><div class="mock-avatars"><b>AN</b><b>RA</b><b>+3</b></div></div>`,
  pdf: `<div class="mock-pdf"><div class="pdf-toolbar"><span>▣</span><i></i><i></i><i></i><b>•••</b></div><div class="pdf-body"><div class="pdf-pages"><span class="page page-back"></span><span class="page page-front"><i></i><i></i><i></i><b>PDF</b></span></div><div class="pdf-tools"><span>TOOLS</span><b>Merge pages <i>↗</i></b><b>Optimize file <i>↗</i></b><b>Add watermark <i>↗</i></b></div></div></div>`,
  pos: `<div class="mock-pos"><div class="pos-side"><b>SP.</b><i>▦</i><i>▤</i><i>◷</i><i>⚙</i></div><div class="pos-main"><div class="pos-top"><span>Point of sale</span><i>Kasir / 01</i></div><div class="pos-products"><span><b>01</b><i>Minuman</i></span><span><b>02</b><i>Makanan</i></span><span><b>03</b><i>Lainnya</i></span></div><div class="pos-receipt"><label>KERANJANG <b>02</b></label><span>Item belanja <i>Rp 24.000</i></span><span>Diskon <i>− Rp 2.000</i></span><strong>Total <i>Rp 22.000</i></strong><em>LANJUTKAN PEMBAYARAN ↗</em></div></div></div>`,
  studio: `<div class="mock-studio"><div class="studio-rail"><b>PS.</b><i>◫</i><i>▣</i><i>◌</i></div><div class="studio-main"><div class="studio-bar"><span>APP CATALOG</span><b>+ Tambah aplikasi</b></div><div class="studio-feature"><span>FEATURED APP</span><strong>Board<br />Steps</strong><i>↗</i></div><div class="studio-lines"><span><i></i><b>Artikel bantuan</b><small>04</small></span><span><i></i><b>Catatan versi</b><small>02</small></span></div></div></div>`,
  solok: `<div class="mock-civic"><div class="civic-head"><span>S O L O K&nbsp; T E R P A D U</span><i>☰</i></div><div class="civic-hello"><small>SELAMAT DATANG</small><b>Semua layanan,<br />satu aplikasi.</b></div><div class="civic-grid"><span><i>⌂</i>Fasilitas</span><span><i>♡</i>Layanan</span><span><i>◉</i>Darurat</span><span><i>▦</i>Direktori</span></div></div>`,
  sodija: `<div class="mock-map"><div class="map-nav"><b>SDJ.</b><span>Jelajahi Solok</span><i>⌕</i></div><div class="map-lines"><i></i><i></i><i></i><i></i><i></i><b class="map-pin pin-a">⌂</b><b class="map-pin pin-b">✦</b><b class="map-pin pin-c">⌖</b></div><div class="map-card"><span>FASILITAS PUBLIK</span><b>Temukan tempat<br />di sekitarmu <i>↗</i></b></div></div>`,
  palado: `<div class="mock-population"><div class="population-head"><span>PALADO / PELAYANAN</span><b>☰</b></div><div class="population-welcome"><i>◉</i><span>LAYANAN KEPENDUDUKAN</span><b>Administrasi<br />lebih tertata.</b></div><div class="population-list"><span><i>01</i>Data penduduk <b>↗</b></span><span><i>02</i>Kartu keluarga <b>↗</b></span><span><i>03</i>Perubahan data <b>↗</b></span></div></div>`
};

const config = window.PORTFOLIO_CONFIG || {};
const cleanText = (value, fallback) => typeof value === "string" && value.trim() ? value.trim() : fallback;
const profileName = cleanText(config.name, "Ryan Syahputera");
const profileRole = cleanText(config.role, "Web & Mobile Developer");

document.querySelectorAll("[data-profile-name]").forEach((node) => {
  node.textContent = profileName;
});
document.querySelectorAll("[data-profile-role]").forEach((node) => {
  node.textContent = profileRole;
});
document.title = `${profileName} — Portofolio digital`;
document.getElementById("year").textContent = new Date().getFullYear();

const profilePhotoUrl = typeof config.photo === "string" ? config.photo.trim() : "";
const profilePhotoImage = document.getElementById("profile-photo-image");
const profilePhotoFallback = document.getElementById("profile-photo-fallback");
if (profilePhotoUrl && profilePhotoImage && profilePhotoFallback) {
  profilePhotoImage.src = profilePhotoUrl;
  profilePhotoImage.hidden = false;
  profilePhotoImage.addEventListener("load", () => {
    profilePhotoFallback.hidden = true;
  }, { once: true });
  profilePhotoImage.addEventListener("error", () => {
    profilePhotoImage.hidden = true;
    profilePhotoFallback.hidden = false;
  }, { once: true });
}

const grid = document.getElementById("project-grid");
const renderProject = (project) => `
  <article class="project-card tone-${project.tone}" data-category="${project.categories.join(" ")}">
    <div class="project-visual visual-${project.visual}" aria-hidden="true">${visualMarkup[project.visual]}</div>
    <div class="project-card-copy">
      <div class="project-meta"><span>${project.categoryLabel}</span><span>${project.number} / 07</span></div>
      <h3>${project.title}</h3>
      <p>${project.subtitle}</p>
      <button class="project-open" type="button" data-project-id="${project.id}" aria-label="Lihat detail proyek ${project.title}">Lihat detail <span>↗</span></button>
    </div>
    <span class="card-corner" aria-hidden="true">${project.number}</span>
  </article>`;

function showProjects(filter = "all") {
  const visibleProjects = projects.filter((project) => filter === "all" || project.categories.includes(filter));
  grid.innerHTML = visibleProjects.map(renderProject).join("");
}
showProjects();

document.getElementById("project-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    const selected = chip === button;
    chip.classList.toggle("is-active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  showProjects(button.dataset.filter);
});

const dialog = document.getElementById("project-dialog");
const dialogElements = {
  kicker: document.getElementById("dialog-kicker"),
  category: document.getElementById("dialog-category"),
  title: document.getElementById("dialog-title"),
  summary: document.getElementById("dialog-summary"),
  scope: document.getElementById("dialog-scope"),
  stack: document.getElementById("dialog-stack"),
  role: document.getElementById("dialog-role"),
  roleText: document.getElementById("dialog-role-text"),
  actions: document.getElementById("dialog-actions"),
  repo: document.getElementById("dialog-repo"),
  demo: document.getElementById("dialog-demo")
};

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project-id]");
  if (!button) return;
  const project = projects.find((item) => item.id === button.dataset.projectId);
  if (!project) return;
  dialogElements.kicker.textContent = `PROJECT / ${project.number}`;
  dialogElements.category.textContent = project.categoryLabel;
  dialogElements.title.textContent = project.title;
  dialogElements.summary.textContent = project.summary;
  dialogElements.role.hidden = !project.contribution;
  dialogElements.roleText.textContent = project.contribution || "";
  dialogElements.scope.innerHTML = project.scope.map((item) => `<li>${item}</li>`).join("");
  dialogElements.stack.innerHTML = project.stack.map((item) => `<span>${item}</span>`).join("");
  const links = (config.projectLinks && config.projectLinks[project.id]) || {};
  const validLink = (value) => typeof value === "string" && /^https:\/\//.test(value.trim());
  dialogElements.repo.hidden = !validLink(links.repo);
  dialogElements.demo.hidden = !validLink(links.demo);
  if (validLink(links.repo)) dialogElements.repo.href = links.repo.trim();
  if (validLink(links.demo)) dialogElements.demo.href = links.demo.trim();
  dialogElements.actions.hidden = dialogElements.repo.hidden && dialogElements.demo.hidden;
  dialog.showModal();
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const email = typeof config.email === "string" ? config.email.trim() : "";
const github = typeof config.github === "string" ? config.github.trim() : "";
const whatsapp = typeof config.whatsapp === "string" ? config.whatsapp.replace(/\D/g, "") : "";
const linkedin = typeof config.linkedin === "string" ? config.linkedin.trim() : "";
const emailLink = document.getElementById("email-link");
const githubLink = document.getElementById("github-link");
const whatsappLink = document.getElementById("whatsapp-link");
const linkedinLink = document.getElementById("linkedin-link");
if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  emailLink.href = `mailto:${email}`;
  emailLink.hidden = false;
  emailLink.setAttribute("aria-label", `Kirim email ke ${email}`);
}
if (github && /^https:\/\/github\.com\/[A-Za-z0-9-]+\/?$/.test(github)) {
  githubLink.href = github.replace(/\/$/, "");
  githubLink.hidden = false;
}
if (whatsapp && whatsapp.length >= 9 && whatsapp.length <= 15) {
  whatsappLink.href = `https://wa.me/${whatsapp}`;
  whatsappLink.hidden = false;
}
if (linkedin && /^https:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9-_%]+\/?$/.test(linkedin)) {
  linkedinLink.href = linkedin.replace(/\/$/, "");
  linkedinLink.hidden = false;
}
if (emailLink.hidden && githubLink.hidden && whatsappLink.hidden && linkedinLink.hidden) {
  document.getElementById("contact-setup").hidden = false;
} else {
  document.getElementById("contact-setup").hidden = true;
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("is-open", !expanded);
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".project-card, .focus-list > div, .section-heading, .about-copy, .contact-section > h2").forEach((element) => observer.observe(element));
