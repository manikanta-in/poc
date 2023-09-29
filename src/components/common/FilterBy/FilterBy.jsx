import { useEffect, useMemo, useState } from 'react';
import { ComboBox, menuHelpers } from '@pega/cosmos-react-core';
import { getFilterRegex, tree } from './ComboBox.mocks';
import StyledFilterBox from './styles';

const FilterBy = props => {
  const [items, setItems] = useState(props.filters);
  const [filterValue, setFilterValue] = useState('');
  const selected = useMemo(() => {
    return menuHelpers.getSelected(items).map(item => ({ text: item.primary, id: item.id }));
  }, [items]);

  const filterRegex = useMemo(() => getFilterRegex(filterValue), [filterValue]);

  const itemsToRender = useMemo(() => {
    const newItems = filterValue
      ? menuHelpers.flatten(items).filter(({ primary }) => {
          return filterRegex.test(primary);
        })
      : items;
    return menuHelpers.mapTree(newItems, item => ({
      ...item,
      selected: item.items ? undefined : !!item.selected
    }));
  }, [filterValue, items]);

  const toggleItem = id => {
    setItems(cur => menuHelpers.toggleSelected(cur, id, 'multi-select'));
  };

  useEffect(() => {
    props.changeEvent(selected.map(({ text }) => text));
  }, [selected]);

  return (
    <StyledFilterBox>
      <div className='filters'>
        <ComboBox
          mode='multi-select'
          label={props.label}
          labelHidden={false}
          placeholder={props.placeholder}
          status={null}
          required={false}
          disabled={false}
          readOnly={false}
          selected={{
            items: selected,
            onRemove: toggleItem
          }}
          value={filterValue}
          onChange={e => {
            setFilterValue(e.target.value);
          }}
          onBlur={() => {
            setFilterValue('');
          }}
          menu={{
            items: itemsToRender,
            onItemClick: toggleItem,
            accent: filterRegex,
            emptyText: 'No items'
          }}
        />
      </div>
    </StyledFilterBox>
  );
};

export default FilterBy;
