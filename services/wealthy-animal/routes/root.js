/// <reference path="../global.d.ts" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.get("/example", async (request, reply) => {
    return { hello: fastify.example };
  });
    fastify.post("/great-ne", async (request, reply) => {
      return { bye: fastify.example };
    });
}
