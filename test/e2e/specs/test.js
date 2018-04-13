// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'google title': function (browser) {
      browser
        .url("http://www.google.com")
        //.waitForElementVisible('title', 5000)
        .assert.title("Google")
        .end()
  }
}
