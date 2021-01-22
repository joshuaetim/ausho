<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        'App\Events\InvestmentCreated' => [
            'App\Listeners\StartPaymentCycle', // dispatches payment job loop
            'App\Listeners\SendInvestmentMail', // send notification (email, database)
            'App\Listeners\SendInvestorSMS', // use Twilio to send an SMS
        ],
        'App\Events\PaymentSubmitted' => [
            'App\Listeners\SendPaymentNotification', // sends notification (email, database)
            'App\Listeners\SendPaymentSMS', // use Twilio to notify investor via SMS 
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
