import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  // experimental: {
  // mdxRs: true,
  // },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

export default withMDX(nextConfig);
