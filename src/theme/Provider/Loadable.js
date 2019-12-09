/**
 * Asynchronously loads the component for WelcomePage
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
