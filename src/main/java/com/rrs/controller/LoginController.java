package com.rrs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rrs.bean.Login;



@RestController
@CrossOrigin("*")
public class LoginController {

	@Autowired
	private com.rrs.dao.LoginDAO loginDAO;
	
	@PostMapping("InsertValue")
	public Login insertValue(@RequestBody Login login) {
	return loginDAO.save(login);
	}
	
	@GetMapping("GetValue/{email}")
	public Login getValueByEmail(@PathVariable String email) {
	return loginDAO.getByEmail(email);
	}
	
	
}
