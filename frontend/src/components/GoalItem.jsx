import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goalSlice";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-GB")}</div>
      <h2>{goal.text}</h2>
      <h3>{goal.description}</h3>
      {goal.imageUrl && (
        <div className="image-container">
          <img src={goal.imageUrl} alt="Goal" className="goal-image" />
        </div>
      )}
      <button
        onClick={() => dispatch(deleteGoal(goal._id))}
        className="close"
      >
        X
      </button>
    </div>
  );
};

export default GoalItem;
