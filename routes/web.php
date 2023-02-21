<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/clock', function () {
        return Inertia::render('Clock');
    })
    ->name('clock');


Route::post('signin', function (Request $request) {

        session([ 'clock_number' => $request->input('clock_number') ]);

        return redirect()->route('dash');
    })
    ->name('signin');


Route::middleware('auth.employee')
    ->get('/dash', function (Request $request) {
        return Inertia::render('Dash', ['clock_number' => session('clock_number')]);
    })
    ->name('dash');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware('auth.employee')->group( base_path('routes/resources/books.php') );


require __DIR__.'/auth.php';
