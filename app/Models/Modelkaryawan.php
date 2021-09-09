<?php

namespace App\Models;

use CodeIgniter\Model;

class Modelkaryawan extends Model
{
    protected $table = 'karyawan';
    protected $primaryKey = 'kodekar';

    protected $allowedFields = ['kodekar','namakar','jkkar','tgllahirkar','bidangkar','statuskar','alamatkar'];
}