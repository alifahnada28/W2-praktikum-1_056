// Fungsi konversi suhu
function konversiSuhu(nilai, tipe) {
  let hasil;

  switch (tipe) {
    case "CtoF":
      hasil = (nilai * 9/5) + 32;
      return `${nilai}°C = ${hasil.toFixed(2)}°F`;

    case "CtoR":
      hasil = nilai * 4/5;
      return `${nilai}°C = ${hasil.toFixed(2)}°R`;

    case "FtoC":
      hasil = (nilai - 32) * 5/9;
      return `${nilai}°F = ${hasil.toFixed(2)}°C`;

    case "FtoR":
      hasil = (nilai - 32) * 4/9;
      return `${nilai}°F = ${hasil.toFixed(2)}°R`;

    case "RtoC":
      hasil = nilai * 5/4;
      return `${nilai}°R = ${hasil.toFixed(2)}°C`;

    case "RtoF":
      hasil = (nilai * 9/4) + 32;
      return `${nilai}°R = ${hasil.toFixed(2)}°F`;

    default:
      return "Tipe konversi tidak dikenali!";
  }
}

// Event listener untuk form
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formSuhu").addEventListener("submit", function(event) {
    event.preventDefault();

    const nilaiSuhu = parseFloat(document.getElementById("nilaiSuhu").value);
    const tipeKonversi = document.getElementById("tipeKonversi").value;

    if (isNaN(nilaiSuhu)) {
      document.getElementById("hasil").innerText = "Masukkan nilai suhu yang valid!";
      return;
    }

    const hasilKonversi = konversiSuhu(nilaiSuhu, tipeKonversi);
    document.getElementById("hasil").innerText = hasilKonversi;
  });
});