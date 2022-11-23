import React from 'react';
import { FieldProps, FieldValidation } from '@rjsf/core';
import FormControl from '@material-ui/core/FormControl';
import { KubernetesValidatorFunctions } from '@backstage/catalog-model';
/*
 This is the actual component that will get rendered in the form
*/
export const MyCustomExtension = ({
  onChange,
  rawErrors,
  required,
  formData,
}: FieldProps<string>) => {
  return (
    <FormControl
      margin="normal"
      required={required}
      error={rawErrors?.length > 0 && !formData}
      onChange={onChange}
    />
  );
};

/*
 This is a validation function that will run when the form is submitted.
  You will get the value from the `onChange` handler before as the value here to make sure that the types are aligned\
*/

export const myCustomValidation = (
  value: string,
  validation: FieldValidation,
) => {
  if (!KubernetesValidatorFunctions.isValidObjectName(value)) {
    validation.addError(
      'must start and end with an alphanumeric character, and contain only alphanumeric characters, hyphens, underscores, and periods. Maximum length is 63 characters.',
    );
  }
};
