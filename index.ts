import '@fluentui/web-components/label.js';
import '@fluentui/web-components/switch.js';

import { customElement, FASTElement, html } from '@microsoft/fast-element';

import { webLightTheme } from '@fluentui/tokens';
import { setTheme } from '@fluentui/web-components';
setTheme(webLightTheme);

const template = html<MyComponent>`
  <fluent-field label-position="before">
    <fluent-label slot="label">Switch label </fluent-label>
    <fluent-switch
      @click=${async (x) => {
        console.log('switch click');
      }}
      name="switch"
      slot="input"
    >
    </fluent-switch>
  </fluent-field>
`;

@customElement({
  name: 'my-comp',
  template: template,
})
export class MyComponent extends FASTElement {}
