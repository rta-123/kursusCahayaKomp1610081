<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\Modelkaryawan;
use CodeIgniter\Controller;

class Karyawan extends ResourceController
{
    use ResponseTrait;

    //untuk menampilkan semua data
    public function index()
    {
        $modelKaryawan = new Modelkaryawan();
        $data = $modelKaryawan->findAll();

        return $this->respond($data, 200);
    }

    public function create()
    {
        $modelKaryawan = new Modelkaryawan();
        $data = [
            'kodekar' => $this->request->getPost('kodekar'),
            'namakar' => $this->request->getPost('namakar'),
            'jkkar' => $this->request->getPost('jkkar'),
            'tgllahirkar' => $this->request->getPost('tgllahirkar'),
            'bidangkar' => $this->request->getPost('bidangkar'),
            'statuskar' => $this->request->getPost('statuskar'),
            'alamatkar' => $this->request->getPost('alamatkar'),
        ];

        $data = json_decode(file_get_contents('php://input'), true);

        $modelKaryawan->insert($data);

        $response =[
            'status' => 201,
            'error' => null,
            'message' => [
                'success' => 'data berhasil disimpan'
            ]
        ];

        return $this->respond($response, 201);
    }

    public function delete($kodekar = null)
    {
        $modelKaryawan = new Modelkaryawan();
        $cekData= $modelKaryawan->find($kodekar);
        if($cekData) {
            $modelKaryawan->delete($kodekar);
            $response = [
                'status' => 200,
                'error' => null,
                'message' => [
                    'success' => 'data berhasil dihapus'
                ]
                ];
                return $this->respondDeleted($response);
        }
    }

    public function update($kodekar = null)
    {
        $modelKaryawan = new Modelkaryawan();
        $json = $this->request->getJSON();
        if($json) {
            $data = [
                'namakar' => $json->namakar,
                'jkkar' => $json->jkkar,
                'tgllahirkar' => $json->tgllahirkar,
                'bidangkar' => $json->bidangkar,
                'statuskar' => $json->statuskar,
                'alamatkar' => $json->alamatkar,
            ];
        }

        //insert ke database
        $modelKaryawan->update($kodekar, $data);
        $response = [
            'status' => 200,
            'error' => null,
            'message' => [
                'success' => 'data diupdate'
            ]
            ];
            return $this->respond($response);
    }

    public function show($kodekar = NULL)
    {
        $modelKaryawan = new Modelkaryawan();
        $data = $modelKaryawan->getWhere(['kodekar' => $kodekar])->getResult();

        if ($data) {
            return $this->respond($data);
        }else{
            return $this->failNotFound('maaf kode karyawan' . $kodekar . 'tidak ketemu');
        }
    }
}

