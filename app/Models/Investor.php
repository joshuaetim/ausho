<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Investor extends Model
{
    use HasFactory;
    use SoftDeletes;
    use Notifiable;

    protected $guarded = ['active'];

    protected static function booted()
    {
        /**
         * to delete the investments associated with the investor when deleted
         */
        
       static::deleted(function($investor) {
            foreach($investor->investments as $investment){
                $investment->delete();
            }
       }); 
    }

    public function routeNotificationForNexmo($notification)
    {
        return '2349081707665';
    }

    public function user()
    {
        return $this->belongsTo("App\Models\User");
    }
    
    public function investments()
    {
        return $this->hasMany("App\Models\Investment");
    }

    public function payments()
    {
        return $this->hasMany("App\Models\Payment");
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
