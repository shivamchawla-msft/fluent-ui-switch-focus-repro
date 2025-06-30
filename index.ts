import { customElement, FASTElement, html, ref } from '@microsoft/fast-element';

import '@fluentui/web-components/dialog-body.js';
import '@fluentui/web-components/button.js';
import { ButtonAppearance, ButtonSize } from '@fluentui/web-components/button/index.js';
import '@fluentui/web-components/dialog.js';
import { webLightTheme } from '@fluentui/tokens';
import type { Dialog } from '@fluentui/web-components/dialog/index.js';
import { setTheme } from '@fluentui/web-components';
setTheme(webLightTheme);

const template = html<MyComponent>`
  <fluent-button
    @click=${(x) => x.confirmationDialog?.show()}
    appearance=${ButtonAppearance.primary}
    size=${ButtonSize.large}
  >
    ${(x) => 'Show dialog'}
  </fluent-button>
  <fluent-dialog ${ref('confirmationDialog')} type="modal">
    <fluent-dialog-body>
      <p>${(x) => 'dialog body text'}</p>
      <div slot="title">${(x) => 'dialog title'}</div>
      <div slot="title-action">
        <fluent-button icon-only size=${ButtonSize.small}></fluent-button>
      </div>
      <div slot="action" style="display: flex; justify-content: flex-end; gap: 8px;">
        <fluent-button appearance=${ButtonAppearance.primary}> ${(x) => 'Primary button'} </fluent-button>
        <fluent-button> "cancel" </fluent-button>
      </div>
    </fluent-dialog-body>
  </fluent-dialog>
`;

@customElement({
  name: 'my-comp',
  template: template,
})
export class MyComponent extends FASTElement {
  confirmationDialog: Dialog | null = null;
}
