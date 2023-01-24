import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCities } from '../redux/home/home';
import style from './Home.module.css';

const Home = () => (
  <div className={style.app}>
    <nav>
      <span>My weather</span>
      <span>Home</span>
    </nav>
    <div className={style.container}>
      <div className={style.search}>
        <input placeholder="Enter your city" />
      </div>
      <div className={style.cities}>
        <div className={style.city}>
          <div className={style.cityName}>
            <p>City1</p>
            <p>Country1</p>
          </div>
        </div>
        <div className={style.city}>
          <div className={style.cityName}>
            <p>City2</p>
            <p>Country2</p>
          </div>
        </div>
        <div className={style.city}>
          <div className={style.cityName}>
            <p>City3</p>
            <p>Country3</p>
          </div>
        </div>
        <div className={style.city}>
          <div className={style.cityName}>
            <p>City4</p>
            <p>Country4</p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Home;

// const dispatch = useDispatch();
// const cities = useSelector((state) => state.home.cities);
// useEffect(() => {
//   dispatch(getCities(cities));
// }, [dispatch, cities]);
