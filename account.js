//Account class

const moment = require('moment');


class Account  {
    #amount;
    #account_id;

    constructor(name, amount, account_id){
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }



    tellMeBalance(){
        console.log(`Sizning hisobingizda: ${this.#amount}$ mavjud`);
        return this.#amount;
    }


    withdrawMoney(amount){
        if(this.#amount >= amount){
            this.#amount -= amount;
            console.log(`hurmatli ${this.name}, sizning hisobingizdan ${amount}$ miqdorda pul yechib olindi , hozirda balansingizda ${this.#amount}$ miqdorda pul bor`);
            return this.#amount;
        }else{
            console.log(`Hisobingizda mablag yetarli emas, sizda hozir atiga ${this.#amount}$ miqdorda pul bor`);
            
        }
        
    };


makeDeposit(amount){
    this.#amount += amount;
    console.log(`Siz ${amount}$ miqdorda pul deposit qildingiz, sizning hisobingizda ${this.#amount}$ bor`);
    return this.#amount;
}

giveMeDetails(){
    console.log(`Hurmatli ${this.name}, sizning hisobingiz ${this.#amount}$ni tashkil etadi`);
    console.log(`Sizning hisob raqamingiz: ${this.#account_id}  !`);
    
}

static tellMeAboutClass(){
    console.log('Bu class Accoutnlar yasash uchun hizmat qiladi');
}

static tellMeTime(){
    console.log('Hozirgi Vaqt:', moment.format("YYYY MM DD HH:mm:ss"));
}};

module.exports = Account;
