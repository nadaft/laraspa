<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_login_with_valid_credentials()
    {
        $user = User::factory()->create();

        $response = $this->post(route('auth.login'), [
            'email' => $user->email,
            'password' => 'password',
        ], [
            'Accept' => 'application/json',
        ]);

        $response->assertOk();
    }

    public function test_user_cannot_login_with_if_password_wrong()
    {
        $user = User::factory()->create();

        $response = $this->post(route('auth.login'), [
            'email' => $user->email,
            'password' => 'wrong_password',
        ], [
            'Accept' => 'application/json',
        ]);

        $response->assertUnprocessable();
    }

    public function test_user_cannot_access_current_user_if_not_authenticated()
    {
        $response = $this->json('GET', route('auth.user'));

        $response->assertUnauthorized();
    }

    public function test_user_can_access_current_user_if_authenticated()
    {
        $user = User::factory()->create();

        $response = $this->json('POST', route('auth.login'), [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $token = $response->decodeResponseJson()['data']['token'];

        $response = $this->json('GET', route('auth.user'), [], [
            'Authorization' => 'Bearer '.$token,
        ]);

        $response->assertOk();
    }
}
