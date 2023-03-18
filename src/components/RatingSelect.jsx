import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState();

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  const listRating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ul className="rating">
      {listRating.map((rating, index) => (
        <li key={index}>
          <input
            type="radio"
            id={`num${rating}`}
            name="rating"
            value={rating}
            onChange={handleChange}
            checked={selected === rating}
          />
          <label htmlFor={`num${rating}`}>{rating}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
