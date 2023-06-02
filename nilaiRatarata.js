const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

const nilai = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

const cekNum = typeof nilai !== "number" ? " input Tidak number " : nilai > 90 ? "Nilai A" : nilai > 80 ? "Nilai B" : nilai > 70 ? " Nilai C" : nilai > 60 ? "Nilai D" : nilai > 0 ? "Nilai E" : "";
console.log(`Nilai = ${nilai}
GREAD = ${cekNum}`);
