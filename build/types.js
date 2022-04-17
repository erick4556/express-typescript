"use strict";
// export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
// export type Visibility = "great" | "good" | "poor" | "bad" | "terrible";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
//Se crea un enum para los tipos de clima que tienen una key y value
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "stormy";
})(Weather = exports.Weather || (exports.Weather = {}));
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Poor"] = "poor";
    Visibility["Bad"] = "bad";
    Visibility["Terrible"] = "terrible";
})(Visibility = exports.Visibility || (exports.Visibility = {}));
//Heredando de una interface
/* interface SpecialDiaryEntry extends DiaryEntry {
  flightNumber: number;
} */
//Type mas fijos y las interfaces más para extender
