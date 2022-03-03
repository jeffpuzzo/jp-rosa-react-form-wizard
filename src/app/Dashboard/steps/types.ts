import React from 'react';
import { HiddenFn } from '@patternfly-labs/react-form-wizard/lib/src/inputs/Input';

export interface StepProps {
  label: string;
  children?: React.ReactNode;
  id: string;
  hidden?: HiddenFn;
  autohide?: boolean;
}
