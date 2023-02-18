<p align="center"><img src="/assets/login.png" alt="Login Page"></p>

<p align="center">
    <a href="https://packagist.org/packages/nadaft/laraspa">
        <img src="https://img.shields.io/packagist/dt/nadaft/laraspa" alt="Total Downloads">
    </a>
    <a href="https://packagist.org/packages/nadaft/laraspa">
        <img src="https://img.shields.io/packagist/v/nadaft/laraspa" alt="Latest Stable Version">
    </a>
    <a href="https://packagist.org/packages/nadaft/laraspa">
        <img src="https://img.shields.io/packagist/l/nadaft/laraspa" alt="License">
    </a>
</p>

# LaraSPA

A Laravel package that scaffolds a Laravel REST API and React application. The package implements a REST API for the backend and React for the frontend.

## Features

- React
- React Router
- React Redux Toolkit
- React Helmet
- React Toastify
- TailwindCSS, Tailwind Merge and Automatic Class Sorting with Prettier
- Includes Laravel Debugbar and Ide Helper
- Implemented backend API testing
- Includes Login, Register, Reset Password, Resend Email Verification, and Dashboard Pages
- Includes protected routes for authentication
- Optionally you can use ESLint, Prettier and Airbnb Standard. You can choose to use it or not during the installation.

## How to install

### 1. First you need a fresh Laravel installation

If you don't already have one, start by creating a fresh Laravel installation. We recommend starting with a fresh installation because the package will replace your current Laravel application files.

To create a fresh installation, run the following command:

```bash
laravel new your-app-name
```

Once the installation is complete, run the following command:

```bash
php artisan migrate
```

Next, install the necessary node modules using your preferred package manager (npm, yarn, or pnpm):

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
pnpm install
```

### 2. Install the Package

Run the following command:

```bash
composer require nadaft/laraspa --dev
```

(Optional) If the package isn't discovered automatically, add the service provider to your config/app.php providers array:

```php
Nadaft\Laraspa\LaraspaServiceProvider::class,
```

### 3. Install Laraspa

Run the following command:

```bash
php artisan laraspa:install
```

During the installation process, you will be prompted to choose whether or not to use ESLint for your Laravel application. If you choose to use it, the necessary dependencies and configuration files will be installed. If you choose not to use it, the installation will proceed without installing ESLint.

Wait for the installation process to complete. Then, run the following command:

```bash
php artisan serve
```

Your Laravel App is now ready to use.

## Screenshots

![Login Page](https://raw.githubusercontent.com/nadaft/laraspa/master/assets/login.png)

![Register Page](https://raw.githubusercontent.com/nadaft/laraspa/master/assets/register.png)

![Dashboard Page](https://raw.githubusercontent.com/nadaft/laraspa/master/assets/dashboard.png)
