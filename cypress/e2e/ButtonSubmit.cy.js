describe('ButtonSubmit', () => {
  it('should display button with correct text', () => {
    cy.visit('/') // Điều hướng đến một trang bất kỳ trong ứng dụng NuxtJS

    // Kiểm tra xem component ButtonSubmit có hiển thị hay không
    cy.get('.button-area').should('be.visible')

    // Kiểm tra xem button có chứa đúng văn bản "Create a new task" hay không
    cy.contains('button', 'Create a new task').should('be.visible')
  })

  it('should trigger click event when button is clicked', () => {
    cy.visit('/') // Điều hướng đến một trang bất kỳ trong ứng dụng NuxtJS

    // Nhấp vào button
    cy.get('.button-area').find('button').click()

    // Kiểm tra xem có hiển thị tin nhắn thành công hay không
    cy.contains('Success message').should('be.visible')
  })
})
