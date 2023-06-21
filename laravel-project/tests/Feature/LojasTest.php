<?php

namespace Tests\Feature;

use App\Http\Util\StatusCode;
use Tests\TestCase;

class LojasTest extends TestCase
{
    public function index() : void
    {
        $response = $this->get('/api/lojas');
        $response->assertStatus(StatusCode::HTTP_OK);
    }
}
