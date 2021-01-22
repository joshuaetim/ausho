<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Investor extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'address' => $this->address,
            'phone' => $this->phone,
            'secondary_phone' => $this->secondary_phone,
            'account_name' => $this->account_name,
            'bank' => $this->bank,
            'account_number' => $this->account_number,
            'status' => $this->active,
            'created_at' => $this->created_at,
            'slug' => $this->slug,
        ];
    }
}
