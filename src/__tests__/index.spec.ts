import dataHero from '../index'

  const schema = {
    email: {
      min: 14,
      email: true,
      message: 'Email is required'
    }
  }
  const data = {
    email: 'bolade@gmail.com'
  }
const data2 = {
  another: 'this is more than 10'
}

const schema2 = {
  another: {
    max: 10,
    isEmpty: false,
    message: 'Another is required'
  }
}
 
describe('Group Validation', () => { 
  test('Check for valid email and min value', () => {
    expect(dataHero.validate(schema, data)).toMatchObject({
      email: { error: false, message: 'Email is required' }
    })
  })
  test('Check for maximum and not empty', () => {
    expect(dataHero.validate(schema2, data2)).toMatchObject({
      another: { error: true, message: 'Another is required' }
    })
  })

  test('Check for boolean', () => { 
    const sch = {
      accept: { 
        isBoolean: true,
        message: 'Value must be a boolean'
      },
      checks: { 
        isBoolean: false,
        message: 'Value cannot be a boolean'
      }
    }
    const dat = {
      accept: true, 
      checks: false
    }
        expect(dataHero.validate(sch, dat)).toMatchObject({
          accept: { error: false, message: 'Value must be a boolean' },
          checks: { error: true, message: 'Value cannot be a boolean' }
        })
      })

      test('Check for equal fields', () => {
        const schema = {
           
          password: {
            compare: {
              to: 'cpaswword'
            }, 
            message: 'password does not match'
          }
        }
        const data = { 
          password: 'Bolade',
          cpaswword: 'Bolades', 
        }
        expect(dataHero.validate(schema, data)).toMatchObject({
          password: { error: true, message: 'password does not match' }
        })
      })
})


 

describe('Single validation', () => {
  it('Empty string when false', () => {
    expect(dataHero.validator('', 'isEmpty', false)).toBeTruthy()
  })

  test('Empty string when true', () => {
    expect(dataHero.validator('hello', 'isEmpty', false)).toBeFalsy()
  })

  test('Validates email', () => {
    expect(dataHero.validator('data-hero@gmail.com', 'email', true)).toBeFalsy()
  })

  test('Minimum value', () => {
    expect(dataHero.validator('345', 'min', 5)).toBeTruthy()
  })
  test('Truth value', () => {
    expect(dataHero.validator(true, 'isTrue', true)).toBeFalsy()
  })
  test('Fail when value is false', () => {
    expect(dataHero.validator(true, 'isFalse', true)).toBeTruthy()
  })
})
