document.addEventListener("DOMContentLoaded", function () {

const ctxDusun = document.getElementById('dusunPieChart').getContext('2d');

// Data label dan isi deskripsi dusun
const dusunDescriptions = {
  'JAGA 1 (89 Jiwa)': 'Wilayah Jaga 1 terletak di bagian utara desa, dengan aktivitas utama di bidang pertanian.',
  'JAGA 2 (115 Jiwa)': 'Jaga 2 dikenal dengan masyarakat yang aktif dalam kegiatan sosial dan perkebunan.',
  'JAGA 3 (100 Jiwa)': 'Daerah ini memiliki potensi wisata alam dan sumber daya air yang cukup melimpah.'
};

const dataDusun = {
  labels: ['JAGA 1 (89 Jiwa)', 'JAGA 2 (115 Jiwa)', 'JAGA 3 (100 Jiwa)'],
  datasets: [{
    label: 'Jumlah Jiwa',
    data: [89, 115, 100],
    backgroundColor: ['#4285F4', '#66BB6A', '#FFCA28'],
    borderColor: '#fff',
    borderWidth: 2
  }]
};

const configDusun = {
  type: 'pie',
  data: dataDusun,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: (window.innerWidth < 768) ? 'bottom' : 'right',
        align: 'center',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 15,
          font: {
            size: (window.innerWidth < 768) ? 10 : 12
          }
        }
      }
    },
    onClick: (evt, activeEls) => {
      if (activeEls.length > 0) {
        const index = activeEls[0].index;
        const label = dataDusun.labels[index];
        const desc = dusunDescriptions[label] || 'Belum ada deskripsi untuk dusun ini.';
        showPopup(label, desc);
      }
    }
  }
};

new Chart(ctxDusun, configDusun);

// === Fungsi Popup ===
function showPopup(title, desc) {
  document.getElementById('dusunTitle').textContent = title;
  document.getElementById('dusunDesc').textContent = desc;
  document.getElementById('popupDusun').style.display = 'block';
}

function closePopup() {
  document.getElementById('popupDusun').style.display = 'none';
}

  // ==================================================
  // 3. BAR CHART BERDASARKAN PENDIDIKAN
  // ==================================================
// --- BAGAN PENDIDIKAN (VERSI BAR CHART RESPONSIVE) ---
// Pastikan ini ada di dalam: document.addEventListener('DOMContentLoaded', function() { ... })

// Ambil canvas-nya
const ctxPendidikan = document.getElementById('pendidikanChart').getContext('2d');

// Data
const dataPendidikan = {
  labels: [
    'Tidak/Belum Sekolah', 
    'Belum Tamat SD/Sederajat', 
    'Tamat SD/Sederajat', 
    'SLTP/Sederajat', 
    'SLTA/Sederajat', 
    'Diploma I/II', 
    'Diploma III/Sarjana Muda', 
    'Diploma IV/Strata I', 
    'Strata II', 
    'Strata III'
  ],
  datasets: [{
    label: 'Jumlah Penduduk',
    data: [100,100,100,100,100,100,100,100,100],
    backgroundColor: '#1cc249ff', // Warna merah tua
    borderRadius: 5,
    barPercentage: 0.7 // Lebar batang
  }]
};

// Konfigurasi
const configPendidikan = {
  type: 'bar', // Tipe bagan batang
  data: dataPendidikan,
  options: {
    responsive: true,
    // KUNCI #1: Ini WAJIB agar bagan mengikuti tinggi CSS kita
    maintainAspectRatio: false, 
    
    plugins: {
      legend: {
        display: false // Sembunyikan legenda, tidak perlu
      },
      // Angka di atas bar
      datalabels: { 
        display: true,
        color: '#333',
        anchor: 'end',
        align: 'top',
        font: {
          weight: 'bold',
          // KUNCI #2: Perkecil font angka di HP
          size: (window.innerWidth < 768) ? 10 : 12 
        },
        // Sembunyikan angka 0 agar bersih
        formatter: (value) => {
          return value > 0 ? value : null;
        }
      }
    },
    scales: {
      x: { // Sumbu X (Label Pendidikan)
        ticks: {
          font: {
            size: 11 // Ukuran font label
          },
          // KUNCI #3: ROTASI LABEL. Ini akan otomatis aktif
          // jika labelnya terlalu panjang untuk layarnya.
          maxRotation: 90, 
          minRotation: 45 
        }
      },
      y: { // Sumbu Y (Angka 0-800)
        beginAtZero: true
      }
    }
  },
  plugins: [ChartDataLabels] // Daftarkan plugin datalabels
};

// Buat grafiknya
new Chart(ctxPendidikan, configPendidikan);
 // 3. BAR CHART BERDASARKAN UMUR
const ctx = document.getElementById('umurChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      '0–5 tahun',
      '5–11 tahun',
      '12–16 tahun',
      '17–25 tahun',
      '26–35 tahun',
      '36–45 tahun',
      '46–55 tahun',
      '56–65 tahun',
      '65+ tahun'
    ],
    datasets: [{
      label: 'Jumlah Penduduk',
      data: [12, 20, 19, 51, 31, 31, 55, 50, 33], // ganti sesuai data kamu
      backgroundColor: '#1cc249ff', // warna batang
      borderRadius: 6
    }]
  },
  options: {
    indexAxis: 'y', // biar batangnya horizontal
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Jumlah Penduduk'
        }
      },
      y: {
        ticks: {
          autoSkip: false, // tampilkan semua umur
          font: {
            size: 12
          }
        },
        title: {
          display: true,
          text: 'Kelompok Umur'
        }
      }
    },
    plugins: {
      legend: {
        display: false // legend disembunyikan karena cuma 1 dataset
      },
      title: {
        display: true,
        text: 'Piramida Penduduk Berdasarkan Umur',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  }
});

});