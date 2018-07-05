<?php

$repo_dir = '/srv/users/serverpilot/apps/ckcm-network';

exec('cd' . $repo_dir);
exec('git pull origin master');
exec('composer install');
exec('php artisan migrate');
// exec('php artisan jwt:secret');
