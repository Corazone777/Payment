paypal.Buttons({
	style:{
		color:'blue',
		shape:'pill'
	},
	payment:function(data, actions){
		return actions.order.create({
			purchase_units:[{
				amount:{
					value:'0.1'
				}
			}]
		});
	},
	onApprove:function(data, actions){
		return actions.order.capture().then(function(details){
			console.log(details)
			window.location.replace("http://localhost/payment/success.php");
		})
	},

	onCancle:function(data){
		window.location.replace("http://localhost/payment/payment.php?not_good");
	}
}).render('body');

