<?php

namespace App\Listeners;

use App\Mail\InvestmentMail;
use App\Events\InvestmentCreated;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Notifications\InvestmentCreated as InvestmentNotification;

class SendInvestmentMail implements ShouldQueue
{
    public $delay = 1; // 20 seconds delay for the queue

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  InvestmentCreated  $event
     * @return void
     */
    public function handle(InvestmentCreated $event)
    {
        // send a notification to the investor
        $event->investment
        ->investor
        ->notify(new InvestmentNotification($event->investment));
    }
}
