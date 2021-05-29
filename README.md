### `data-hero`

Ground-breaking objects and strings validation in typescript for Node applications.

## Version

1.6.1

## Motto

Be your own data hero

## License

MIT - See LICENSE.md

## Install

`yarn add data-hero`

## General usage

- On node:

```
$ npm install -g data-hero
```

## Validate an object

```ts
import dataHero from 'data-hero'

const schema = {
  email: {
    min: 14,
    email: true,
    message: 'Email is required'
  },
  password: {
    min: 8,
    max: 10,
    message: 'password is required'
  }
}
const data = {
  email: 'bolade@gmail.com',
  password: 'akin'
}
dataHero.validate(schema, data)
```

will return `false` if validation passes

## Single Validation

```
import dataHero from 'data-hero';
```

- Syntax
  dataHero.validator(field, rule, rule value)
- Example 1

```
dataHero.validator('pp', 'min', 2)

```
- Example 2

```
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
  dataHero.validate(schema, data);

```
- Example 3

```
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
dataHero.validate(schema, data)

```

## Available rules

- min `to take integer value`
- max `to take integer value`
- isEmpty `to take boolean value`
- email `to take boolean value`
- isNumeric `to take boolean value`
- isBoolean `takes a boolean value`
- isTrue `takes a boolean value`
- isFalse `takes a boolean value`
- compare `use to compare two fields e.g. password`

**Note: Any rule applied above will return `false` is validation passes !**
