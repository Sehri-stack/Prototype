/**
 *  article controller
 */
'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::articles.articles');
