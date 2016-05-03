<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Test extends CI_Controller {

	 public function __construct() {
        parent::__construct();
        $this->load->library('user_agent');
    }
	public function index()
	{
		//$this->load->view('main');
		  if($this->agent->is_mobile('iphone'))
		{
        $this->load->view('iphone/home');
		}
		else if($this->agent->is_mobile())
		{

        $this->load->view('mobile/mobilehome');
		
		}
		else
		{
        //$this->load->view('main');
		$this->load->view('main');
		}
	}
	public function binomial(){
		$this->load->view('stat');
	}
	public function poi(){
		$this->load->view('poisong');
	}
	public function normal(){
		$this->load->view('normal');
	}
	public function mbinomial(){
		$this->load->view('mobile/mbio');
	}
	public function chisquare(){
		$this->load->view('ChiSquare');
	}
	public function count(){
		$this->load->view('sttreport');
	}
	public function gamma(){
		$this->load->view('gamma');
	}
	public function weibull(){
		$this->load->view('Weibull');
	}
	public function tdistribution(){
		$this->load->view('tdistribution');
	}
	public function fdistribution(){
		$this->load->view('Fdistribution');
	}
	public function _remap($method){
	$this->load->view('side');
	if(method_exists($this, $method)){
		$this->{$method}();
	}
  }
}

?>