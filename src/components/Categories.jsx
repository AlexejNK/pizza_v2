import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Закрытые', 'Острые'];
  const onActiveCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((name, index) => (
          <li
            key={`${name}_${index}`}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => onActiveCategory(index)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
