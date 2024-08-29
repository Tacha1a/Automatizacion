import { test, expect } from '@playwright/test';
import { loginSOAT } from '../methods/EccomerceSOAT/loginSOAT'; // ruta

test.describe('Login Tests', () => {
  let loginSOAT: loginSOAT;

  test.beforeEach(async ({ page }) => {
    loginSOAT = new loginSOAT(page);
  });

  test('Login SOAT Produccion', async ({ page }) => {
    await loginSOAT.login();
    await page.waitForTimeout(2000);
  });

  import { test, expect } from '@playwright/test';
import { loginSOAT } from '../methods/EccomerceSOAT/loginSOAT'; // ruta

test.describe('Login Tests', () => {
  let loginSOAT: loginSOAT;

  test.beforeEach(async ({ page }) => {
    loginSOAT = new loginSOAT(page);
  });

  test('Login SOAT Produccion', async ({ page }) => {
    await loginSOAT.login();
    await page.waitForTimeout(2000);
  });

  
});