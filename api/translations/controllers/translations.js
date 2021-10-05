'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

 module.exports = {
    // GET /hello
    async find(ctx) {
        let entities;
        if(ctx.query._q) {
            entities = await strapi.services.translations.search(ctx.query, []);
        } else {
            entities = await strapi.services.translations.find(ctx.query, []);
        }
      return entities.map((entity) => sanitizeEntity(entity, { model: strapi.models.translations }))
    },
  };
