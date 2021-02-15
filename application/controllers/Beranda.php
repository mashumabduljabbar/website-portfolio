<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Beranda extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}
	
	public function index()
    {
		$this->load->view("v_header");
		$this->load->view("v_beranda");
        $this->load->view("v_footer");
    }
	
	public function kirim()
    {
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$pesan = "
Pengirim : $name
Phone : $phone
Email : $email
Subyek : $subject
Pesan : $message
";
		$this->telegram->send->chat($this->config->item('multimediary'))->text($pesan)->send(); 
		$this->session->set_flashdata('message', 'Pesan berhasil dikirim.');
		redirect("beranda");
    }
}