import React from 'react';

import { Checkbox, Hidden, Radio, RadioGroup, Section, Select, Step } from '@patternfly-labs/react-form-wizard';
import { Flex } from '@patternfly/react-core';

export const NetworkingConfig: React.FC = () => (
  <>
    <Section label="Networking configuration">
      <p>Configure network access for your cluster.</p>
    </Section>

    <Section label="Cluser privacy" description="Some description">
      <RadioGroup path="clusterPrivacy">
        <Radio id="cluster-public" label="Public" value="public" description="Some description" />
        <Radio id="cluster-private" label="Private" value="private" description="Some description" />
      </RadioGroup>
    </Section>

    <Section
      label="Virtual Private Cloud (VPC)"
      description="By default, a new VPC will be created for your cluster. Alternatively, you may opt to install an existing VPC below."
    >
      <Checkbox label="Install into an existing VPC" path="installIntoExistingVpc" helperText="test" />
    </Section>

    {/* <Section id="test-custom-input" label="Test Custom Input"> */}
    <input type="text" value="test" />
    {/* </Section> */}
  </>
);

export const NetworkingVpcSettings: React.FC = () => (
  <Hidden
    hidden={(data) => {
      console.log('data: ', data);
      return !data.installIntoExistingVpc;
    }}
  >
    <Step label="Networking: VPC settings" id="network-cidr-ranges">
      <Flex>
        <Select
          path="filterbyVpcId"
          label="Filter by VPC ID"
          options={[{ label: 'Select VPC ID', value: 'Select VPC ID' }]}
        />
        <Select
          path="filterbyAz"
          label="Filter by AZ"
          options={[{ label: 'All Availability zones', value: 'All Availability zones' }]}
        />
      </Flex>
    </Step>
  </Hidden>
);

export const NetworkingCidrRanges: React.FC = () => <></>;
