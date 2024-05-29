import React, {SetStateAction, useRef} from 'react';
import { ListItemType } from '../types';

type ListProps = {
  list: ListItemType[],
  setItem: React.Dispatch<SetStateAction<ListItemType>>,
}

function List({ list, setItem }: ListProps) {
  const ulRef = useRef<HTMLUListElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (ulRef.current) {
      ulRef.current
        .querySelectorAll('.list__item')
        .forEach((item) => item.classList.remove('active'));
    }
    e.currentTarget.classList.add('active')
    setItem({
      id: Number(e.currentTarget.id),
      name: e.currentTarget.innerText
    });
  }

  return (
    <ul className="list" ref={ulRef}>
      {list.map((item) => (
        <li className="list__item" key={item.id} id={item.id.toString()} onClick={handleClick}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default List;