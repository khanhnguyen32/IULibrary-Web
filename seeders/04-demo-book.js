'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [{
                address: "01.010",
                name: "Small Business Idea",
                author: "Justin Gesso",
                imagePath: '/img/product/B1.jpg',
                thumbnailPath: "/img/product/B1.jpg",
                availableQuantity: 1,
                summary: "Stop chasing money-making schemes and cookie-cutter businesses. Real success is personal and is achieved by finding the path on which YOU will thrive.",
                description: "Knowledge sharing book for BA students",
                overallReview: 0,
                reviewCount: 0,
                majorId: 1,
                publisherId: 1,
                categoryId: 2
            },
            {
                address: "01.010",
                name: "The Business Book of Coaching",
                author: "Ajit Nawalkha & Neeta Bhushan",
                imagePath: '/img/product/B2.jpg',
                thumbnailPath: "/img/product/B2.jpg",
                availableQuantity: 1,
                summary: "Everything that coaches seeking wealth and freedom need to know",
                description: "knowledge for BA student",
                overallReview: 0,
                reviewCount: 0,
                majorId: 1,
                publisherId: 2,
                categoryId: 2
            },
            {
                address: "01.010",
                name: "Intelligent Business",
                author: "Christine Johnson",
                imagePath: '/img/product/B3.png',
                thumbnailPath: "/img/product/B3.png",
                availableQuantity: 1,
                summary: "Intelligent Business makes the world of business accessible to English language students whatever their level or business experience.",
                description: "The course features authentic material from The Economist and the dedicated Skills Book provides focused training in communication skills for business professionals.",
                overallReview: 0,
                reviewCount: 0,
                majorId: 1,
                publisherId: 6,
                categoryId: 2
            },
            {
                address: "01.010",
                name: "How to make Big Money",
                author: "Dan Kennedy & Adam Witty",
                imagePath: '/img/product/B4.jpg',
                thumbnailPath: "/img/product/B4.jpg",
                availableQuantity: 1,
                summary: "How to make big money with your book without even selling a single copy.",
                description: "Adam Witty is the Frounder and Chief Executive Officer of Advantage Media Group, a leading publisher of business, motivation and self-help authors. Adam has worked with dozens of authors to help them get their book written, published, marketed, and distributed. Adam is an in-demand speaker, teacher, and consultant on marketing and business development techniques for authors.",
                overallReview: 0,
                reviewCount: 0,
                majorId: 1,
                publisherId: 3,
                categoryId: 2
            },
            {
                address: "01.040",
                name: "IELTS 8",
                author: "Cambridge University",
                imagePath: '/img/product/BCambridge1.jpg',
                thumbnailPath: "/img/product/BCambridge1.jpg",
                availableQuantity: 1,
                summary: "It assesses your ability to understand details within the text and to identify the main idea and will usually be on one part of the text rather than the whole text.",
                description: "",
                overallReview: 0,
                reviewCount: 0,
                majorId: 4,
                publisherId: 4,
                categoryId: 2
            },
            {
                address: "01.040",
                name: "English Grammar in Use",
                author: "Raymond Murphy.",
                imagePath: '/img/product/BCambridge2.jpg',
                thumbnailPath: "/img/product/BCambridge2.jpg",
                availableQuantity: 1,
                summary: "Clear grammar explanations and examples on each left-hand page, and practice exercises on each right-hand page. Full answer key at the back of the book, along with additional exercises and a study guide to help learners identify which areas of English grammar they need help with.",
                description: "Arranged in a tried-and-trusted, easy to use format, with explanations of grammar points on each left-hand page and exercises to check understanding on the right",
                overallReview: 0,
                reviewCount: 0,
                majorId: 4,
                publisherId: 4,
                categoryId: 2
            },
            {
                address: "01.040",
                name: "Oxford Discover Science",
                author: "Luls Vanges",
                imagePath: '/img/product/BOxford2.jpg',
                thumbnailPath: "/img/product/BOxford2.jpg",
                availableQuantity: 1,
                summary: "It assesses your ability to understand details within the text and to identify the main idea and will usually be on one part of the text rather than the whole text.",
                description: "",
                overallReview: 0,
                reviewCount: 0,
                majorId: 4,
                publisherId: 5,
                categoryId: 2
            },
            {
                address: "01.040",
                name: "Aim High",
                author: "Lewis Lansford",
                imagePath: '/img/product/BOxford4.jpg',
                thumbnailPath: "/img/product/BOxford4.jpg",
                availableQuantity: 1,
                summary: "Aim High develops students' knowledge of grammar, vocabulary and study skills encouraging learner autonomy and exam success.",
                description: "129 pages, released in 2010",
                overallReview: 0,
                reviewCount: 0,
                majorId: 4,
                publisherId: 5,
                categoryId: 2
            },
            {
                address: "01.020",
                name: "Artificial Intelligence and Machine Learning for Business",
                author: "John Medicine",
                imagePath: '/img/product/IT1.jpg',
                thumbnailPath: "/img/product/IT1.jpg",
                availableQuantity: 1,
                summary: "Artificial Intelligence and Machine Learning for Business cuts through the technical jargon that is often associated with these subjects. It delivers a simple and concise introduction for managers and business people. The focus is very much on practical application, and how to work with technical specialists (data scientists) to maximize the benefits of these technologies.",
                description: "Print length : 152 pages, Publisher : Relativistic; 2nd edition (May 27, 2017), Publication date : May 27, 2017",
                overallReview: 0,
                reviewCount: 0,
                majorId: 2,
                publisherId: 7,
                categoryId: 2
            },
            {
                address: "01.020",
                name: "Information Technology and Its Application in Business",
                author: "Anant Kumar Sicastava",
                imagePath: '/img/product/IT2.jpg',
                thumbnailPath: "/img/product/IT2.jpg",
                availableQuantity: 1,
                summary: "Artificial Intelligence and Machine Learning for Business cuts through the technical jargon that is often associated with these subjects. It delivers a simple and concise introduction for managers and business people. The focus is very much on practical application, and how to work with technical specialists (data scientists) to maximize the benefits of these technologies.",
                description: "1st edition (January 1, 2018), Language : English",
                overallReview: 0,
                reviewCount: 0,
                majorId: 2,
                publisherId: 8,
                categoryId: 2
            },
            {
                address: "01.020",
                name: "Information Technology and Its Application in Business",
                author: "Anant Kumar Sicastava",
                imagePath: '/img/product/IT2.jpg',
                thumbnailPath: "/img/product/IT2.jpg",
                availableQuantity: 1,
                summary: "Artificial Intelligence and Machine Learning for Business cuts through the technical jargon that is often associated with these subjects. It delivers a simple and concise introduction for managers and business people. The focus is very much on practical application, and how to work with technical specialists (data scientists) to maximize the benefits of these technologies.",
                description: "1st edition (January 1, 2018), Language : English",
                overallReview: 0,
                reviewCount: 0,
                majorId: 2,
                publisherId: 7,
                categoryId: 2
            },
            {
                address: "01.020",
                name: "Communication Technology",
                author: "Everett M.Rogers",
                imagePath: '/img/product/IT3.jpg',
                thumbnailPath: "/img/product/IT3.jpg",
                availableQuantity: 1,
                summary: "The flagship book in the Series in Communication Technology and Society, Communication Technology introduces the history and uses of the new technologies and examines basic issues posed by interactive media in areas that affect intellectual, organization, and social life.",
                description: "(September 1, 2002)",
                overallReview: 0,
                reviewCount: 0,
                majorId: 2,
                publisherId: 9,
                categoryId: 2
            },
            {
                address: "01.020",
                name: "Information Technology and Innovation",
                author: "John M. Jordan",
                imagePath: '/img/product/IT5.jpg',
                thumbnailPath: "/img/product/IT5.jpg",
                availableQuantity: 1,
                summary: "Information technology (IT) innovation in an enterprise involves using technology in new ways to create a more efficient organization and improve alignment between technology initiatives and business goals.",
                description: "(September 1, 2002)",
                overallReview: 0,
                reviewCount: 0,
                majorId: 2,
                publisherId: 7,
                categoryId: 2
            },
        ];

        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('Books', data, {});
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Books', null, {});
    }
};