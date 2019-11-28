import api from './api';

class App {

    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');

        this.RegisterHandlers();
    }

    RegisterHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

        const response = await api.get(`/repos/${repoInput}`);

        const { name, description, html_url, owner: { avatar_url } } = response.data;

        console.log(response);

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url
        })

        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptEl = document.createElement('p');
            descriptEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listIEl = document.createElement('li');
            listIEl.appendChild(imgEl);
            listIEl.appendChild(titleEl);
            listIEl.appendChild(descriptEl);
            listIEl.appendChild(linkEl);

            this.listEl.appendChild(listIEl);

        });
    }
}


new App();
