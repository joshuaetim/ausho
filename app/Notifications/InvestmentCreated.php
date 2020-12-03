<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use App\Models\Investment as InvestModel;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\NexmoMessage;

class InvestmentCreated extends Notification
{
    use Queueable;

    public $investment;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(InvestModel $investment)
    {
        $this->investment = $investment;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database',]; // we sending notifs to both
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->greeting('Hello, '.$notifiable->name)
                    ->line('Your investment has been successfully registered')
                    ->action('Download PDF', url('/download/'.$notifiable->slug.'/'.$this->investment->id))
                    ->line('Thanks for choosing us');
    }

    /**
     * Get the array representation of the notification.
     * ['message', 'url']
     * 
     * WE USING TOARRAY BECAUSE WE WILL ALSO BROADCAST IT
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'message' => 'An investment of '. $this->investment->amount .' was created for '. $notifiable->name,
            'url' => '/investments/'.$this->investment->id,
        ];
    }

    public function toNexmo($notifiable)
    {
        return (new NexmoMessage)
                ->from('ZIPH Inc')
                ->content('Hello, '.$notifiable->name.'. An investment of '.$this->investment->amount.' was just created on your behalf. Please check your email for more details.')
                ->unicode();
    }
}
