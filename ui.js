//ui işlemleri için

//7.0
class UI {
	constructor() {
		//7.1 Profil bilgilerini ve Repos Bilgilerini UI üzerinde göstereceğimiz elementleri seçiyoruz
		this.profileDiv = document.getElementById('profile');
		this.repoDiv = document.getElementById('repos');

		//7.2 Son kullanıcıların isimlerinin listelendiği ul yi  ve İnput alanının seçmeliyiz.
		this.lastUsers = document.getElementById('last-users');
		this.inputField = document.getElementById('githubname');

		//7.5
		this.cardBody = document.querySelector('.card-body');
	}
	//7.3
	clearInput() {
		this.inputField.value = '';
	}
	//7.4 Kullanıcı bilgilerini UI üzerinde göstermek
	showUserInfo(user) {
		this.profileDiv.innerHTML = `
        
        
         <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${user.name}</strong></div>
             <hr>
             <div id="bio">${user.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${user.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div>
    `;
		//Not yukarıdaki bilgileri biz json dosyalarına göre çekiyoruz örneğin https://api.github.com/users/cihan-argan dönen değerlere göre yazdık.
	}

	//7.5 hata mesajlarını yazdırmak
	showError(message) {
		const div = document.createElement('div');
		div.className = 'alert alert-danger';
		div.textContent = message;

		this.cardBody.appendChild(div);

		setTimeout(() => {
			div.remove();
		}, 2000);
	}

	//7.6 Repo bilgilerini UI üzerinde göstermek
	showRepoInfo(repos) {
		//daha önce sorgulama varsa yeni sorgulamada repoların tutulduğu arayüzü temizlemeliyiz.
		this.repoDiv.innerHTML = '';

		//Gelen repo dizisini forEach ile gezerek her bir repoyu arayüzde göstermeye çalıştık.
		repos.forEach((repo) => {
			this.repoDiv.innerHTML += `
            <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2"> 
                        <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repo.fork}</span>
                            </button>
                    
                        </div>
                </div>

             </div>
            `;
		});
	}

	//8.4
	addSearchedUserToUI(username) {
		let users = Storage.getSearchedUsersFromStorage();
		if (users.indexOf(username) === -1) {
			// <!-- <li class="list-group-item">eklenecek kullanıcı adı </li> -->
			const li = document.createElement('li');
			li.className = 'list-group-item';
			li.textContent = username;
			this.lastUsers.appendChild(li);
		}
	}
	//9.0
	clearAllSearchedUsersFromUI() {
		while (this.lastUsers.firstElementChild !== null) {
			this.lastUsers.removeChild(this.lastUsers.firstElementChild);
		}
	}
}
