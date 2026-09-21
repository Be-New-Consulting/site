import { test, expect } from '@playwright/test'

test.describe('Navigation and content', () => {
  test('home page loads with hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Fabien Costes')).toBeVisible()
    await expect(page.locator('text=Qualité logicielle et IA appliquée')).toBeVisible()
  })

  test('can navigate to parcours page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Parcours' }).first().click()
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
    await page.getByRole('link', { name: /Retour/ }).click()
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

    const sourceLink = page.locator('a[href="https://github.com/Be-New-Consulting/site"]').first()
    await expect(sourceLink).toBeVisible()

    const legalLink = page.getByRole('link', { name: /Mentions légales/i }).first()
    await expect(legalLink).toHaveAttribute('href', '/mentions-legales')
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

test.describe('Anchor navigation', () => {
  test('scroll to #realisations from /parcours', async ({ page }) => {
    await page.goto('/parcours')
    // On mobile, nav links are in the burger menu
    const toggle = page.locator('.nav-toggle')
    if (await toggle.isVisible()) {
      await toggle.click()
    }
    await page.getByRole('link', { name: 'Réalisations' }).first().click()
    await expect(page).toHaveURL('/#realisations')
    await expect(page.locator('#realisations')).toBeInViewport()
  })

  test('scroll to #contact from /parcours', async ({ page }) => {
    await page.goto('/parcours')
    const toggle = page.locator('.nav-toggle')
    if (await toggle.isVisible()) {
      await toggle.click()
    }
    await page.getByRole('link', { name: 'Contact' }).first().click()
    await expect(page).toHaveURL('/#contact')
    await expect(page.locator('#contact')).toBeInViewport()
  })

  test('direct load of /#realisations scrolls to section', async ({ page }) => {
    await page.goto('/#realisations')
    await expect(page.locator('#realisations')).toBeInViewport()
  })

  test('scroll to #realisations from home page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Voir les réalisations' }).click()
    await expect(page.locator('#realisations')).toBeInViewport()
  })
})

test.describe('Mobile navigation', () => {
  test('burger menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const toggle = page.locator('.nav-toggle')
    await expect(toggle).toBeVisible()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await toggle.click()
    await expect(page.locator('.nav-links--open')).toBeVisible()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await expect(toggle).toHaveAttribute('aria-label', 'Fermer le menu')

    await toggle.click()
    await expect(page.locator('.nav-links--open')).not.toBeVisible()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(toggle).toHaveAttribute('aria-label', 'Ouvrir le menu')
  })

  test('Escape closes the mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    await page.locator('.nav-toggle').click()
    await expect(page.locator('.nav-links--open')).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(page.locator('.nav-links--open')).not.toBeVisible()
  })

  test('mobile menu navigates to parcours and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    await page.locator('.nav-toggle').click()
    await page.locator('#nav-menu').getByRole('link', { name: 'Parcours' }).click()

    await expect(page).toHaveURL('/parcours')
    await expect(page.locator('.nav-links--open')).not.toBeVisible()
  })

  test('mobile menu links not focusable when closed', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const navLink = page.locator('#nav-menu a').first()
    await expect(navLink).toHaveAttribute('tabindex', '-1')
  })
})
