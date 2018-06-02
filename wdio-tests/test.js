var assert = require('assert')

describe('webdriver.io page', function () {
  it('should have the right title - the fancy generator way', function () {
    browser.url('https://lifecompilers.github.io/react-boilerplate/')
    var title = browser.getTitle()
    assert.equal(title, 'React Boilerplate')
  })
})
