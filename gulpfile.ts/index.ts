// All tasks
export { devbuild } from './dev-build';
export { prodbuild } from './prod-build';
export { devbuild_for_cordova } from './dev-build-for-cordova';
export { cordova_clean } from './cordova-clean';

// Default task
import { devbuild } from './dev-build';
export default devbuild;
