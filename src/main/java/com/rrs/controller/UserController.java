//package com.rrs.controller;
//	import java.util.List;
//	import org.springframework.beans.factory.annotation.Autowired;
//	import org.springframework.web.bind.annotation.CrossOrigin;
//	import org.springframework.web.bind.annotation.DeleteMapping;
//	import org.springframework.web.bind.annotation.GetMapping;
//	import org.springframework.web.bind.annotation.PathVariable;
//	import org.springframework.web.bind.annotation.PostMapping;
//	import org.springframework.web.bind.annotation.PutMapping;
//	import org.springframework.web.bind.annotation.RequestBody;
//	import org.springframework.web.bind.annotation.RestController;
//
//import com.rrs.bean.User;
//import com.rrs.dao.UserDAO;
//
//
//
//	@RestController
//	@CrossOrigin("*")
//	public class UserController {
//
//		@Autowired
//		private UserDAO userDAO;
//		
//		@PostMapping("InsertUser")
//		public User insertUser(@RequestBody User user) {
//		return userDAO.save(user);
//		}
//		
//		@GetMapping("ViewAllUser")
//		public List<User> viewAllUser(){
//			return (List<User>) userDAO.findAll();
//		}
//		
//		@GetMapping("FindUser/{id}")
//		public User findCustomer(@PathVariable Integer id) {
//			return customerDAO.findById(id).get();
//		}
//		
//		@PutMapping("/UpdateCustomerDetail")
//		public Customer updateCustomer(@RequestBody Customer customer) {
//			return customerDAO.save(customer);
//		}
//		
//		@DeleteMapping("/DeleteCustomer/{id}")
//		public String deleteCustomer(@PathVariable Integer id) {
//			String msg=" ";
//			try {
//				customerDAO.deleteById(id);
//				msg="Customer Details Deleted Successfully";
//			}catch(Exception e) {
//				msg="Customer Details not found";
//			}
//			return msg;
//
//		}
//		@GetMapping("/Autopop")
//		public List<Integer> doAutoPop(){
//			return customerDAO.getIdList();
//		}
//	}
//
//}
