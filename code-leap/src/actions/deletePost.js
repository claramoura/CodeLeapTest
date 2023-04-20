import axios from 'axios';

export const deletePost = (id) => async (dispatch) => {
    try {

      dispatch({
        type: 'deletePost/request'
      })
  
      const { data } = await axios.delete(
        `https://dev.codeleap.co.uk/careers/${id}/`
      )
  
      dispatch({
        type: 'deletePost/success',
      })

      console.log(data);
  
    } catch (error) {
      dispatch({
        type: 'deletePost/fail',
        payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
      })
    }
}