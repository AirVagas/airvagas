function Company(name, money, morale, supply, brand_awareness) {
    this.name = name
    this.stats = {
        money: money,
        morale: morale,
        supply: supply,
        brand_awareness: brand_awareness
        }

    this.ERROR_MESSAGES = {
        money: "Your company has ran out of Money.",
        morale: "Your employees are uninspired and left you to work for your competitor.",
        supply: "You mised your window in the market.",
        brand_awareness: "The market is too unfamiliar with your brand."
        }
    
    this.get_random_int = function(min,max){
        //Returns an int between min and max
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    this.check_value = function(value){
        //Takes a number value
        //Returns true if the value is good
        //Returns false if the value is bad
        if (value <= 0){
            return false
            }
        else{
            return true
            }
        }

    this.check_all = function(){
        //Takes each of our important attributes
        //Checks them 
        //Returns false if any of the attributes are bad
        //Returns true if all of the attributes are good
        var error_message = this.get_error_message()
        if (error_message === null){
            return true
            }
        else{
            return false
            }
        }

    this.get_error_message = function(){
        //Takes each of our important attributes
        //Checks them
        //Returns the error message if the attributes are bad
        //Returns null if the attributes are good
        for (var key in this.stats){
            var value = this.stats[key]
            if (this.check_value(value)){
                }
            else {
                //Value is bad
                //Get the error message
                var error_message = this.ERROR_MESSAGES[key]
                return error_message
                }
            }
        return null
        }

    this.buy_inventory = function(){
        this.stats.money += this.get_random_int(-100000,-125000)
        this.stats.morale += -1
        this.stats.supply += this.get_random_int(3,5)
        this.stats.brand_awareness += this.get_random_int(-1,-3)
        }



this.sales = function(){
        this.stats.money += this.get_random_int(85000,120000)
        this.stats.morale += -2
        this.stats.supply += -2
        this.stats.brand_awareness += this.get_random_int(1,2)
        }

this.marketing = function(){
        this.stats.money +- (this.stats.money * 0.02)
        this.stats.morale += -2
        this.stats.supply += -2
        this.stats.brand_awareness += this.get_random_int(1,2)
        }

this.train = function(){
        this.stats.money += (this.stats.money * 0.02)
        this.stats.morale += 4
        this.stats.brand_awareness += this.get_random_int(-1,-2)
        }



}







var test = function(){
    var company = new Company("Testco",1000000,5,5,5);

    console.log("")
    console.log("get_random_int")
    console.log(company.get_random_int(1,5))

    console.log("")
    console.log("check_value")
    console.log(company.check_value(-1))
    console.log(company.check_value(0))
    console.log(company.check_value(10))

    console.log("")
    console.log("check_all")
    console.log(company.check_all())
    //Set a value to be bad
    company.stats.money = -100
    console.log(company.check_all())

    console.log("")
    console.log("buy_inventory")
    company.stats.money = 1000000
    console.log(company)
    company.buy_inventory()
    console.log(company)

    console.log("")
    console.log("get_error_message")
    company.stats.money = -100
    console.log(company.get_error_message())
    }
//test()
