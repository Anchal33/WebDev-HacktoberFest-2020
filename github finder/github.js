class Github {
    constructor() {
        this.client_id = '891f53a058c9baa6e3af';
        this.client_secret = '8def8a0c84197eb2026d7f346266b2e4288eeb5f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    
    }

    // async getUser(user) {
    //   const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client-secret=${this.client_secret}`);
    //    const profile = await profileResponse.json();

    //    return {
    //        profile
    //    }
    // }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
    
        return {
          profile,
          repos
        }
      }
    
}