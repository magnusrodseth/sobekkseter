import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./firebase";

/**
 * Gets an image URL from Firebase Cloud Storage.
 * @param path is the path to the image in Firebase Cloud Storage.
 */
const getImageUrl = async (path: string) => {
  const imageRef = ref(storage, path);
  const url = await getDownloadURL(imageRef).then((url) => url);

  // Remove token parameter from url, but keep the alt=media
  // url looks like this: https://firebasestorage.googleapis.com/v0/b/.../o/...?alt=media&token=...
  // This is done to ensure that Vercel sources only 1 image url, instead of the dynamically generated url using tokens.
  const urlWithoutToken = url.split("&token=")[0];

  return urlWithoutToken;
};

export default getImageUrl;
