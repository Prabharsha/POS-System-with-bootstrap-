function saveCustomer() {
    let customerID = $("#customerIDInput").val();
    let customerName = $("#customerNameInput").val();
    let customerAddress = $("#customerAddressInput").val();
    let customerCity = $("#customerCityInput").val();
    let customerPostalCode = $("#customerPostalCodeInput").val();

    $("#customerTableReg").empty();

    var tempCustomer = new CustomerDTO(customerID, customerName, customerAddress, customerCity, customerPostalCode);
    customerArray.push(tempCustomer);
    console.log(tempCustomer.getCustomerID());
    loadCustomerTable1();
    clearFields();
    swal({
        position: 'top',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 2000
    })

}


function updateCustomer() {
    $("#customerTableReg>tr").off("click");

    let customerID = $("#customerIDInput").val();
    let customerName = $("#customerNameInput").val();
    let customerAddress = $("#customerAddressInput").val();
    let customerCity = $("#customerCityInput").val();
    let customerPostalCode = $("#customerPostalCodeInput").val();

    $("#customerTableReg").empty();

    for (let i = 0; i < customerArray.length; i++) {
        if ($("#customerIDInput").val() === customerArray[i].getCustomerID()) {
            customerArray.splice(i, 1);
            clearFields();
        }
    }
    var customerDTO = new CustomerDTO(customerID, customerName, customerAddress, customerCity, customerPostalCode);
    customerArray.push(customerDTO);
    loadCustomerTable1();
    alert("updated")

}

function loadCustomerTable1() {
    $("#customerTableReg>tr").off("click")
    $("#customerTableReg>tr").off("dbClick")


    $("#customerTableReg").empty();

    for (let i of customerArray) {
        let row = `<tr><td>${i.getCustomerID()}</td> <td>${i.getCustomerName()}</td><td>${i.getCustomerAddress()}</td> <td>${i.getCustomerCity()}</td><td>${i.getCustomerPostalCode()}</td></tr>`;
        console.log(i.getCustomerID())
        $("#customerTableReg").append(row);

    }

    /*tbl listener / double click set data to fields*/
    $("#customerTableReg>tr").dblclick(function () {

        let tempCusID = $(this).children(':nth-child(1)').text();
        $("#customerIDInput").val(tempCusID);

        let tempCusName = $(this).children(':nth-child(2)').text();
        $("#customerNameInput").val(tempCusName);

        let tempCusAddress = $(this).children(':nth-child(3)').text();
        $("#customerAddressInput").val(tempCusAddress);

        let tempCusCity = $(this).children(':nth-child(4)').text();
        $("#customerCityInput").val(tempCusCity);

        let tempCusPostalCode = $(this).children(':nth-child(5)').text();
        $("#customerPostalCodeInput").val(tempCusPostalCode);

    });

}


function clearFields() {
    $("#customerIDInput").val("");
    $("#customerNameInput").val("");
    $("#customerAddressInput").val("");
    $("#customerCityInput").val("");
    $("#customerPostalCodeInput").val("");
}

$("#btnUpdateCustomer").click(function () {
    updateCustomer();
});

$("#btnSaveCustomer").click(function () {
    saveCustomer();
});
