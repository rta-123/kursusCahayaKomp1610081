<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\Modelpembayaran;
use CodeIgniter\Controller;

class Pembayaran extends ResourceController
{
    use ResponseTrait;

    //untuk menampilkan semua data
    public function index()
    {
        $modelPembayaran = new Modelpembayaran();
        $data = $modelPembayaran->findAll();

        return $this->respond($data, 200);
    }

    public function create()
    {
        $modelPembayaran = new Modelpembayaran();
        $data = [
            'kodepem' => $this->request->getPost('kodepem'),
            'tglpem' => $this->request->getPost('tglpem'),
            'pemkodepend' => $this->request->getPost('pemkodepend'),
            'pambayar' => $this->request->getPost('pambayar'),
        ];

        $data = json_decode(file_get_contents('php://input'), true);

        $modelPembayaran->insert($data);

        $response =[
            'status' => 201,
            'error' => null,
            'message' => [
                'success' => 'data berhasil disimpan'
            ]
        ];

        return $this->respond($response, 201);
    }

    public function delete($kodepem = null)
    {
        $modelPembayaran = new Modelpembayaran();
        $cekData= $modelPembayaran->find($kodepem);
        if($cekData) {
            $modelPembayaran->delete($kodepem);
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

    public function update($kodepem = null)
    {
        $modelPembayaran = new Modelpembayaran();
        $json = $this->request->getJSON();
        if($json) {
            $data = [
                'tglpem' => $json->tglpem,
                'pemkodepend' => $json->pemkodepend,
                'pambayar' => $json->pambayar,
            ];
        }

        //insert ke database
        $modelPembayaran->update($kodepem, $data);
        $response = [
            'status' => 200,
            'error' => null,
            'message' => [
                'success' => 'data diupdate'
            ]
            ];
            return $this->respond($response);
    }

    public function show($kodepem = NULL)
    {
        $modelPembayaran = new Modelpembayaran();
        $data = $modelPembayaran->getWhere(['kodepem' => $kodepem])->getResult();

        if ($data) {
            return $this->respond($data);
        }else{
            return $this->failNotFound('maaf kode pembayaran' . $kodepem . 'tidak ketemu');
        }
    }
}