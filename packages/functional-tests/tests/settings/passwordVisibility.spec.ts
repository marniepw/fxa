import { test, expect } from '../../lib/fixtures/standard';

test.describe('password visibility tests', () => {
  test('show password ended with second mousedown', async ({
    page,
    target,
    pages: { login },
  }) => {
    const email = login.createEmail();
    await page.goto(target.contentServerUrl, { waitUntil: 'networkidle' });
    await login.setEmail(email);
    await login.submit();

    // Turn password field into a text field by mouse clicking 'show password'
    await login.showPasswordMouseAction();
    expect(await login.textInputForPassword()).toBe(true);
    await login.setPassword('');

    // Turn text field back into a password field by mouse clicking 'show password' again
    await login.showPasswordMouseAction();
    expect(await login.maskPasswordInputForPassword()).toBe(true);

    //\u0008 is unicode for backspace char. By default `type` clears the
    // element value before typing, we want the character to do so.
    await login.setPassword('\u0008');
    expect(await login.showPassword()).toBe(true);
  });
});
