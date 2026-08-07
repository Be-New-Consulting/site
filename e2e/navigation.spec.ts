import { test, expect } from '@playwright/test'

test.describe('Navigation and content', () => {
  test('home page loads with hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Fabien Costes')).toBeVisible()
    await expect(page.locator('text=Qualité logicielle et IA appliquée')).toBeVisible()
  })

  test('can navigate to parcours page', async ({ page }) => {
    await page.goto('/')
    await page.click('a[href="/parcours"]')
    await expect(page).toHaveURL('/parcours')
    await expect(page.locator('text=Parcours professionnel')).toBeVisible()
  })

  test('direct access to /parcours works', async ({ page }) => {
    await page.goto('/parcours')
    await expect(page.locator('text=Parcours professionnel')).toBeVisible()
    await expect(page.locator('text=ISTQB Foundation')).toBeVisible()
  })

  test('can navigate back from parcours to home', async ({ page }) => {
    await page.goto('/parcours')
    await page.click('a:has-text("Retour")')
    await expect(page.locator('text=Fabien Costes')).toBeVisible()
  })

  test('migration case study figures are visible', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=~1 To')).toBeVisible()
    await expect(page.locator('text=100+ Mds')).toBeVisible()
  })

  test('agentic case is marked as experimentation', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.badge--experiment')).toBeVisible()
  })

  test('internal links work correctly', async ({ page }) => {
    await page.goto('/')
    const linkedInLink = page.locator('a[href="https://www.linkedin.com/in/fabiencostes/"]').first()
    await expect(linkedInLink).toBeVisible()

    const cvLink = page.locator('a[href="https://cv.fcostes.fr/"]').first()
    await expect(cvLink).toBeVisible()
  })

  test('no console errors on home', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    expect(errors).toHaveLength(0)
  })

  test('no console errors on parcours', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/parcours')
    await page.waitForLoadState('networkidle')
    expect(errors).toHaveLength(0)
  })
})

test.describe('Mobile navigation', () => {
  test('burger menu opens navigation on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    const toggle = page.locator('button[aria-label="Ouvrir le menu"]')
    await expect(toggle).toBeVisible()
    await toggle.click()
    const nav = page.locator('.nav-links--open')
    await expect(nav).toBeVisible()
  })
})
