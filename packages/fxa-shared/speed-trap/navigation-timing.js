/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {NAVIGATION_TIMING_FIELDS, OPTIONAL_NAVIGATION_TIMING_FIELDS} from './timing-fields';

// eslint-disable-next-line
const startDateNow = Date.now();
// eslint-disable-next-line
const startPerfNow = window.performance.now() + window.performance.timeOrigin;


class NavigationTiming {
  init(opts) {

    // A performance api must be provided
    if (!opts || !opts.performance) {
      throw new Error('opts.performance is required!')
    }
    this.performance = opts.performance;
  }

  get() {
    return this.performance.timing;
  }

  diff() {

    // If we are using our fallback performance api (ie window.performance
    // doesn't  exist), don't return anything.
    if (this.performance.unreliable === true) {
      return undefined;
    }

    // Make navigation timings relative to navigation start.
    const diff = {};
    for (const key in NAVIGATION_TIMING_FIELDS) {
      const timing = this.performance.timing[key];

      // Compute the delta relative to navigation start. This removes any
      // ambiguity around what the 'start' or 'baseTime' time is. Since we
      // are sure the current set of navigation timings were created using
      // the same kind of clock, this seems like the safest way to do this.
      const delta = timing - this.performance.timing.navigationStart;

      if (timing === 0 && OPTIONAL_NAVIGATION_TIMING_FIELDS.indexOf(key) >= 0) {
        // A time value of 0 for certain fields indicates a non-applicable value. Set to null.
        diff[key] = null;
      }
      else if (delta < 0) {
        // We shouldn't see any negative values. If we do something went very wrong.
        // We will set use -11111 as a magic number to ensure a sentry error is captured,
        // and it's easy to spot
        diff[key] = -11111;
      }
      else {
        // The expected 'happy path'
        diff[key] = delta;
      }
    }
    return diff;
  }
}

export default new NavigationTiming();
