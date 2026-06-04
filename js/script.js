// M12 - JS Dasar
// Variabel, Fungsi, Validasi Sederhana

// Variabel const(Konstanta) untuk layanan (Array menyimpan daftar kode layanan)

const layanan = ["SKA", "CAK", "PDA", "TNM"];

// fungsi format tanggal
// dd-MM-yyyy (04-06-2026) --> 04 Juni 2026
// kita gunakan objek bawaan dari Js

function formatTanggal(dateStr) {
  // formating
  const bulan = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  const d = new Date(dateStr);

  // Format (Tanggal-Bulan-Tahun)
  return d.getDate() + " " + bulan[d.getMonth()] + " " + d.getFullYear();
}

// Fungsi validasi Form
function validasiForm() {
  // 1. Get Value setiap inputan (inputan yg wajib diisi)
  const namaLengkap = document.getElementById("namaLengkap").value;
  const nim = document.getElementById("nim").value;
  const prodi = document.getElementById("prodi").value;
  const layanan = document.getElementById("layanan").value;
  const tanggal = document.getElementById("tanggal").value;

  // alert(namaLengkap, nim, prodi, layanan, tanggal)
  // console.log(namaLengkap)

  // 2. Validasi --> Cek field yg kosong
  // Jika nama lengkap
  if (
    namaLengkap === "" ||
    nim === "" ||
    prodi === "" ||
    layanan === "" ||
    tanggal === ""
  ) {
    // berikan pesan error
    alert(" ❌ semua field (data) harus terisi");

    // mencegah submit halaman
    return false;
  }

  // 3. batasi jumlah karakter NIM harus 9
  if (nim.length !== 9 || isNaN(nim)) {
    alert("❌ NIM harus terdiri dari 9 digit!");
    return false;
  }

  // 4. Tampilkan hasil jika berhasil validasi

  // a.Di console
  console.log("Data Pengajuan berhasil: ", {
    namaLengkap: namaLengkap,
    nim: nim,
    prodi: prodi,
    layanan: layanan,
    tanggal: formatTanggal(tanggal),
  });

  // Berhasil (jika tak ada return false dari dua pencegat di atas)
  alert(
    "✅ Pengajuan berhasil!\n" +
      "Nama Lengkap: " +
      namaLengkap +
      "\n" +
      "NIM: " +
      nim +
      "\n" +
      "Prodi: " +
      prodi +
      "\n" +
      "Layanan: " +
      layanan +
      "\n" +
      "Tanggal: " +
      formatTanggal(tanggal),
  );

  return false;
}
