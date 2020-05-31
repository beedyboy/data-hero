
declare class DataHero {
    payload: any;
    validate(schema: any, data: object): any;
    spread(key: any, shuffle: any, data: any): any;
    validator(field: any, rule: any, rule_value: any): boolean;
  }
  declare let dataHero: DataHero;
  export default dataHero;