generateItemIds();

function clearItemFields() {
    $("#itemCodeIn").val("");
    $("#itemDescriptionIn").val("");
    $("#packSizeIn").val("");
    $("#inputQtyIn").val("");
    $("#unitPriceIn").val("");
}

function loadItemRegTable() {
    $("#itemRegTable").empty();

    for(let i of itemArray){
        let row = `<tr> <td>${i.getItemId()}</td> <td>${i.getItemDescription()}</td> <td>${i.getPackSize()}</td> <td>${i.getUnitPrice()}</td> <td>${i.getQtyOnHand()}</td> </tr>`;

        $("#itemRegTable").append(row);
    }

    /*table listener / dblClick load data*/

    $("#itemRegTable>tr").dblclick(function(){

        let itemCode = $(this).children(':nth-child(1)').text();
        $("#itemCodeIn").val(itemCode);

        let description = $(this).children(':nth-child(2)').text();
        $("#itemDescriptionIn").val(description);

        let packSize = $(this).children(':nth-child(3)').text();
        $("#packSizeIn").val(packSize);

        let unitPrice = $(this).children(':nth-child(4)').text();
        $("#unitPriceIn").val(unitPrice);

        let QTY = $(this).children(':nth-child(5)').text();
        $("#inputQtyIn").val(QTY);

    });
}

function generateItemIds(){
    if (itemArray.length !== 0){
        var itemId = itemArray[itemArray.length-1].getItemId();
        let splitTxt = itemId.split("I",2);
        let newItemId = parseInt(splitTxt[1]) + 1;

        if (parseInt(newItemId) <= 9){
            $("#itemCodeIn").val("I00" + newItemId);

        }else if (parseInt(newItemId) <= 99){
            $("#itemCodeIn").val("I0" + newItemId);

        }else if (parseInt(newItemId) <= 99){
            $("#itemCodeIn").val("I" + newItemId);
        }
    }else {
        $("#itemCodeIn").val("I001").css('font-weight', 'bold');
    }
}

function saveItem(){

    let itemId = $("#itemCodeIn").val();
    let itemDescription = $("#itemDescriptionIn").val();
    let packSize = $("#packSizeIn").val();
    let unitPrice = $("#unitPriceIn").val();
    let qty = $("#inputQtyIn").val();

    $("#itemRegTable").empty();

    var tempItemDTO = new ItemDTO(itemId,itemDescription,packSize,unitPrice,qty);
    itemArray.push(tempItemDTO);

    clearItemFields();
    loadItemRegTable();

    swal({
        position: 'top',
        icon: 'success',
        title: 'Item Registered Successful.!',
        showConfirmButton: false,
        timer: 2000
    })
}

function updateItem() {
    let itemCode = $("#itemCodeIn").val();
    let itemDescription = $("#itemDescriptionIn").val();
    let packSize = $("#packSizeIn").val();
    let unitPrice = $("#unitPriceIn").val();
    let qty = $("#inputQtyIn").val();


    $("#itemRegTable>tr").empty();

    for (let i = 0; i < itemArray.length; i++) {
        if ( $("#itemCodeIn").val() === itemArray[i].getItemId()) {
            itemArray.splice(i, 1);

            clearItemFields();
        }
    }

}

$("#btnItemRegister").click(function (){
    saveItem();

});


$("#btnItemUpdate").click(function (){
    updateItem();

});