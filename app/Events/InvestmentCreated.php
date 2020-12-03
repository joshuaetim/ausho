<?php

namespace App\Events;

use App\Models\Investor;
use App\Models\Investment;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class InvestmentCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $investment;
    public $investor;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Investment $investment, Investor $investor)
    {
        $this->investment = $investment;
        $this->investor = $investor;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
