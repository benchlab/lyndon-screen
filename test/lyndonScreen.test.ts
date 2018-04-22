import {expect} from 'chai'

import {errtermwidth, stdtermwidth} from '../src/lyndonScreen'

describe('termwidth', () => {
  it('has errtermwidth > 1', () => {
    expect(errtermwidth).to.be.at.least(1)
  })
  it('has stdtermwidth > 1', () => {
    expect(stdtermwidth).to.be.at.least(1)
  })
})
