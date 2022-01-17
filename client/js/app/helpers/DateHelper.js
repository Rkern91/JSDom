  class DateHelper
  {
    /**
     * Cosntrutor da Classe
     * Exibe apenas um erro caso a classe for instanciada
     */
    constructor() {
      throw new Error('DateHelper não pode ser instanciado!');
    }

    /**
     * Recebe uma data e retorna uma string formata em pt_BR
     * usando um Template String
     * @param data
     * @returns {string}
     */
    static dataParaTexto(data){
      return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    /**
     * Recebe uma string e transforma em um objeto Date. Verifica se
     * string passada está no padrão correto de data
     * @param texto
     */
    static textoParaData(texto) {
      if (!CodigoHelper.validarFormato(texto))
        throw new Error('A data deve estar no formato AAAA-MM-DD')

      return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }
  }