<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Symfony\Component\HttpFoundation\Response;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function response($data = '', $code = 200)
    {
        return response()->json([
            'success' => $code >= 200 && $code <= 300 ? true : false,
            'code' => $code,
            'status' => Response::$statusTexts[$code],
            'data' => $data,
        ], $code);
    }
}
