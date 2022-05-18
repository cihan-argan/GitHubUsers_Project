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
	}
	//7.3
	clearInput() {
		this.inputField.value = '';
	}
	//7.4 
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
    </div>`;
    //Not yukarıdaki bilgileri biz json dosyalarına göre çekiyoruz örneğin https://api.github.com/users/cihan-argan dönen değerlere göre yazdık.
	}
}
