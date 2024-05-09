package com.rrs.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.rrs.bean.Login;




public interface LoginDAO extends JpaRepository<Login, Integer>{
		
	Login getByEmail(String Email);

	Login save(Login login);
	
}
