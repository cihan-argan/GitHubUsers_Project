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
					ui.showError('Bu kullanıcı adı mevcut değil.');
				} else {
					//8.4
					ui.addSearchedUserToUI(username);
					//8.2 not uı.addSearchedUserToUI fonksiyonu üstte olmalı aksi takdirde hata alırız
					Storage.addSearchedUserToStorage(username);
					ui.showUserInfo(response.user);
					ui.showRepoInfo(response.repo);
				}
			})
			.catch((err) => ui.showError(err));
	}

	ui.clearInput();
	e.preventDefault();
}
//9-clearAllSearch Fonksiyonunu yazıyoruz
function clearAllSearched() {
	//Tüm arananları temizleyen Fonksiyon
	if (confirm('Emin Misiniz ? ')) {
		Storage.clearAllSearchedUsersFromStorage(); //storage üzerinden temizleme yapan fonksiyon.
		ui.clearAllSearchedUsersFromUI();
	}
}
//8.5-getAllSearched fonksiyonu
function getAllSearched() {
	//arananları storegdan alıp UI a yazan fonksiyon

	let users = Storage.getSearchedUsersFromStorage();
	let result = '';
	users.forEach((user) => {
		// <!-- <li class="list-group-item">eklenecek kullanıcı adı </li> -->
		result += `<li class="list-group-item">${user} </li>`;
	});
	lastUsers.innerHTML = result;
}
