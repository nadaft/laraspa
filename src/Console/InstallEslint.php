<?php

namespace Nadaft\Laraspa\Console;

trait InstallEslint
{
    protected function installEslint()
    {
        $this->components->info('Installing ESLint, Prettier and Airbnb Standard');

        $this->updateNodePackages(function ($packages) {
            return [
                "eslint" => "^8.34.0",
                "eslint-config-airbnb" => "^19.0.4",
                "eslint-config-prettier" => "^8.6.0",
                "eslint-plugin-import" => "^2.25.3",
                "eslint-plugin-jsx-a11y" => "^6.5.1",
                "eslint-plugin-prettier" => "^4.2.1",
                "eslint-plugin-react" => "^7.28.0",
                "eslint-plugin-react-hooks" => "^4.3.0",
                "prettier" => "^2.8.4",
                "prettier-plugin-tailwindcss" => "^0.2.2",
            ] + $packages;
        });

        // Config Files
        copy(__DIR__.'/../../stubs/eslint/.editorconfig', base_path('.editorconfig'));
        copy(__DIR__.'/../../stubs/eslint/.eslintrc.json', base_path('.eslintrc.json'));
        copy(__DIR__.'/../../stubs/eslint/.prettierrc', base_path('.prettierrc'));

        $this->line('');
        $this->components->info('ESLint, Prettier and Airbnb Standard installed successfully.');
    }
}
