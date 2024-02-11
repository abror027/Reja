
console.log("Jack Ma maslahatlari");
const list = [
    "Yaxshi talaba boling", // 0-20
    "Togri boshkiq tanlan va koproq xato qiling", // 20-30
    "Ozingiz uchun ishlashni boshlang", //30-40
    "Siz ozingiz yaxshi bajaradigan narsalarni qiling", // 40-50
    "Yoshlarga invistitsiya qiling chunki yoshlar sizdan ko'ra yaxshiroq bajaradi", //50-60
    "Endi dam oling, hayotdagi qilgan hulosalaringizni yoshlarga aytib jamiyatga foydalik inson bo'ling by author", // 60
];

// callback function

 
function giveAdvance(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(function () {
            callback(null, list[5]);
        }, 2000);
    }
}

console.log("passed here: 0");
giveAdvance(61, (err, data) => {
    if (err) console.log('ERROR:', err);
    else {
        console.log('javob:', data);
    }
});
console.log("passed here: 1");




// Asyncrinus functionlar 

/*
async function giveAdvance(a) {
    if (typeof a !== "number") throw new Error("insert a number");
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
        });

        // setTimeout(function () {
        //     return list[5];
        // }, 5000);

    }
}

// // then va catch (bilan call qismi qilinishi)
// console.log("passed here: 0");
// giveAdvance(25).then(data => {
//     console.log('javob:', data);
// }).catch(err => {
//     console.log('ERROR', err)
// });
// console.log('passed here 1');


// asyn/await (bilan call qismi qilinishi)
async function run() {
    let javob = await giveAdvance(20);
    console.log(javob);
    javob = await giveAdvance(33);
    console.log(javob);
    javob = await giveAdvance(40);
    console.log(javob);
}

run();
*/


// set interval bilan callbackni ishlashi

function giveAdvance(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
            callback(null, list[5]);
        }, 2000); // setIntervalda qiymat qaytsa davomiy consol log qilaveradi
    }
}

console.log("passed here: 0");
giveAdvance(61, (err, data) => {
    if (err) console.log('ERROR:', err);
    else {
        console.log('javob:', data);
    }
});
console.log("passed here: 1");



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

