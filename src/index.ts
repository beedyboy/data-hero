class DataHero {
  payload: any = {}
  //check if rules exist or terminate

  validate (schema: any, data: object) {
    if (schema && data) {
      Object.keys(schema).forEach(key => {
        this.spread(key, schema[key], data)
      })
      return this.payload
    }
  }

  spread (key: any, shuffle: any, data: any) {
    let message: string = ''
    let error: boolean = false
    let value = ''
    if (key in data) {
      value = data[key]
    }

    // if (typeof value != undefined && value) {
    for (let property in shuffle) {
      if (property == 'message') {
        message = shuffle[property]
      } else {
        const feedback = this.validator(value, property, shuffle[property])
        if (error == false && feedback == true) {
          error = true
        }
      }
    }
    // }

    this.payload[key] = {
      error,
      message
    }

    return this.payload
  }

  validator (field: any, rule: any, rule_value: any): boolean {
    if (field != undefined && rule_value != undefined) {
      switch (rule) {
        case 'min':
          if (field == undefined) {
            console.log('min pron')
          } else if (field == undefined && rule_value >= 0) {
            return true
          } else {
            return rule_value > field.length
          }
          break

        case 'max':
          if (field == undefined && rule_value >= 0) {
            return true
          } else {
            return field.length > rule_value
          }
          break

        case 'email':
          if (field != undefined && rule_value) {
            var regexp = new RegExp(
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            return !regexp.test(field)
          } else {
            return true
          }
          break

        case 'isEmpty':
          if (rule_value === true) {
            return false
          }
          return field === undefined || field === '' || field === null
          break

        case 'isNumeric':
          if (rule_value === true) {
            const correct =
              !(field instanceof Array) && field - parseFloat(field) + 1 >= 0
            return !correct
          }
      }
    }

    return true
  }
}
let dataHero = new DataHero()
export default dataHero
