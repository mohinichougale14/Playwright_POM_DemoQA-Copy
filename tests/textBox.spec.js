
const { test, expect } = require('@playwright/test');
const { TextBoxPage } = require('../pages/TextBoxPage');

test('should submit the text box form successfully', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);

  await textBoxPage.open();

  await textBoxPage.fillForm(
    'Mohini Chougale',
    'mohini@example.com',
    'Mumbai, Maharashtra'
  );

  await textBoxPage.submitForm();

  await expect(page.locator('#output #name'))
    .toContainText('Mohini Chougale');

  await expect(page.locator('#output #email'))
    .toContainText('mohini@example.com');

  await expect(page.locator('#output #currentAddress'))
    .toContainText('Mumbai, Maharashtra');
  
});
