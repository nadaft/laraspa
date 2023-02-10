<?php

namespace Nadaft\Laraspa\Console;

use Illuminate\Filesystem\Filesystem;

trait InstallReactStack
{
    protected function installReactStack()
    {
        // NPM Packages...
        $this->updateNodePackages(function ($packages) {
            return [
                '@reduxjs/toolkit' => '^1.9.2',
                '@tailwindcss/forms' => '^0.5.3',
                '@vitejs/plugin-react' => '^3.1.0',
                'autoprefixer' => '^10.4.13',
                'postcss' => '^8.4.21',
                'react' => '^18.2.0',
                'react-dom' => '^18.2.0',
                'react-helmet-async' => '^1.3.0',
                'react-redux' => '^8.0.5',
                'react-router-dom' => '^6.8.1',
                'react-toastify' => '^9.1.1',
                'tailwind-merge' => '^1.9.1',
                'tailwindcss' => '^3.2.6',
            ] + $packages;
        });

        // Routes...
        copy(__DIR__.'/../../stubs/react/routes/web.php', base_path('routes/web.php'));

        // Views...
        copy(__DIR__.'/../../stubs/react/resources/views/app.blade.php', resource_path('views/app.blade.php'));

        // Javascript Resources...
        (new Filesystem)->ensureDirectoryExists(resource_path('js/components'));
        (new Filesystem)->ensureDirectoryExists(resource_path('js/hooks'));
        (new Filesystem)->ensureDirectoryExists(resource_path('js/layouts'));
        (new Filesystem)->ensureDirectoryExists(resource_path('js/pages'));
        (new Filesystem)->ensureDirectoryExists(resource_path('js/router'));
        (new Filesystem)->ensureDirectoryExists(resource_path('js/store'));

        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/react/resources/js/components', resource_path('js/components'));
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/react/resources/js/hooks', resource_path('js/hooks'));
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/react/resources/js/layouts', resource_path('js/layouts'));
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/react/resources/js/pages', resource_path('js/pages'));
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/react/resources/js/router', resource_path('js/router'));
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/react/resources/js/store', resource_path('js/store'));

        copy(__DIR__.'/../../stubs/react/resources/js/app.jsx', resource_path('js/app.jsx'));

        // CSS Resources
        copy(__DIR__.'/../../stubs/react/resources/css/app.css', resource_path('css/app.css'));

        if (file_exists(resource_path('js/app.js'))) {
            unlink(resource_path('js/app.js'));
        }

        // Config Files
        copy(__DIR__.'/../../stubs/react/postcss.config.js', base_path('postcss.config.js'));
        copy(__DIR__.'/../../stubs/react/tailwind.config.js', base_path('tailwind.config.js'));
        copy(__DIR__.'/../../stubs/react/jsconfig.json', base_path('jsconfig.json'));
        copy(__DIR__.'/../../stubs/react/vite.config.js', base_path('vite.config.js'));

        // Installing

        $this->components->info('Installing and building Node dependencies.');

        if (file_exists(base_path('pnpm-lock.yaml'))) {
            $this->runCommands(['pnpm install', 'pnpm build']);
        } elseif (file_exists(base_path('yarn.lock'))) {
            $this->runCommands(['yarn install', 'yarn build']);
        } else {
            $this->runCommands(['npm install', 'npm run build']);
        }

        $this->line('');
        $this->components->info('Laraspa scaffolding installed successfully.');
    }
}
