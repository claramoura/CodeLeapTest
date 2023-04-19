import axios from 'axios';

export const submitPost = (username, title, content) => async (dispatch) => {
    try {

      dispatch({
        type: 'submitPost/request'
      })
  
      const { data } = await axios.post(
        'https://dev.codeleap.co.uk/careers/',
        { 'username': username,
          'title': title,
          'content': content,
        },
      )
  
      dispatch({
        type: 'submitPost/success',
        payload: data
      })

      console.log(data)
  
    } catch (error) {
      dispatch({
        type: 'submitPost/fail',
        payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
      })
    }
}
  