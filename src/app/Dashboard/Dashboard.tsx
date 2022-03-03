import React from 'react';

import { Step, WizardPage } from '@patternfly-labs/react-form-wizard';

import { ClusterUpdates } from './steps/CluserUpdates';
import { AccountsAndRoles } from './steps/AccountsAndRoles';
import { ClusterSettingsDetails, ClusterSettingsMachinePool } from './steps/ClusterSettings';
import { NetworkingCidrRanges, NetworkingConfig, NetworkingVpcSettings } from './steps/Networking';
import { ClusterRolesAndPolicies } from './steps/ClusterRolesAndPolicies';

const Dashboard: React.FC = () => {
  return (
    <WizardPage
      title="Create ROSA cluster"
      defaultData={{ installerRole: 'test', encryptionEtcd: true }} // , enableAutoscaling: true }}
      onSubmit={async () => console.log('SUBMITTED')}
      onCancel={() => console.log('CANCELLED')}
      yaml={false}
      breadcrumb={[
        { label: 'Clusters', to: '#clusters' },
        { label: 'Create', to: '#create-clusters' },
        { label: 'OpenShift ROSA Cluster' },
      ]}
    >
      <Step label="Account and roles" id="account">
        <AccountsAndRoles />
      </Step>
      <Step label="Cluster settings: Details" id="cluster-details">
        <ClusterSettingsDetails />
      </Step>
      <Step label="Cluster settings: Machine pool" id="cluster-machine-pool">
        <ClusterSettingsMachinePool />
      </Step>
      <Step label="Networking: configuration" id="network-config">
        <NetworkingConfig />
      </Step>
      <Step label="Networking: VPC settings" id="network-cidr-ranges">
        <NetworkingVpcSettings />
      </Step>
      <Step label="Networking: CIDR ranges" id="network-cidr-ranges">
        <NetworkingCidrRanges />
      </Step>
      <Step label="Cluster updates" id="cluster-updates">
        <ClusterUpdates />
      </Step>
      <Step label="Cluster roles and policies" id="cluster-roles-and-policies">
        <ClusterRolesAndPolicies />
      </Step>
    </WizardPage>
  );
};

export { Dashboard };
