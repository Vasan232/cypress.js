describe('Проверка авторизации', function () {
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // вели верный логин
        cy.get('#pass').type(' iLoveqastudio1'); // вели верный пароль
        cy.get('#loginButton').click(); // нажал войти 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })

     it('Проверка востановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').click(); // нажимаю кнопку востановить пароль
        cy.get('#mailForgot').type('german@dofhhjkikov.ru'); // вел почту для востановления
        cy.get('#restoreEmailButton').click(); // нажал отправить код
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })

     it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // вели верный логин
        cy.get('#pass').type(' iLoveqastudio3'); // вели не верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })

    it('Не верный  логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikobr.ru'); // вели не верный логин
        cy.get('#pass').type(' iLoveqastudio1'); // вели верный пароль
        cy.get('#loginButton').click(); // нажал войти 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })

    it('Проверка,что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germandolnikobr.ru'); // вел логин без @
        cy.get('#pass').type(' iLoveqastudio1'); // вели верный пароль
        cy.get('#loginButton').click(); // нажал войти 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })

     it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // вел логин строчными буквами
        cy.get('#pass').type(' iLoveqastudio1'); // вели верный пароль
        cy.get('#loginButton').click(); // нажал войти 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю,что после Авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })
})   






