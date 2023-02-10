import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
export const pickImage = setImage => {
  ImagePicker.openPicker({
    width: 200,
    height: 200,
    cropping: false,
    compressImageMaxHeight: 400,
    compressImageMaxWidth: 600,
    cropperCircleOverlay: true,
    multiple: false,
  })
    .then(response => {
      setImage({
        uri: response?.path,
        type: response?.mime,
        name: `${new Date(new Date() - Math.random() * 1e12)}`,
      });
    })
    .catch(Error => {
      Toast.show({
        type: 'info',
        text1: Error?.message,
      });
    });
};
