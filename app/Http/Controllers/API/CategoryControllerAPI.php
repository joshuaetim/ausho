<?php

namespace App\Http\Controllers\API;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController;

class CategoryControllerAPI extends BaseController
{
    public $user;

    /**
     * Get the user auth details
     */
    public function __construct()
    {
        $this->user = auth('api')->user();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = $this->user->categories;

        return $this->sendResponse($categories, 'Data retrieved successfully');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
        ]);

        $category = $this->user->categories()->create($validatedData);
        $slug = Str::slug($request->name . ' ' . $category->id, '-');
        $category->slug = $slug;
        $category->save();

        return $this->sendResponse($category, 'Category created successfully', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $category
     * @return \Illuminate\Http\Response
     */
    public function show($category)
    {
        $category = $this->user->categories()->where('slug', $category)->first();

        if(! $category){
            return $this->categoryNotFoundResponse();
        }

        return $this->sendResponse($category, 'Data retrieved successfully');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $category)
    {
        $validatedData = $request->validate([
            'name' => 'required',
        ]);

        $category = $this->user->categories()->where('slug', $category)->first();

        if(! $category){
            return $this->categoryNotFoundResponse();
        }

        $category->update($validatedData);

        $category->refresh();

        return $this->sendResponse($category, 'Category Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($category)
    {
        $category = $this->user->categories()->where('slug', $category)->first();

        if(! $category){
            return $this->categoryNotFoundResponse();
        }

        $category->delete();

        return $this->sendResponse([], 'Category deleted successfully');
    }

    // peripheral methods

    private function categoryNotFoundResponse()
    {
        return $this->sendError('Not Found', ['error' => 'The specified category wasn\'t found'], 404);
    }
}
