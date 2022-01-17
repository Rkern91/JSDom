  class CodigoHelper
  {
    /**
     * Método que valida o formato através de um REGEXP
     * @param texto
     * @returns {boolean}
     */
    static validarFormato(texto)
    {
      return /^\d{4}-\d{2}-\d{2}$/.test(texto);
    }
  }