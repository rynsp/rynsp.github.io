# Portofolio Web

Situs portofolio statis untuk GitHub Pages. Tidak memerlukan framework, instalasi paket, atau backend. Bagian sertifikat sengaja tidak disertakan.

## Sesuaikan identitas

Biodata Ryan, email, GitHub, dan LinkedIn sudah diisi pada `site-config.js`. WhatsApp sengaja dikosongkan. Repository dan demo untuk masing-masing proyek dibiarkan kosong sampai URL publiknya siap dibagikan. Foto profil dapat dimasukkan melalui field `photo` setelah file atau URL fotonya tersedia.

Ringkasan proyek dan teknologi ada di `script.js`. Kartu awal mencakup ShipBoard, IntraPDF, SimplePos Offline, Pocketstep Studio, Solok Terpadu, Solok Diujung Jari, dan Palado. Untuk Palado, kontribusi sudah ditandai sebagai pengembangan lanjutan dan refactor dari codebase yang dibuat developer sebelumnya. Gambar antarmuka dibuat dengan CSS sebagai ilustrasi, bukan tangkapan layar aplikasi.

## Yang bisa dilengkapi nanti

- Foto profil pada field `photo` di `site-config.js`.
- Tautan repository dan demo proyek, setelah URL publiknya dipilih.
- Rincian hasil proyek, dengan angka atau klaim yang bisa dibuktikan.

## Jalankan secara lokal

Buka `index.html` di browser, atau jalankan server statis dari folder ini:

```sh
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Publikasikan di GitHub Pages

1. Unggah semua file dan folder situs ini ke tingkat teratas repository GitHub.
2. Buka **Settings → Pages**.
3. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu **Save**.
4. Buka alamat yang ditampilkan di bagian Pages setelah deployment selesai.

GitHub Pages menyajikan file statis. Form kontak belum memakai backend; tombol email menggunakan aplikasi email pengunjung.
