import * as yourExports from "./exercise.js";

import { test } from "./.test.js";
import * as specimin from "./.specimin.js";

test(window.location.search.includes('specimin') ? specimin : yourExports);


