<?php

namespace App\Classes;

use App\Jobs\Payment;
use App\Models\Investor;
use App\Models\Investment;

class ProcessPayment{

    public $investment;
    public $investorID;

    public function __construct(Investment $investment, $investorID)
    {
        $this->investment = $investment;
        $this->investorID = $investorID;
    }

    /**
     * @return int
     */
    public function calculatePaymentAmount()
    {
        $amount = $this->investment->amount * ($this->investment->rate / 100);
        return $amount;
    }

    /**
     * This will be backtracked to 2 days ((mins for testing)) before scheduled frequency date.
     * 
     */
    public function calculatePaymentSchedule()
    {
        $frequency = $this->investment->frequency;
        $time = now()->addMinutes($frequency - 2);

        return $time;
    }

    /**
     * To calculate number of times the process should run.
     */

    public function processCycleCount()
    {
        $count = round($this->investment->duration / $this->investment->frequency);
        return $count;
    }

    public function dispatchPaymentJob()
    {
        // check if counter has reached limit
        if($this->investment->counter >= $this->processCycleCount()){
            return "Investment Ended.... checking if to delete or not";
        }

        Payment::dispatch($this->investment, $this->investorID, $this->calculatePaymentAmount())
        ->delay($this->calculatePaymentSchedule());
    }

}