$.mockjax({
  url: 'listpage-query.cfm',
  responseTime: 750,
  responseText: {
    status: 'success',
    total_products: 87,
	current_page: 1,
	product_start: 1,
	product_end: 30,
	products: [
	{
		name: 'product a'
	},
	{
		name: 'product b'
	}	
	]
  }
});

$.getJSON('listpage-query.cfm', function(response) {
    if (response.status == 'success') {

    var template = $('#listTpl').html();
    var html = Mustache.to_html(template, response);
    $('#listProductsGrid').html(html);

} else {
        $('#listProductsGrid').html('No products found');
    }
});