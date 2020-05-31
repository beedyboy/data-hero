declare class DataHero {
    payload: any;
    validate(schema: any, data: object): any;
    validator(key: any, shuffle: any, data: any): any;
}
declare let dataHero: DataHero;
export default dataHero;
