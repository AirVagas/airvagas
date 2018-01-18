var MONEY_DEFAULT = 1000000
var MORALE_DEFAULT = 5
var SUPPLY_DEFAULT = 5
var BRAND_DEFAULT = 5
//TODO add defaults


function name_company() {
    var company_name = prompt("Please enter you company's name", "My Company");
    if (company_name === "") {
        company_name = "Generic Company"
    }

    var company = new Company(company_name,MONEY_DEFAULT,MORALE_DEFAULT,SUPPLY_DEFAULT,BRAND_DEFAULT)

    return company

}

var company = name_company()


function values_on_screen(company){
    document.getElementById("money").innerHTML = ("Revenue:" + company.stats.money);
    document.getElementById("name").innerHTML = ("Company Name:" + company.name);
    document.getElementById("morale").innerHTML = ("Company Morale:" + company.stats.morale);
    document.getElementById("supply").innerHTML = ("Supply:" + company.stats.supply);
    document.getElementById("brand").innerHTML = ("Branding:" + company.stats.brand_awareness);
    }


$(".btn").click( function(){
    company.train()
    values_on_screen(company)
    if(company.check_all()){
        }
    else{
        alert(company.get_error_message())
        history.go(0)
        }
    });



$(".btn1").click( function(){
    company.marketing()
    values_on_screen(company)
    if(company.check_all()){
        }
    else{
        alert(company.get_error_message())
        history.go(0)
        }
    });



$(".btn2").click( function(){
    company.sales()
    values_on_screen(company)
    if(company.check_all()){
        }
    else{
        alert(company.get_error_message())
        history.go(0)
        }
    });


$(".btn3").click( function(){
    company.buy_inventory()
    values_on_screen(company)
    if(company.check_all()){
        }
    else{
        alert(company.get_error_message())
        history.go(0)
        }
    });





values_on_screen(company)

