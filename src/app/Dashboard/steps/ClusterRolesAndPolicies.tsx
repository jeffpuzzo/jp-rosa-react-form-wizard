import React from 'react';

import { Section, RadioGroup, TextInput } from '@patternfly-labs/react-form-wizard';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';

import { CustomRadio } from '../CustomRadio';

export const ClusterRolesAndPolicies: React.FC = () => (
  <Section label="Cluster roles and policies">
    <Alert
      isExpandable
      isInline
      variant="info"
      title="If you would like to enable auto mode..."
      actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}
    >
      <p>Some alert description. This should tell the user more information about the alert.</p>
      <TextInput path="teeest1" label="Some text input 1" />
      <TextInput path="teeest2" label="Some text input 2" />
    </Alert>

    <Section label="Cluser privacy" description="Some description">
      <RadioGroup path="clusterPrivacy">
        <CustomRadio id="cluster-public" label="Manual mode" value="manual" description="Some description" />
        <CustomRadio id="cluster-private" label="Auto mode" value="auto" description="Some description" />
      </RadioGroup>
    </Section>
  </Section>
);
