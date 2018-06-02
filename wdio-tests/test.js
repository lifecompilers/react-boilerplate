var assert = require('assert')

describe('React Boilerplate', function () {
  it('should have the right title', function () {
    browser.url('https://lifecompilers.github.io/react-boilerplate/')
    var title = browser.getTitle()
    assert.equal(title, 'React Boilerplate')
  })
})
