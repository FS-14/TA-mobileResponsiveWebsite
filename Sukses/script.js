let rincian = document.getElementById("rincianSampah");

document.addEventListener("DOMContentLoaded", () => {
  let dataSampah = localStorage.getItem("datas");
  if (dataSampah) {
    let getRincian = JSON.parse(dataSampah);
    console.log(getRincian);
    let displayRincian = document.getElementById("buatRincianSampah");

    // for (let key in getRincian)
    getRincian.map((item) => {
      if (item.value !== "" && !item.nama)
        displayRincian.innerHTML += `
                <div class="rincian">
                    <div>
                        <img src="${item.image}" width="36px" alt="icon ${item.name}" />
                    <p>${item.name}</p>
                    </div>
                <p>${item.value} kg</p>
                </div>
                `;
    });
  }
});
