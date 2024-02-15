

// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

function chekNumber(countDigits) {
    let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let count = 0;
    let num

    for (let i = 0; i < countDigits.length; i++) {
        num = countDigits.charAt(i);
        if (nums.includes(num)) {
            count++
        }
    }
    return count;
}
const ans = chekNumber('if67fd680f4ar');

console.log(ans)




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

