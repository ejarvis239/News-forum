import axios from 'axios';
const API_URL = 'https://nc-news-emma.herokuapp.com/api';

export const getArticles = (topic) => {
    const url = topic ? `${API_URL}/topics/${topic}/articles` : `${API_URL}/articles`
    return axios.get(url)
    .then(({data}) => data.articles)
}

export const getArticle = (article_id) => {
    return axios.get(`${API_URL}/articles/${article_id}`)
    .then(({data}) => data.article)
}

export const getComments = (article_id) => {
    return axios.get(`${API_URL}/articles/${article_id}/comments`)
    .then(({data}) => data.comments)
}

export const vote = (id, direction) => {
  return axios.patch(`${API_URL}/articles/${id}?vote=${direction}`)
  .then(({data})=> data.article)
}

export const commentVote = (id, direction) => {
    return axios.patch(`${API_URL}/comments/${id}?vote=${direction}`)
    .then(({data})=> data.comment)
  }

export const getUser = async (username) => {
const {data} = await axios.get(`${API_URL}/users/${username}`)
return data.user
}

export const postComment =  (id, body, created_by ) => {
  return axios.post(`${API_URL}/articles/${id}/comments`, {body, created_by})
    .then(({data}) => data.comment)
}

export const deleteComment =  (id) => {
    return axios.delete(`${API_URL}/comments/${id}`)
    
}

export const addArticle = async (title, belongs_to, body, user) => {
    return axios
      .post(`${API_URL}/topics/${belongs_to}/articles`, {
        title: title,
        body: body,
        created_by: user
      })
      .then(({ data }) => data.articles);
  };

  export const getUsers = () => {
    return axios
      .get(`${API_URL}/users`)
      .then(({ data }) => data.users);
  };