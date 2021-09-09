<?php

namespace App\Models;

use CodeIgniter\Model;

class Modelpembayaran extends Model
{
    protected $table = 'pembayaran';
    protected $primaryKey = 'kodepem';

    protected $allowedFields = ['kodepem','tglpem','pemkodepend','pambayar'];
}