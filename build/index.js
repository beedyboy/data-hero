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
                _this.validator(key, schema[key], data);
            });
            return this.payload;
        }
    };
    DataHero.prototype.validator = function (key, shuffle, data) {
        var message = '';
        var error = false;
        var value = data[key];
        for (var property in shuffle) {
            switch (property) {
                case "min":
                    if (value.length < shuffle[property]) {
                        error = true;
                    }
                    break;
                case "max":
                    if (value.length > shuffle[property]) {
                        error = true;
                    }
                    break;
                case "email":
                    if (shuffle[property]) {
                        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                        var find = regexp.test(value);
                        if (!find) {
                            error = true;
                            // this.payload.message = "Invalid email";
                        }
                    }
                case "message":
                    message = shuffle[property];
                    break;
            }
        }
        this.payload[key] = {
            error: error,
            message: message
        };
        return this.payload;
    };
    return DataHero;
}());
var dataHero = new DataHero();

exports.default = dataHero;
//# sourceMappingURL=index.js.map
