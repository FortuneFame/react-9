import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <main>
      <h1 className='text-center m-3'>Привет!</h1>
      <img
        src="https://wpapi.nurelm.com/wp-content/uploads/2019/05/featured-hand-react-1800x1040.jpg"
        alt="logo-react"
        width='100%'
        className='mb-3'
      />
      <p className='text-center mb-3'>
        Добро пожаловать на главную страницу моего маленького сайта!
        Здесь я представляю свою домашнюю работу по изучению хуков и React Router.
        Надеюсь, тебе будет интересно.
        Приятного путешествия по моему сайту!
      </p>
    </main>
  );
};

export default HomePage;