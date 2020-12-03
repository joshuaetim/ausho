@component('mail::message')
    
An investment has been created on your behalf

@component('mail::button', ['url' => '#', 'color' => 'success'])
Download PDF Summary
@endcomponent

@component('mail::panel')
<ul>
    <li><b>Name:</b> {{$name}}</li>
    <li><b>Amount:</b> {{$amount}}</li>
    <li><b>Rate:</b> {{$rate}}</li>
    <li><b>Duration:</b> {{$duration}} days</li>
</ul>
<p>You will receive your income proceeds every {{$frequency}} days</p>
@endcomponent

@endcomponent