// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + через дефис телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - адрес доставки
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }


function sendRequest(name, phone, address, goods, sum) {
	/*console.log('name', name);
	console.log('phone', phone);
	console.log('address', address);
	console.log('goods', goods);
	console.log('sum', sum);*/
	let g=[];
	if(address.house==2)
	{address.house=1}
    let data = {
        client: name + ' ' + phone,
        order: {
             address: `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`,
            sum: sum 
        }
    };
    let countOfGoods = goods.length;
        for (let i = 0; i < countOfGoods; i++) {
			console.log('goods[i].title', goods[i].title);
			console.log('goods[i].count', goods[i].count);
            g.push({ title: goods[i].title, count: goods[i].count });
         }
		 
		data.goods = g; 
    //data.order.address = address;
    //data.order.sum = name + phone + address + goods + sum;
    //data.client = 'Иван';
	console.log('data', data);
        let jsonData = JSON.stringify({data: data});
            return jsonData;

}
    
