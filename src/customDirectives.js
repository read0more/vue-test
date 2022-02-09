// import { App } from "vue"; 으로 하면 정상동작 안해서 아래같이 변경
import * as Vue from "vue";

/**
 *
 * @param {Vue.App} app
 */
export default (app) => {
  function vFocus() {
    app.directive('focus', {
      mounted(el) {
        el.focus();
      }
    });
  }

  function vPin() {
    // 여기선 mounted, updated의 동작이 동일하므로, 객체를 주지 않고 단순히 콜백 전달
    app.directive('pin',
      (el, binding) => {
        el.style.position = 'fixed';
        const direction = binding.arg || 'top';
        el.style.top = null;
        el.style.right = null;
        el.style.bottom = null;
        el.style.left = null;
        el.style[direction] = `${ binding.value }px`;
      });
  }

  function init() {
    vFocus();
    vPin();
  }

  init();
}