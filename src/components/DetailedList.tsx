import React, { useEffect, useState } from 'react';
import List from './List';
import Details from './Details';

function DetailedList() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState({
    id: 0,
    name: '',
  });

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(response => response.json())
      .then(json => setList(json))
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <List list={list} setItem={setItem} />
      <Details info={item} />
    </>
  );
}

export default DetailedList;
