const bookStore = {
    name: "Amazing Books",
    sections: {
        fiction: {
            books: [],
            _discount: 0,

            get discount() {
                return `${this._discount}%`;
            },

            set discount(value) {
                if (value < 0 || value > 100) {
                    throw new Error("Discount must be between 0 and 100");
                }
                this._discount = value;
            },

            get totalPrice() {
                return this.books.reduce((sum, book) => {
                    const discountedPrice = book.price * (1 - this._discount / 100);
                    return sum + discountedPrice;
                }, 0);
            }
        },

        nonfiction: {
            books: [],
            _rating: 0,

            get rating() {
                return "⭐".repeat(this._rating);
            },

            set rating(value) {
                if (value < 0 || value > 5) {
                    throw new Error("Rating must be between 0 and 5");
                }
                this._rating = value;
            },

            get averagePrice() {
                if (this.books.length === 0) return 0;
                const total = this.books.reduce((sum, book) => sum + book.price, 0);
                return total / this.books.length;
            }
        },

        addBook(sectionName, book) {
            if (!this[sectionName]) {
                throw new Error(`Section ${sectionName} doesn't exist`);
            }
            this[sectionName].books.push(book);
        },

        findBooksByPriceRange(minPrice, maxPrice) {
            const allBooks = [...this.fiction.books, ...this.nonfiction.books];
            return allBooks.filter(book =>
                book.price >= minPrice && book.price <= maxPrice
            );
        }
    }
};

bookStore.sections.addBook('fiction', { title: "The Hobbit", price: 250 });
bookStore.sections.addBook('fiction', { title: "Dune", price: 300 });
bookStore.sections.addBook('nonfiction', { title: "Clean Code", price: 400 });

bookStore.sections.fiction.discount = 20;
bookStore.sections.nonfiction.rating = 4;

console.log("Fiction discount:", bookStore.sections.fiction.discount);
console.log("Fiction total price with discount:", bookStore.sections.fiction.totalPrice);
console.log("Nonfiction rating:", bookStore.sections.nonfiction.rating);
console.log("Nonfiction average price:", bookStore.sections.nonfiction.averagePrice);

console.log("Books between 200 and 300:", bookStore.sections.findBooksByPriceRange(200, 300));
