/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { usePageViewEvent } from '../../lib/metrics';
import { ReactComponent as EmailBounced } from './graphic_email_bounced.svg';
import { FtlMsg } from 'fxa-react/lib/utils';
import { useFtlMsgResolver } from '../../models';

type SigninBouncedProps = {
  canGoBack?: boolean;
  email: string;
};

const SigninBounced = ({
  canGoBack,
  email,
}: SigninBouncedProps & RouteComponentProps) => {
  usePageViewEvent('signin-blocked', {
    entrypoint_variation: 'react',
  });

  const ftlMsgResolver = useFtlMsgResolver();

  const emailBouncedAltText = ftlMsgResolver.getMsg(
    'email-bounced-description',
    'An orange envelope with a lock printed on the flap is shown bouncing across pale gray clouds'
  );

  // createAccount action: clear all existing accounts, clear the session,
  // clear the form prefill, and navigate to signup.

  // form the escaped support link attributes.

  return (
    <>
      <div className="mb-4">
        <h1 className="card-header">
          <FtlMsg id="signin-bounced-header">
            Sorry. We’ve locked your&nbsp;account.
          </FtlMsg>
        </h1>
      </div>
      <section>
        <div className="flex justify-center mx-auto">
          <EmailBounced
            className="w-3/5"
            role="img"
            aria-label={emailBouncedAltText}
          />
        </div>
        <FtlMsg id="signin-bounced-message" vars={{ email }}>
          <p className="text-sm mb-6">
            The confirmation email we sent to {email} was returned and we’ve
            locked your account to protect your Firefox data.
          </p>
        </FtlMsg>

        <p className="text-sm mb-6 faint">
          <FtlMsg id="signin-bounced-help">
            If this is a valid email address, let us know and we can help unlock
            your account.
          </FtlMsg>
        </p>

        <div className="flex flex-col link-blue text-sm">
          <a
            id="create-account"
            className="mb-6 delayed-fadein"
            href="#"
            data-flow-event="link.create-account"
          >
            <FtlMsg id="signin-bounced-create-new-account">
              No longer own that email? Create a new account
            </FtlMsg>
          </a>
          {canGoBack && (
            <a
              id="back"
              className="delayed-fadein"
              href="#"
              data-flow-event="link.back"
            >
              <FtlMsg id="back">Back</FtlMsg>
            </a>
          )}
        </div>
      </section>
    </>
  );
};

export default SigninBounced;
