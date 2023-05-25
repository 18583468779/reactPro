import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionService } from "../lib/question";

export function useLoadingQuestionData() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [questionData, setQuestionData] = useState({});

  useEffect(() => {
    setLoading(true);
    async function fn() {
      if (id) {
        const res = await getQuestionService(id);
        setQuestionData(res);
        setLoading(false);
      }
    }

    fn();
  }, [id]);

  return { loading, questionData };
}
