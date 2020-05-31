import dataHero from '../index'
const schema = {
    email: {
        min: 14, 
        email: true,
        message: 'is required' 
        
      } 
};
const data = {
    email: 'bolade@gmail.com',
    password: 'akin'
}
test('Check for valid email', () => {
  expect(dataHero.validate(schema, data)).toMatchObject({email:{error: false, message: 'is required'}})
})
 

 