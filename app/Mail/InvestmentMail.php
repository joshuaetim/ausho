<?php

namespace App\Mail;

use App\Models\Investment;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class InvestmentMail extends Mailable
{
    use Queueable, SerializesModels;

    public $investment;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Investment $investment)
    {
        $this->investment = $investment;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('company@gmail.com')
            ->replyTo('company@gmail.com')
            ->markdown('emails.investment')
            ->with([
                'amount' => $this->investment->amount,
                'name' => $this->investment->name,
                'rate' => $this->investment->rate,
                'duration' => $this->investment->duration,
                'frequency' => $this->investment->frequency,
            ]);
    }
}
