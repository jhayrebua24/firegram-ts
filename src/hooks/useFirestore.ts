import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import { iDoc, iFireStore } from '../interface';

const useFireStore = (collection: string): iFireStore => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap: any) => {
        const documents = snap.docs.map((doc: iDoc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFireStore;
