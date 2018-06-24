<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class sendMailable extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        $address = 'phojie@example.com';
        $subject = 'This is a demo!';
        $name = 'phojie';

        return $this->view('welcome')
                    ->from($address, $name)
                  //   ->cc($address, $name)
                  //   ->bcc($address, $name)
                    ->replyTo($address, $name);
                  //   ->subject($subject)
                  //   ->with( ['message' => 'This is a test!']);
    }
}