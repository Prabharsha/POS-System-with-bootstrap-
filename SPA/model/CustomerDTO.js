function CustomerDTO(id, name, address, city, postalCode) {
    var __id = id;
    var __name = name;
    var __address = address;
    var __city = city;
    var __postalCode = postalCode;

    this.getCustomerID = function () {
        return __id;
    }

    this.setCustomerID = function (cusID) {
        __id = cusID
    }
    this.getCustomerName = function () {
        return __name;
    }
    this.setCustomerName = function (cusName) {
        __name = cusName;
    }
    this.getCustomerAddress = function () {
        return __address;
    }
    this.setCustomerAddress = function (cusAddress) {
        __address = cusAddress;
    }
    this.getCustomerCity = function () {
        return __city;
    }

    this.setCustomerCity = function (cusCity) {
        __city = cusCity;
    }

    this.getCustomerPostalCode = function () {
        return __postalCode
    }

    this.setCustomerPostalCode = function (cusPostalCode) {
        __postalCode = cusPostalCode;

    }
}