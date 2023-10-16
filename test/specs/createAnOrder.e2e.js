const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should wait for the taxi driver', async () => {
       //Call the taxi to the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    })
      
    it('should select supportive plan', async () => {
      await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
      const supportiveClassButton = await $(page.supportiveClassButton);
      await supportiveClassButton.waitForDisplayed();
      await supportiveClassButton.click();
    })

    it('should input phone number', async () => {
      await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('add credit card ', async () => {
      await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
      const paymentMethodButton = await $(page.paymentMethodButton);
      await paymentMethodButton.waitForDisplayed();
      await paymentMethodButton.click();
      const addCardButton = await $(page.addCardButton);
      await addCardButton.waitForDisplayed();
      await addCardButton.click();
      const cardNumber = await $(page.cardNumber);
      await cardNumber.waitForDisplayed();
      await cardNumber.setValue(1234567891234567);
      const cardCode = await $(page.cardCode);
      await cardCode.waitForDisplayed();
      await cardCode.setValue(14);
      const cardSignatureStrip = await $(page.cardSignatureStrip);
      await cardSignatureStrip.waitForDisplayed();
      await cardSignatureStrip.click();
      const linkCardButton = await $(page.linkCardButton);
      await linkCardButton.waitForDisplayed();
      await linkCardButton.click();
    const closePaymentMethodButton = await $(page.closePaymentMethodButton);
    await closePaymentMethodButton.waitForDisplayed();
    await closePaymentMethodButton.click();
    const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
    await cardPaymentMethodIcon.waitForDisplayed();
    await expect (await $(cardPaymentMethodIcon)).toBeExisting();
})

it('message driver', async () => {
  await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const messageDriverField = await $(page.messageDriverField);
    await messageDriverField.waitForDisplayed();
    await messageDriverField.setValue("thank you");
    const message = await messageDriverField.getValue();
    await expect(message).toBe("thank you");
})
    
it('should order blankets and hankerchiefs', async () => {
    const blanketAndHankerchiefs = await $(page.blanketAndHankerchiefs);
    await blanketAndHankerchiefs.scrollIntoView();
    await blanketAndHankerchiefs.waitForDisplayed();
    await expect(blanketAndHankerchiefs).toBeEnabled();
})
    
it('order 2 icecreams', async () => {
  await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const iceCreamPlusButton = await $(page.iceCreamPlusButton);
    await iceCreamPlusButton.scrollIntoView();
    await iceCreamPlusButton.waitForDisplayed();
    await iceCreamPlusButton.click();
    await iceCreamPlusButton.click();
    await expect(await helper.getElementByText("2")).toBeExisting;
})

it('car search modal appear ', async () => {
    const orderConfirmationModal = await $(page.orderConfirmationModal);
    await expect(orderConfirmationModal).toBeExisting();
})

await browser.pause(3000);


    })


