<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Pendidikan extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}
	
	public function index()
    {
		$this->load->view("v_header");
		$this->load->view("v_pendidikan");
        $this->load->view("v_footer");
    }
}