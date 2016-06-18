//计算滚动条的宽度
const scrollbarMeasureStyle = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};

/**
 * 返回滚动条宽度
 * @returns {number}
 */
export default function() {
  let scrollDiv = document.createElement('div');
  Object.keys(scrollbarMeasureStyle).forEach((item) => {
    scrollDiv.style[item] = scrollbarMeasureStyle[item];
  });
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
