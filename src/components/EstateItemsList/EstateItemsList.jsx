import EstateItem from '../EstateItem/EstateItem';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryFilter } from '../../redux/estateItems/filters';
import { selectItems, selectCategoryFilter } from '../../redux/estateItems/selectors';
import { toggleCategoryFilter } from '../../redux/estateItems/operations';
import { statusFilterbyCategory } from '../../redux/estateItems/constants';

const EstateItemsList = () => {
  const items = useSelector(selectItems);
  const currentFilter = useSelector(selectCategoryFilter);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    const newFilter = toggleCategoryFilter(currentFilter, category);
    dispatch(setCategoryFilter(newFilter));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleCategoryClick(statusFilterbyCategory.buy)}>Buy</button>
        <button onClick={() => handleCategoryClick(statusFilterbyCategory.rent)}>Rent</button>
        <button onClick={() => handleCategoryClick(statusFilterbyCategory.commerce)}>Commerce</button>
        <button onClick={() => handleCategoryClick(statusFilterbyCategory.newbuild)}>New Building</button>
      </div>
      <ul>
        {items
          .filter((item) => currentFilter ? item.category === currentFilter : true)
          .map((item) => (
            <li key={item.id}>
              <EstateItem
                key={item.id}
                picture={item.picture}
                name={item.name}
                price={item.price}
                description={item.description}
                ehome={item.ehome}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EstateItemsList;