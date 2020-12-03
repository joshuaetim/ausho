<?php

namespace App\Listeners;

use Twilio\Rest\Client;
use App\Events\InvestmentCreated;
use Illuminate\Support\Facades\Log;
use Twilio\Exceptions\TwilioException;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendInvestorSMS implements SHouldQueue
{
    public $delay = 1; // 1 second
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
        $key_sid = config('values.key_sid');
        $key_secret = config('values.key_secret');
        $account_sid = config('values.account_sid');
        $twilio_number = config('values.twilio_number');
        $message = 'Hello '. $event->investor->name.', an investment of '. $event->investment->amount .' has been created on your behalf at '.config('app.name');

        $client = new Client($key_sid, $key_secret, $account_sid);

        try {
            $client->messages->create('+2349081707665', [
                'from' => $twilio_number,
                'body' => $message,
            ]);
        } catch (TwilioException $e) {
            Log::error('Twilio replied with '.$e);
        }
    }
}
