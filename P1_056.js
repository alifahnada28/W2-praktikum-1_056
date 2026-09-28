//Fungsi untuk menghitung usia berdasarkan tahun lahir
function hitungUsia(tahunLahir) {
    //Mendapatkan tahun saat ini menggunakan objek Date
    const tahunSekarang = new Date().getFullYear();
    //menghitung usia
    const usia = tahunSekarang - tahunLahir;
    return usia;
}

//Menangani event submit form
document.getElementById('formUsia').addEventListener('submit'. function (event) {
    event.preventDefault(); //Mencegah form dari reload halaman

    //Mengambil input tahun lahir dari pengguna
    const inputTahunLahir = document.getElementById
}
