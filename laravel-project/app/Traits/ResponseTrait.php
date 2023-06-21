<?php

namespace App\Traits;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Redis;
use JsonException;
use Symfony\Component\HttpFoundation\Response;

/**
 * Trait ResponseTrait
 * @package App\Traits
 */
trait ResponseTrait
{
    /**
     * Return a new JSON response from the application.
     *
     * @param int $status Status code
     * @param bool $sendWithArrayStructure true to makeResponseArray
     * @param string $resultCallableMethod method name to $result execute
     *
     */
    public function sendResponse(
        mixed  $result,
        string $successMessage = '',
        int    $status = Response::HTTP_OK,
        bool   $sendWithArrayStructure = true,
        string $resultCallableMethod = ''
    ): JsonResponse
    {
        if ($result instanceof Exception) {
            $body = $this->makeResponseArray(false, [], $result->getMessage(), $result->getCode());

            return response()->json(
                $body,
                $result->getCode() < 100 || $result->getCode() >= 600 ? Response::HTTP_BAD_REQUEST : $result->getCode()
            );
        }

        $result = !empty($resultCallableMethod) ? $result->{$resultCallableMethod}() : $result;

        $body = ($sendWithArrayStructure && !($result instanceof LengthAwarePaginator)) ?
            $this->makeResponseArray(true, $result, $successMessage) : $result;

        return response()->json($body, $status);
    }

    /**
     * @throws JsonException
     */
    public function sendIfCachedOrMakeCache(
        $key,
        $resultCallableMethod,
        $ttl = 60
    ): JsonResponse {
        $cache = Redis::get($key);

        return isset($cache)
            ? $this->sendCachedResponse($cache)
            : $this->sendResponseAndCache($key, $resultCallableMethod(), $ttl);
    }

    /**
     * @throws JsonException
     */
    public function sendCachedResponse(
        string  $cache,
        int    $status = Response::HTTP_OK
    ): JsonResponse {
        return new JsonResponse($cache, $status, [], 0, true);
    }

    public function sendResponseAndCache(
        string $key,
        mixed  $response,
        $ttl,
    ): JsonResponse {
        $return = $this->sendResponse($response);
        Redis::set($key, $return->getContent(), 'EX', $ttl);

        return $return;
    }

    /**
     * Make the response array to be used in a JSON response
     *
     *
     * @return array{success: bool, message: string, data: mixed[], code?: string}
     */
    public function makeResponseArray(
        bool   $success = true,
        array  $data = [],
        string $message = '',
        string $code = ''
    ): array
    {
        $response = [
            'success' => $success,
            'message' => $message,
        ];

//        if (!empty($data)) {
        $response['data'] = $data;
//        }

        if (!empty($code)) {
            $response['code'] = $code;
        }

        return $response;
    }
}
