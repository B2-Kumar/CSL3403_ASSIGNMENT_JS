class Person{
    constructor(first_name, last_name ,address) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.officeAddress=address;
    }
}

const p_one = new Person('Bittu', 'Kumar','Nawada, Bihar');
const p_two = new Person('Raushan', 'Kumar','Hisua, Bihar');
const p_three = new Person('Abhishek', 'Kumar','Gaya, Bihar');

console.log(p_one);
console.log(p_one.firstName);
console.log(p_one.lastName);
console.log(p_one.officeAddress);

console.log(p_two);
console.log(p_three);
