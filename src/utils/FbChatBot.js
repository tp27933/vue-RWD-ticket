/* global FB */

window.fbAsyncInit = () => {
  FB.init({
    xfbml: true,
    version: 'v11.0'
  })
};

(function (d, s, id) {
  var js; var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s); js.id = id
  js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))
