let buttonBatal = document.getElementById("btn-batalkan-picker");
buttonBatal.addEventListener("click", () => {
  if (confirm("Apakah yakin ingin dibatalkan?")) {
    window.location.href = "../Input-Data/index.html";
  }
});
