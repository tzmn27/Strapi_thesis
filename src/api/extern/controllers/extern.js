'use strict';

/**
 * extern controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::extern.extern');
