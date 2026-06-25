// This file is required by karma.conf.js and sets up the Angular test environment.
//
// Under Angular 17's @angular-devkit/build-angular:karma builder, all *.spec.ts
// files are discovered automatically via tsconfig.spec.json's `include` glob, so
// the legacy `require.context('./', ...)` loader is no longer needed (and in fact
// throws `__webpack_require__(...).context is not a function` with the current
// builder). This file now only initializes the testing environment.

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(), {
    teardown: { destroyAfterEach: false }
}
);
