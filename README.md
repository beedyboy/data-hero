# data-hero

Ground-breaking objects and strings validation in typescript for Node applications.

## Version

1.0.0

## Motto
Be your own data here

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
import dataHero from './index';



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
};
const data = {
    email: 'bolade@gmail.com',
    password: 'akin'
}
 dataHero.validate(schema, data)
```

will return `true` if validation passes, `{ email: [ Violation ], firstname: [ Violation ] }` in this case.
 
 