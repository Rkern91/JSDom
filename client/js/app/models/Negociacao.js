  /**
   * Classe <b>Negociação</b> que contém a regra da aplicação.
   */
  class Negociacao
  {
    /**
     * Construtor de classe
     * @param data       - Um objeto do tipo data no formato <b>d/m/Y</b>
     * @param quantidade - <b>Integer</b>
     * @param valor      - <b>Number</b>
     */
    constructor(data, quantidade, valor)
    {
      this._data       = new Date (data.getTime());
      this._quantidade = quantidade;
      this._valor      = valor;
    }

    /**
     * Calcula o volume total da negociação
     * e retorna este valor.
     * @returns {number}
     */
    get volume ()
    {
      return this._quantidade * this._valor;
    }

    /**
     * Retorna a data
     * @returns {_data}
     */
    get data()
    {
      return this._data;
    }

    /**
     * Retorna a quantidade
     * @returns {_quantidade}
     */
    get quantidade()
    {
      return this._quantidade;
    }

    /**
     * Retorna o valor
     * @returns {_valor}
     */
    get valor()
    {
      return this._valor;
    }
  }