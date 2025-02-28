import {
  MozillaSubscription,
  PaypalPaymentError,
  SubscriptionEligibilityResult,
} from 'fxa-shared/subscriptions/types';
import { Stripe } from 'stripe';
import { PaymentProvider } from '../lib/PaymentProvider';

export type {
  PlanInterval,
  RawMetadata,
  Plan,
  PlanMetadata,
  ProductMetadata,
  ProductDetailsStringProperties,
  ProductDetailsListProperties,
  ProductDetailsStringProperty,
  ProductDetailsListProperty,
  ProductDetails,
  SubscriptionEligibilityResult,
} from 'fxa-shared/subscriptions/types';

export type FetchStateUninitialized = {
  error: null;
  loading: false;
  result: null;
};
export type FetchStateLoading = { error: null; loading: true; result: null };
export type FetchStateError<E> = { error: E; loading: false; result: null };
export type FetchStateLoaded<T> = { error: null; loading: false; result: T };
export type FetchState<T, E = any> =
  | FetchStateUninitialized
  | FetchStateLoading
  | FetchStateError<E>
  | FetchStateLoaded<T>;

export interface Profile {
  amrValues: Array<string>;
  avatar: string;
  avatarDefault: boolean;
  metricsEnabled: boolean;
  displayName: string | null;
  email: string;
  locale: string;
  twoFactorAuthentication: boolean;
  uid: string;
}

export interface Token {
  active: boolean;
  scope: string;
  client_id: string;
  token_type: string;
  exp: number;
  iat: number;
  sub: string;
  jti: string;
}

export interface Subscription {
  subscriptionId: string;
  productId: string;
  createdAt: number;
  cancelledAt: number | null;
}

export interface CustomerSubscription {
  cancel_at_period_end: boolean;
  current_period_end: number;
  current_period_start: number;
  end_at: number | null;
  latest_invoice: string;
  plan_id: string;
  product_id: string;
  product_name: string;
  status: string;
  subscription_id: string;
}

export type Customer = {
  customerId?: string;
  billing_name?: string | null;
  billing_agreement_id?: string | null;
  // https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card-brand
  brand?: Stripe.Charge.PaymentMethodDetails.Card['brand'];
  exp_month?: string;
  exp_year?: string;
  last4?: string;
  payment_provider?: PaymentProvider;
  payment_type?: string;
  paypal_payment_error?: PaypalPaymentError;
  subscriptions: Array<MozillaSubscription>;
};

export type PlanEligibility = {
  eligibility: SubscriptionEligibilityResult;
};

export interface CreateSubscriptionResult {
  subscriptionId: string;
}
export type CreateSubscriptionError = {
  code: string;
  message: string;
  error?: string;
  errno?: number;
  info?: string;
  statusCode?: number;
};

export interface UpdateSubscriptionPlanResult {
  subscriptionId: string;
}

export interface CancelSubscriptionResult {
  subscriptionId: string;
}
