/**
 * 判断 body 滚动条是否显示
 * @returns {boolean}
 */
export default function() {
  let fullWindowWidth = window.innerWidth;
  if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
    const documentElementRect = document.documentElement.getBoundingClientRect();
    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }
  return document.body.clientWidth < fullWindowWidth;
}
