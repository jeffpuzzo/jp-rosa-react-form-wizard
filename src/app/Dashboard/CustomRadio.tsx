import React from 'react';

import { Flex, Popover, RadioProps } from '@patternfly/react-core';
import { Radio } from '@patternfly-labs/react-form-wizard';
import { HelpIcon } from '@patternfly/react-icons';

export const CustomRadio: React.FC<Omit<RadioProps, 'name'>> = ({ id, label, value }) => (
  <Flex alignItems={{ default: 'alignItemsCenter' }}>
    <div className="pf-u-mr-sm">
      <Radio id={id} label={String(label)} value={String(value)} />
    </div>

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
  </Flex>
);
