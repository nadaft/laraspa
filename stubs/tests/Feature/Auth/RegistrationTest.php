<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_success_with_valid_data()
    {
        $data = [
            'name' => 'Test Name',
            'email' => 'test@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ];

        $response = $this->json('POST', route('auth.register'), $data);

        $response->assertCreated();
    }

    public function test_registration_failed_if_email_already_taken()
    {
        $user = User::factory()->create();

        $data = [
            'name' => 'Test Name',
            'email' => $user->email,
            'password' => 'password',
            'password_confirmation' => 'password',
        ];

        $response = $this->json('POST', route('auth.register'), $data);

        $response->assertUnprocessable();
    }
}
