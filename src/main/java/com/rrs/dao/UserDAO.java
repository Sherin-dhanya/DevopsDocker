//package com.rrs.dao;
//
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//
//import com.rrs.bean.User;
//
//
//
//public interface UserDAO extends JpaRepository<User, Integer> {
//
//	@Query("select user_id from User")
//	public List<Integer> getIdList();
//	@Query("select user_name from User")
//	public List<String> getNameList();
//}
