/**
 * Script Portofolio - Praktikum Pemrograman Web (PWEB)
 * Muhamad Faiq Akrom Asy Syarofi - 252410102042
 * 
 * Implementasi Manipulasi DOM:
 * 1. Filter Kategori Karya & Dynamic Work Counter (Event Listener, DOM textContent & classList toggle)
 * 2. Dark Mode / Light Mode Theme Switcher (localStorage, DOM attribute toggle, icon & label switch)
 * 3. Modal Image Lightbox Preview (Event Delegation / Listeners, DOM style & attribute manipulation, keyboard 'Escape' event)
 * 4. Salin Email ke Clipboard & Toast Notification (Clipboard API, DOM feedback & auto-dismiss setTimeout)
 * 5. Tombol Back to Top (Window Scroll Event Listener & smooth scroll)
 */

// ==========================================
// 1. FILTER KATEGORI & DYNAMIC WORK COUNTER
// ==========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');
const workCounter = document.getElementById('workCounter');

function updateWorkCounter(visibleCount, totalCount, filterName) {
  if (!workCounter) return;
  if (filterName === 'all') {
    workCounter.textContent = `Menampilkan semua ${totalCount} karya`;
  } else {
    const categoryLabel = filterName === 'app' ? 'Aplikasi' : 'Game';
    workCounter.textContent = `Menampilkan ${visibleCount} dari ${totalCount} karya (${categoryLabel})`;
  }
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update status aktif tombol filter
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    let visibleCount = 0;

    // Filter daftar karya & hitung item yang cocok
    workItems.forEach(item => {
      const match = filter === 'all' || item.dataset.cat === filter;
      item.classList.toggle('hidden', !match);
      if (match) visibleCount++;
    });

    // Update teks jumlah karya secara dinamis di DOM
    updateWorkCounter(visibleCount, workItems.length, filter);
  });
});

// ==========================================
// 2. DARK MODE / LIGHT MODE THEME SWITCHER
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeLabel) themeLabel.textContent = 'Terang';
    if (themeToggle) themeToggle.setAttribute('aria-label', 'Ganti ke mode terang');
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeLabel) themeLabel.textContent = 'Gelap';
    if (themeToggle) themeToggle.setAttribute('aria-label', 'Ganti ke mode gelap');
  }
}

// Inisialisasi tema dari localStorage atau preferensi sistem
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');
applyTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// ==========================================
// 3. MODAL IMAGE LIGHTBOX PREVIEW
// ==========================================
const lightboxModal = document.getElementById('lightboxModal');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const docFrames = document.querySelectorAll('.doc-slot-frame');

function openLightbox(src, alt, caption) {
  if (!lightboxModal || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  if (lightboxCaption) lightboxCaption.textContent = caption || alt;
  lightboxModal.classList.add('active');
  lightboxModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Mengunci scroll latar saat modal terbuka
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove('active');
  lightboxModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

docFrames.forEach(frame => {
  frame.addEventListener('click', () => {
    const img = frame.querySelector('img');
    if (!img) return;
    const slot = frame.closest('.doc-slot');
    const title = slot ? slot.querySelector('.doc-slot-title')?.textContent : img.alt;
    openLightbox(img.src, img.alt, title);
  });
});

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

// Menutup modal dengan tombol Escape pada keyboard
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
    closeLightbox();
  }
});

// ==========================================
// 4. SALIN EMAIL & TOAST NOTIFICATION
// ==========================================
const copyBtn = document.getElementById('copyBtn');
const copyBtnIcon = document.getElementById('copyBtnIcon');
const copyBtnText = document.getElementById('copyBtnText');
const toastNotification = document.getElementById('toastNotification');
const toastMessage = document.getElementById('toastMessage');
let toastTimeout;

function showToast(message) {
  if (!toastNotification) return;
  if (toastMessage) toastMessage.textContent = message;
  toastNotification.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastNotification.classList.remove('show');
  }, 2600);
}

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const emailToCopy = '252410102042@mail.unej.ac.id';
    try {
      await navigator.clipboard.writeText(emailToCopy);

      // Feedback visual pada tombol
      if (copyBtnIcon) copyBtnIcon.textContent = '✓';
      if (copyBtnText) copyBtnText.textContent = 'Tersalin!';
      copyBtn.classList.add('copied');

      showToast('Alamat email berhasil disalin ke clipboard!');

      // Kembalikan ke teks semula setelah 2 detik
      setTimeout(() => {
        if (copyBtnIcon) copyBtnIcon.textContent = '📋';
        if (copyBtnText) copyBtnText.textContent = 'Salin';
        copyBtn.classList.remove('copied');
      }, 2000);
    } catch (err) {
      showToast('Gagal menyalin email.');
    }
  });
}

// ==========================================
// 5. TOMBOL BACK TO TOP
// ==========================================
const backToTopBtn = document.getElementById('backToTopBtn');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    // Tampilkan tombol saat scroll melebihi 300px
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

