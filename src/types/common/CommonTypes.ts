export type Base64Data = string | ArrayBuffer | null;

export type SongFormType = {
  songName: string;
  artist: string;
  duration: number;
  releaseYear: number;
  songUrl: string;
  image: Base64Data;
};

export type ReduxStateType = {
  menuReducer: {
    open: boolean;
  };
};
