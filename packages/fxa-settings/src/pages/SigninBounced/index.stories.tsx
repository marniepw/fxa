/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';
import SigninBounced from '.';
import AppLayout from '../../components/AppLayout';
import { LocationProvider } from '@reach/router';
import { Meta } from '@storybook/react';

export default {
  title: 'pages/SigninBounced',
  component: SigninBounced,
} as Meta;

export const Default = () => (
  <LocationProvider>
    <AppLayout>
      <SigninBounced email="example@domain.com" />
    </AppLayout>
  </LocationProvider>
);

export const CanGoBack = () => (
  <LocationProvider>
    <AppLayout>
      <SigninBounced email="example@domain.com" canGoBack={true} />
    </AppLayout>
  </LocationProvider>
);
