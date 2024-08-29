import { test, expect } from '@playwright/test';
import { LoginVida } from '../methods/EccomerceVida/loginVida'; // ruta

test.describe('Login Tests', () => {
  let loginViajes: LoginVida;

  test.beforeEach(async ({ page }) => {
    LoginVida = new LoginVida(page);
  });

  test('Login Viajes Produccion', async ({ page }) => {
    await LoginVida.login();
    await page.waitForTimeout(2000);
  });

  import { test, expect } from '@playwright/test';
import { LoginVida } from '../methods/EccomerceVida/loginVida'; // ruta

test.describe('Login Tests', () => {
  let loginViajes: LoginVida;

  test.beforeEach(async ({ page }) => {
    loginViajes = new LoginVida(page);
  });

  test('Login Viajes Produccion', async ({ page }) => {
    await loginViajes.loginVidaBCP();
    await page.waitForTimeout(2000);
  });

  test('Login Viajes BCP', async ({ page }) => {
    await loginViajes.loginVidaPromocionesBCP();
    await page.waitForTimeout(2000);
  });

  
});