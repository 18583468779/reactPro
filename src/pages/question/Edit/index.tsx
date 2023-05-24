import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionService } from "../../../lib/question";

export const Edit: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    async function fn() {
      if (id) {
        const res = await getQuestionService(id);
        console.log(res);
      }
    }

    fn();
  }, [id]);

  return <div>Edit {id}</div>;
};
