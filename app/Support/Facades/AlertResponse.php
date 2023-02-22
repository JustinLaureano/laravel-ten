<?php

namespace App\Support\Facades;

use Illuminate\Support\Facades\Facade;

class AlertResponse extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'alert_response';
    }
}