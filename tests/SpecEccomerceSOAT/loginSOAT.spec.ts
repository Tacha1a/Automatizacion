import { test, expect } from '@playwright/test';
import { LoginSOAT } from '../methods/EccomerceSOAT/loginSOAT'; // ruta

test.describe('Login Tests', () => {
  let loginSOAT: LoginSOAT;

  test.beforeEach(async ({ page }) => {
    loginSOAT = new LoginSOAT(page);
  });

  test('Login SOAT Produccion', async ({ page }) => {
    await loginSOAT.loginSOAT();
    await page.waitForTimeout(2000);
  });
  
});