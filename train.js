

/*D-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

function solution(num, list) {
    let a = num.split('').sort().join("")
     let d =list.split('').sort().join("")
    return a == d 
}
console.log(solution("salom", "samol"));

















// class Shop {
//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//     qoldiq() {
//         let time = new Date().toLocaleString();
//         const currentTime = new Date();
//         console.log(`Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
//     }
    
//     sotish(mahsulot, miqdor) {
        
//         if (mahsulot === 'non' && this.non >= miqdor) {
//             this.non -= miqdor;
//             console.log(`${miqdor}ta non sotildi.`);
//         } else if (mahsulot === 'lagmon' && this.lagmon >= miqdor) {
//             this.lagmon -= miqdor;
//             console.log(`${miqdor}ta lagmon sotildi.`);
//         } else if (mahsulot === 'cola' && this.cola >= miqdor) {
//             this.cola -= miqdor;
//             console.log(`${miqdor}ta cola sotildi.`);
//         } else {
//             console.log(`Mavjud emas yoki yetarli miqdorda yo'q.`);
//         }
//     }
    
//     qabul(mahsulot, miqdor) {
       
//         if (mahsulot === 'non') {
//             this.non += miqdor;
//             console.log(`${miqdor}ta non qabul qilindi.`);
//         } else if (mahsulot === 'lagmon') {
//             this.lagmon += miqdor;
//             console.log(`${miqdor}ta lagmon qabul qilindi.`);
//         } else if (mahsulot === 'cola') {
//             this.cola += miqdor;
//             console.log(`${miqdor}ta cola qabul qilindi.`);
//         } else {
//             console.log(`Noto'g'ri mahsulot nomi.`);
//         }
//     }
// }



// const shop = new Shop(4, 5, 2);
// shop.qoldiq(); 

// shop.sotish('non', 3);
// shop.qabul('cola', 4);
// shop.qoldiq();




// D-TASK: 

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!


// class Shop {
//     constructor(non, sharbat, lagmon) {
//         this.non = non;
//         this.sharbat = sharbat;
//         this.lagmon = lagmon;
//     }
//     qoldiq() {
//         let time = new Date().toLocaleString();
//         console.log(`hozir ${time} ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.sharbat}ta sharbat mavjud!`);
//     }
//     sotish() {
//         let time = new Date().toLocaleString();
//         console.log(`hozir ${time} ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.sharbat}ta cola mavjud!`);
        
//     }
//     qabul() {
//         let time = new Date().toLocaleString();
//         console.log(`hozir ${time} ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.sharbat}ta cola mavjud!`);
//     }
//     return
// }

// const shop = new Shop(4, 5, 2);
// const shop2 = new Shop(3, 4, 6);
// shop.qoldiq();
// shop2.sotish();
// shop2.qabul();
  
  




















// B-TASK:

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function chekNumber(countDigits) {
//     let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     let count = 0;
//     let num

//     for (let i = 0; i < countDigits.length; i++) {
//         num = countDigits.charAt(i);
//         if (nums.includes(num)) {
//             count++
//         }
//     }
//     return count;
// }
// const ans = chekNumber('if67fd680f4ar');

// console.log(ans)




// task-A


// function checkLetter(e, engineer) {
//     let count = 0;
//     for(let i = 0; i < engineer.length; i++) {
//         if(engineer[i] === e) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(checkLetter("a", "text ham kiritsa ishlayapti")); 

