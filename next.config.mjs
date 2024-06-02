import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/apis/:path*',
        destination: 'http://localhost:8080/api/:path*',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
