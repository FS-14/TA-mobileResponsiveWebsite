let elementPlastik = document.getElementById("buttonTambahSampahPlastik");
let tujuanPlastik = document.getElementById("inputPlastik");
elementPlastik.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanPlastik.disabled = false;
});

let elementSampahMakanan = document.getElementById("buttonTambahSampahMakanan");
let tujuanSampahMakanan = document.getElementById("inputSampahMakanan");
elementSampahMakanan.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanSampahMakanan.disabled = false;
});

let elementKertas = document.getElementById("buttonTambahKertas");
let tujuanKertas = document.getElementById("inputKertas");
elementKertas.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanKertas.disabled = false;
});

let elementKarton = document.getElementById("buttonTambahKarton");
let tujuanKarton = document.getElementById("inputKarton");
elementKarton.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanKarton.disabled = false;
});

let elementKaleng = document.getElementById("buttonTambahKaleng");
let tujuanKaleng = document.getElementById("inputKaleng");
elementKaleng.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanKaleng.disabled = false;
});

let elementKaca = document.getElementById("buttonTambahKaca");
let tujuanKaca = document.getElementById("inputKaca");
elementKaca.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanKaca.disabled = false;
});

let nama = document.getElementById("inputName");
let noHP = document.getElementById("inputNoHP");
let alamat = document.getElementById("inputAlamat");

let btnSubmit = document.getElementById("submitDataSampah");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let namaValue = nama.value;
  let NoHPValue = noHP.value;
  let AlamatValue = alamat.value;

  if (namaValue !== "" && NoHPValue !== "" && AlamatValue !== "") {
    localStorage.setItem("Nama", namaValue);
    localStorage.setItem("No HP", NoHPValue);
    localStorage.setItem("Alamat", AlamatValue);
  } else {
    alert("Isi Data Diri dan Data  ");
  }
});
