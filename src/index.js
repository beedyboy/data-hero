"use strict";
exports.__esModule = true;
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
        var message = "";
        var error = false;
        var value = "";
        if (key in data) {
            value = data[key];
        }
        // if (typeof value != undefined && value) {
        for (var property in shuffle) {
            if (property == "message") {
                message = shuffle[property];
            }
            else if (property == "compare") {
                var feedback = this.validator(value, property, shuffle[property], data);
                if (error == false && feedback == true) {
                    error = true;
                }
            }
            else {
                var feedback = this.validator(value, property, shuffle[property]);
                if (error == false && feedback == true) {
                    error = true;
                }
            }
        }
        this.payload[key] = {
            error: error,
            message: message
        };
        return this.payload;
    };
    DataHero.prototype.validator = function (field, rule, rule_value, data) {
        if (field != undefined && rule_value != undefined) {
            switch (rule) {
                case "min":
                    if (field == undefined) {
                        return true;
                    }
                    else if (field == undefined && rule_value >= 0) {
                        return true;
                    }
                    else {
                        return rule_value > field.length;
                    }
                    break;
                case "max":
                    if (field == undefined && rule_value >= 0) {
                        return true;
                    }
                    else {
                        return field.length > rule_value;
                    }
                    break;
                case "email":
                    if (field != undefined && rule_value) {
                        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                        return !regexp.test(field);
                    }
                    else {
                        return true;
                    }
                    break;
                case "isEmpty":
                    if (rule_value === true) {
                        return false;
                    }
                    return field === undefined || field === "" || field === null;
                    break;
                case "isNumeric":
                    if (rule_value === true) {
                        var correct = !(field instanceof Array) && field - parseFloat(field) + 1 >= 0;
                        return !correct;
                    }
                    break;
                case "isBoolean":
                    if (rule_value === true) {
                        return typeof field === "boolean" ? false : true;
                    }
                    return typeof field === "boolean" ? true : false;
                    break;
                case "isTrue":
                    if (rule_value === true) {
                        return field === true ? false : true;
                    }
                    return field === true ? true : false;
                    break;
                case "isFalse":
                    if (rule_value === true) {
                        return field === false ? false : true;
                    }
                    return field === false ? true : false;
                    break;
                case "compare":
                    if (field === data[rule_value.to]) {
                        return false;
                    }
                    return true;
                    break;
            }
        }
        return true;
    };
    return DataHero;
}());
var dataHero = new DataHero();
exports["default"] = dataHero;
