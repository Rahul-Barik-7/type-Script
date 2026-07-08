//(3) : using 'type' aliases (TS) - allows creating a new name for an existing type
//in this approach we can create miltiple object follwed by sinle object structure is the elements are same 

//Example-1
//here we declaring the object 
type Product= {
    name: string,
    price: number,
    isAvailableInIndia: boolean,
    getProductDetails: () => string  
};

//here we assigning the object 

let bike1: Product = {
    name: "Continental GT 650",
    price: 350000,
    isAvailableInIndia: true,
    getProductDetails() {
        return `bike: ${this.name}, price: ${this.price} & availabilityInINDIA: ${this.isAvailableInIndia} `
    }
}

let bike2: Product = {
    name: "Royal Enfield Classic 350",
    price: 250000,
    isAvailableInIndia: true,
    getProductDetails: function() {
        return `bike: ${this.name}, price: ${this.price} & availabilityInINDIA: ${this.isAvailableInIndia} `
    }
}

console.log(bike1.getProductDetails()); //bike: Continental GT 650, price: 350000 & availabilityInINDIA: true
console.log(bike2.getProductDetails()); //bike: Royal Enfield Classic 350, price: 250000 & availabilityInINDIA: true 

//Example-2 
//intersection type )(means we can merge n numbers of objects)

console.log();
console.log("===========intersection type===========");

type Personal = {
    email: string
}

type Contact = {
    empCode: string
}

type PersonalDetails = Personal & Contact & {
    getPersonalDetailsInfo: () => string
}

let emp1: PersonalDetails = {
    email: "rahulbarik481@gmail.com",
    empCode: "EMP0089",
    getPersonalDetailsInfo() {
        return `email: ${this.email}, empCode: ${this.empCode}`
    },
}

console.log(emp1.getPersonalDetailsInfo()); //email: rahulbarik481@gmail.com, empCode: EMP0089