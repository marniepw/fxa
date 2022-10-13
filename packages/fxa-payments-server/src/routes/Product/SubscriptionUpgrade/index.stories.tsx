import React from 'react';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Meta } from '@storybook/react';

import MockApp from '../../../../.storybook/components/MockApp';
import { SignInLayout } from '../../../components/AppLayout';
import { SubscriptionUpgrade, SubscriptionUpgradeProps } from './index';
import { WebSubscription } from 'fxa-shared/subscriptions/types';

import { APIError } from '../../../lib/apiClient';
import { defaultAppContext, AppContextType } from '../../../lib/AppContext';
import {
  CUSTOMER,
  SELECTED_PLAN,
  UPGRADE_FROM_PLAN,
  PROFILE,
} from '../../../lib/mock-data';

export default {
  title: 'routes/Product/SubscriptionUpgrade',
  component: SubscriptionUpgrade,
} as Meta;

const linkToUpgradeSuccess = linkTo('routes/Product', 'success');

const linkToUpgradeOffer = linkTo(
  'routes/Product/SubscriptionUpgrade',
  'upgrade offer'
);

const MOCK_PROPS: SubscriptionUpgradeProps = {
  isMobile: false,
  profile: PROFILE,
  customer: CUSTOMER,
  selectedPlan: SELECTED_PLAN,
  upgradeFromPlan: UPGRADE_FROM_PLAN,
  upgradeFromSubscription: CUSTOMER.subscriptions[0] as WebSubscription,
  updateSubscriptionPlanStatus: {
    error: null,
    loading: false,
    result: null,
  },
  updateSubscriptionPlanAndRefresh: action('updateSubscriptionPlanAndRefresh'),
  resetUpdateSubscriptionPlan: action('resetUpdateSubscriptionPlan'),
};

const storyWithContext = ({
  props = MOCK_PROPS,
  appContextValue = defaultAppContext,
}: {
  props?: SubscriptionUpgradeProps;
  appContextValue?: AppContextType;
}) => {
  const story = () => (
    <MockApp appContextValue={appContextValue}>
      <SignInLayout>
        <SubscriptionUpgrade {...props} />
      </SignInLayout>
    </MockApp>
  );

  return story;
};

export const Default = storyWithContext({
  props: {
    ...MOCK_PROPS,
    updateSubscriptionPlanAndRefresh: () => linkToUpgradeSuccess(),
  },
});

export const LocalizedToPirate = storyWithContext({
  props: {
    ...MOCK_PROPS,
    updateSubscriptionPlanAndRefresh: () => linkToUpgradeSuccess(),
  },
  appContextValue: {
    ...defaultAppContext,
    navigatorLanguages: ['xx-pirate'],
  },
});

export const Submitting = storyWithContext({
  props: {
    ...MOCK_PROPS,
    updateSubscriptionPlanStatus: {
      loading: true,
      result: null,
      error: null,
    },
  },
});

export const InternalServerError = storyWithContext({
  props: {
    ...MOCK_PROPS,
    updateSubscriptionPlanStatus: {
      loading: false,
      result: null,
      error: new APIError({
        statusCode: 500,
        message: 'Internal Server Error',
      }),
    },
    resetUpdateSubscriptionPlan: linkToUpgradeOffer,
  },
});
