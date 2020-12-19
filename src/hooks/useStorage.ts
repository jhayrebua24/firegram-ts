import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';

interface iStorage {
  progress: number;
  url: string | null;
  error: any;
}

const useStorage = (file: File): iStorage => {
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap: any) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err: any) => {
        setError(err);
      },
      async () => {
        const newUrl = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url: newUrl, createdAt });
        setUrl(newUrl);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
