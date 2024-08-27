'use strict';

/**
 * extern router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::extern.extern');
