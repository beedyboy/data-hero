'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DataHero = /** @class */ (function () {
    function DataHero() {
        this.payload = {};
    }
    //check if rules exist or terminate
    DataHero.prototype.validate = function (schema, data) {
        var _this = this;
        if (schema && data) {
            Object.keys(schema).forEach(function (key) {
                _this.spread(key, schema[key], data);
            });
            return this.payload;
        }
    };
    DataHero.prototype.spread = function (key, shuffle, data) {
        var message = '';
        var error = false;
        var value = '';
        if (key in data) {
            value = data[key];
        }
        // if (typeof value != undefined && value) {
        for (var property in shuffle) {
            if (property == 'message') {
                message = shuffle[property];
            }
            else {
                var feedback = this.validator(value, property, shuffle[property]);
                if (error == false && feedback == true) {
                    error = true;
                }
            }
        }
        // }
        this.payload[key] = {
            error: error,
            message: message
        };
        return this.payload;
    };
    DataHero.prototype.validator = function (field, rule, rule_value) {
        if (field != undefined && rule_value != undefined) {
            switch (rule) {
                case 'min':
                    if (field == undefined) {
                        console.log('min pron');
                    }
                    else if (field == undefined && rule_value >= 0) {
                        return true;
                    }
                    else {
                        return rule_value > field.length;
                    }
                    break;
                case 'max':
                    if (field == undefined && rule_value >= 0) {
                        return true;
                    }
                    else {
                        return field.length > rule_value;
                    }
                case 'email':
                    if (field != undefined && rule_value) {
                        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                        return !regexp.test(field);
                    }
                    else {
                        return true;
                    }
                case 'isEmpty':
                    if (rule_value === true) {
                        return false;
                    }
                    return field === undefined || field === '' || field === null;
                case 'isNumeric':
                    if (rule_value === true) {
                        var correct = !(field instanceof Array) && field - parseFloat(field) + 1 >= 0;
                        return !correct;
                    }
            }
        }
        return true;
    };
    return DataHero;
}());
var dataHero = new DataHero();
// const schema = {
//     email: {
//         min: 14,
//         email: true,
//         message: 'Email is required'
//       },
//       password: {
//             min: 8,
//             isEmpty: true,
//         message: 'password is required'
//       }
// };
// const data = {
//     email: 'bolade@gmail.com',
//     password: ""
// }
// // console.log( dataHero.validate(schema, data));
// const p = '2.3';
//  console.log(dataHero.validator(p, 'isNumeric', true));

exports.default = dataHero;
//# sourceMappingURL=index.js.map
