// Read only peoperties & function type (prevent modification)

interface Book {
    name:  string;
    readonly price: number;
    author :string;

    getBookDetails():void;
}

let book1: Book = {
    name: "Java",
    price : 999,
    author: "James Gosling",

    getBookDetails() {
        console.log("Name of the book is : ", this.name);
        console.log("price of the",book1.name, "book is: ", book1.price);
        console.log("Author of the",book1.name, "book is: ", book1.author);
    }
}

console.log(book1.name);
book1.name= "Python";
book1.getBookDetails();
//book1.price = 1000; //Cannot assign to 'price' because it is a read-only property.
// console.log(book1.price);
