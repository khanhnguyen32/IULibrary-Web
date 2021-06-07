'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "Deitel", summary: "", imagePath: '/img/publisher/Pub1.jpg' },
            { name: "CreateSpace Independent Publishing Platform", summary: "", imagePath: '/img/publisher/CreateSpace.png' },
            { name: "Bloomberg", summary: "", imagePath: '/img/publisher/Bloomberg.png' },
            { name: "Oxford", summary: "", imagePath: '/img/publisher/Oxford.jpg' },
            { name: "Cambridge", summary: "", imagePath: '/img/publisher/Cambridge.png' },
            { name: "California", summary: "", imagePath: '/img/publisher/California.png' },
            { name: "The MIT Press", summary: "", imagePath: '/img/publisher/TheMITPress.png' },
            { name: "Cengage Learning", summary: "", imagePath: '/img/publisher/Cengage.jpg' },
            { name: "Elsevier", summary: "", imagePath: '/img/publisher/Elsevier.png' },
            { name: "ForDummies", summary: "", imagePath: '/img/publisher/ForDummies.jpg' },
            { name: "Wrox", summary: "", imagePath: '/img/publisher/Wrox.jpg' },
            { name: "Apress", summary: "", imagePath: '/img/publisher/Apress.jpg' },
            { name: "Alpha Science", summary: "", imagePath: '/img/publisher/AlphaScience.png' },
            { name: "De Gruyter Mouton", summary: "", imagePath: '/img/publisher/De.png' },
            { name: "Kodansha", summary: "", imagePath: '/img/publisher/Kodansha.png' }
        ];

        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('Publishers', data, {});
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Publishers', null, {});
    }
};