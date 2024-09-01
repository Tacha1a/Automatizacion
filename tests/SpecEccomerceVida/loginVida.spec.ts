import { test, expect } from '@playwright/test';
import { LoginVida } from '../methods/EccomerceVida/loginVida'; // ruta

test.describe('Login Tests', () => {
  let loginVida: LoginVida;

  test.beforeEach(async ({ page }) => {
    loginVida = new LoginVida(page);
  });

  test('Login Vida Produccion', async ({ page }) => {
    await loginVida.loginVidaBCP();
    await page.waitForTimeout(2000);
  });

  test('Login Vida BCP', async ({ page }) => {
    await loginVida.loginVidaPromocionesBCP();
    await page.waitForTimeout(2000);
  });

  test('Login Vida Produccion', async ({ page }) => {
    await loginVida.loginVidaCallBCP();
    await page.waitForTimeout(2000);
  });

  test('Login Vida BCP', async ({ page }) => {
    await loginVida.loginVidaCall();
    await page.waitForTimeout(2000);
  });

  test('Login Vida Produccion', async ({ page }) => {
    await loginVida.loginVida();
    await page.waitForTimeout(2000);
  });

  test('Login Vida BCP', async ({ page }) => {
    await loginVida.loginVidaMasivo();
    await page.waitForTimeout(2000);
  });

  
});