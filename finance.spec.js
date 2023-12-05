describe('Teste de Conversão de Moedas no site do Banco Central do Brasil', () => {
    it('Inserir valor X (5) e converter para EURO', () => {
      cy.visit('https://www.bcb.gov.br/')
      // Localizar e acessar o Conversor de Moedas
      // (Supondo que haja um botão ou link para acessar o Conversor)
      cy.get('.conversor-moedas-link').click()
  
      // Inserir o valor 5 na moeda inicial para conversão
      cy.get('#moeda-inicial').type('5')
  
      // Selecionar a moeda EURO
      cy.get('#moeda-final').select('EURO')
  
      // Clicar no botão de conversão
      cy.get('#converter-btn').click()
  
      // Verificar se a conversão é feita corretamente para a moeda EURO
      cy.get('#resultado-conversao').should('contain', 'Valor convertido para EURO')
    })
  
    it('Inserir valor X + Y (0) e converter', () => {
      cy.visit('https://www.bcb.gov.br/')
      // Localizar e acessar o Conversor de Moedas
  
      // Inserir a soma dos valores X e Y (por exemplo, 0) na moeda inicial para conversão
      cy.get('#moeda-inicial').type('0')
  
      // Converter para a moeda desejada (selecione uma moeda)
  
      // Clicar no botão de conversão
      cy.get('#converter-btn').click()
  
      // Verificar se a conversão é realizada corretamente
      // (Faça uma validação similar à anterior para a moeda selecionada)
    })
  
    it('Inserir valor X + Y (0) e converter novamente', () => {
      cy.visit('https://www.bcb.gov.br/')
      // Localizar e acessar o Conversor de Moedas
  
      // Inserir novamente a mesma soma (0) dos valores X e Y
      cy.get('#moeda-inicial').type('0')
  
      // Realizar a conversão
  
      // Confirmar se a conversão é consistente com o passo anterior
      // (Faça uma validação similar às anteriores)
    })
  
    // Observações podem ser documentadas como comentários dentro dos testes
  })
  