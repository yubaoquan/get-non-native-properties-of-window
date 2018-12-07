module.exports = function () {
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  var currentProps = Object.getOwnPropertyNames(window);
  var results = currentProps.filter(function(prop) {
    return !iframe.contentWindow.hasOwnProperty(prop);
  });
  document.body.removeChild(iframe);
  return results;
};
