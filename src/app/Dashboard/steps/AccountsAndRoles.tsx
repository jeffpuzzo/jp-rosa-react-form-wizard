import React from 'react';

import { Section, Hidden, TextInput, Select } from '@patternfly-labs/react-form-wizard';
import { useValue } from '@patternfly-labs/react-form-wizard/lib/src/inputs/Input';
import {
  SelectOption,
  Popper,
  MenuToggle,
  Menu,
  MenuContent,
  Divider,
  Button,
  Spinner,
  Modal,
  ModalVariant,
  Wizard,
  Flex,
  FlexItem,
  ExpandableSection,
  FormGroup,
  Popover,
  Select as PfSelect,
} from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';

export const AccountsAndRoles: React.FC = () => (
  <>
    <Flex>
      <FlexItem flex={{ default: 'flex_1' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
          Welcome to Red Hat OpenShift Service on AWS (ROSA)
        </h1>
        <p>Create a managed OpenShift cluster on an existing Amazon Web Services (AWS) account.</p>
      </FlexItem>
      <FlexItem style={{ padding: '0 20px 20px 20px' }}>Logo</FlexItem>
    </Flex>

    <ExpandableSection toggleText="Prerequisites" style={{ marginBottom: '-22px' }}>
      <p className="pf-u-color-400">This content is visible only when the component is expanded.</p>
    </ExpandableSection>

    <Section
      label="AWS account"
      description="Use an AWS account that is linked to your account. Alternatively, create an AWS account and validate all prerequisites."
    >
      <FormGroup
        label="Associated AWS account"
        labelIcon={
          <Popover headerContent={<div>Help text</div>} bodyContent={<div>More text</div>}>
            <button
              type="button"
              aria-label="More info for name field"
              onClick={(e) => e.preventDefault()}
              aria-describedby="simple-form-name-01"
              className="pf-c-form__group-label-help"
            >
              <HelpIcon noVerticalAlign />
            </button>
          </Popover>
        }
        isRequired
        fieldId="simple-form-name-01"
      >
        <AwsAccountSelect path="account" />
        <div className="pf-u-display-none">
          <Select path="account" label="" options={[]} />
        </div>
      </FormGroup>
    </Section>

    <Hidden hidden={(data) => !data.account}>
      <Section
        label="Account roles ARNs"
        description="The following roles were detected according to the associated account. The ARNs can be edited according to your preferences."
      >
        <TextInput
          id="installer-role"
          path="installerRole"
          label="Installer role"
          placeholder="No role detected"
          disabled
          required
        />
        <TextInput id="support-role" path="supportRole" label="Support role" placeholder="No role detected" required />
        <TextInput id="worker-role" path="workerRole" label="Worker role" placeholder="No role detected" required />
        <TextInput
          id="control-plane-role"
          path="controlPlaneRole"
          label="Control plane role"
          placeholder="No role detected"
          required
        />
      </Section>
    </Hidden>
  </>
);

const CustomSelect: React.FC<{ path: string }> = (valueProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [, setValue] = useValue(valueProps, '');

  return (
    <PfSelect
      onToggle={(isExpanded) => setIsOpen(isExpanded)}
      isOpen={isOpen}
      onSelect={(_event, value) => {
        setValue(value);
        setIsOpen(false);
      }}
    >
      <SelectOption value="Select a value" isPlaceholder />
      <SelectOption value="Test 1" />
      <SelectOption value="Test 2" />
    </PfSelect>
  );
};

const AwsAccountSelect: React.FC<{ path: string }> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = React.useState(false);
  const [accountValue] = useValue(props, '');

  return (
    <>
      <Popper
        trigger={
          <MenuToggle
            onClick={() => setIsMenuOpen((prevIsOpen) => !prevIsOpen)}
            isExpanded={isMenuOpen}
            className="pf-u-w-75"
          >
            {accountValue || 'Select an account'}
          </MenuToggle>
        }
        popper={
          <Menu id="select-menu">
            <MenuContent>
              <div>
                {!accountValue && (
                  <>
                    <div className="pf-u-p-lg pf-u-text-align-center">
                      <p className="pf-u-mb-md">No associated AWS accounts found</p>
                      <p className="pf-u-color-400 pf-u-px-lg">Associate an AWS account with your Red Hat account.</p>
                    </div>

                    <Divider />
                  </>
                )}
                <div className="pf-u-p-md">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setIsAccountModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Associate AWS account
                  </Button>
                </div>
              </div>
            </MenuContent>
          </Menu>
        }
        isVisible={isMenuOpen}
      />
      <AwsAccountWizardModal isOpen={isAccountModalOpen} setIsOpen={setIsAccountModalOpen} />
    </>
  );
};

const AwsUserRoleStep: React.FC<{ setIsModalOpen(isOpen: boolean): void }> = ({ setIsModalOpen }) => {
  const accountSelectProps = { path: 'account' };
  const [accountValue] = useValue(accountSelectProps, '');

  // Some async action takes place prior to modal closing on the final step
  React.useEffect(() => {
    if (accountValue) {
      setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);
    }
  }, [accountValue, setIsModalOpen]);

  return accountValue ? (
    <div className="pf-u-text-align-center">
      <Spinner isSVG />
      <p>Some Loading page...</p>
    </div>
  ) : (
    <>
      User role sub-step content
      <div>
        <CustomSelect {...accountSelectProps} />
      </div>
    </>
  );
};

const AwsAccountWizardModal: React.FC<{ isOpen: boolean; setIsOpen(isOpen: boolean): void }> = ({
  isOpen,
  setIsOpen,
}) => {
  const steps = [
    { id: 'authenticate', name: 'Authenticate', component: <p>Authenticate Step content</p> },
    {
      id: 'associate-aws-account',
      name: 'Associate AWS account',
      steps: [
        {
          id: 'ocm-role',
          name: 'OCM role',
          component: <p>OCM role sub-step content</p>,
        },
        {
          id: 'user-role',
          name: 'User role',
          component: <AwsUserRoleStep setIsModalOpen={setIsOpen} />,
        },
      ],
      component: <p>Associate AWS account Step content</p>,
    },
  ];

  return (
    <Modal isOpen={isOpen} variant={ModalVariant.large} showClose={false} hasNoBodyWrapper>
      <Wizard
        title="Associate AWS account"
        description="Link your AWS account to your Red Hat account"
        steps={steps}
        height={400}
        onClose={() => setIsOpen(false)}
      />
    </Modal>
  );
};
