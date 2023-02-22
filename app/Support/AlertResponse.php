<?php

namespace App\Support;

use Illuminate\Support\Collection;

class AlertResponse
{
    const ERROR = 'error';
    const WARNING = 'warning';
    const INFO = 'info';
    const SUCCESS = 'success';

    private string $severity;

    private string $message;

    private int $duration = 4000;

    private array $anchor_origin = [
        'vertical' => 'top',
        'horizontal' => 'right'
    ];

    public function error(string $message) : array
    {
        $this->severity = self::ERROR;
        $this->message = $message;

        return $this->toArray();
    }

    public function warning(string $message) : array
    {
        $this->severity = self::WARNING;
        $this->message = $message;

        return $this->toArray();
    }

    public function info(string $message) : array
    {
        $this->severity = self::INFO;
        $this->message = $message;

        return $this->toArray();
    }

    public function success(string $message) : array
    {
        $this->severity = self::SUCCESS;
        $this->message = $message;

        return $this->toArray();
    }

    public function toArray() : array
    {
        return [
            'severity' => $this->severity,
            'message' => $this->message,
            'duration' => $this->duration,
            'anchor_origin' => $this->anchor_origin
        ];
    }
}