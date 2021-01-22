<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Investment extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];

    public function investor()
    {
        return $this->belongsTo("App\Models\Investor");
    }

    public function payments()
    {
        return $this->hasMany("App\Models\Payment");
    }

    public function user()
    {
        return $this->belongsTo("App\Models\User");
    }
}
