## ~~SiPinter Service~~ kini jadi FixITNow: Cepat, Dekat, Terpercaya.

Aplikasi yang menawarkan solusi perbaikan tepat dan terpercaya.

### Deskripsi Singkat

FixItNow adalah platform yang menyediakan layanan perbaikan untuk berbagai perangkat elektronik seperti laptop, ponsel, tablet, dan lainnya. SiPinter Service membantu pengguna menemukan teknisi perbaikan yang handal dan berkualitas.

### Powered by

<a href="https://nextjs.org">
  <img src="https://repository-images.githubusercontent.com/693695940/7f35431e-2c4e-4e43-acc2-5585bfb9baa2" alt="Next.js Logo" width="100">
</a>

### Setup

Untuk menjalankan aplikasi ini di environment lokal, ikuti langkah-langkah berikut:

#### Menjalankan Backend ([sipinter-api](https://github.com/hisyam99/sipinter-api))

1. **Prasyarat:**
   - Pastikan Go sudah terinstall.
   - Pastikan MongoDB sudah terinstall dan berjalan.

2. **Clone Repositori:**
   ```bash
   git clone https://github.com/hisyam99/sipinter-api.git
   ```

3. **Cara menjalankan di lokal:**
   - Masuk ke direktori:
     ```bash
     cd sipinter-api
     ```
   - Install dependencies:
     ```bash
     go mod tidy
     ```
   - Jalankan server:
     ```bash
     go run main.go
     ```

4. **Akses API:**
   - API akan berjalan di `http://localhost:8080`.

#### Menjalankan Frontend (sipinter-web)

1. **Prasyarat:**
   - Pastikan bun.sh sudah terinstall.

2. **Clone Repositori:**
   ```bash
   git clone https://github.com/hisyam99/sipinter-web.git
   ```

3. **Cara menjalankan di lokal:**
   - Masuk ke direktori:
     ```bash
     cd sipinter-web
     ```
   - Install dependencies:
     ```bash
     bun install
     ```
   - Jalankan server:
     ```bash
     bun run dev
     ```

4. **Akses Aplikasi:**
   - Buka browser dan kunjungi `http://localhost:3000` untuk mengakses FixITNow.

### ~~Fitur Utama~~ Bug

1. **UI masih anomali**
2. **Masih banyak bug :pp**

### Kontak

Jika memiliki pertanyaan, saran, atau masalah terkait aplikasi, silakan hubungi tim SiPinter Service melalui email di admin@sipinter-service.com.

Terima kasih telah menggunakan FixITNow untuk kebutuhan perbaikan perangkat elektronik Anda! Semoga aplikasi ini memberikan pengalaman yang memuaskan dan membantu memperbaiki perangkat Anda dengan lebih mudah.
