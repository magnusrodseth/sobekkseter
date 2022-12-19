import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./firebase";

/**
 * Gets an image URL from Firebase Cloud Storage.
 * @param path is the path to the image in Firebase Cloud Storage.
 */
const getImageUrl = async (path: string) => {
  const imageRef = ref(storage, path);
  return await getDownloadURL(imageRef).then((url) => url);
};

export default getImageUrl;
