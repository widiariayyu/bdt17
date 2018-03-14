var calculator = {
	hasil : '',
	tambah : function(a,b){
		hasil = a + b;
		return hasil;
	},
	kurang : function(a,b){
		hasil = a - b;
		return hasil;
	},
	kali : function(a,b){
		hasil = a * b;
		return hasil;
	},

	bagi: function (a,b){
		hasil = a / b;
		return hasil;
	},
	samadengan : function(a,b){
		//jika lebih besar a b
		if(a > b){
			return a + ' lebih besar dari ' + b;
		}
		else if(a < b){
			return a + ' lebih kecil dari ' + b;
		} else{
			return a + ' sama besar dengan ' + b;
		}
		samadengan : function(a,b){
		//jika lebih besar a b
		if(a > b){
			return a + ' lebih besar dari ' + b;
		}
		else if(a < b){
			return a + ' lebih kecil dari ' + b;
		} else{
			return a + ' sama besar dengan ' + b;
		}
	}
};
console.log('hasil penjumlahan '+ calculator.tambah(2,3));
console.log('hasil pengurangan' + calculator.kurang(2,3));
console.log('hasil perkalian ' + calculator.kali(2,3));
console.log('hasil pembagian ' + calculator.bagi(2,3));
console.log(calculator.samadengan(2,3));
