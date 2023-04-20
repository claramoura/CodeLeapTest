import axios from "axios";

export const editPost = (id, title, content) => async (dispatch) => {
    try {

      dispatch({
        type: "editPost/request"
      })
  
      const { data } = await axios.patch(
        `https://dev.codeleap.co.uk/careers/${id}/`,
        {
            "title": title,
            "content": content,
        }
      )
  
      dispatch({
        type: "editPost/success",
      })

      console.log(data);
  
    } catch (error) {
      dispatch({
        type: "editPost/fail",
        payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
      })
    }
}