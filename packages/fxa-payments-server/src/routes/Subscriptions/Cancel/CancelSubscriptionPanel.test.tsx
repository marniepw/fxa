/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';
import { screen, render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import waitForExpect from 'wait-for-expect';
import * as Amplitude from '../../../lib/amplitude';
import CancelSubscriptionPanel, {
  CancelSubscriptionPanelProps,
} from './CancelSubscriptionPanel';

import {
  MOCK_PLANS,
  MOCK_CUSTOMER,
  MOCK_SUBSEQUENT_INVOICES,
  MOCK_PREVIEW_INVOICE_NO_TAX,
  MOCK_PREVIEW_INVOICE_WITH_TAX_EXCLUSIVE,
  MOCK_PREVIEW_INVOICE_WITH_TAX_INCLUSIVE,
  MOCK_PREVIEW_INVOICE_WITH_TAX_INCLUSIVE_DISCOUNT,
  MOCK_PREVIEW_INVOICE_WITH_TAX_EXCLUSIVE_DISCOUNT,
} from '../../../lib/test-utils';
import { Plan } from 'fxa-payments-server/src/store/types';
import {
  formatPlanPricing,
  formatPriceAmount,
  getLocalizedDateString,
} from 'fxa-payments-server/src/lib/formats';
import { defaultState } from 'fxa-payments-server/src/store/state';
import { FluentBundle, FluentResource } from '@fluent/bundle';
import { LocalizationProvider, ReactLocalization } from '@fluent/react';
import { updateConfig } from '../../../lib/config';
import AppContext, { defaultAppContext } from '../../../lib/AppContext';
import { WebSubscription } from 'fxa-shared/subscriptions/types';
jest.mock('../../../lib/amplitude');

const { queryByTestId, queryByText, queryAllByText, getByTestId } = screen;

const findMockPlan = (planId: string): Plan => {
  const plan = MOCK_PLANS.find((x) => x.plan_id === planId);
  if (plan) {
    return plan;
  }
  throw new Error('unable to find suitable Plan object for test execution.');
};

describe('CancelSubscriptionPanel', () => {
  const subscription = MOCK_CUSTOMER.subscriptions[0] as WebSubscription;
  const baseProps = {
    customerSubscription: subscription,
    cancelSubscription: jest.fn().mockResolvedValue(null),
    cancelSubscriptionStatus: defaultState.cancelSubscription,
    subsequentInvoice: MOCK_SUBSEQUENT_INVOICES[0],
    invoicePreview: MOCK_PREVIEW_INVOICE_NO_TAX,
    promotionCode: undefined,
    paymentProvider: undefined,
  };

  afterEach(() => {
    baseProps.cancelSubscription.mockClear();
  });

  describe('renders', () => {
    for (const [k, v] of Object.entries({
      day: 'daily',
      week: 'weekly',
      month: 'monthly',
      year: 'yearly',
    })) {
      describe(`when plan has ${k} interval`, () => {
        const runTests = (props: CancelSubscriptionPanelProps) => {
          render(<CancelSubscriptionPanel {...props} />);

          const planPrice = formatPlanPricing(
            props.invoicePreview.total,
            props.plan.currency,
            props.plan.interval,
            props.plan.interval_count
          );
          const nextBillDate = getLocalizedDateString(
            props.subsequentInvoice.period_start,
            true
          );

          const nextBillAmount = formatPriceAmount(
            props.subsequentInvoice.total,
            props.plan.currency,
            false,
            0
          );
          const nextBill = `Your next bill of ${nextBillAmount} is due ${nextBillDate}`;

          expect(queryByTestId('price-details')).toBeInTheDocument();
          expect(queryByText(planPrice)).toBeInTheDocument();
          expect(queryByTestId('sub-next-bill')).toHaveTextContent(nextBill);
          expect(
            queryByTestId('reveal-cancel-subscription-button')
          ).toBeInTheDocument();
        };

        it('handles an interval count of 1', () => {
          const plan_id = `plan_${v}`;
          const plan = findMockPlan(plan_id);
          runTests({ plan, ...baseProps });
        });

        it('handles an interval count that is not 1', () => {
          const plan_id = `plan_6${k}s`;
          const plan = findMockPlan(plan_id);
          runTests({ plan, ...baseProps });
        });
      });
    }

    describe('upgrade CTA', () => {
      afterEach(() => {
        updateConfig({
          featureFlags: {
            useFirestoreProductConfigs: false,
          },
        });
      });

      it('should not be displayed when upgradeCTA is not in the plan', () => {
        const plan = findMockPlan('plan_daily');
        render(<CancelSubscriptionPanel {...baseProps} plan={plan} />);
        expect(queryByTestId('upgrade-cta')).not.toBeInTheDocument();
      });

      it('should be displayed when upgradeCTA is in the plan', () => {
        const plan = findMockPlan('plan_daily');
        const upgradeablePlan = {
          ...plan,
          plan_metadata: {
            upgradeCTA: 'Upgrade to the ultra super premium plus plan!',
          },
        };
        render(
          <CancelSubscriptionPanel {...baseProps} plan={upgradeablePlan} />
        );
        expect(queryByTestId('upgrade-cta')).toBeInTheDocument();
        expect(
          queryByText(upgradeablePlan.plan_metadata.upgradeCTA)
        ).toBeInTheDocument();
      });

      it('should be displayed when upgradeCTA is in the plan configuration', () => {
        updateConfig({
          featureFlags: {
            useFirestoreProductConfigs: true,
          },
        });
        const plan = findMockPlan('plan_daily');
        const upgradeablePlan = {
          ...plan,
          configuration: {
            uiContent: {
              upgradeCTA: 'Upgrade to config store premium plus plan!',
            },
          },
        };
        render(
          <CancelSubscriptionPanel {...baseProps} plan={upgradeablePlan} />
        );
        expect(queryByTestId('upgrade-cta')).toBeInTheDocument();
        expect(
          queryByText(upgradeablePlan.configuration.uiContent.upgradeCTA)
        ).toBeInTheDocument();
      });

      it('should be displayed when upgradeCTA is in the plan configuration locale', () => {
        updateConfig({
          featureFlags: {
            useFirestoreProductConfigs: true,
          },
        });
        const plan = findMockPlan('plan_daily');
        const upgradeablePlan = {
          ...plan,
          configuration: {
            uiContent: {
              upgradeCTA: 'Upgrade to config store premium plus plan!',
            },
            locales: {
              fr: {
                uiContent: {
                  upgradeCTA:
                    'Upgrade to french config store premium plus plan!',
                },
              },
            },
          },
        };
        render(
          <AppContext.Provider
            value={{ ...defaultAppContext, navigatorLanguages: ['fr'] }}
          >
            <CancelSubscriptionPanel {...baseProps} plan={upgradeablePlan} />
          </AppContext.Provider>
        );
        expect(queryByTestId('upgrade-cta')).toBeInTheDocument();
        expect(
          queryByText(
            upgradeablePlan.configuration.locales.fr.uiContent.upgradeCTA
          )
        ).toBeInTheDocument();
      });
    });

    describe('with l10n', () => {
      it('displays the correct pricing info with interval of 1', () => {
        const bundle = new FluentBundle('gd', { useIsolating: false });
        [
          `price-details-no-tax-day = { $intervalCount ->
            [one] { $priceAmount } fooly
            *[other] { $priceAmount } barly { $intervalCount } 24hrs
          }`,
          'sub-next-bill-no-tax = quuz { $date }',
          'payment-cancel-btn = blee',
        ].forEach((x) => bundle.addResource(new FluentResource(x)));
        const plan = findMockPlan('plan_daily');
        render(
          <LocalizationProvider l10n={new ReactLocalization([bundle])}>
            <CancelSubscriptionPanel
              {...baseProps}
              plan={plan}
              subsequentInvoice={{
                ...MOCK_SUBSEQUENT_INVOICES[0],
                period_start: 1568408388.815,
              }}
            />
          </LocalizationProvider>
        );
        expect(queryByText('$20.00 fooly')).toBeInTheDocument();
        expect(queryByText('quuz 09/13/2019')).toBeInTheDocument();
        expect(queryByText('blee')).toBeInTheDocument();
      });

      it('displays the correct pricing info with interval > 1', () => {
        const bundle = new FluentBundle('gd', { useIsolating: false });
        [
          `price-details-no-tax-day = { $intervalCount ->
            [one] { $priceAmount } fooly
            *[other] { $priceAmount } barly { $intervalCount } 24hrs
          }`,
        ].forEach((x) => bundle.addResource(new FluentResource(x)));
        const plan = { ...findMockPlan('plan_daily'), interval_count: 8 };

        render(
          <LocalizationProvider l10n={new ReactLocalization([bundle])}>
            <CancelSubscriptionPanel {...baseProps} plan={plan} />
          </LocalizationProvider>
        );
        expect(queryByText('$20.00 barly 8 24hrs')).toBeInTheDocument();
      });

      it('displays the correct pricing and exclusive tax info with interval of 1', () => {
        const bundle = new FluentBundle('gd', { useIsolating: false });
        [
          `price-details-tax-day = { $intervalCount ->
            [one] { $priceAmount } + { $taxAmount } tax fooly
            *[other] { $priceAmount } + { $taxAmount } tax barly { $intervalCount } 24hrs
          }`,
          'payment-cancel-btn = blee',
          `price-details-tax = { $priceAmount } + { $taxAmount } taxes`,
          `sub-next-bill-tax = Your next bill of { $priceAmount } + { $taxAmount } taxes is due due <strong>{ $date }</strong>`,
        ].forEach((x) => bundle.addResource(new FluentResource(x)));
        const plan = findMockPlan('plan_daily');
        render(
          <LocalizationProvider l10n={new ReactLocalization([bundle])}>
            <CancelSubscriptionPanel
              {...baseProps}
              plan={plan}
              subsequentInvoice={{
                ...MOCK_SUBSEQUENT_INVOICES[2],
                period_start: 1568408388.815,
              }}
              invoicePreview={MOCK_PREVIEW_INVOICE_WITH_TAX_EXCLUSIVE}
            />
          </LocalizationProvider>
        );
        expect(queryByTestId('price-details-standalone')).toHaveTextContent(
          '$20.00 + $3.00 tax fooly'
        );
        expect(queryByTestId('sub-next-bill')).toHaveTextContent(
          'Your next bill of $5.00 + $1.23 taxes is due due 09/13/2019'
        );
        expect(queryByText('blee')).toBeInTheDocument();
      });

      it('displays the correct pricing and exclusive tax info with interval > 1', () => {
        const bundle = new FluentBundle('gd', { useIsolating: false });
        [
          `price-details-tax-day = { $intervalCount ->
            [one] { $priceAmount } + { $taxAmount } tax fooly
            *[other] { $priceAmount } + { $taxAmount } tax barly { $intervalCount } 24hrs
          }`,
          `price-details-tax = { $priceAmount } + { $taxAmount } taxes`,
          `sub-next-bill-tax = Your next bill of { $priceAmount } + { $taxAmount } taxes is due due <strong>{ $date }</strong>`,
        ].forEach((x) => bundle.addResource(new FluentResource(x)));
        const plan = { ...findMockPlan('plan_daily'), interval_count: 8 };

        render(
          <LocalizationProvider l10n={new ReactLocalization([bundle])}>
            <CancelSubscriptionPanel
              {...baseProps}
              plan={plan}
              subsequentInvoice={MOCK_SUBSEQUENT_INVOICES[2]}
              invoicePreview={MOCK_PREVIEW_INVOICE_WITH_TAX_EXCLUSIVE}
            />
          </LocalizationProvider>
        );
        expect(queryByTestId('price-details-standalone')).toHaveTextContent(
          '$20.00 + $3.00 tax barly 8 24hrs'
        );
        expect(queryByTestId('sub-next-bill')).toHaveTextContent(
          'Your next bill of $5.00 + $1.23 taxes is due due 08/14/2019'
        );
      });

      it('displays the correct pricing and exclusive tax with discount info with interval > 1', () => {
        const bundle = new FluentBundle('gd', { useIsolating: false });
        [
          `price-details-tax-day = { $intervalCount ->
            [one] { $priceAmount } + { $taxAmount } tax fooly
            *[other] { $priceAmount } + { $taxAmount } tax barly { $intervalCount } 24hrs
          }`,
          `sub-next-bill-tax = Your next bill of { $priceAmount } + { $taxAmount } taxes is due due <strong>{ $date }</strong>`,
        ].forEach((x) => bundle.addResource(new FluentResource(x)));
        const plan = { ...findMockPlan('plan_daily'), interval_count: 8 };

        render(
          <LocalizationProvider l10n={new ReactLocalization([bundle])}>
            <CancelSubscriptionPanel
              {...baseProps}
              plan={plan}
              subsequentInvoice={MOCK_SUBSEQUENT_INVOICES[4]}
              invoicePreview={MOCK_PREVIEW_INVOICE_WITH_TAX_EXCLUSIVE_DISCOUNT}
            />
          </LocalizationProvider>
        );
        expect(queryByTestId('price-details-standalone')).toHaveTextContent(
          '$19.50 + $3.00 tax barly 8 24hrs'
        );
        expect(queryByTestId('sub-next-bill')).toHaveTextContent(
          'Your next bill of $4.50 + $1.23 taxes is due due 08/14/2019'
        );
      });

      it('displays the correct pricing and inclusive tax info with interval of 1', () => {
        const bundle = new FluentBundle('gd', { useIsolating: false });
        [
          `price-details-no-tax-day = { $intervalCount ->
            [one] { $priceAmount } fooly
            *[other] { $priceAmount } barly { $intervalCount } 24hrs
          }`,
          'payment-cancel-btn = blee',
          `sub-next-bill-no-tax = Your next bill of { $priceAmount } prices is due due <strong>{ $date }</strong>`,
        ].forEach((x) => bundle.addResource(new FluentResource(x)));
        const plan = findMockPlan('plan_daily');
        render(
          <LocalizationProvider l10n={new ReactLocalization([bundle])}>
            <CancelSubscriptionPanel
              {...baseProps}
              plan={plan}
              subsequentInvoice={{
                ...MOCK_SUBSEQUENT_INVOICES[3],
                period_start: 1568408388.815,
              }}
              invoicePreview={MOCK_PREVIEW_INVOICE_WITH_TAX_INCLUSIVE}
            />
          </LocalizationProvider>
        );
        expect(queryByTestId('price-details-standalone')).toHaveTextContent(
          '$20.00 fooly'
        );
        expect(queryByTestId('sub-next-bill')).toHaveTextContent(
          'Your next bill of $5.00 prices is due due 09/13/2019'
        );
        expect(queryByText('blee')).toBeInTheDocument();
      });

      it('displays the correct pricing and inclusive tax info with interval > 1', () => {
        const bundle = new FluentBundle('gd', { useIsolating: false });
        [
          `price-details-no-tax-day = { $intervalCount ->
            [one] { $priceAmount } fooly
            *[other] { $priceAmount } barly { $intervalCount } 24hrs
          }`,
          `sub-next-bill-no-tax = Your next bill of { $priceAmount } prices is due due <strong>{ $date }</strong>`,
        ].forEach((x) => bundle.addResource(new FluentResource(x)));
        const plan = { ...findMockPlan('plan_daily'), interval_count: 8 };

        render(
          <LocalizationProvider l10n={new ReactLocalization([bundle])}>
            <CancelSubscriptionPanel
              {...baseProps}
              plan={plan}
              subsequentInvoice={MOCK_SUBSEQUENT_INVOICES[3]}
              invoicePreview={MOCK_PREVIEW_INVOICE_WITH_TAX_INCLUSIVE}
            />
          </LocalizationProvider>
        );
        expect(queryByTestId('price-details-standalone')).toHaveTextContent(
          '$20.00 barly 8 24hrs'
        );
        expect(queryByTestId('sub-next-bill')).toHaveTextContent(
          'Your next bill of $5.00 prices is due due 08/14/2019'
        );
      });

      it('displays the correct pricing and inclusive tax with discount info with interval > 1', () => {
        const bundle = new FluentBundle('gd', { useIsolating: false });
        [
          `price-details-no-tax-day = { $intervalCount ->
            [one] { $priceAmount } fooly
            *[other] { $priceAmount } barly { $intervalCount } 24hrs
          }`,
          `sub-next-bill-no-tax = Your next bill of { $priceAmount } prices is due due <strong>{ $date }</strong>`,
        ].forEach((x) => bundle.addResource(new FluentResource(x)));
        const plan = { ...findMockPlan('plan_daily'), interval_count: 8 };

        render(
          <LocalizationProvider l10n={new ReactLocalization([bundle])}>
            <CancelSubscriptionPanel
              {...baseProps}
              plan={plan}
              subsequentInvoice={MOCK_SUBSEQUENT_INVOICES[5]}
              invoicePreview={MOCK_PREVIEW_INVOICE_WITH_TAX_INCLUSIVE_DISCOUNT}
            />
          </LocalizationProvider>
        );
        expect(queryByTestId('price-details-standalone')).toHaveTextContent(
          '$19.50 barly 8 24hrs'
        );
        expect(queryByTestId('sub-next-bill')).toHaveTextContent(
          'Your next bill of $4.50 prices is due due 08/14/2019'
        );
      });

      it('displays the correct cancellation info', () => {
        const bundle = new FluentBundle('gd', { useIsolating: false });
        [
          'sub-item-cancel-sub = no more',
          `sub-item-cancel-msg =
            Fromage pecorino blue castello { $name } after { $period }, sorry dude.`,
          `sub-item-cancel-confirm =
            Stilton when everybody's { $name } on { $period }.`,
          'sub-item-stay-sub = haha never mind',
        ].forEach((x) => bundle.addResource(new FluentResource(x)));
        const plan = findMockPlan('plan_daily');
        render(
          <LocalizationProvider l10n={new ReactLocalization([bundle])}>
            <CancelSubscriptionPanel {...baseProps} plan={plan} />
          </LocalizationProvider>
        );
        fireEvent.click(getByTestId('reveal-cancel-subscription-button'));
        expect(queryAllByText('no more').length).toBe(2);
        expect(
          queryByText(
            'Fromage pecorino blue castello FPN after 13mh dhen t-Sultain 2019, sorry dude.'
          )
        ).toBeInTheDocument();
        expect(
          queryByText(
            "Stilton when everybody's FPN on 13mh dhen t-Sultain 2019."
          )
        ).toBeInTheDocument();
        expect(queryByText('haha never mind')).toBeInTheDocument();
      });
    });
  });

  describe('event handling', () => {
    beforeEach(() => {
      const plan = findMockPlan('plan_daily');
      render(<CancelSubscriptionPanel {...baseProps} plan={plan} />);
    });

    it('closes the cancellation confirmation on Stay Subscribed', () => {
      fireEvent.click(getByTestId('reveal-cancel-subscription-button'));
      expect(getByTestId('stay-subscribed-button')).toBeVisible();
      fireEvent.click(getByTestId('stay-subscribed-button'));
      expect(getByTestId('reveal-cancel-subscription-button')).toBeVisible();
    });

    it('enables Cancel Subscription button and confirms cancellation on click', async () => {
      fireEvent.click(getByTestId('reveal-cancel-subscription-button'));
      fireEvent.click(getByTestId('confirm-cancel-subscription-checkbox'));
      expect(getByTestId('cancel-subscription-button')).toBeVisible();
      expect(getByTestId('cancel-subscription-button')).toBeEnabled();
      await act(async () => {
        fireEvent.click(getByTestId('cancel-subscription-button'));
      });
      await waitForExpect(() => {
        expect(baseProps.cancelSubscription).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Amplitude', () => {
    it('logs metric events', async () => {
      (Amplitude.cancelSubscriptionMounted as jest.Mock).mockClear();
      (Amplitude.cancelSubscriptionEngaged as jest.Mock).mockClear();
      const plan = findMockPlan('plan_daily');
      render(
        <CancelSubscriptionPanel
          {...baseProps}
          plan={plan}
          paymentProvider="stripe"
          promotionCode="gogogo"
        />
      );
      fireEvent.click(getByTestId('reveal-cancel-subscription-button'));
      expect(Amplitude.cancelSubscriptionMounted).toHaveBeenCalledWith({
        ...plan,
        promotionCode: 'gogogo',
      });
      fireEvent.click(getByTestId('confirm-cancel-subscription-checkbox'));
      expect(Amplitude.cancelSubscriptionEngaged).toHaveBeenCalledWith({
        ...plan,
        promotionCode: 'gogogo',
      });
    });
  });
});
