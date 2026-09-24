# Tugas Praktikum Pemrograman Web — Slicing Portofolio

Repositori ini berisi hasil pengerjaan tugas slicing antarmuka web (HTML, CSS, dan JavaScript) untuk halaman portofolio personal. Proyek ini mengusung konsep desain editorial minimalis dengan tipografi elegan, navigasi terstruktur, filter kategori interaktif, serta showcase dokumentasi karya.

---

Identitas Mahasiswa

| Informasi | Keterangan |
| :--- | :--- |
| **Nama** | Muhamad Faiq Akrom Asy Syarofi |
| **NIM** | 252410102042 |
| **Kelas** | Praktikum Pemrograman Web B (PWEB-B) |
| **Email** | [252410102042@mail.unej.ac.id](mailto:252410102042@mail.unej.ac.id) |

---

Penjelasan Singkat Proyek

Proyek ini merupakan hasil *slicing* halaman web portofolio statis yang responsif dan interaktif. Halaman ini dirancang untuk menampilkan profil kreator, daftar proyek terpilih (*selected works*), serta slot dokumentasi visual dari masing-masing karya yang pernah dikerjakan.

### Komponen Halaman:
1. **Header & Navigasi**: Logo/mark personal beserta menu navigasi cepat menuju section *Karya*, *Dokumentasi*, dan *Kontak*.
2. **Hero Section**: Pengantar singkat mengenai profil dan tugas praktikum.
3. **Karya Terpilih (Interactive Work List)**: Daftar karya dengan kategori tahun, judul, dan peran yang dilengkapi filter kategori berbasis JavaScript (*Semua*, *Aplikasi*, *Game*).
4. **Dokumentasi Proyek (Work Slots)**: Slot galeri frame tangkapan layar (*screenshot*) dari setiap proyek yang terhubung secara langsung via *anchor link* dengan daftar karya.
5. **Footer / Kontak**: Bagian penutup yang memuat tautan email aktif untuk berdiskusi/menghubungi.

---

Fitur-Fitur Utama

- Filter Kategori Interaktif: Memanfaatkan JavaScript untuk memfilter karya secara dinamis sesuai kategori yang dipilih tanpa perlu memuat ulang halaman (*page reload*).
- Deep Linking / Smooth Navigation: Mengklik salah satu proyek pada daftar karya akan menggulirkan halaman secara halus (*smooth scroll*) langsung ke slot dokumentasi yang bersangkutan, lengkap dengan tombol kembali (`↑ Kembali ke Karya`).
- Desain Editorial & Clean Typography: Mengombinasikan font serif *Newsreader* dan sans-serif *Inter* untuk memberikan kesan elegan, minimalis, dan profesional.
- Tata Letak Responsif**: Dibangun menggunakan *Flexbox* dan unit fluida sehingga nyaman diakses di berbagai ukuran layar.

---

Teknologi yang Digunakan

- **HTML5**: Struktur semantik (`<header>`, `<nav>`, `<section>`, `<article>`, `<figure>`, `<footer>`).
- **CSS3**: Variabel CSS (*custom properties*), Flexbox, CSS transitions, dan reset modern.
- **JavaScript (ES6+)**: Manipulasi DOM untuk logika filtering kategori interaktif.
- **Google Fonts**: Tipografi *Newsreader* dan *Inter*.

---

Dokumentasi & Tangkapan Layar (SS)

Berikut tangkapan layar (*screenshot*) dari proyek-proyek yang ditampilkan dalam slot dokumentasi portofolio:

### 1. Chaosmal Defense — Turn Based Game (2026)
*Kategori: Game Developer*
![Chaosmal Defense](ss1.png)

---

### 2. Chemlink — Projek Akhir PBO (2025)
*Kategori: App Developer*
![Chemlink - Manajemen Kios Pertanian](ss2.png)

---

### 3. Kill 'em — 2D Platformer Game (2024)
*Kategori: Game Developer*
![Kill 'em - 2D Platformer](ss3.png)

---

## Struktur Direktori

```text
Slicing PWEB/
│
├── index.html        # Struktur markup HTML halaman portofolio
├── style.css         # Styling CSS, sistem variabel warna & tipografi
├── script.js         # Logika interaktif filter kategori karya
├── ss1.png           # Tangkapan layar proyek Chaosmal Defense
├── ss2.png           # Tangkapan layar proyek Chemlink
├── ss3.png           # Tangkapan layar proyek Kill 'em
└── README.md         # Dokumentasi dan penjelasan proyek
```
