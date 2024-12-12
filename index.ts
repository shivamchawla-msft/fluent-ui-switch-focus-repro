
import '@fluentui/web-components/radio-group.js';
import '@fluentui/web-components/radio.js';
import '@fluentui/web-components/field.js';

import { setTheme } from '@fluentui/web-components';
import { webLightTheme } from '@fluentui/tokens';
setTheme(webLightTheme);

document.querySelector('fluent-radio-group')!.addEventListener('change', (e) => {
  console.log(e)
})