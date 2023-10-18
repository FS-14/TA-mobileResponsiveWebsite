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
let deskripsi = document.getElementById("inputDeskripsi");

let btnSubmit = document.getElementById("submitDataSampah");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let namaValue = nama.value;
  let NoHPValue = noHP.value;
  let alamatValue = alamat.value;
  let plastikValue = tujuanPlastik.value;
  let sampahMakananValue = tujuanSampahMakanan.value;
  let kertasValue = tujuanKertas.value;
  let kartonValue = tujuanKarton.value;
  let kalengValue = tujuanKaleng.value;
  let kacaValue = tujuanKaca.value;
  let deskripsiValue = deskripsi.value;

  if (namaValue !== "" && NoHPValue !== "" && alamatValue !== "") {
    let datas = [
      {
        nama: namaValue,
      },
      {
        name: "Plastik",
        value: plastikValue,
        image: "../assets/bottle-linear.svg",
      },
      {
        name: "Makanan",
        value: sampahMakananValue,
        image: "../assets/food-24-regular.svg",
      },
      {
        name: "Kertas",
        value: kertasValue,
        image: "../assets/paper.svg",
      },
      {
        name: "Karton",
        value: kartonValue,
        image: "../assets/box-outline.svg",
      },
      {
        name: "Kaleng",
        value: kalengValue,
        image: "../assets/can.svg",
      },
      {
        name: "Kaca",
        value: kacaValue,
        image: "../assets/mirror.svg",
      },
    ];
    localStorage.setItem("datas", JSON.stringify(datas));

    // localStorage.setItem("Nama", namaValue);
    // localStorage.setItem("No HP", NoHPValue);
    // localStorage.setItem("Alamat", alamatValue);
    // localStorage.setItem("Plastik", plastikValue);
    // localStorage.setItem("Sampah Makanan", sampahMakananValue);
    // localStorage.setItem("Kertas", kertasValue);
    // localStorage.setItem("Karton", kartonValue);
    // localStorage.setItem("Kaleng", kalengValue);
    // localStorage.setItem("Kaca", kacaValue);
    // localStorage.setItem("Deskripsi", deskripsiValue);

    window.location.href = "../Pencarian-Picker/index.html";
  } else {
    alert("Isi Data Diri dan Data Sampah");
  }
});
