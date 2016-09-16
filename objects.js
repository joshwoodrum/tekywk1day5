var person ={ 
firstName : "Josh",
lastName : "Woodrum",
email : "joshwoodrum@yahoo.com",
phone : "859.447.2098",
DOB : "July 22nd 1988",
fullname : function(){
return this.firstName + " " + this.lastName

} 
};


function printDetails (p){
console.log (p.firstName);
console.log (p.lastName);
console.log (p.email);
console.log (p.phone);
console.log (p.DOB);
console.log (p.fullname());
}

printDetails (person)
