//

let hisob = {};


hisob.kopaytirish = (a, b) => {
    return a * b;
};

hisob.bolish = (a, b) => {
    return a / b;
};

hisob.qoshish = (a, b) => {
    return a + b;
};

hisob.ayirish = (a, b) => {
    return a - b;
};


// module.exports orqali ushbu fileni boshqa filelarga chaqirib ishlatish
// uchun ruhsad beramiz

module.exports = hisob;