const person = {
    firstName: "Anna",
    lastName: "Nelson",
    sex: "female",
    age: 32,
    nationality: "American",
    children: [
        {
            firstName: "Victor",
            lastName: "Nelson",
            sex: "male",
            age: 12
        },
        {
            firstName: "Emily",
            lastName: "Nelson",
            sex: "female",
            age: 8
        }
    ],
    address: {
        city: "New York",
        country: "USA",
        street: "5th Avenue"
    },
    isEmployed: true,
    greet: function() {
        console.log("Hello, I'm " + this.firstName);
    },
    getChildrenNames: function() {
        this.children.forEach(child => {
            console.log(child.firstName + " " + child.lastName);
        });
    }
};

person.greet();
person.getChildrenNames();
