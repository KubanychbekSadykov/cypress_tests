describe('Payment spec', () => {
  it('adds a payment', () => {
    cy.fixture('example.json').then((example) => {
      cy.login(); 
    });
	cy.contains('div', 'Добавить платёж').click();
	cy.get('textarea.input__input').eq(0).type('Тестовое описание');
	cy.get('div.checkbox__icon.checkbox__icon--checkbox').eq(0).click();
	cy.get('div.checkbox__icon.checkbox__icon--checkbox').eq(1).click();
	cy.get('input[type="text"]').eq(0).type('1000000');
	cy.get('input[type="text"]').eq(1).type('2000000');
	cy.get('div.checkbox__icon.checkbox__icon--radio').eq(4).click();
	cy.get('input.date__input').eq(0).invoke('val', '2022-07-15');
	cy.get('input.date__input').eq(1).invoke('val', '2022-07-15');	
	cy.get('span.multiselect__placeholder')
	.eq(0)
	.click();	
	cy.get('div.multiselect__content-wrapper')
	.eq(0)
	.should('be.visible')  
	.within(() => {
    cy.contains('span.multiselect__option', 'Заявка No111')
      .click({ force: true }); 
	});
	cy.get('textarea.input__input').eq(1).type('Тестовый источник');
	cy.get('span.multiselect__placeholder').eq(0).click();
	cy.contains('span', 'Акт подписан').click();
	cy.get('span.multiselect__placeholder').eq(0).click();	
	cy.contains('span', 'ООО Ромашкино').click();
	cy.get('span.multiselect__placeholder').eq(0).click();	
	cy.contains('span', 'ромашкино').click();
	cy.get('span.multiselect__placeholder').eq(0).click();	
	cy.contains('span', '2424 2424 2424 2424').click();
	cy.get('input.multiselect__input').eq(5).type('2424 2424 2424 2424', { force: true });
	cy.get('ul.multiselect__content').eq(5)
	.should('be.visible')  
	.within(() => {
    cy.contains('span.multiselect__option', '2424 2424 2424 2424')
      .click();
	});
	cy.get('span.multiselect__placeholder').eq(0).click();	
	cy.contains('span', 'приход').click();
	cy.get('div.button__content').eq(1).click();
  });
});