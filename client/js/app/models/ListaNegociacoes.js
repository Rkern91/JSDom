  class ListaNegociacoes
  {
    /**
     *Construtor da Classe
     */
    constructor(){
      this._negociacoes = [];
    }

    /**
     * Adiciona uma nova negociação na lista
     * @param negociacao
     */
    adiciona(negociacao){
      this._negociacoes.push(negociacao);
    }

    /**
     * Método que devolve um array contendo a lista de negociações
     * @returns {[]}
     */
    get negociacoes(){
      return [].concat(this._negociacoes);
    }
  }