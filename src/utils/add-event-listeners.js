import each from './each';
import splitStr from './split-str';
import passiveArgument from './passive-events';
/**
 * @private
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
export default function addEventListeners(target, types, handler) {
  each(splitStr(types), (type) => {
    target.addEventListener(type, handler, passiveArgument);
  });
}
