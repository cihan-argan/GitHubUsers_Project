//1-Element Seçme işlemleri
const githubForm = document.querySelector('#github-form');
const nameInput = document.querySelector('#githubname');
const clearLastUser = document.querySelector('#clear-last-users');
const lastUsers = document.querySelector('#last-users');
//6.4
const github = new Github();

//7.0
const ui = new UI();

//2.adım eventListeners
eventListeners();

function eventListeners() {
	//3.adım bilgileri alma
	githubForm.addEventListener('submit', getData);
	//4.clearAllSearch
	clearLastUser.addEventListener('click', clearAllSearched);
	//5-Sayfa yüklendiği zaman tüm aramaları sayfada göster.
	document.addEventListener('DOMContentLoaded', getAllSearched);
}

//6-getDATA Fonksiyonunu yazıyoruz
function getData(e) {
	//Not Get Data yazmadan önce github.js oluşturup async ile değerimizi dönmemiz gerekiyor.

	//ilk başta inputtaki kullanıcı adını alıp github.js deki fonksiyonu çalıştırıcam
	//6.5
	let username = nameInput.value.trim();

	if (username === '') {
		alert('Lütfen geçerli bir kullanıcı adı giriniz.');
	} else {
		github
			.getGithubData(username)
			.then((response) => {
				//Farklı bir kullanıcı adı yazınca bize User Ve Repo Dönüyor User içinde ise NotFound mesajı geliyor bu dönmeyi engellemek için alttaki if bloğunu yazdık Not Found dönerse oraya bir hata mesajı yazdıracağız dönmez ise responseu yine consola yazdırdık.
				if (response.user.message === 'Not Found') {
					//Hata mesajımızı yazdıracağız.
					console.log('HATA');
				} else {
					console.log(response.user);
					ui.showUserInfo(response.user);
				}
			})
			.catch((err) => console.log(err));
	}

	ui.clearInput();
	e.preventDefault();
}
//7-clearAllSearch Fonksiyonunu yazıyoruz
function clearAllSearched() {
	//Tüm arananları temizleyen Fonksiyon
}
//8-getAllSearched fonksiyonu
function getAllSearched() {
	//arananları storegdan alıp UI a yazan fonksiyon
}
