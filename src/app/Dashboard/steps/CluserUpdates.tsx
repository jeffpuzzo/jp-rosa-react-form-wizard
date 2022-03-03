import React from 'react';
import { TimeRange, TextInput } from '@patternfly-labs/react-form-wizard';

export const ClusterUpdates: React.FC = () => (
  <>
    <TextInput path="someDatePicker" label="Select a day and start time" required />
    <TimeRange path="someDatePicker" label="Select a day and start time" />
  </>
);
