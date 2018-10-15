var backtoprev = $(".backtoprev"),
    btnlogin = $("#btnLogin"),
    btnregister = $("#btnRegister"),
    activeSKU = sessionStorage.getItem("ThisSKU"),
    currency = localStorage.getItem("myCurrency");


function showQuantity() {

    $('.quantity').each(function () {

        if ($(this).val() == 0) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });


}

// showQuantity();
backtoprev.click(function () {
    //window.location.href="login.html";
    window.history.go(-1);
});
/*
    $('.btn-number').click(function (e) {
        e.preventDefault();
    
        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='" + fieldName + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if (type == 'minus') {
    
                if (currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
                if (parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }
    
            } else if (type == 'plus') {
    
                if (currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if (parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }
    
            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function () {
        $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function () {
    
        minValue = parseInt($(this).attr('min'));
        maxValue = parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());
    
        name = $(this).attr('name');
        if (valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if (valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }
    
    
    });
    $(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
*/

btnlogin.click(function () {
    //  e.preventDefault();
    window.location.href = "login.html";
});

btnregister.click(function () {
    //   e.preventDefault();
    window.location.href = "register.html";
});





function showMenu() {
    var myObj, i, j, items = "";
    myObj = {
        "name": "John",
        "age": 30,
        "menuitems": [{
                "name": "Home",
                "url": "index.html"
            },
            {
                "name": "Acount",
                "url": "user.html"
            },
            {
                "name": "Customers",
                "url": "customer-list.html"
            },
            {
                "name": "Orders",
                "url": "orders.html"
            },
            {
                "name": "Store",
                "url": "storegroup.html"
            }
        ]
    }
    for (i in myObj.menuitems) {
        items += '<li class="nav-item"><a class="nav-link waves-effect" href="' + myObj.menuitems[i].url + '">' + myObj.menuitems[i].name + '</li>';
        /* for (j in myObj.menuitems[i].models) {
             items += myObj.menuitems[i].models[j] + "<li class='hidden'>";
         }*/
    }

    $("#mainMenu").html(items);


}

function getSKU(ThisSKU) {
    sessionStorage.setItem("skuItem", ThisSKU);
}

function productsPage() {

    var activeSKU = sessionStorage.getItem("skuItem");
    console.log(activeSKU);
    //var ThisSKU = $(this).attr("data-sku");
    //var activeSKU = sessionStorage.getItem("ThisSKU");

    var skusList = localStorage.getItem("products");
    skus = JSON.parse(skusList);
    console.log(skus);

    var SearchTag = function (sku) {
        var i = null;
        for (i = 0; skus.length > i; i += 1) {
            if (skus[i].sku === sku) {
                return skus[i];
            }
        }

        return null;
    };

    var product = SearchTag(activeSKU);
    if (product) {

        var cat = product.cat;
        var desc = product.desc;
        var id = product.id;
        var img = product.img;
        var name = product.name;
        var oldprice = product.oldprice;
        var price = product.price;
        var size = product.size;
        var sku = product.sku;
        var state = product.state;
        var statecolor = product.statecolor;
        var stock = product.stock;
        var currency = localStorage.getItem("myCurrency");

        // console.log(cat+"|"+desc+"|"+id+"|"+img+"|"+name+"|"+price+"|"+size);
        $("#thisName").html(name);
        $("#prodImg").html('<img src="' + img + '" class="img-fluid prod-page-image" alt="' + name + '">');
        $("#thisBadges").html('<a href="">' +
            '<span class="badge ' + statecolor + ' mr-1">' + state + '</span>' +
            '</a>');
        $("#thisLead").html('<span class="mr-1">' +
            '<del>' + currency + '' + oldprice + '</del>' +
            '</span>' +
            '<span>' + currency + '' + price + '</span>')
            $("#thisDesc").html(desc);


    }

}


$(document).ready(function () {

    showMenu();
    currency_icon = '₱';
    localStorage.setItem("myCurrency", currency_icon);


});