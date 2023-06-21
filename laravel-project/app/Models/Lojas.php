<?php

namespace App\Models;

use App\Helpers\Constants;
use Illuminate\Database\Eloquent\Model;

class Lojas extends Model
{
    protected $table = Constants::LOJAS;

    protected $fillable = [
        'user_id',
        'endereco',
        'nome_loja',
    ];


}
