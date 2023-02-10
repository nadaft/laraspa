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

A Laravel package to scaffolding Laravel REST API React. Implement REST API for the backend and React for the frontend.

## Features

- React
- React Router
- React Redux Toolkit
- React Helmet
- React Toastify
- TailwindCSS and Tailwind Merge
- Ide Helper Included (Laravel Debugbar and Ide Helper)
- Backend API testing implemented
- Login, Register, Reset Password, Resend Email Verification and Dashboard Page.
- Authentication with protected routes

## How to install

### 1. First you need a fresh Laravel installation

If you have already, skip this step. We recommend to start your application with a fresh Laravel installation, because it will replace your current laravel application files.

Run the following command

```bash
laravel new your-app-name
```

Wait until installation is complete. Then run the following command

```bash
php artisan migrate
```

Then, you must install your node modules using your favorite package manager to install. 

`npm install` or `yarn install` or `pnpm install`. 


### 2. Install the Package

Run the following command

```bash
composer require nadaft/laraspa --dev
```

(Optional) if package is not discover automatically, add the service provider to your config/app.php providers array:

```php
Nadaft\Laraspa\LaraspaServiceProvider::class,
```

### 3. Install Laraspa

Run the following command

```bash
php artisan laraspa:install
```

Wait until installation process is complete. Then run the command

```bash
php artisan serve
```

Finally your Laravel App is ready.

## Screenshots

![Login Page](https://raw.githubusercontent.com/nadaft/laraspa/master/assets/login.png)

![Register Page](https://raw.githubusercontent.com/nadaft/laraspa/master/assets/register.png)

![Dashboard Page](https://raw.githubusercontent.com/nadaft/laraspa/master/assets/dashboard.png)
