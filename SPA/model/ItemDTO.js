function ItemDTO(itemId, itemDescription, packSize, unitPrice, qtyOnHand) {
    var __itemID = itemId;
    var __itemDescription = itemDescription;
    var __packSize = packSize;
    var __unitPrice = unitPrice;
    var __qtyOnHand = qtyOnHand;


    this.getItemId = function () {
        return __itemID;
    }

    this.setItemId = function (itemId) {
        __itemID = itemId;
    }

    this.getItemDescription = function () {
        return __itemDescription;
    }
    this.setItemDescription = function (itemDescription) {
        __itemID = itemDescription;
    }
    this.getPackSize = function () {
        return __packSize;
    }
    this.setPackSize = function (packSize) {
        __packSize = packSize;
    }
    this.getUnitPrice = function () {
        return __unitPrice;
    }
    this.setUnitPrice = function (unitPrice) {
        __unitPrice = unitPrice;
    }
    this.getQtyOnHand = function () {
        return __qtyOnHand;
    }
    this.setQtyOnHand = function (Qnt) {
        __qtyOnHand = Qnt;

    }


}
