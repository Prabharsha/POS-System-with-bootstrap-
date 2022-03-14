generateOrderIDs();
initializePage();

function generateOrderIDs() {
    if (orderDetailsArray.length !== 0) {
        var orderId = orderDetailsArray[orderDetailsArray.length - 1].getOrderCode();
        let splitTxt = orderId.split("O", 2);
        let newOrderId = parseInt(splitTxt[1]) + 1;

        if (parseInt(newOrderId) <= 9) {
            $("#inputOrderID").val("O00" + newOrderId);

        } else if (parseInt(newOrderId) <= 99) {
            $("#inputOrderID").val("O0" + newOrderId);

        } else if (parseInt(newOrderId) <= 99) {
            $("#inputOrderID").val("O" + newOrderId);
        }
    } else {
        $("#inputOrderID").val("O001").css('font-weight', 'bold');
    }
}



function initializePage() {
    /*set Date*/
    $('#inputDate').val(new Date().toISOString().slice(0, 10));

    $("#inputBalance").attr("disabled", true);
    $("#btnAddToCart").attr("disabled", true);
    $("#btnPurchase").attr("disabled", true);
    $("").attr("disabled",);

    setItemIDs();
    setCustomerIDs();

    /*set Details*/
    setItemDetailsBySelectedID();
    setCustomerDetailsBySelectedID();
}

function setItemDetailsBySelectedID() {
    $("#selectItem").on("change",function (){
        let tempItemID =$(this).find('option:selected').text();
        for (let i = 0; i < itemArray.length;i++){
            if (tempItemID == itemArray[i].getItemDescription()){
                $("#inputItemCode").val(itemArray[i].getItemId());
                $("#inputIName").val(itemArray[i].getItemDescription());
                $("#inputQTY1").val(itemArray[i].getQtyOnHand());
                $("#inputPrice").val(itemArray[i].getUnitPrice());
            }
        }
    });
}

function setCustomerDetailsBySelectedID() {
    $("#selectCustomerID").on("change",function (){
        let tempCustomerID =$(this).find('option:selected').text();
        for (let i = 0; i < customerArray.length;i++){
            if (tempCustomerID == customerArray[i].getCustomerID()){
                $("#inputName").val(customerArray[i].getCustomerName());
                $("#inputAddress").val(customerArray[i].getCustomerAddress());

            }
        }
    });

}

function setCustomerIDs() {

    $("#selectItem").empty();
    $("#selectItem").append(new Option(" Select Item ", ""));
    for (let i = 0; i < itemArray.length; i++) {
        $("#selectItem").append(new Option(itemArray[i].getItemDescription(), i));
    }
}

function setItemIDs() {
    $("#selectCustomerID").empty();
    $("#selectCustomerID").append(new Option(" Select Customer ",""));
    for(let i = 0;i < customerArray.length;i++){
        console.log("inside cus if")
        $("#selectCustomerID").append(new Option(customerArray[i].getCustomerID(),i));
    }
}

/*validation*/
var regExOrderQTY = /^([0-9]{1,10})$/;

$("#inputOrderQTY").keyup(function (){

    let requestedQTY = parseInt($("#inputOrderQTY").val());
    let qty =0;

    for (let i = 0;i<itemArray.length;i++){
     if ($("#inputItemCode").val() === itemArray[i].getItemId()){
         qty = parseInt(itemArray[i].getQtyOnHand());
     }
    }

    if (regExOrderQTY.test(requestedQTY)){
        if (requestedQTY >= qty){
            $("#btnAddToCart").attr('disabled',true);
            return true;
        }else {
            $("#btnAddToCart").attr('disabled',false);
            return false;
        }
    }else {
        $("#btnAddToCart").attr('disabled',true);
    }


});








