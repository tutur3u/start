import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@tuturuuu/ai",
    "@tuturuuu/apis",
    "@tuturuuu/google",
    "@tuturuuu/hooks",
    "@tuturuuu/icons",
    "@tuturuuu/internal-api",
    "@tuturuuu/supabase",
    "@tuturuuu/types",
    "@tuturuuu/ui",
    "@tuturuuu/utils",
  ],
};

export default nextConfig;
