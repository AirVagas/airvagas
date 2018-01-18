//function spawn_company(Company_Name, MONEY, MORALE, SUPPLY, BRAND_AWARNESS, PROCESSES) {
//this.Company_Name= Company_Name 
//this.MONEY=MONEY 
//this.MORALE=MORALE
//this.SUPPLY=SUPPLY
//this.BRAND_AWARNESS=BRAND_AWARNESS
//}


//var company = new spawn_company(null,1000000,5,5,5);

//function create_company() { 
//var company = new spawn_company(null,1000000,5,5,5)

                        

function CheckPulse(test){
  if (company.MONEY <= 0) {
 
    alert('Your company has ran out of Money.');
history.go(0);

 } 

if (company.MORALE <= 0) {
    alert("Your employees are uninspired and left you to work for your competitor.");
history.go(0);

}

if (company.SUPPLY<= 0) {
alert("You mised your window in the market.");
history.go(0);

}

if (company.BRAND_AWARNESS <= 0) {
alert("The market is too unfamiliar with your brand.");
history.go(0);

}
 {
  }

}


function train(test){
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

company.MONEY = (company.MONEY +- 200000);
company.MORALE= (company.MORALE + 4);
company.BRAND_AWARNESS= company.BRAND_AWARNESS + getRandomInt(-1,-2)
console.log(company)

}

function marketing(test){
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  company.MONEY = (company.MONEY +- 200000);
    company.MORALE= (company.MORALE + -1);
      company.SUPPLY =(company.SUPPLY + -1);
        company.BRAND_AWARNESS= company.BRAND_AWARNESS + getRandomInt(3,4);

console.log(company)
}

function sales(test){
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

company.MONEY = (company.MONEY + getRandomInt(85000,120000));
company.MORALE= (company.MORALE + -2);
company.SUPPLY =(company.SUPPLY + getRandomInt(-2,-2))
company.BRAND_AWARNESS= company.BRAND_AWARNESS + getRandomInt(1,2)
console.log(company)


}

function buy_inventory(test){
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

company.MONEY = (company.MONEY + getRandomInt(-100000,-125000));
company.MORALE= (company.MORALE + -1);
company.SUPPLY =(company.SUPPLY + getRandomInt(3,5))
company.BRAND_AWARNESS= company.BRAND_AWARNESS + getRandomInt(-1,-3)
console.log(company)

}


