import { UserConfigExport } from "vitest/config";
import config from "./vite.config";

const rtn: UserConfigExport = {
  ...config,
  test: {
    include: [
      "./tests/**/*.ts",
    ],
  }
};

export default rtn;
