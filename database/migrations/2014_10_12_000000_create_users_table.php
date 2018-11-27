<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('ckcm-network_token_id')->unique();
            $table->string('password');
            $table->string('displayName')->nullable();
            $table->string('email')->unique();
            $table->string('emailVerified')->nullable();
            $table->string('photoUrl')->nullable();
            $table->string('secret')->nullable();
            $table->boolean('firsttime');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
