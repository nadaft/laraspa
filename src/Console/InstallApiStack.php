<?php

namespace Nadaft\Laraspa\Console;

use Illuminate\Filesystem\Filesystem;

trait InstallApiStack
{
    protected function installApiStack()
    {
        // Install Ide Helper to Dev Dependencies
        if (! $this->requireComposerPackages(['barryvdh/laravel-ide-helper:^2.12', 'barryvdh/laravel-debugbar:^3.8'], true)) {
            return 1;
        }

        $files = new Filesystem;

        // Controllers...
        $files->ensureDirectoryExists(app_path('Http/Controllers/Auth'));
        $files->copyDirectory(__DIR__.'/../../stubs/api/app/Http/Controllers/Auth', app_path('Http/Controllers/Auth'));
        copy(__DIR__.'/../../stubs/api/app/Http/Controllers/Controller.php', app_path('Http/Controllers/Controller.php'));

        // Requests...
        $files->ensureDirectoryExists(app_path('Http/Requests/Auth'));
        $files->copyDirectory(__DIR__.'/../../stubs/api/app/Http/Requests/Auth', app_path('Http/Requests/Auth'));

        // Providers...
        $files->copyDirectory(__DIR__.'/../../stubs/api/app/Providers', app_path('Providers'));

        // Routes...
        copy(__DIR__.'/../../stubs/api/routes/api.php', base_path('routes/api.php'));
        copy(__DIR__.'/../../stubs/api/routes/auth.php', base_path('routes/auth.php'));

        // Environment...
        if (! $files->exists(base_path('.env'))) {
            copy(base_path('.env.example'), base_path('.env'));
        }

        // Tests
        $files->ensureDirectoryExists(base_path('tests/Feature/Auth'));
        $files->copyDirectory(__DIR__.'/../../stubs/tests/Feature/Auth', base_path('tests/Feature/Auth'));

        $this->components->info('Laraspa API scaffolding installed successfully.');
    }
}
