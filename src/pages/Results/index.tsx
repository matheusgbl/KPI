import { MyResponsiveBar } from 'components/ResultsGraphic';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'firebase-config';
import React, { useEffect, useState } from 'react';

export default function Results() {
  const [answers, setAnswers] = useState<any>([]);

  const answersCollectionRef = collection(db, 'answers');

  useEffect(() => {
    const getAnswers = async () => {
      const data = await getDocs(answersCollectionRef);
      setAnswers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAnswers();
  }, []);

  return (
    <div style={{ height: '400px' }}>
      {answers.map(
        (item: { answers: any; title: string }, index: React.Key | null | undefined) => (
          <MyResponsiveBar key={index} data={item.answers} title={item.title} />
        ),
      )}
    </div>
  );
}
