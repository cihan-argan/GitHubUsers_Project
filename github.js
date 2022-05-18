//6.1 Github Classı oluşturuldu
class Github {
	//6.2 Constructor oluşturuldu özellik olarak sadece url ekledik
	constructor() {
		this.url = 'https://api.github.com/users/';
	}
	//6.3 getGithubData() fonksiyonuna dışardan username göndericez ve bu username e ait bilgileri alıcaz birde githubta paylaştığı reposları alacağız.
	async getGithubData(username) {
		const responseUser = await fetch(this.url + username);
		const responsRepo = await fetch(this.url + username + '/repos');
		//gelen bilgileri .json ile yakalıyoruz promis döneceği için beklemem gerekiyor.
		const userData = await responseUser.json();
		const repoData = await responsRepo.json();

		//bu verileri dönmemiz gerekiyor.
		return {
			user: userData,
			repo: repoData
		};
	}
}
