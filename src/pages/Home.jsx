import React, { useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';

const Home = ({ searchValue }) => {

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' });

  React.useEffect(() => {
    setIsLoading(true);
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    fetch(
      `https://6318eb356b4c78d91b326e17.mockapi.io/index?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((resp) => resp.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  const pizzasSearch = pizzas.filter(obj => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  }).map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(item) => setCategoryId(item)} />
        <Sort value={sortType} onChangeSort={(item) => setSortType(item)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzasSearch}</div>
    </>
  );
};

export default Home;
