import Promise from 'bluebird';
import config from './config';

const TITLE = 'Dialog'
    , WIDTH = 580
    , HEIGHT = 470;

export default (url, options = {}) => {
  return new Promise((resolve, reject) => {

    const w = options.width || WIDTH
        , h = options.height || HEIGHT;
        
    const dualScreenLeft = window.screenLeft ? window.screenLeft : screen.left
        , dualScreenTop = window.screenTop ? window.screenTop : screen.top
        , width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
        , height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const left = ((width / 2) - (w / 2)) + dualScreenLeft
        , top = ((height / 3) - (h / 3)) + dualScreenTop;

    const dialog = window.open(url, options.title || TITLE, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    if (window.focus && dialog && !dialog.closed) {
      dialog.focus();
    }

    if (dialog) {
      var interval = window.setInterval(function() {
        if (dialog.closed) {
          window.clearInterval(interval);
        }
      }, 1000);
    }

    window.addEventListener('message', function(e) {
      if (e.origin === config('client')) {
        const data = JSON.parse(e.data);

        if (data.error) return reject(data.error);

        return resolve(data);
      }

      window.removeEventListener('message');
    }, false);
  });
};

