declare class DataHero {
  payload: any
  validate (schema: any, data: object): any
  spread (key: any, shuffle: any, data: any): any
  validator (field: any, rule: any, rule_value: any): boolean
}
declare let dataHero: DataHero
export default dataHero

//  schema = {
//   email: {
//     min: 14,
//     email: true,
//     message: 'Email is required'
//   }
// }
// const data = {
//   email: 'bolade@gmail.com'
// }

// const data2 = {
//   another: 'this is more than 10'
// }

// const schema2 = {
//   another: {
//     max: 10,
//     isEmpty: false,
//     message: 'Another is required'
//   }
// }
// describe('Group Validation', () => {
//   test('Check for valid email and min value', () => {
//     expect(dataHero.validate(schema, data)).toMatchObject({
//       email: { error: false, message: 'Email is required' }
//     })
//   })

//   test('Check for maximum and not empty', () => {
//     expect(dataHero.validate(schema2, data2)).toMatchObject({
//       another: { error: true, message: 'Another is required' }
//     })
//   })
// })

// describe('Single validation', () => {
//   it('Empty string when false', () => {
//     expect(dataHero.validator('', 'isEmpty', false)).toBeTruthy()
//   })

//   test('Empty string when true', () => {
//     expect(dataHero.validator('hello', 'isEmpty', false)).toBeFalsy()
//   })

//   test('Validates email', () => {
//     expect(dataHero.validator('data-hero@gmail.com', 'email', true)).toBeFalsy()
//   })

//   test('Minimum value', () => {
//     expect(dataHero.validator('345', 'min', 5)).toBeTruthy()
//   })
// })
