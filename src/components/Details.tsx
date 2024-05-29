import React, {useEffect} from 'react';
import { DetailsType, ListItemType } from '../types';

function Details({ info }: { info: ListItemType }) {
  const [data, setData] = React.useState<DetailsType | null>(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (info.id) {
      setLoading(true);
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
        .then(response => response.json())
        .then(json => setTimeout(() => {
          setData(json);
          setLoading(false);
        }, 1000))
        .catch(e => console.log(e));
    }
  }, [info.id]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && data && (
        <div className="details">
          <img className="details__avatar" src={data.avatar} alt={data.name} />
          <div className="details__name">{data.name}</div>
          <ul className="details__list">
            <li>City: {data.details.city}</li>
            <li>Company: {data.details.company}</li>
            <li>Position: {data.details.position}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Details;
