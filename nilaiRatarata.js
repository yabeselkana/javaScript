const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

const nilai = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

const cek = (data) => {
  const cekNum = typeof data !== "number" ? " input Tidak number " : data > 90 ? "A" : data > 80 ? "B" : data > 70 ? "C" : data > 60 ? "D" : "Nilai E";
  console.log(`Nilai = ${nilai}
GREAD = ${cekNum}`);
};

cek(nilai);
