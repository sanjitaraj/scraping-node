async function fetchRepoInfos () {  
    // load repository details for this array of repo URLs
    const repos = [
      {
        url: 'https://api.github.com/repos/fs-opensource/futureflix-starter-kit'
      },
      {
        url: 'https://api.github.com/repos/fs-opensource/android-tutorials-glide'
      }
    ]
  
    // map through the repo list
    const promises = repos.map(async repo => {
      // request details from GitHub’s API with Axios
      const response = await Axios({
        method: 'GET',
        url: repo.url,
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      })
  
      return {
        name: response.data.full_name,
        description: response.data.description
      }
    })
  
    // wait until all promises resolve
    const results = await Promise.all(promises)
  
    // use the results
  }