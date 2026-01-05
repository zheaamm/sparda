const semuaTombol = document.querySelectorAll('.btnToggle');

semuaTombol.forEach((tombol) => {
    tombol.addEventListener('click', function() {
        // 'this' merujuk pada tombol yang diklik
        // Kita cari elemen 'box' yang ada di dekat tombol tersebut
        const kotak = this.parentElement.querySelector('.teks');
        // kotak = this.nextElementSibling;

        // Toggle class 'active'
        kotak.classList.toggle('box');
           if (kotak.classList.contains('box')) {
                this.style.border = "2px solid black"; // Hijau saat terbuka
                this.style.background = " rgba(182, 179, 0, 0.76)"
                this.style.boxShadow = "2px 2px 10px black "
                
            } else {
                this.style.background = "rgba(255, 255, 17, 0.925)";
                this.style.border = "none" // Kembali biru
                this.style.boxShadow = "none"
            }
    });
});

// tenanan start
let waktu = new Date().getHours();
let hasil ;
console.log(waktu)
if (waktu <= 12) {
    hasil = 'Good Morning'
} else if (waktu <= 18) {
    hasil = 'Good Afternon'
} else if (waktu <= 24) {
    hasil = 'Good Night'
} 
console.log(hasil)
document.getElementById("sapa").innerHTML = hasil;  

// tenanan end

//var id teks
// let box = document.getElementById("box")
// console.log(box)

// // add event
// tombol.addEventListener("click", buka)

// //function
// function buka() {
//    if (box.classList.contains('box')){
//         box.classList.remove('box');
//         console.log('hihiih')
//     } else{
//         box.classList.add('box')
//     } 
// }


/*const x = [3, 6, 5, 7, 9, 0, 12]
for (let hi of x){
    console.log(hi)
} */
/*
let tugas = prompt(`ingin mengerjakan tugas mana?
    1.matematika
    2.gaji kariyawan`)
// tugas 1
    if (tugas == `matematika`) {
 let tanya = prompt (`luas apa yang ingin kamu cari
    1. luas persegi
    2. luas lingkaran
    3. luas segitiga 
    4. luas persegi panjang`)
if(tanya == `luas persegi`) {
    let s = prompt (`berapa panjang sisinya?`)
    let total = alert (s*s) 
} else if (tanya == `luas lingkaran`) {
    let r = prompt (`berapa jari jarinya?`)
    let total = alert (r * 2 * 3.14) 
} else if (tanya == `luas segitiga`) {
    let a = prompt (`berapa alasnya?`)
    let t = prompt (`berar tingginya?`)
    let total = alert (t * a /2) 
} else if (tanya == `luas persegi panjang`) {
    let p = prompt (`berapa panjangnya?`)
    let l = prompt (`berapa lebarnya?`)
    alert (p * l)

} else {
    alert(`maaf tidak ada ${tanya}`)
}


// tugas 2
    } else if (tugas == `gaji kariyawan`) {
        const gajiKar = 300000
        const potonga = 100.000
        // user input

        let namaKar = prompt (`siapa nama kamu?`)
        let jumlahHari = prompt (`berapa jumlah hari kamu masuk keraja?`)
        let hasil = prompt (`apakah kamu ingin mengetahui gaji bersih?
            1.ya
            2.tidak
            (jawab antara 2 opsi)`)

            // eksekusi 
        if (hasil == `ya`) {
            let jumlah = jumlahHari * gajiKar - potonga;
            alert (`nama: ${namaKar} gaji bersih: Rp${jumlah}`)
        } else if (hasil == `tidak`) {
            let jumlahh = jumlahHari * gajiKar;
            alert (`nama: ${namaKar} gaji kotor: Rp${jumlahh}`)
        }    
    } else {
        alert(`hei gak ada ${tugas}!!`)
    }*/

/*let hari = new Date().getDay()

console.log (hari)
let akhir;  

switch (hari){
    case 1:
        akhir = `senin`
        break
    case 2:
            akhir = `selasa`
        break
    case 3 :
        akhir = `rabu`
        break
    case 4 :
        akhir = `kamis`
        break
    case 5 :
        akhir = `jum'at`
        break
    case 6 :
        akhir = `sabtu`
        break
        case 7:
        akhir = `minggu`
        break
    }

    let tanya = prompt (`hari ini hari apa?`)
    if (tanya == akhir){
        alert (`ya hari ini hari ${akhir}`)
    } else {
        alert (`hari ini bukan hari ${tanya}`)
    }

    console.log (akhir)


    // alert (`hari ini hari ${akhir}`)
    
    // if (hari == 1) {
    //     akhir = `senin`
    // } if (hari == 2) {
    //     akhir = `selasa`
    // } if (hari == 3) {
    //     akhir = `rabu`
    // } if (hari == 4) {
    //     akhir = `kamis`
    // } if (hari == 5) {
    //     akhir = `jum'at`
    // } if (hari == 6) {
    //     akhir = `sabtu`
    // } if (hari == 7) {
    //     akhir = `minggu`
    // } 
    
/*
let saldoAWAL = Number(prompt (`saldo masuk?`))
let potonganGaji = 300.000;
let saldoAkhir = saldoAWAL + potonganGaji; 
console.log (`saldo akhir anda adalah ${saldoAkhir}`)
alert (`saldo akhir anda adalah Rp${saldoAkhir}`)
*/