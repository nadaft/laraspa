<?php

namespace Nadaft\Laraspa;

use Illuminate\Contracts\Support\DeferrableProvider;
use Illuminate\Support\ServiceProvider;

class LaraspaServiceProvider extends ServiceProvider implements DeferrableProvider
{
    public function boot()
    {
        if (! $this->app->runningInConsole()) {
            return;
        }

        $this->commands([
            Console\InstallCommand::class,
        ]);
    }

    public function provides()
    {
        return [Console\InstallCommand::class];
    }
}
