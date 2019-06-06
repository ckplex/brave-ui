/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import PrintableActivity from './index'
import { TestThemeProvider } from '../../../theme'

describe('PrintableActivity tests', () => {
  const baseComponent = (props?: object) => <TestThemeProvider><PrintableActivity id='activity' {...props} /></TestThemeProvider>

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#activity').length
      expect(assertion).toBe(1)
    })
  })
})