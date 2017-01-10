
// Test via a getter in the options object to see if the passive property is accessed
let supportsPassive = false;
try {
  let opts = Object.defineProperty({}, 'passive', {
    get: function getPassiveProperty () {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

// Use our detect's results. passive applied if supported, capture will be false either way.
const passiveArgument = supportsPassive ? { passive: true } : false;
export default passiveArgument;
