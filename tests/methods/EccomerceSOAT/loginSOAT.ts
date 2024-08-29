import { Page } from '@playwright/test';

export class LoginSOAT {

  constructor(private page: Page) {}

  async loginSOAT() {
    await this.page.goto('https://soat.pacifico.com.pe/');
   try {
        await this.page.waitForSelector('//*[@id="initialSection"]/div[1]/div/div/div[2]"]', { timeout: 1000 });
      } catch (error) {
        console.error('E. SOAT: No se logró exitosamente la prueba de humo.');
      }
  }
}