import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/App'

describe('App', function () {
  it('renders without crashing', () => {
    const res = shallow(
      <App />
    )
    expect(res.text()).toEqual('React Boilerplate!')
  })
})
