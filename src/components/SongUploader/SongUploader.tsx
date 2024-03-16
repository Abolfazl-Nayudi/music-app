import React, { useState } from 'react';
import { convertToBase64 } from '../../utils/imageToBase64';
import { SongFormType } from '../../types/common/CommonTypes';
import { postSong } from '../../API/SongApi';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;
type FileObject = File | null;

export default function SongUploader() {
  const data = {
    songName: '',
    artist: '',
    duration: 0,
    releaseYear: 0,
    songUrl: '',
    image: '',
  };

  const [formData, setFormData] = useState<SongFormType>(data);
  const [loading, setLoading] = useState(false);

  const handleFileInput = async (e: ChangeEvent) => {
    // Access the uploaded file from the event
    const file: FileObject = e?.target?.files ? e.target.files[0] : null;

    if (file) {
      try {
        // Call the function to convert the file to base64
        setLoading(true);
        const base64 = await convertToBase64(file);
        setLoading(false);
        // Handle the base64 data
        setFormData({ ...formData, image: base64 });
      } catch (error) {
        // Handle errors if conversion fails
        console.error('Error converting file to base64:', error);
      }
    }
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    await postSong(formData);
    setLoading(false);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">song name</label>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, songName: e.target.value })
          }
        />
        <br />
        <br />
        <label htmlFor="">artist name</label>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="">duration</label>
        <input
          type="number"
          onChange={(e) =>
            setFormData({ ...formData, duration: Number(e.target.value) })
          }
        />
        <br />
        <br />
        <label htmlFor="">release year</label>
        <input
          type="number"
          onChange={(e) =>
            setFormData({ ...formData, releaseYear: Number(e.target.value) })
          }
        />
        <br />
        <br />
        <label htmlFor="">song url</label>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, songUrl: e.target.value })
          }
        />
        <br />
        <br />
        <label htmlFor="">song image</label>
        <input type="file" onChange={handleFileInput} />

        <button type="submit" disabled={loading}>
          {loading ? 'loading...' : 'submit'}
        </button>
      </form>
    </div>
  );
}
