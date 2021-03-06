  class NegociacoesView extends View
  {
    constructor(elemento)
    {
      super(elemento);
    }

    template(model)
    {
      return `
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
            </tr>
          </thead>
          
          <tbody>
            ${model.negociacoes.map(item => `
                <tr>
                  <td>${DateHelper.dataParaTexto(item.data)}</td>
                  <td>${item.quantidade}</td>
                  <td>${item.valor}</td>
                  <td>${item.volume}</td>
                </tr>
            `).join('')}
          </tbody>
          
          <tfoot>
            <td colspan="3" style="stroke: black"><b>TOTAL</b></td>
            <td>
              ${model.negociacoes.reduce((total, valor) => total + valor.volume, 0.0)}
            </td>
          </tfoot>
        </table>
      `;
    }
  }