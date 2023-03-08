import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'detalledeordenes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('producto_id').unsigned().references('id').inTable('productos')
      table.integer('orden_id').unsigned().references('id').inTable('ordenes')
      table.integer('cantidad').notNullable()
      table.integer('precio').notNullable()

      //table.integer('cliente_id').unsigned().references('id').inTable('clientes')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
