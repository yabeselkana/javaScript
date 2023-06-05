const mtk = 99;
const bahasaIndonesia = "";
const bahasaInggris = 90;
const ipa = 90;

const cek = (nilai1, nilai2, nilai3, nilai4) => {
  const validasi =
    typeof nilai1 !== "number"
      ? "nilai Mtk tidak ada "
      : typeof nilai2 !== "number"
      ? "nilai bahasa indonesia tidak ada"
      : typeof nilai3 !== "number"
      ? "nilai bahasa ingris tidak ada"
      : typeof nilai4 !== "number"
      ? "nilai Ipa tidak ada "
      : (nilai1 + nilai2 + nilai3 + nilai4) / 4;
  const cekNum = typeof validasi !== "number" ? "-" : validasi > 90 ? "A" : validasi > 80 ? "B" : validasi > 70 ? "C" : validasi > 60 ? "D" : "Nilai E";
  console.log(`Nilai = ${validasi}
GREAD = ${cekNum}`);
};

cek(mtk, bahasaIndonesia, bahasaInggris, ipa);
