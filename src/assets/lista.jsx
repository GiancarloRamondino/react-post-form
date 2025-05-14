import axios from 'axios'


function lista() {
  return axios.get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts")
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error)
      throw error
    })
}

export default lista