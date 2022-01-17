  class NegociacaoController
  {
    /**
     * Construtor da Classe que obtém os campos do formulário
     * para manipulação dentro da classe. Cria uma listagem de negociações.
     */
    constructor(){
      let $                  = document.querySelector.bind(document);
      this._inputData        = $('#data');
      this._inputQuantidade  = $('#quantidade');
      this._inputValor       = $('#valor');
      this._listaNegociacoes = new ListaNegociacoes();
      this._negociacoesView  = new NegociacoesView($('#negociacoesView'));

      this._negociacoesView.update(this._listaNegociacoes);
      this._mensagem     = new Mensagem();
      this._mensagemView = new MensagemView($('#mensagemView'));
      this._mensagemView.update(this._mensagem);
    }

    /**
     * Método que adiciona um novo evento a lista negociações.
     * @param event
     */
    adiciona(event)
    {
      event.preventDefault();

      this._listaNegociacoes.adiciona(this._criaNegociacao());
      this._negociacoesView.update(this._listaNegociacoes);

      this._mensagem.texto = 'Negociação adicionada com sucesso';
      this._mensagemView.update(this._mensagem);

      this._limpaFormulario();
    }

    /**
     * Método que cria uma nova negociação buscando os
     * valores inseridos no formulário pelo usuário, devolvendo
     * para o método chamador.
     * @returns {Negociacao}
     * @private
     */
    _criaNegociacao(){
      return new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
      );
    }

    /**
     * Método que limpará o formulário após criação
     * de uma nova negociação.
     * @private
     */
    _limpaFormulario(){
      this._inputData.value       = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value      = 0.0;

      this._inputData.focus();
    }
  }