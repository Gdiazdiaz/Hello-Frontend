import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetGreeting } from '../redux/greetings/greetings';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(GetGreeting());
  }, []);

  return (
    <div>
      <h1>{greeting.title}</h1>
    </div>
  );
}

export default Greeting;
