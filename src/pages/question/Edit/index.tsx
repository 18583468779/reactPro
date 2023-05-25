import * as React from "react";
import { useLoadingQuestionData } from "../../../hook/useLoadingQuestionData";

export const Edit: React.FC = () => {
  const { loading, questionData } = useLoadingQuestionData();
  return (
    <div>
      <div>
        {loading ? (
          <div>loading</div>
        ) : (
          <div>Edit {JSON.stringify(questionData)}</div>
        )}
      </div>
    </div>
  );
};
