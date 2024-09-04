/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      // {
      //   source: "/",
      //   destination: "/dashboard",
      //   permanent: true
      // }
    ]
  }
};

export default nextConfig;
