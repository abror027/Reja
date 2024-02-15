
// D-TASK: 

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!


class Shop {
    constructor(non, sharbat, lagmon) {
        this.non = non;
        this.sharbat = sharbat;
        this.lagmon = lagmon;
    }
    qoldiq() {
        let time = new Date().toLocaleString();
        console.log(`hozir ${time} ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.sharbat}ta sharbat mavjud!`);
        // return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
    }
    sotish() {
        let time = new Date().toLocaleString();
        console.log(`hozir ${time} ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.sharbat}ta cola mavjud!`);
        
    }
    qabul() {
        let time = new Date().toLocaleString();
        console.log(`hozir ${time} ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.sharbat}ta cola mavjud!`);
    }
    return
}

const shop = new Shop(4, 5, 2);
const shop2 = new Shop(3, 4, 6);
shop.qoldiq();
shop2.sotish();
shop2.qabul();
  
  




















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

