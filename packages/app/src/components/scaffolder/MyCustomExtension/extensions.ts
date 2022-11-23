/*
  This is where the magic happens and creates the custom field extension.

  Note that if you're writing extensions part of a separate plugin,
  then please use `scaffolderPlugin.provide` from there instead and export it part of your `plugin.ts` rather than re-using the `scaffolder.plugin`.
*/

import {
  scaffolderPlugin,
  createScaffolderFieldExtension,
} from '@backstage/plugin-scaffolder';
import { MyCustomExtension, myCustomValidation } from './MyCustomExtension';

export const MyCustomFieldExtension = scaffolderPlugin.provide(
  createScaffolderFieldExtension({
    name: 'MyCustomExtension',
    component: MyCustomExtension,
    validation: myCustomValidation,
  }),
);
