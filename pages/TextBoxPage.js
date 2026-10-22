
class TextBoxPage {
  constructor(page) {
    this.page = page;
    this.fullName = page.locator('#userName');
    this.email = page.locator('#userEmail');
    this.currentAddress = page.locator('#currentAddress');
    this.submitButton = page.locator('#submit');
    this.outputName = page.locator('#name');
  }

  async open() {
    await this.page.goto('/text-box');
  }

  async fillForm(name, email, address) {
    await this.fullName.fill(name);
    await this.email.fill(email);
    await this.currentAddress.fill(address);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}

module.exports = { TextBoxPage };
