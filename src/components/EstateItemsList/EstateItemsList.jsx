import { useState } from 'react';
import EstateItem from '../EstateItem/EstateItem';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryFilter, selectCategoryFilter } from '../../redux/filterSlice';
import { selectItems as items } from '../../redux/filterSlice';

const EstateItemsList = () => {
  const categoryFilter = useSelector(selectCategoryFilter);
  const dispatch = useDispatch();
  const [categories] = useState(["Commerce", "Buy", "Rent", "New Building"]);

  const handleCategoryClick = (category) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <div>
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
      <div>
        {categoryFilter
          ? items
              .filter((item) => item.category === categoryFilter)
              .map((filteredItem) => (
                <EstateItem
                  key={filteredItem.id}
                  picture={filteredItem.picture}
                  name={filteredItem.name}
                  price={filteredItem.price}
                  description={filteredItem.description}
                  ehome={filteredItem.ehome}
                />
              ))
          : items.map((item) => (
              <EstateItem
                key={item.id}
                picture={item.picture}
                name={item.name}
                price={item.price}
                description={item.description}
                ehome={item.ehome}
              />
            ))}
      </div>
    </div>
  );
};

export default EstateItemsList;
