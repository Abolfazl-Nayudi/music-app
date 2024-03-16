type FileObject = File | Blob;
import { Base64Data } from '../types/common/CommonTypes';
const convertToBase64 = (file: FileObject): Promise<Base64Data> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result as Base64Data);
    };

    fileReader.onerror = (err) => {
      reject(err);
    };
  });
};

export { convertToBase64 };
