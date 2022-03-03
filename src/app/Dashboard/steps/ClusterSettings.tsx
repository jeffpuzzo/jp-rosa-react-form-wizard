import React from 'react';

import {
  RadioGroup,
  Section,
  KeyValue,
  TextInput,
  Select,
  Checkbox,
  NumberInput,
} from '@patternfly-labs/react-form-wizard';
import { Title, Flex } from '@patternfly/react-core';

import { CustomRadio } from '../CustomRadio';

export const ClusterSettingsDetails: React.FC = () => (
  <>
    <Title headingLevel="h3">Cluster Details</Title>

    <TextInput id="cluster-name" path="clusterName" label="Cluster name" required />

    <Select path="version" label="Version" options={[{ label: '1.4.9', value: '1.4.9' }]} required />

    <Select
      path="region"
      label="Region"
      options={[{ label: 'US East (N. Virginia)', value: 'US East (N. Virginia)' }]}
      required
    />

    <RadioGroup label="Availability" path="availability" required>
      <Flex>
        <div className="pf-u-mr-xl">
          <CustomRadio id="single-zone" label="Single zone" value="single" />
        </div>
        <CustomRadio id="multi-zone" label="Multi-zone" value="multiple" />
      </Flex>
    </RadioGroup>

    <Section label="Monitoring">
      <Checkbox label="Enable user workload monitoring" path="enable-monitoring" helperText="test" />
    </Section>

    <Section label="Encryption">
      <Checkbox
        label="Enable etcd storage encryption"
        path="encryptionEtcd"
        helperText="test"
        labelHelp="test"
        disabled
      />
      <Checkbox label="Enable additional etcd encryption" path="encryptionAddEtcd" helperText="test" labelHelp="test" />
      <Checkbox label="Enable EBS with customer keys" path="encryptionEnableEbs" helperText="test" labelHelp="test" />
    </Section>
  </>
);

export const ClusterSettingsMachinePool: React.FC = () => (
  <>
    <Section label="Default Machine Pool" id="default-machine-pool-section">
      <p>Select a compute node instance type for your default machine pool.</p>
      <p>Some more text</p>
      <Select
        path="computeNodeInstanceType"
        label="Compute node instance type"
        labelHelp="test"
        options={[{ label: 'm5 xlarge - 4 vCPU 16 GiB RAM', value: 'm5 xlarge - 4 vCPU 16 GiB RAM' }]}
        required
      />

      <Section label="Autoscaling" id="autoscaling-section">
        <Checkbox
          label="Enable autoscaling"
          path="enableAutoscaling"
          helperText="Autoscaling automatically adds and removes worker (compute) nodes from the clsuter based on resource requirements."
        />

        <Flex>
          <NumberInput label="Minimum nodes per zone" path="minNodesPerZone" required />
          <NumberInput label="Minimum nodes per zone" path="maxNodesPerZone" labelHelp="test" required />
        </Flex>
      </Section>
    </Section>

    <KeyValue id="labels" path="nodeLabels" label="Add node labels" />
  </>
);
