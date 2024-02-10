console.log("Bu yerda keyinchalik TASKlar bo'ladi");
console.log("test");

/* 
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

ESLATMA: LESSON tasklar bajarilib, lekin MITASK bajarilmasa, vazifa bajarilgan hisoblanilmaydi. Bundan kegin har ikklasini birga commit qilib bajarishingiz kerak! */


function checkLetter(e, engineer) {
    let count = 0;
    for(let i = 0; i < engineer.length; i++) {
        if(engineer[i] === e) {
            count++
        }
    }
    return count
}

console.log(countChar("a", "banana")); 

