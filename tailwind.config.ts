import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F7F9F5',
          100: '#EFF3EB',
          200: '#DDE7D7',
          300: '#C3D4B8',
          400: '#A8C199',
          500: '#9CAF88',
          600: '#8A9D76',
          700: '#7A8F6A',
          800: '#5A6B4F',
          900: '#4A6741',
        },
        cream: {
          50: '#FEFEFC',
          100: '#FDFDF9',
          200: '#FAFAF2',
          300: '#F5F5DC',
          400: '#F0F0C7',
          500: '#E8E8B8',
        },
        peach: {
          50: '#FEFCF9',
          100: '#FDF9F2',
          200: '#F9F0E1',
          300: '#F4D1AE',
          400: '#EEC08F',
          500: '#E8B070',
        },
        nature: {
          green: '#4A6741',
          brown: '#8B7355',
          beige: '#E8DCC4',
          warm: '#FEFEFE',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'nature-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239CAF88\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
