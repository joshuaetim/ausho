<?php

namespace App\Jobs;

use App\Models\Investment;
use Illuminate\Bus\Queueable;
use App\Classes\ProcessPayment;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class Payment implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $investorID;
    public $amount;
    public $investment;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Investment $investment, $investorID, $amount)
    {
        $this->investment = $investment;
        $this->amount = $amount;
        $this->investorID = $investorID;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $payment = $this->investment->payments()->create([
            'investor_id' => $this->investorID,
            'amount' => $this->amount,
        ]);

        // post-increment 'counter' field in investments table
        $this->investment->counter++;
        $this->investment->save();

        $paymentProcessor = new ProcessPayment($this->investment, $this->investorID);
        $paymentProcessor->dispatchPaymentJob();
    }
}
