/*сортировка товаров*/
$(document).on('change', '#selectProductSort', function () {
    if ($(this).val()) {
        location.assign($(this).val());
    } else {
        location.href = location.origin + location.pathname;
    }
});
/*!сортировка товаров*/