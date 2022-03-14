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

    setItemDetailsBySelectedID();
    setCustomerDetailsBySelectedID();
}

function setItemDetailsBySelectedID() {
    $("#selectItem").empty();
    $("#selectItem").append(new Option(" Select Item ", ""));
    for (let i = 0; i < itemArray.length; i++) {
        $("#selectItem").append(new Option(itemArray[i].getItemId(), i));
    }
}

function setCustomerDetailsBySelectedID() {
    $("#selectCustomerID").empty();
    $("#selectCustomerID").append(new Option(" Select Customer ",""));
    for(let i = 0;i < customerArray.length;i++){
        console.log("inside cus if")
        $("#selectCustomerID").append(new Option(customerArray[i].getCustomerID(),i));
    }
}







