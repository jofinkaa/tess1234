// Menunggu sampai semua konten HTML dimuat
document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Ambil tombol hamburger
  const menuToggle = document.querySelector('.menu-toggle');
  // 2. Ambil daftar menu
  const navUl = document.querySelector('nav ul');

  // 3. Jika tombol hamburger diklik
  menuToggle.addEventListener('click', function() {
    
    // 4. Tambah/Hapus kelas 'active' pada menu
    // Ini akan memicu style "nav ul.active" di CSS
    navUl.classList.toggle('active');
  });

});