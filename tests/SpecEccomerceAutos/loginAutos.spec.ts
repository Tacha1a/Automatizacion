import { test, expect } from '@playwright/test';
import { loginAutos } from '../methods/EccomerceAutos/loginAutos'; // ruta

test.describe('Login Tests', () => {
  let loginAutos: loginAutos;

  test.beforeEach(async ({ page }) => {
    loginAutos = new loginAutos(page);
  });

  test('Login Autos Produccion', async ({ page }) => {
    await loginAutos.login();
    await page.waitForTimeout(2000);
  });



test.describe('Login Tests', () => {
  let loginAutos: loginAutos;

  test.beforeEach(async ({ page }) => {
    loginAutos = new loginAutos(page);
  });

  test('Login Autos Produccion', async ({ page }) => {
    await loginAutos.login();
    await page.waitForTimeout(2000);
  });

  
});