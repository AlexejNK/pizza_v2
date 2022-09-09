import React from 'react';

function Categories({value, onChangeCategory}) {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Закрытые', 'Острые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={`${categoryName}_${index}`}
            className={value === index ? 'active' : ''}
            onClick={() => onChangeCategory(index)}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
