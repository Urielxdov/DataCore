/**
 * Clase abstracta para todos los drivers de base de datos
 * Define la interfaz comun que deben de implementar todos los drivers
 */

class DatabaseDriver {
  constructor(config) {
    this.config = config
    this.connection = null
    this.isConnected = false
  }

  /**
   * Establece la conexion con la base de datos
   */

  async connect() {
    throw new Error("Metodo connect() debe de ser implementado")
  }


  /**
   * Cierra la conexion con la base de datos
   */
  async disconnect() {
    throw new Error("Metodo disconnect() debe de ser implementado")
  }

  /**
   * Crea un nuevo registro
   * @param {string} table - Nombre de la tabla
   * @param {object} data - datos a insertar
   */
  async create(table, data) {
    throw new Error("El metodo create() debe de ser implementado")
  }

  /**
   * Lee registros de la base de datos
   * @param {string} table - nombre de la tabla
   * @param {object} query - condiciones de busqueda
   */
  async read(table, query = {}) {
    throw new Error("El metodo read() debe de ser implementado")
  }

  /**
   * Actualiza un registro existente
   * @param {string} table - Nombre de la tabla
   * @param {string|number} id - ID del registro
   * @param {object} data -datos a actualizar 
   */
  async update(table, id, data) {
    throw new Error("El metodo update() debe de ser implementado")
  }

  /**
   * Elimina un registro
   * @param {string} table - Nombre de la tabla
   * @param {string | number} id- ID del registro
   */
  async delete(table, id) {
    throw new Error("El metodo delete debe de ser implementado")
  }

  /**
   * Eejecuta una peticion SQL cruda
   * @param {string} query - Query SQL
   * @param {array} params -Parametros para la query
   */
  async executeRaw(query, params = []) {
    throw new Error("El metodo executeRaw() debe de ser ejecutado")
  }

  /**
   * Verifica si hay conexion activa
   */
  checkConnection() {
    if (!this.isConnected) {
      throw new Error("La coneccion a la base de datos no esta habilitado")
    }
  }
}

module.exports = DatabaseDriver