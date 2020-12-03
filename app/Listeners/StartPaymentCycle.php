<?php

namespace App\Listeners;

use App\Classes\ProcessPayment;
use App\Events\InvestmentCreated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class StartPaymentCycle
{
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
        /* calculate amount to be paid, then dispatch the Payment Job.
            This is where the payment chain starts.
        **/

        $paymentProcessor = new ProcessPayment($event->investment, $event->investor->id);
        $paymentProcessor->dispatchPaymentJob();
    }
}
