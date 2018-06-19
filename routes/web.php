<?php
use Illuminate\Support\Facades\DB;

Route::get('{any}', function () {
    return view('jie network.application');
})->where('any', '.*');


