import { Page } from '@playwright/test';

export class LoginVida {

  constructor(private page: Page) {}

  async loginVidaBCP() {
    await this.page.goto('https://ventasonline.pacifico.com.pe/seguro-vida-devolucion/bcp/principal');
   try {
        await this.page.waitForSelector('//*[@id="initialSection"]/div[1]/div/div/div[2]"]', { timeout: 1000 });
      } catch (error) {
        console.error('E. VidaBCP: No se logró exitosamente la prueba de humo.');
      }
  }

  async loginVidaPromocionesBCP() {
    await this.page.goto('https://ventasonline.pacifico.com.pe/seguro-vida-devolucion/promocionesbcp/principal');
   try {
        await this.page.waitForSelector('//*[@id="initialSection"]/div[1]/div/div/div[2]"]', { timeout: 1000 });
      } catch (error) {
        console.error('E. VidaPromocionesBCP: No se logró exitosamente la prueba de humo.');
      }
  }

  async loginVidaCallBCP() {
    await this.page.goto('https://ventasonline.pacifico.com.pe/seguro-vida-devolucion/callcenterbcp/principal');
   try {
        await this.page.waitForSelector('//*[@id="initialSection"]/div[1]/div/div/div[2]"]', { timeout: 1000 });
      } catch (error) {
        console.error('E. VidaCallBCP: No se logró exitosamente la prueba de humo.');
      }
  }

  async loginVidaCall() {
    await this.page.goto('https://ventasonline.pacifico.com.pe/seguro-vida-devolucion/callcenter/principal');
   try {
        await this.page.waitForSelector('//*[@id="initialSection"]/div[1]/div/div/div[2]"]', { timeout: 1000 });
      } catch (error) {
        console.error('E. VidaCall: No se logró exitosamente la prueba de humo.');
      }
  }

  async loginVida() {
    await this.page.goto('https://ventasonline.pacifico.com.pe/seguro-vida-devolucion/principal');
   try {
        await this.page.waitForSelector('//*[@id="initialSection"]/div[1]/div/div/div[2]"]', { timeout: 1000 });
      } catch (error) {
        console.error('E. Vida: No se logró exitosamente la prueba de humo.');
      }
  }

  async loginVidaMasivo() {
    await this.page.goto('https://ventasonline.pacifico.com.pe/seguro-vida-devolucion/vidamasivo/principal');
   try {
        await this.page.waitForSelector('//*[@id="initialSection"]/div[1]/div/div/div[2]"]', { timeout: 1000 });
      } catch (error) {
        console.error('E. VidaMasivo: No se logró exitosamente la prueba de humo.');
      }
  }
}
