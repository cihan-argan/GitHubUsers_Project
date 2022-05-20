//storage işlemleri için
//8.0
class Storage {
	//8.1
	static getSearchedUsersFromStorage() {
		//Tüm Kullanıcıları al

		//users adında değişken oluştur
		let users;

		//local storage içinde searched keyine sahip item yok ise
		if (localStorage.getItem('searched') === null) {
			//users değişkenini dizi oluştur.
			users = [];
		} else {
			//eğer null değil ise item var demektir local storage içinde bu itemlar string olarak tutulduğu için bunu diziye JSON.parse ederek diziye atamalıyız
			users = JSON.parse(localStorage.getItem('searched'));
		}
		//ve bu diziyi döndürmeliyiz.
		return users;
	}
	//8.2 sotarege içine ekleme yapan fonksiyon oluşturucaz içine de bir adet username göndereceğiz.
	static addSearchedUserToStorage(username) {
		//Sorgulanmış kullanıcıyı storage'a ekle Ancak Storage içinde böyle bir kullanıcı varsa onu ekleme !!
		//this yerine Storage şeklinde de kullanabilirdik.this zaten storage classını göstermektedir.
		let users = this.getSearchedUsersFromStorage();
		//gönderilen username in users dizisi içinde olup olmadığını öğrenmek için array lerde kullanılan indexOf metodunu kullanacağız.
		if (users.indexOf(username) === -1) {
			users.push(username);
		}

		//eğer -1 değilde bir başka değer dönerse bu kullanıcı adı kayıtlı demektir heerhangi bir işlem yapmıcaz
		//son olarak arrayimizi storage içine searched keyi ile birlikte stringify metodu ile aktarıcaz
		localStorage.setItem('searched', JSON.stringify(users));
	}
	//8.3

	static clearAllSearchedUsersFromStorage() {
		//Tüm Kullanıcıları silicez..

		localStorage.removeItem('searched');
	}
}
