
import { CameraRoll } from 'react-native';

export default () => {

    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
        //Error Loading Images
        console.warn('ERROR CameraRoll getPhotos ', err);
      });
}