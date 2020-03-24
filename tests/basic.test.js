import { Selector } from 'testcafe';
import { developerName, submitButton, articleHeader } from './basic.selectors';

fixture`Getting started with Testcafe`
	.page`https://devexpress.github.io/testcafe/example/`
	.before(async t => {
		//test setup
		//await runDatabaseReset()
		//await seedTestData()
		//await t.setTestSpeed(0.01) in order to slow down all tests inside this file
	})
	.beforeEach(async t => {
        //run before each test
        await t.setPageLoadTimeout(0); //0 is the default and it means it will skip waiting for the window.load event. It is useful for data-heavy navigations
	})
	.after(async t => {
		//cleaning test-data
		//logging and sending data to monitoring systems
	})
	.afterEach(async t => {
		//runs after each test
	});

test('My first testcafe Test', async t => {
	await t.setTestSpeed(1); // number between 1 and 0.01. The 1 is the default
    await t.typeText(developerName, 'John');
    
    //wait t.wait(3000); // wait 3 seconds
    
    //await t.takeScreenshot({ fullPage: true }); // the default pathe of saved screenshots can be overwritten. Will take a screenshot on failed or passed test.
    //await t.takeElementScreenshot(submitButton);

	await t.click(submitButton);
	await t.expect(Selector(articleHeader).innerText).contains('John');

});

test.skip('Skipped scenario example.', async t => {
    await t.typeText(developerName, 'John');
    await t.click(submitButton);
	await t.expect(Selector(articleHeader).innerText).contains('John');
});

test.skip('Skipped test to demonstrate the API actions and Assertion API.', async t => {
    //click
    await t.click('selector', { options });
    //double click
    await t.doubleClick('selector', { options });
    //right click
    await t.rightClick('selector', { options });
    //drag
    await t.drag('selector', 200, 0, { options });
    //hover
    await t.hover('selector', { options });
    //select text
    await t.selectText('selector');
    //type text
    await t.typeText('selector', 'my text');
    //press key on the keyboard
    await t.pressKey('key');
    //navigate
    await t.navigateTo('url');
    //take screenshot
    await t.takeScreenshot();
    await t.takeElementScreenshot();
    //resize window
    await t.resizeWindow(800, 600); // very useful for using it with the before-hook to test specific window-size

    //deep equal
    await t.expect('foo').eql('foo', 'message', options);
    //not deep equal
    await t.expect('foo').notEql('foo', 'message');
    //ok
    await t.expect(true).ok();
    //not ok
    await t.expect(true).notOk();
    //contains
    await t.expect('foo').contains('hey');
    //not ok
    await t.expect('foo').notContains('hey');
    //greater or less than
    await t.expect(10).gt(10);
    await t.expect(10).gte(10);
    await t.expect(10).lt(10);
    await t.expect(10).lte(10);
    //within
    await t.expect(10).within(1, 100);
    //not within
    await t.expect(10).notWithin(1, 100);
});
