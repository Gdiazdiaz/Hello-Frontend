const URL = 'http://127.0.0.1:3001/api/greetings';
const DISPLAY_GREETING = 'space/javascript/redux/greetings/greetings/DISPLAY_GREETING';

const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_GREETING:
      return action.GetGreeting;
    default:
      return state;
  }
};

const getData = async () => {
  try {
    const result = await fetch(URL);
    const data = await result.json();
    return (data);
  } catch (error) {
    return error;
  }
};

export const GetGreeting = () => async (dispatch) => {
  const GetGreeting = await getData();
  dispatch({
    type: DISPLAY_GREETING,
    GetGreeting,
  });
};

export default greetingReducer;
