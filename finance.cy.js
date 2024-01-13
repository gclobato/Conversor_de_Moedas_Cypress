describe('Teste de Conversão de Moedas no site do Banco Central do Brasil', () => {
  it('Inserir valor X (50) e converter para Dólar', () => {
    cy.visit('https://www.bcb.gov.br/')
    cy.wait(2000); // aguarda 2 segundos

    // Localizar e acessar o Conversor de Moedas.
    cy.get('#home > div > div:nth-child(1) > div.componente.conversor.mt-4 > div > conversormoedas > a').click();

    cy.get('body > app-root > bcb-cookies > div > div > div > div > button.btn.btn-primary.btn-accept').click();
    // Aceita Cookies do site.

    cy.get('body > app-root > app-root > div > div > main > dynamic-comp > div > div:nth-child(2) > bcb-detalhesconversor > div > div.card-header > form > div.row > div.col-md-2 > div > input').type('50,00');
    // Insere Valor "5".

    cy.get('body > app-root > app-root > div > div > main > dynamic-comp > div > div:nth-child(2) > bcb-detalhesconversor > div > div.card-header > form > div.row > div:nth-child(5) > div > button > span').click();
    // Clica no botão para converter o valor.


    cy.wait(3000); // aguarda 3 segundos


    // Inserir a soma dos valores X e Y (por exemplo, 0) na moeda inicial para conversão
    cy.get('body > app-root > app-root > div > div > main > dynamic-comp > div > div:nth-child(2) > bcb-detalhesconversor > div > div.card-header > form > div.row > div.col-md-2 > div > input').type('0');


    cy.get('body > app-root > app-root > div > div > main > dynamic-comp > div > div:nth-child(2) > bcb-detalhesconversor > div > div.card-header > form > div.row > div:nth-child(5) > div > button > span').click();
    // Clica no botão para converter o valor.


  })

});


