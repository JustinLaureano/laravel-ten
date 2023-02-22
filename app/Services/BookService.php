<?php

namespace App\Services;

use App\Models\Book;
use App\Support\Facades\AlertResponse;
use Illuminate\Pagination\LengthAwarePaginator;

class BookService
{
    public function paginate() : LengthAwarePaginator
    {
        return Book::latest()->paginate();
    }

    public function store(array $data) : Book
    {
        return Book::create($data);
    }

    public function storedAlert() : array
    {
        return AlertResponse::success(__('messages.book_stored'));
    }

    public function updatedAlert() : array
    {
        return AlertResponse::success(__('messages.book_updated'));
    }

    public function deletedAlert() : array
    {
        return AlertResponse::success(__('messages.book_deleted'));
    }
}