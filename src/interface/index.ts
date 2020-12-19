export interface ITarget {
  target: {
    value: React.SetStateAction<string>;
    files: [] | null;
  };
}

export interface IProgressBar {
  file: File;
  setFile: (file: File | null) => void;
}

export interface iDoc {
  data: () => any;
  id: string | number;
}

export type tDocument = {
  id: number;
  url: string;
  createdAt: any;
};

export type iFireStore = {
  docs: tDocument[];
};
