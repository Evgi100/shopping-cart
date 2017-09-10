let addProductModule = function () {
    let source = $('#addProduct-template').html();
    let template = Handlebars.compile(source);

    function addProduct() {
        let product = $('.card-container'),
            container = $('.container'),
            newHTML = template({
                name: $('#name-input').val(),
                price: $('#price-input').val(),
                img: $('#img-input').val()
            });

        if (product.length % 3 === 0) {
            container.append('<div class="row"></div>');
            $('.row').last().append(newHTML);
        } else {
            $('.row').last().append(newHTML);
        }

        $('.add-to-cart').off();
        $('.add-to-cart').on('click', function () {
            var item = $(this).closest('.item').data();
            addItem(item);
            updateCart();
        });
    }

    return {
        addProduct: addProduct
    }
}

let module1 = addProductModule();
$('#input-submit').on('click', module1.addProduct);