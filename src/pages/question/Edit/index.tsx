import * as React from "react";
import { useLoadingQuestionData } from "../../../hook/useLoadingQuestionData";

export const Edit: React.FC = () => {
  const { loading, data, error } = useLoadingQuestionData();
  return (
    <div>
      <div>
        {loading ? <div>loading</div> : <div>Edit {JSON.stringify(data)}</div>}
      </div>
    </div>
  );
};
