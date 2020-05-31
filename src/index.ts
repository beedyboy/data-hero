
class DataHero {
    payload: any = { 
    };
    //check if rules exist or terminate 
            
    validate(schema: any, data: object) {
        if (schema && data) {
        
        Object.keys(schema).forEach(key => { 
           this.validator(key, schema[key], data);
             
        })
        return this.payload; 
           
        }
    }

    validator(key: any, shuffle: any,  data: any) {
        let message: string = '';
        let error:boolean = false;
        const value = data[key];
         for (let property in shuffle) {
             switch(property) {
                case "min":  
                    if (value.length < shuffle[property]) { 
                        error = true;
                        } 
                 break;

                 case "max":  
                    if (value.length > shuffle[property]){ 
                        error = true;
                       } 
                 break;

                 case "email":
                    if(shuffle[property]) {
                        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                        const find = regexp.test(value); 
                         if(!find) {
                            error = true;
                            // this.payload.message = "Invalid email";
                         }
                    }

                 case "message": message = shuffle[property];

                 break;
             }
             
         }
         
             this.payload[key] = { 
                     error,
                     message 
                 } 
        
         return this.payload;
    }

    
}
let dataHero = new DataHero();
export default dataHero;