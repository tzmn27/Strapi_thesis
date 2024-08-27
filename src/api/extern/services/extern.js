'use strict';

/**
 * extern service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::extern.extern');
