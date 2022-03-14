generateCustomerId();

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
        title: 'Customer Registered Successful.!',
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
    swal({
        position: 'top',
        icon: 'info',
        title: 'Changes Updated',
        showConfirmButton: false,
        timer: 1500
    })

}

function deleteCustomer() {

    $("#customerTableReg").empty();

    customerArray.splice( $("#customerIDInput").val(), 1);
    clearFields();


    loadCustomerTable1();
    swal({
        position: 'top',
        icon: 'success',
        title: 'Customer Deleted.!',
        showConfirmButton: false,
        timer: 1500
    })
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

        setBtn();

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
function setBtn(){
    $("#btnSaveCustomer").attr('disabled',true);
    $("#btnUpdateCustomer").attr('disabled',false);
    $("#btnCustomerDelete").attr('disabled',false);
}

function generateCustomerId() {

    if (customerArray.length !== 0) {
        var cusId = customerArray[customerArray.length - 1].getCustomerID();
        let splitTxt = cusId.split("C", 2);
        let newCusId = parseInt(splitTxt[1]) + 1;

        if (parseInt(newCusId) <= 9) {
            $("#customerIDInput").val("C00" + newCusId);

        } else if (parseInt(newCusId) <= 99) {
            $("#customerIDInput").val("C0" + newCusId);

        } else if (parseInt(newCusId) <= 99) {
            $("#customerIDInput").val("C" + newCusId);
        }
    } else {
        $("#customerIDInput").val("C001").css('font-weight', 'bold');

    }
}

/*validations*/
var regExCusName = /^([A-z\s]{3,20})$/;
var regExCusAddress = /^([A-z0-9/,\s]{3,})$/;
var regExCity = /^([A-z]{3,20})$/;
var regExPostalCode = /^([0-9]{3,5})$/;

/*name*/
function validateCustomerName(){
    let input =$("#customerNameInput").val();

    if(regExCusName.test(input)){
        $("#errorName").text("");
        $("#customerNameInput").css('border','2px solid green');

        $("#customerNameInput").keydown(function (e){
           if(e.key == 'Enter'){
               $("#customerAddressInput").focus();
           }
        });
        return true;
    }else {
        $("#customerNameInput").css('border','2px solid red');
        $("#errorName").text("Wrong Format !");
        return false;
    }
}

$("#customerNameInput").keyup(function (){
   disableRegistrationBtn();
});

/*address*/
function validateCustomerAddress(){
    let input =$("#customerAddressInput").val();

    if(regExCusAddress.test(input)){
        $("#errorAddress").text("");
        $("#customerAddressInput").css('border','2px solid green');

        $("#customerAddressInput").keydown(function (e){
            if (e.key == 'Enter'){
                $("#customerCityInput").focus();
            }
        });
        return true;
    }else {
        $("#customerAddressInput").css('border','2px solid red');
        $("#errorAddress").text("Wrong Format !");
        return false;

    }
}
$("#customerAddressInput").keyup(function (){
    disableRegistrationBtn();
});

/*city*/
function validateCustomerCity(){
    let input =$("#customerCityInput").val();

    if(regExCity.test(input)){
        $("#errorCity").text("");
        $("#customerCityInput").css('border','2px solid green');

        $("#customerCityInput").keydown(function (e){
            if(e.key == 'Enter'){
                $("#customerPostalCodeInput").focus();
            }
        });
        return true;
    }else {
        $("#customerCityInput").css('border','2px solid red');
        $("#errorCity").text("Wrong Format !");
        return false;
    }
}

$("#customerCityInput").keyup(function (){
    disableRegistrationBtn();
});

/*postal code*/
function validatePostalCode(){
    let input =$("#customerPostalCodeInput").val();

    if(regExPostalCode.test(input)){
        $("#errorPostal").text("");
        $("#customerPostalCodeInput").css('border','2px solid green');

        return true;
    }else {
        $("#customerPostalCodeInput").css('border','2px solid red');
        $("#errorPostal").text("Wrong Format !");
        return false;

    }
}
$("#customerPostalCodeInput").keyup(function (){
    disableRegistrationBtn();
});


/*button disabling*/
function disableRegistrationBtn() {
    if (validateAll()) {
        $("#btnSaveCustomer").attr('disabled', false);
    } else {
        $("#btnSaveCustomer").attr('disabled', true);
    }
}

function validateAll() {
    if (validateCustomerName()) {
        if (validateCustomerAddress()) {
            if (validateCustomerCity()) {
                if (validatePostalCode()) {
                        return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }

}

function clearFields() {
    $("#customerIDInput").val("");
    $("#customerNameInput").val("");
    $("#customerAddressInput").val("");
    $("#customerCityInput").val("");
    $("#customerPostalCodeInput").val("");
    $("#customerIDInput").css('border','silver 1px solid');
}



$("#btnUpdateCustomer").click(function () {
    updateCustomer();
    generateCustomerId();
});

$("#btnSaveCustomer").click(function () {
    saveCustomer();
    generateCustomerId();
});

$("#btnCustomerDelete").click(function () {
    deleteCustomer();
    generateCustomerId();
});
