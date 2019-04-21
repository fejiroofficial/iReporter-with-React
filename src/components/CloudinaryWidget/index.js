const defaultFunc = () => { };
const styles = {
  palette: {
    window: '#FFFFFF',
    sourceBg: '#FBFBFB',
    windowBorder: 'lightseagreen',
    tabIcon: 'lightseagreen',
    inactiveTabIcon: 'grey',
    menuIcons: 'lightseagreen',
    link: 'lightseagreen',
    action: 'lightseagreen',
    inProgress: '#0433ff',
    complete: 'lightseagreen',
    error: '#cc0000',
    textDark: 'lightseagreen',
    textLight: '#FFFFFF'
  },
};
/**
 * Represents the Cloudinary widget
 * @export
 * @class CloudinaryWidget
 */
export default class CloudinaryWidget {
  /**
   *Creates an instance of CloudinaryWidget.
   * @param {Function} [handleSuccess=defaultFunc] The callback to execute on successful upload
   * @param {Function} [handleFailure=defaultFunc] The callback to execute on failed upload
   * @param {boolean} [cropping=false] If the widget should enforce cropping
   * @memberof CloudinaryWidget
   */
  constructor(handleSuccess = defaultFunc, handleFailure = defaultFunc, cropping = false) {
    this.widget = window.cloudinary.createUploadWidget({
      cloudName: 'drrb96nqn',
      uploadPreset: 'ml_default',
      cropping,
      croppingAspectRatio: cropping ? 1 : null,
      croppingDefaultSelectionRatio: 0.8,
      resourceType: 'image',
      clientAllowedFormats: ['png', 'jpg', 'jpeg', 'gif'],
      maxImageWidth: 500,
      maxImageHeight: 500,
      styles,
      sources: ['local', 'camera', 'facebook', 'instagram'],
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        return handleSuccess(result.info.secure_url);
      }
      handleFailure();
    });
  }

  /**
   * Shows the widget
   * @memberof CloudinaryWidget
   * @returns {void}
   */
  open() {
    this.widget.open();
  }
}
