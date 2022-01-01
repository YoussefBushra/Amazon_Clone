import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'youssef',
            email: 'youssef@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'tasneem',
            email: 'tasneem@example.com',
            password: '1234',
            isAdmin: false,
        },
        {
            name: 'Omar',
            email: 'Omar@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            
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

        {
            name: "NB Athletics Higher Learning Anorak",
            category: 'Shirts',
            image: "../images/p8.jpg",
            price: 500,
            countInStock: 10,
            brand: "New Balance",
            rating: 5,
            numReviews: 14,
            description: "Oversized fit made with a roomy, modern silhouette designed to give you a stylish, less structured feel"
        },
    ]
};

export default data;