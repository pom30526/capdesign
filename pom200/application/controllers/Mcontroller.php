<?php
Class Mcontroller extends CI_Controller {

	 public function __construct() {
        parent::__construct();  
    }
     public function binomial(){
     	$this->load->view('mobile/mbio');
     }
     public function home(){
     	$this->load->view('mobile/mobilehome');
     }
     public function poi(){
     	$this->load->view('mobile/poi');
     }
     public function normal(){
     	$this->load->view('mobile/normal');
     }
 }

?>