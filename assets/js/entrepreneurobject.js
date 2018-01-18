function spawn_company(NAME, MONEY, MORALE, SUPPLY, BRAND_AWARNESS) {
this.NAME=NAME 
this.MONEY=MONEY 
this.MORALE=MORALE
this.SUPPLY=SUPPLY
this.BRAND_AWARNESS=BRAND_AWARNESS
}

var company =new spawn_company(null,1000000,5,5,5);

console.log(company.MONEY)