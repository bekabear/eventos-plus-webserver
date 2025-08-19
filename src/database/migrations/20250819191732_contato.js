/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('contato', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp');
        table.string('mensagem').notNullable();
        table.timestamp(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
     return knex.schema.dropTable('contato')
};
