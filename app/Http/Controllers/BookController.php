<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Book;
use App\Services\BookService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class BookController extends Controller
{
    public function __construct(private BookService $bookService)
    {
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Books/Index', [
            'collection' => $this->bookService->paginate(),
            'alert' => session('alert')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Books/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request): RedirectResponse
    {
        $this->bookService->store($request->validated());

        return redirect()
                ->route('books.index')
                ->with('alert', $this->bookService->storedAlert());
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book): Response
    {
        return Inertia::render('Books/Show', [
            'resource' => $book
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book): Response
    {
        return Inertia::render('Books/Edit', [
            'resource' => $book
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book): RedirectResponse
    {
        $book->update($request->validated());

        return redirect()
                ->route('books.index')
                ->with('alert', $this->bookService->updatedAlert());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book): RedirectResponse
    {
        $book->delete();

        return redirect()
                ->route('books.index')
                ->with('alert', $this->bookService->deletedAlert());
    }
}
