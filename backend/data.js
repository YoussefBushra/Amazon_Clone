import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Basir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],

    products: [
        {
            _id: "1",
            name: "Nike Slim shirt",
            category: 'Shirts',
            image: "../images/p1.jpg",
            price: 120,
            countInStock: 30,
            brand: "Nike",
            rating: 4.5,
            numReviews: 10,
            description: "Best quality - Highly Rated Product"
        },
        {
            _id: "2",
            name: "Adidas fit shirt",
            category: 'Shirts',
            image: "../images/p2.jpg",
            price: 100,
            countInStock: 0,
            brand: "Nike",
            rating: 4,
            numReviews: 8,
            description: "Best quality - Highly Rated Product"
        },
        {
            _id: "3",
            name: "Nike Slim shirt",
            category: 'Shirts',
            image: "../images/p3.jpg",
            price: 99,
            countInStock: 10,
            brand: "Nike",
            rating: 5,
            numReviews: 14,
            description: "Best quality - Highly Rated Product"
        },
        {
            _id: "4",
            name: "Nike Slim shirt",
            category: 'Shirts',
            image: "../images/p4.jpg",
            price: 129,
            countInStock: 8,
            brand: "Nike",
            rating: 3.5,
            numReviews: 32,
            description: "Best quality - Highly Rated Product"
        },
        {
            _id: "5",
            name: "Nike Slim shirt",
            category: 'Shirts',
            image: "../images/p5.jpg",
            price: 75,
            countInStock: 10,
            brand: "Nike",
            rating: 2,
            numReviews: 12,
            description: "Best quality - Highly Rated Product"
        },
    ]
};

export default data;