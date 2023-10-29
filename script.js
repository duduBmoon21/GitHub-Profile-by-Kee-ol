function searchProfile() {
  const username = document.getElementById('searchInput').value;

  fetch(https://api.github.com/users/${username})
    .then(response => response.json())
    .then(data => {
      const profileContainer = document.getElementById('profileContainer');
      profileContainer.innerHTML = '';

      const profileCard = document.createElement('div');
      profileCard.className = 'profile-card';
      profileCard.innerHTML = 
        <h2>${data.login}</h2>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <p>Location: ${data.location}</p>
      ;

      profileContainer.appendChild(profileCard);
    });

  fetch(https://api.github.com/users/${username}/repos)
    .then(response => response.json())
    .then(data => {
      const repositoriesContainer = document.getElementById('repositoriesContainer');
      repositoriesContainer.innerHTML = '';

      data.forEach(repository => {
        const repositoryCard = document.createElement('div');
        repositoryCard.className = 'repository-card';
        repositoryCard.innerHTML = 
          <h3>${repository.name}</h3>
          <p>Description: ${repository.description}</p>
          <p>Language: ${repository.language}</p>
          <a href="${repository.html_url}" target="_blank">View Repository</a>
        ;

        repositoryCard.addEventListener('click', () => {
          window.open(repository.html_url, '_blank');
        });

        repositoriesContainer.appendChild(repositoryCard);
      });
    });
}
